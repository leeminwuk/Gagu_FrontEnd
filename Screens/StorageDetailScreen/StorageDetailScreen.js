import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import styles from './Styles';
import StorageFuniture from '../../Components/StorageFuniture/StorageFuniture';
import getFurniture from '../../api/getFuniture'; 
import { getToken } from '../../utils/storage';

const StorageDetailScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [furnitureData, setFurnitureData] = useState([]);

  const fetchFurnitureData = async () => {
    try {
      const token = await getToken();
      const data = await getFurniture(0, token);
      setFurnitureData(data.content);
    } catch (error) {
      console.error('Error fetching furniture data:', error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchFurnitureData();
    }
  }, [isFocused]);

  const formatDate = dateString => {
    const dateParts = dateString.split(' ')[0].split('-');
    if (dateParts.length !== 3) {
      return '2000년 01월 01일'; // 기본 날짜 설정
    }
    const [year, month, day] = dateParts;
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.fixedContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              지금까지 저장한 가구 도면을{'\n'}보여드릴께요.
            </Text>
            <View style={styles.sideTextContainer}>
              <Text style={styles.sideText}>
                가구 도면을 확인하고, 공방과 연결하여 실제로 제작할 수 있어요.
              </Text>
            </View>
          </View>
          <View style={styles.storgaeImgaeBox}>
            {furnitureData.map((item) => (
              <StorageFuniture
                key={item.id}
                imageSource={{ uri: item.furniture2DUrl }}
                furnitureText={item.furnitureName}
                date={formatDate(item.createdDate)}
                onPress={() => navigation.navigate('ProduceDetailScreen', { item })}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StorageDetailScreen;