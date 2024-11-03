import React, {useState, useEffect} from 'react';
import {View, Image, Alert, TouchableOpacity, SafeAreaView, LogBox} from 'react-native';
import styles from './Styles';
import BackButton from '../../Components/BackButton/BackButton';
import {useNavigation} from '@react-navigation/native';
import InputContainer from '../../Components/InputContainer/InputContainer';
import {getToken} from '../../utils/storage';
import {UserInfo, UpdateUserInfo} from '../../api/userInfo';
import {updateUserProfileImage} from '../../api/profileUpload';
import CommonButton from '../../Button/CommonButton';
import {launchImageLibrary} from 'react-native-image-picker';
import logOut from '../../api/logOut';

// 특정 경고 메시지를 무시합니다.
LogBox.ignoreLogs([
  'Could not find image file',
]);

const EditInformationScreen = () => {
  const [profileUrl, setProfileUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(''); 
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const userInfo = await UserInfo(token);
        setProfileUrl(userInfo.profileUrl);
        setNickname(userInfo.nickname);
        setEmail(userInfo.email);
        setAddress(userInfo.address);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    fetchData();
  }, []);

  const selectImage = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    try {
      const result = await launchImageLibrary(options);
      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorCode) {
        console.log('ImagePicker Error: ', result.errorMessage);
      } else {
        const source = {uri: result.assets[0].uri};
        setSelectedImage(result.assets[0]);
        setProfileUrl(source.uri);
      }
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };

  const validateEmail = email => {
    const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return emailPattern.test(email);
  };

  const handleUpdate = async () => {
    const isValid = validateEmail(email);
    setIsValidEmail(isValid);

    if (!isValid) {
      Alert.alert('오류', '유효한 이메일을 입력해주세요.');
      return;
    }

    try {
      const token = await getToken();
      const data = {
        email: email,
        address: address,
        nickname: nickname, 
      };
      await UpdateUserInfo(token, data);
      Alert.alert('성공', '정보가 성공적으로 업데이트되었습니다.');
      setIsEditing(false);

      // 로그아웃 처리
      const result = await logOut(token);
      if (result.success) {
        console.log(result.message);
        navigation.navigate('LoginScreen');
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error updating user info:', error);
      Alert.alert('실패', '정보 업데이트에 실패했습니다.');
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) {
      Alert.alert('오류', '업로드할 이미지를 선택해주세요.');
      return;
    }

    try {
      const uploadResponse = await updateUserProfileImage({
        uri: encodeURI(selectedImage.uri), 
        type: selectedImage.type,
        name: selectedImage.fileName,
      });

      if (uploadResponse) {
        const updatedProfileUrl = uploadResponse;
        setProfileUrl(updatedProfileUrl);

        const token = await getToken();
        const userInfo = await UserInfo(token);
        const data = {
          email: userInfo.email,
          address: userInfo.address,
          profileUrl: updatedProfileUrl,
          nickname: userInfo.nickname, 
        };
        await UpdateUserInfo(token, data);
        
        Alert.alert('성공', '프로필 이미지가 성공적으로 업데이트되었습니다.');

        // 화면을 나가기 전에 사용자 정보를 다시 받아옴
        const updatedUserInfo = await UserInfo(token);
        setProfileUrl(updatedUserInfo.profileUrl);
        setNickname(updatedUserInfo.nickname); 
        setEmail(updatedUserInfo.email);
        setAddress(updatedUserInfo.address);

        // 로그아웃 처리
        const result = await logOut(token);
        if (result.success) {
          console.log(result.message);
          navigation.navigate('LoginScreen');
        } else {
          console.error(result.message);
        }
      } else {
        console.log('이미지 업로드 실패');
        Alert.alert('이미지 업로드 오류', '이미지 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error uploading profile image:', error);
      Alert.alert('실패', '프로필 이미지 업로드에 실패했습니다.');
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      handleUpdate();
    } else {
      setIsEditing(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <BackButton navigation={navigation} titleText={'개인정보 수정'} />
      <View style={styles.Container}>
        <View style={styles.imageBox}>
          <TouchableOpacity
            style={styles.profileBox}
            activeOpacity={0.8}
            onPress={selectImage}>
            {profileUrl && (
              <View style={styles.profileImageContainer}>
                <Image source={{uri: profileUrl}} style={styles.profileImage} />
              </View>
            )}
            <View style={styles.cameraButton} activeOpacity={0.8}>
              <Image
                source={require('../../assets/images/camera.png')}
                style={styles.cameraIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <InputContainer
            title={'닉네임'}
            type={'닉네임'}
            value={nickname}
            setValue={setNickname}
            isEditing={isEditing}
          /> 
          <InputContainer
            title={'주소지'}
            type={'주소지'}
            value={address}
            setValue={setAddress}
            isEditing={isEditing}
          />
          <InputContainer
            title={'이메일'}
            type={'이메일'}
            value={email}
          />
        </View>
      </View>
      <CommonButton
        buttonText={isEditing ? '전송하기' : '수정하기'}
        buttonColor={'#ffffff'}
        textColor={'#000000'}
        onPress={toggleEdit}
      />
      <CommonButton
        buttonText={'이미지 저장'}
        buttonColor={'#ffffff'}
        textColor={'#000000'}
        onPress={handleImageUpload}
      />
    </SafeAreaView>
  );
};

export default EditInformationScreen;