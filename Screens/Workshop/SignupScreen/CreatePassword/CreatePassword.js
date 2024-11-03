import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../../../../Components/BackButton/BackButton';
import styles from './Styles';
const CreatePassword = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {email} = route.params;
  const mainText = '비밀번호를 입력해주세요';
  const sideText = '다음 조건에 맞추어 주세요.';
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isNumberIncluded, setIsNumberIncluded] = useState(false);
  const [isSpecialCharIncluded, setIsSpecialCharIncluded] = useState(false);

  const validatePassword = password => {
    const lengthValid = password.length >= 8;
    const numberIncluded = /\d/.test(password);
    const specialCharIncluded = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setIsLengthValid(lengthValid);
    setIsNumberIncluded(numberIncluded);
    setIsSpecialCharIncluded(specialCharIncluded);

    return lengthValid && numberIncluded && specialCharIncluded;
  };

  const handlePasswordChange = password => {
    setPassword(password);
    const valid = validatePassword(password);
    setIsValid(valid);
  };

  const handlePasswordSubmit = () => {
    if (!password || !isValid) {
      Alert.alert('오류', '유효한 비밀번호를 입력해주세요.');
    } else {
      navigation.navigate('CreateWorkShop', {email, password});
      console.log('email:', email);
      console.log('password:', password);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // 비밀번호 가시성 토글
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
          <View style={styles.conditionContainer}>
            <View style={styles.morethantextContainer}>
              <Image
                source={require('../../../../assets/images/check.png')}
                style={[
                  styles.filledImage,
                  {tintColor: isLengthValid ? '#FFFFFF' : '#878787'},
                ]}
              />
              <Text
                style={[
                  styles.conditionText,
                  {color: isLengthValid ? '#FFFFFF' : '#878787'},
                ]}>
                8자리 이상
              </Text>
            </View>
            <View style={styles.morethantextContainer}>
              <Image
                source={require('../../../../assets/images/check.png')}
                style={[
                  styles.filledImage,
                  {tintColor: isSpecialCharIncluded ? '#FFFFFF' : '#878787'},
                ]}
              />
              <Text
                style={[
                  styles.conditionText,
                  {color: isSpecialCharIncluded ? '#FFFFFF' : '#878787'},
                ]}>
                특수문자 포함
              </Text>
            </View>
          </View>
          <View style={[styles.morethantextContainer, {marginTop: 20}]}>
            <Image
              source={require('../../../../assets/images/check.png')}
              style={[
                styles.filledImage,
                {tintColor: isNumberIncluded ? '#FFFFFF' : '#878787'},
              ]}
            />
            <Text
              style={[
                styles.conditionText,
                {color: isNumberIncluded ? '#FFFFFF' : '#878787'},
              ]}>
              숫자 포함
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, !isValid && styles.invalidInput]}
              value={password}
              onChangeText={handlePasswordChange}
              placeholder="비밀번호를 입력해주세요"
              placeholderTextColor="#878787"
              secureTextEntry={!showPassword} // 비밀번호 가시성 설정
              autoFocus={true}
            />
            <TouchableOpacity
              onPress={toggleShowPassword}
              activeOpacity={0.7}
              style={styles.imageContainer}>
              <Image
               source={require('../../../../assets/images/passwordeye.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePasswordSubmit}
            activeOpacity={0.7}>
            <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CreatePassword;
