import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  Modal,
  SafeAreaView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../../../../Components/BackButton/BackButton';
import styles from './Styles';
import WorkShopAccept from '../../../../Modal/WorkShopAccept/WorkShopAccept';
import ImagePickerButton from '../../../../Button/ImagePickerButton/ImagePickerButton';
import {workshopSignup} from '../../../../api/workshopSignup';

const CreateWorkShop = () => {
  const navigation = useNavigation();
  const mainText = '마지막으로\n공방 이름, 프로필을 넣어주세요';
  const sideText = '마이공방에서 언제든지 수정가능해요:)';
  const route = useRoute();
  const [workShopName, setWorkShopName] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [profileUrl, setProfileUrl] = useState(null);
  const [profileMessage, setProfileMessage] = useState('');
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [descriptionPlaceholderText, setDescriptionPlaceholderText] =
    useState('공방 설명을 입력해주세요');
  const [placeholderText, setPlaceholderText] =
    useState('공방 이름을 입력해주세요');
  const {email, password} = route.params;

  const handleWorkshopNameChange = name => {
    setWorkShopName(name);
    const nameIsValid = name.trim() !== '';
    setIsValid(nameIsValid);
    if (!nameIsValid) {
      setPlaceholderText('공방 이름 입력은 필수입니다');
    }
  };

  const handleWorkshopSubmit = async () => {
    if (
      !workShopName ||
      !isValid ||
      !email ||
      !password ||
      !profileUrl ||
      !profileMessage
    ) {
      Alert.alert('오류', '모든 필드를 올바르게 입력해주세요.');
    } else {
      const signupData = await workshopSignup({
        email,
        password,
        profileUrl,
        workShopName,
        profileMessage,
      });
  
      if (signupData) {
        console.log('회원가입 성공:', signupData);
        setShowModal(true);
      }
    }
  };
  const handleWorkshopDescriptionChange = profileMessage => {
    setProfileMessage(profileMessage);
    const descriptionIsValid = profileMessage.trim() !== '';
    setIsDescriptionValid(descriptionIsValid);
    if (!descriptionIsValid) {
      setDescriptionPlaceholderText('공방 설명 입력은 필수입니다');
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
          <View>
            <View style={styles.helpTextContainer}>
              <Text style={styles.helpText}>
                가로로 찍은 사진을 올려주세요!
              </Text>
            </View>
            <ImagePickerButton profileUrl={profileUrl} setProfileUrl={setProfileUrl} />
          </View>

          <View style={styles.buttonContainer}>
            <TextInput
              style={[styles.input, !isValid && styles.invalidInput]}
              value={workShopName}
              onChangeText={handleWorkshopNameChange}
              placeholder="공방 이름을 입력해주세요"
              placeholderTextColor={!isValid ? '#ff9696' : '#878787'}
              autoFocus={true}
            />
            <View style={styles.buttonContainer}>
              <TextInput
                style={[
                  styles.inputcomment,
                  !isDescriptionValid && styles.invalidInputComment,
                  {paddingTop: 12},
                ]}
                value={profileMessage}
                onChangeText={handleWorkshopDescriptionChange}
                placeholder={descriptionPlaceholderText}
                placeholderTextColor={
                  !isDescriptionValid ? '#ff9696' : '#878787'
                }
                autoFocus={false}
                multiline={true}
                numberOfLines={4}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleWorkshopSubmit}
              activeOpacity={0.7}>
              <Text style={styles.buttonText}>다음</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal visible={showModal} animationType="slide">
          <WorkShopAccept
            setModalVisible={setShowModal}
            workShopName={workShopName}
          />
        </Modal>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CreateWorkShop;
