import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import { getToken } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo';
import { getWorkshopProfile } from '../../api/workshopProfile';
import { checkWorkshop } from '../../api/checkWorkshop';
import { getEstimates } from '../../api/returnEstimates';
import { chatroomNumber } from '../../api/chatroomNumber';
import SelectWorkShop from '../../Components/SelectWorkShop/SelectWorkShop';
import {
  Container,
  Title,
  UserProgress,
  UserProgressText,
  ChoiceWorkshopContainer,
  ChoiceTitle,
  ChoiceText,
  SelectContainer,
  NoSelectTextContainer,
  NoSelectText,
} from './Styles';

const ProgressDetailScreen = () => {
  const [name, setName] = useState('');
  const [workshopProfile, setWorkshopProfile] = useState(null);
  const [estimates, setEstimates] = useState([]);
  const navigation = useNavigation();

  const mockData = {
    noneselecttext:
      '아직 공방이 선택이 안되었어요\n저장한 가구에서 공방 선택 해주세요',
  };
  const [noneselecttext, setNoneselecttext] = useState(mockData.noneselecttext);

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

        const estimatesData = await getEstimates(0, token);
        console.log('Fetched estimates:', estimatesData);

        // null 값을 필터링합니다.
        const filteredEstimates = estimatesData.content.filter(item => item !== null);
        setEstimates(filteredEstimates);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckEstimate = async () => {
    try {
      const token = await getToken();
      const estimates = await getEstimates(0, token);
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <Container>
        <Title>
          <UserProgress>
            <UserProgressText>
              {name}님의 {'\n'}진행상황입니다
            </UserProgressText>
          </UserProgress>
        </Title>

        <ChoiceWorkshopContainer>
          <ChoiceTitle>
            <ChoiceText>저장한 견적서</ChoiceText>
          </ChoiceTitle>
          <SelectContainer>
            {estimates.length > 0 ? (
              <SelectWorkShop
                workshopName={workshopProfile.workshopName}
                workshopLocation={workshopProfile.address}
                onCheckEstimate={handleCheckEstimate}
                onChatWithWorkshop={handleChatWithWorkshop}
              />
            ) : (
              <NoSelectTextContainer>
                <NoSelectText>{noneselecttext}</NoSelectText>
              </NoSelectTextContainer>
            )}
          </SelectContainer>
        </ChoiceWorkshopContainer>
      </Container>
    </SafeAreaView>
  );
};

export default ProgressDetailScreen;