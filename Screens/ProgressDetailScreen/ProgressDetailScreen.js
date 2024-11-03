import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import BackButton from '../../Components/BackButton/BackButton';
import { getToken } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo';
import { getWorkshopProfile } from '../../api/workshopProfile';
import { checkWorkshop } from '../../api/checkWorkshop';
import { getEstimates } from '../../api/returnEstimates';
import { chatroomNumber } from '../../api/chatroomNumber'; // 추가된 부분
import SelectWorkShop from '../../Components/SelectWorkShop/SelectWorkShop';

const ProgressDetailScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [workshopProfile, setWorkshopProfile] = useState(null);
  const [estimates, setEstimates] = useState([]);

  const mockData = {
    noneselecttext:
      '아직 공방이 선택이 안되었어요\n저장한 가구에서 공방 선택 해주세요',
  };
  const [noneselecttext, setNoneselecttext] = useState(mockData.noneselecttext);

  const handlerBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        console.log('Token:', token); // 토큰 출력
        const userInfo = await UserInfo(token);
        setName(userInfo.name);

        const workshops = await checkWorkshop(0, token);
        if (workshops && workshops.length > 0) {
          const workshopId = workshops[0].id; 
          const profile = await getWorkshopProfile(workshopId);
          console.log('Workshop profile:', profile);
          setWorkshopProfile(profile);
        }

        const estimatesData = await getEstimates(0);
        console.log('Fetched estimates:', estimatesData);
        setEstimates(estimatesData.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleCheckEstimate = async () => {
    try {
      const estimates = await getEstimates(0);
      console.log('Fetched estimates:', estimates);
      navigation.navigate('EstimateDetailScreen', { estimates });
    } catch (error) {
      console.error('Error fetching estimates:', error);
    }
  };

  const handleChatWithWorkshop = async () => {
    try {
      const token = await getToken();
      const chatRooms = await chatroomNumber(token);
      console.log('Fetched chat rooms:', chatRooms);

      const matchingRoom = chatRooms.content.find(room => room.roomName.includes(workshopProfile.workshopName));
      if (matchingRoom) {
        navigation.navigate('ChatScreen', { roomId: matchingRoom.id, shopname: workshopProfile.workshopName });
      } else {
        console.error('No matching chat room found.');
      }
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
    }
  };

  const renderEstimateItem = ({ item }) => (
    <View style={styles.estimateItem}>
      <Text style={styles.estimateText}>{item.furnitureName}</Text>
      <Text style={styles.estimateText}>{item.description}</Text>
      <Text style={styles.estimateText}>{item.price}원</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <View style={styles.container}>
        <BackButton navigation={navigation} />
        <View style={styles.title}>
          <View style={styles.userProgress}>
            <Text style={styles.userProgressText}>
              {name}님의 {'\n'}진행상황입니다
            </Text>
          </View>
        </View>

        <View style={styles.choiceworkshopContainer}>
          <View style={styles.choiceTitle}>
            <Text style={styles.choiceText}>저장한 견적서</Text>
          </View>
          <View style={styles.selectContainer}>
            {estimates.length > 0 ? (
              <SelectWorkShop
                workshopName={workshopProfile.workshopName}
                workshopLocation={workshopProfile.address}
                onCheckEstimate={handleCheckEstimate}
                onChatWithWorkshop={handleChatWithWorkshop}
              />
            ) : (
              <View style={styles.noselectTextContainer}>
                <Text style={styles.noselectText}>{noneselecttext}</Text>
              </View>
            )}
          </View>
          {estimates.length > 0 && (
            <FlatList
              data={estimates}
              renderItem={renderEstimateItem}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={styles.estimateList}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProgressDetailScreen;