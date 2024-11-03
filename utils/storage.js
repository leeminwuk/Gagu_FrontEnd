import AsyncStorage from '@react-native-async-storage/async-storage';


// 토큰 저장 함수
export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    console.log('토큰 저장 성공:', token);
  } catch (error) {
    console.error('토큰 저장 실패:', error);
  }
};


// 토큰 불러오기 함수
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('토큰 불러오기 실패:', error);
    return null;
  }
};

// 닉네임 저장 함수
export const saveNickname = async (nickname) => {
  try {
    await AsyncStorage.setItem('nickname', nickname);
    console.log('닉네임 저장 성공:', nickname);
  } catch (error) {
    console.error('닉네임 저장 실패:', error);
  }
};

// 닉네임 불러오기 함수
export const getNickname = async () => {
  try {
    const nickname = await AsyncStorage.getItem('nickname');
    return nickname;
  } catch (error) {
    console.error('닉네임 불러오기 실패:', error);
    return null;
  }
};

// 이미지 URL 저장 함수
export const saveImageUrl = async (imageUrl) => {
  try {
    await AsyncStorage.setItem('imageUrl', imageUrl);
    console.log('이미지 URL 저장 성공:', imageUrl);
  } catch (error) {
    console.error('이미지 URL 저장 실패:', error);
  }
};

// 이미지 URL 불러오기 함수
export const getImageUrl = async () => {
  try {
    const imageUrl = await AsyncStorage.getItem('imageUrl');
    return imageUrl;
  } catch (error) {
    console.error('이미지 URL 불러오기 실패:', error);
    return null;
  }
};

// 가구 이름 저장 함수
export const saveFurnitureName = async (name) => {
  try {
    await AsyncStorage.setItem('furnitureName', name);
  } catch (error) {
    console.error('Error saving furniture name:', error);
  }
};

// 가구 이름 불러오기 함수
export const getFurnitureName = async () => {
  try {
    const name = await AsyncStorage.getItem('furnitureName');
    return name;
  } catch (error) {
    console.error('Error getting furniture name:', error);
    return null;
  }
};

// FCM 토큰 저장 함수
export const saveFCMToken = async (token) => {
  try {
    await AsyncStorage.setItem('fcmToken', token);
  } catch (error) {
    console.error('Error saving FCM token:', error);
  }
};

// FCM 토큰 불러오기 함수
export const getFCMToken = async () => {
  try {
    const token = await AsyncStorage.getItem('fcmToken');
    return token;
  } catch (error) {
    console.error('Error getting FCM token:', error);
    return null;
  }
};
