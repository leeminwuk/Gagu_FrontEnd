import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import CommonButton from '../../Button/CommonButton/CommonButton';
import CommonModal from '../../Modal/CommonModal';
import { getWebSocketInstance } from '../../api/chat2d';
import { saveImageUrl, getImageUrl } from '../../utils/storage'; 
import {
  Container,
  FixedContainer,
  TextContainer,
  MainText,
  ImageBox,
  ImageContainer,
  ChairImage,
  ButtonContainer
} from './Styles';

const CheckScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      const storedImageUrl = await getImageUrl();
      if (storedImageUrl) {
        setImageUrl(storedImageUrl);
      }
    };

    fetchImageUrl();

    const webSocket = getWebSocketInstance();

    if (webSocket && webSocket.connected) {
      webSocket.onmessage = async (message) => {
        const receivedData = JSON.parse(message.body);
        await saveImageUrl(receivedData.image);
        setImageUrl(receivedData.image);
      };
    } else {
      console.error('WebSocket is not connected');
    }

    return () => {
      if (webSocket) {
        webSocket.onmessage = null; 
      }
    };
  }, []);

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleNextButtonPress = () => {
    if (imageUrl) {
      navigation.navigate('SolidLoadingScreen', { imageUrl });
    } else {
      Alert.alert('오류', '이미지 URL이 없습니다.');
    }
  };

  const handleFirstButtonPress = () => {
    setModalVisible(false);
    navigation.navigate('PromptScreen');
  };

  const handleSecondButtonPress = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <BackButton navigation={navigation} />
      <FixedContainer>
        <TextContainer>
          <MainText>
            아래 가구 이미지가 맞으면,{'\n'}다음단계로 넘어갈게요.
          </MainText>
        </TextContainer>
        <ImageBox>
          <ImageContainer>
            {imageUrl ? (
              <ChairImage
                source={{ uri: imageUrl }}
              />
            ) : (
              <Text style={{ color: 'white' }}>이미지를 불러오는 중...</Text>
            )}
          </ImageContainer>
        </ImageBox>
        <ButtonContainer>
          <CommonButton
            buttonText="다음"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleNextButtonPress}
          />
        </ButtonContainer>
        <View style={{ marginTop: 20 }}>
          <CommonButton
            buttonText="원하는 가구가 아닙니다."
            buttonColor="#696969"
            textColor="#ffffff"
            onPress={handleButtonPress}
          />
        </View>

        <CommonModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          navigation={navigation}
          imageSource={require('../../assets/images/warning.png')}
          mainText="확인필요"
          sideText={`기존에 만든 도면은 삭제됩니다.\n그래도 진행할까요?`}
          firstButtonColor="#ffffff"
          secondButtonColor="#666666"
          firstButtonText="진행"
          secondButtonText="취소"
          firstButtonTextColor="#000000"
          secondButtonTextColor="#ffffff"
          onFirstButtonPress={handleFirstButtonPress}
          onSecondButtonPress={handleSecondButtonPress}
        />
      </FixedContainer>
    </Container>
  );
};

export default CheckScreen;