import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BackButton from '../../../Components/BackButton/BackButton';
import styles from './Styles';
import StorageFuniture from '../../../Components/StorageFuniture/StorageFuniture';

const SelectEstimateScreen = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [furnitureData, setFurnitureData] = useState([]);
  const { estimates } = route.params;

  useEffect(() => {
    if (isFocused && estimates) {
      setFurnitureData(estimates);
    }
  }, [isFocused, estimates]);

  const formatDate = dateString => {
    const dateParts = dateString.split(' ')[0].split('-');
    if (dateParts.length !== 3) {
      return '2000년 01월 01일';
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
                가구 도면을 확인하시고 {'\n'}제작할 가구를 선택해주세요.  
            </Text>
            <View style={styles.sideTextContainer}>
              <Text style={styles.sideText}>
                사용자가 요청한 도면을 선택하세요.
              </Text>
            </View>
          </View>
          <View style={styles.storgaeImgaeBox}>
            {Array.isArray(furnitureData) && furnitureData.map((item) => (
              <StorageFuniture
                key={item.id}
                imageSource={{ uri: item.furniture2DUrl }}
                furnitureText={item.furnitureName}
                date={formatDate(item.createdDate)}
                onPress={() => navigation.navigate('DetailEstimateScreen', { item })}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectEstimateScreen;