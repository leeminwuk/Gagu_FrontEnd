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
                date={item.createdDate}
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