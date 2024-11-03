import React, {useState} from 'react';
import {View, Image, TextInput, Text, Modal, TouchableOpacity} from 'react-native';
import styles from './Styles';
import CommonButton from '../../../Button/CommonButton';
import SignupAccept from '../../../Modal/SignupAccept/SignupAccept';
import {workshopSignin} from '../../../api/workshopSignin';
const WorkshopLoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // 비밀번호 가시성 토글
    console.log('Password visibility toggled:', !showPassword); 
  };
  const handleLogin = async () => {
    try {
      const data = await workshopSignin(email, password);
      
      if (data) {
        console.log('로그인 성공:', data);
        setModalVisible(true); 
      } else {
      }
    } catch (error) {
      console.error('로그인 처리 중 오류 발생:', error);
    }
};

  const sideText =
    '기존에 가입한 계정으로 로그인 해주세요!\n가구 일반 사용자는 뒤로가기를 눌러주세요.';
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.singupText}>공방 관계자 로그인</Text>
        </View>
        <View style={styles.sideTextBox}>
          <Text style={styles.sideText}>{sideText}</Text>
        </View>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.idContainer}
            value={email}
            onChangeText={setEmail} 
            placeholder="아이디(이메일)를 입력해주세요"
            placeholderTextColor="#878787"
            autoFocus={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.passwordContainer}
            value={password}
            onChangeText={setPassword}
            placeholder="비밀번호를 입력해주세요"
            placeholderTextColor="#878787"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={toggleShowPassword}
            activeOpacity={0.7}
            style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/passwordeye.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            onPress={handleLogin}
            buttonText="로그인"
            buttonColor="#ffffff"
            textColor="#000000"
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SignupAccept setModalVisible={setModalVisible} 
          mainText = "로그인 완료"
          sideText = {'다시 돌아온 것을 환영합니다.\n가구 제작을 희망하는 사용자를 저희가 찾아드릴께요!'}
          navigationTo = "WorkshopMainScreen"
        />
      </Modal>
    </View>
  );
};

export default WorkshopLoginScreen;