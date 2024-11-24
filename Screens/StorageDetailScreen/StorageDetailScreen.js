import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import StorageFuniture from '../../Components/StorageFuniture/StorageFuniture';
import getFurniture from '../../api/getFuniture'; 
import { getToken } from '../../utils/storage';
import {
  Container,
  FixedContainer,
  TextContainer,
  MainText,
  SideTextContainer,
  SideText,
  StorageImageBox,
} from './Styles';

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
      return '2000년 01월 01일';
    }
    const [year, month, day] = dateParts;
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <Container>
      <BackButton navigation={navigation} />
      <FixedContainer>
        <TextContainer>
          <MainText>
            지금까지 저장한 가구 도면을{'\n'}보여드릴께요.
          </MainText>
          <SideTextContainer>
            <SideText>
              가구 도면을 확인하고, 공방과 연결하여 실제로 제작할 수 있어요.
            </SideText>
          </SideTextContainer>
        </TextContainer>
        <StorageImageBox>
          {furnitureData.map((item) => (
            <StorageFuniture
              key={item.id}
              imageSource={{ uri: item.furniture2DUrl }}
              furnitureText={item.furnitureName}
              date={formatDate(item.createdDate)}
              onPress={() => navigation.navigate('ProduceDetailScreen', { item })}
            />
          ))}
        </StorageImageBox>
      </FixedContainer>
    </Container>
  );
};

export default StorageDetailScreen;