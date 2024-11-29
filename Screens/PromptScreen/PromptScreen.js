import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import { connectWebSocket, sendMessage, disconnectWebSocket } from '../../api/chat2d';
import { getToken, saveFurnitureName } from '../../utils/storage';
import {
  Container,
  MainText,
  ImageContainer,
  LightImage,
  TextInputBox,
  TextInputContainer,
  TextInputStyled,
  MiniImageContainer,
  MiniImage,
  HintText,
} from './Styles';

const PromptScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const initializeWebSocket = async () => {
      try {
        const authToken = await getToken(); 
        if (!authToken) {
          console.error('Token is missing');
          return;
        }
        connectWebSocket(authToken, (message) => {
          console.log('Received message:', message);
          navigation.navigate('SuccessProduce', { transition: 'fade' });
        });
      } catch (error) {
        console.error('Error initializing WebSocket:', error);
      }
    };

    initializeWebSocket();

    return () => {
      disconnectWebSocket();
    };
  }, []);

  const handlePress = async () => {
    if (inputValue.trim() === '') {
      Alert.alert('오류', '먼저 가구를 입력해주세요!');
    } else {
      await saveFurnitureName(inputValue);
      sendMessage(inputValue);
      navigation.navigate('LoadingScreen', { furnitureName: inputValue });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <MainText>
              먼저 원하시는{'\n'}가구를 적어주세요.
            </MainText>
            <ImageContainer>
              <LightImage
                source={require('../../assets/images/light.png')}
              />
            </ImageContainer>
            <TextInputBox>
              <TextInputContainer>
                <TextInputStyled
                  multiline={true}
                  placeholder="만들고 싶으신 가구를 입력해주세요!"
                  placeholderTextColor="#ffffff"
                  onChangeText={setInputValue}
                  value={inputValue}
                />
                <MiniImageContainer onPress={handlePress} activeOpacity={0.7}>
                  <MiniImage
                    source={require('../../assets/images/minichair.png')}
                  />
                </MiniImageContainer>
              </TextInputContainer>
            </TextInputBox>
            <TouchableOpacity activeOpacity={0.7}>
              <HintText>원하는 가구를 만들고싶으면?</HintText>
            </TouchableOpacity>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PromptScreen;