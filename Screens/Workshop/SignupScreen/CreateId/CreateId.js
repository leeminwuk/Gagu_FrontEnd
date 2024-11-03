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
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';
import BackButton from '../../../../Components/BackButton/BackButton';

const CreateId = () => {
  const navigation = useNavigation();
  const mainText = '로그인에 사용할\n아이디를 입력해주세요';
  const sideText =
    '공방 관계자만 사용되는 아이디입니다.\n자주 쓰는 이메일로 작성하면 좋아요:)';
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateId = id => {
    // 이메일 형식을 검증k하는 정규식
    const idPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    return idPattern.test(id);
  };

  const handleIdChange = id => {
    setEmail(id);
    setIsValid(validateId(id));
  };

  const handleIdSubmit = () => {
    if (!email || !isValid) {
      Alert.alert('오류', '유효한 아이디(이메일)를 입력해주세요.');
    } else {
      navigation.navigate('CreatePassword', {email});
      console.log('email:', email);
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
              value={email}
              onChangeText={handleIdChange}
              placeholder="아이디(이메일)를 입력해주세요"
              placeholderTextColor="#878787"
              autoFocus={true}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleIdSubmit}
              activeOpacity={0.7}>
              <Text style={styles.buttonText}>다음</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CreateId;
