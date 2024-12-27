import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import styles from './Styles';
import BackButton from '../../Components/BackButton/BackButton';

import {sendVerificationCode} from '../../api/authentication'; 

const NumberAuthentication = ({navigation}) => {
  const mainText = '먼저, 휴대폰 번호를\n입력해주세요';
  const sideText =
    '공방 관계자 회원가입 페이지 입니다.\n가구 일반 사용자는 뒤로가기를 눌러주세요 :)';
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validatePhoneNumber = number => {
    const phoneNumberPattern = /^(\d{3})(\d{4})(\d{4})$/;
    return phoneNumberPattern.test(number);
  };

  const handlePhoneNumberChange = number => {
    setPhoneNumber(number);
    setIsValid(validatePhoneNumber(number));
  };

  const handlePhoneNumberSubmit = async () => {
    if (!phoneNumber || !isValid) {
      Alert.alert('오류', '유효한 휴대폰 번호를 입력해주세요.');
    } else {
      try {
        console.log('Sending verification code to:', phoneNumber);
        const response = await sendVerificationCode(phoneNumber);
        console.log('Server response:', response); 
        if (typeof response === 'string' && response.includes('정상 접수')) {
          navigation.navigate('SendNumber', {phoneNumber});
        } else {
          Alert.alert('오류', response.msg || '인증번호 전송에 실패했습니다.');
        }
      } catch (error) {
        console.error('Error sending verification code:', error);
        Alert.alert('오류', '인증번호 전송에 실패했습니다.');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#191919'}}>
        <BackButton navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.singupText}>{mainText}</Text>
            </View>
            <View style={styles.sideTextBox}>
              <Text style={styles.sideText}>{sideText}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TextInput
              style={[styles.input, !isValid && styles.invalidInput]}
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              placeholder="휴대폰 번호를 입력해주세요"
              placeholderTextColor="#878787"
              autoFocus={true}
              onFocus={() => console.log('TextInput is focused')}
              onBlur={() => console.log('TextInput lost focus')}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handlePhoneNumberSubmit}
              activeOpacity={0.7}>
              <Text style={styles.buttonText}>인증 요청</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NumberAuthentication;
