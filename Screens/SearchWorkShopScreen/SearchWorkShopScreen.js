import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import styles from './Styles';
import BackButton from '../../Components/BackButton/BackButton';
import { useNavigation } from '@react-navigation/native';
import NearLocation from '../../Components/NearLocation/NearLocaion';
import SelectDistance from '../../Components/SelectDistance/SelectDistance';
import WorkShop from '../../Components/WorkShop/WorkShop';
import { checkWorkshop } from '../../api/checkWorkshop';
import { getToken } from '../../utils/storage';

const SearchWorkShopScreen = (props) => {
  const [workshops, setWorkshops] = useState([]);
  const navigation = useNavigation();
  const { item } = props.route.params;

  useEffect(() => {
    const getWorkshops = async () => {
      const token = await getToken();
      if (token) {
        const data = await checkWorkshop(0, token);
        if (data) {
          setWorkshops(data);
        }
      }
    };

    getWorkshops();
  }, []);

  const handleButtonPress = (workshopId) => {
    console.log(`Clicked workshop ID: ${workshopId}`);
    navigation.navigate('WorkShopScreen', { workshopId, item });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} steps={2} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>근처 공방 찾기</Text>
          <View style={styles.sideTextContainer}>
            <Text style={styles.sideText}>
              원하는 공방을 선택하여 가구제작을 완성해보세요.
            </Text>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <NearLocation />
          <SelectDistance />
        </View>
        <ScrollView contentContainerStyle={styles.workShopcontainer}>
          {workshops.map((workshop, index) => (
            <WorkShop
              key={index}
              workshopId={workshop.id}
              navigation={navigation}
              workshopimage={require('../../assets/images/workshop.png')}
              titleText={workshop.workshopName}
              subText={workshop.description.length > 50 ? workshop.description.substring(0, 50) + '...' : workshop.description}
              locationText={workshop.address}
              starAverage={workshop.starAverage}
              reviewText={`리뷰 ${workshop.count}건`}
              costText={'10,000원'}
              handleButtonPress={handleButtonPress}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchWorkShopScreen;