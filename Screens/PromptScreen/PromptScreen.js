import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
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
import styles from './Styles';
import { connectWebSocket, sendMessage, disconnectWebSocket } from '../../api/chat2d';
import { getToken, saveFurnitureName } from '../../utils/storage';

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
          <View style={styles.container}>
            <View style={styles.fixedContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.mainText}>
                  먼저 원하시는{'\n'}가구를 적어주세요.
                </Text>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../assets/images/light.png')}
                  style={styles.lightImage}
                />
              </View>
            </View>
            <View style={styles.textInputBox}>
              <View style={styles.textInputContainer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textInput}
                    multiline={true}
                    placeholder="만들고 싶으신 가구를 입력해주세요!"
                    placeholderTextColor="#ffffff"
                    onChangeText={setInputValue}
                    value={inputValue}
                  />
                </View>
                <TouchableOpacity
                  style={styles.miniImageContainer}
                  onPress={handlePress}
                  activeOpacity={0.7}>
                  <Image
                    source={require('../../assets/images/minichair.png')}
                    style={styles.miniImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.hintText}>원하는 가구를 만들고싶으면?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PromptScreen;