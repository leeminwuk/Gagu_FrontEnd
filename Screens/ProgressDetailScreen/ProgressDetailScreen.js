import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import { getToken } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo';
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
        const userInfo = await UserInfo(token);
        setName(userInfo.name);

        const estimatesData = await getEstimates(0, token);
        console.log('견적서 데이터:', estimatesData);

        if (estimatesData && estimatesData.content) {
          // makerName을 workshopName으로 변경
          const filteredEstimates = estimatesData.content
            .filter(item => item !== null)
            .map(item => ({
              ...item,
              workshopName: item.makerName,
            }));

          setEstimates(filteredEstimates);

          if (filteredEstimates.length > 0) {
            setWorkshopProfile(filteredEstimates[0]);
          }
        } else {
          console.error('Estimates data is not defined or empty');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckEstimate = async () => {
    try {
      const token = await getToken();
      const estimatesData = await getEstimates(0, token);
      console.log('견적서 정보:', estimatesData);

      if (estimatesData && estimatesData.content && estimatesData.content.length > 0) {
        const workshopName = estimatesData.content[0].makerName;
        console.log('workshopName:', workshopName);
        navigation.navigate('EstimateDetailScreen', { estimates: estimatesData.content });
      } else {
        console.error('Estimates data is not defined or empty');
      }
    } catch (error) {
      console.error('Error fetching estimates:', error);
    }
  };

  const handleChatWithWorkshop = async () => {
    try {
      const token = await getToken();
      const chatRooms = await chatroomNumber(token);
      console.log('Fetched chat rooms:', chatRooms);

      if (workshopProfile) {
        const matchingRoom = chatRooms.content.find(room => room.roomName.includes(workshopProfile.workshopName));
        if (matchingRoom) {
          navigation.navigate('ChatScreen', { chatRoomId: matchingRoom.id, workshopName: workshopProfile.workshopName });
        } else {
          console.error(`No matching chat room found for workshop: ${workshopProfile.workshopName}`);
        }
      } else {
        console.error('Workshop profile is null.');
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
                workshopName={estimates[0].workshopName}
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