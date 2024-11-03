import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { verifyVerificationCode } from '../../../../api/authentication'; 
import styles from './Styles';
import BackButton from '../../../../Components/BackButton/BackButton';
import OneButtonModal from '../../../../Modal/OneButtonMoadl/OneButtonModal';

const SendNumber = ({ route }) => {
  const navigation = useNavigation();
  const { phoneNumber } = route.params;
  const mainText = '작성하신 번호로\n인증 번호를 전송했어요';
  const sideText = '3분내로 인증번호를 입력해주세요.';
  const [timeLeft, setTimeLeft] = useState(180);
  const [modalVisible, setModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handlenoButtonPress = () => {
    setModalVisible(true);
  };

  const handleVerificationSubmit = async () => {
    if (!verificationCode.trim()) {
      Alert.alert('오류', '인증번호를 입력해주세요.');
      return;
    }
  
    try {
      console.log('Sending request with:', { phoneNumber, authorizationNumber: verificationCode });
      const response = await verifyVerificationCode(phoneNumber, verificationCode);
  
      console.log('Server response:', response);
  
      if (typeof response === 'string' && response.includes('인증에 성공하셨습니다')) {
        navigation.navigate('CreateId');
      } else {
        Alert.alert('오류', response.msg || '인증에 실패하셨습니다.');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      Alert.alert('오류', '인증에 실패하셨습니다.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
        <BackButton navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.singupText}>{mainText}</Text>
            </View>
            <View style={styles.sideTextBox}>
              <Text style={styles.sideText}>{sideText}</Text>
              <Text style={styles.timerText}>남은 시간 {formatTime()}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.input}
              placeholder="인증 번호를 입력해주세요"
              placeholderTextColor="#878787"
              autoFocus={true}
              value={verificationCode}
              onChangeText={setVerificationCode}
            />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={handleVerificationSubmit}>
              <Text style={styles.buttonText}>
                인증 번호 확인
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.hintButton}
              activeOpacity={0.7}
              onPress={handlenoButtonPress}>
              <Text style={styles.hintbuttonText}>
                인증 번호가 발송되지 않았습니다
              </Text>
              <View
                style={{
                  borderBottomColor: '#878787',
                  borderBottomWidth: 1,
                  alignSelf: 'center',
                  width: '51%',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <OneButtonModal
          modalVisible={modalVisible}
          imageSource={require('../../../../assets/images/warning.png')}
          setModalVisible={setModalVisible}
          mainText="확인필요"
          sideText={
            '인증 번호가 오지 않는다면 1566 관련 번호가\n스팸으로 등록되어 있을 수도 있어요.\n\n스팸함을 확인해 보시고, 안되면 가구 고객센터에\n문의 넣어주세요.'
          }
          buttonText="다시시도"
          buttonColor="#ffffff"
          buttonTextColor="#000000"
          onButtonPress={() => setModalVisible(false)}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SendNumber;