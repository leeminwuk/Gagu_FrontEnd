import { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { postAddress } from '../../api/addressInput';
import { getToken } from '../../utils/storage';

export const usePlusAddressScreenLogic = () => {
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [showNewInput, setShowNewInput] = useState(false);
  const [showDetailInput, setShowDetailInput] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const [isValid, setIsValid] = useState(true);
  const theme = {
    bgColor: "#191919",
    searchBgColor: "#333333",
    contentBgColor: "#444444",
    pageBgColor: "#555555",
    textColor: "#FFFFFF",
    queryTextColor: "#FFFFFF",
    postcodeTextColor: "#FFFFFF",
    emphTextColor: "#FFFFFF",
    outlineColor: "#FFFFFF"
  };
  const mainText = showDetailInput
    ? '상세주소를 입력해주세요'
    : '주소를 입력해주세요';
  const sideText = showDetailInput
    ? ''
    : '상세주소를 입력하지 않으면 주문이 불가능합니다.';

  const handleAddressSelect = (data: any) => {
    setAddress(data.address);
    setModalVisible(false);
    setShowNewInput(true);
    setShowDetailInput(true);
  };

  useEffect(() => {
    if (showNewInput) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [showNewInput]);

  const handleNext = async () => {
    if (!address || !detailAddress) {
      setIsValid(false);
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
      return;
    }
    setIsValid(true);
    console.log('주소:', address);
    console.log('상세주소:', detailAddress);

    try {
      const token = await getToken();
      const response = await postAddress(token, `${address} ${detailAddress}`);
      console.log('서버 응답:', response);
    } catch (error) {
      console.error('주소 전송 중 오류 발생:', error);
    }

    setSignupModalVisible(true);
  };

  const handleSkip = () => {
    setAddress('');
    setDetailAddress('');
    console.log('다음에 입력');
    setSignupModalVisible(true);
  };

  return {
    address,
    detailAddress,
    modalVisible,
    showNewInput,
    showDetailInput,
    signupModalVisible,
    slideAnim,
    shakeAnim,
    isValid,
    mainText,
    sideText,
    setModalVisible,
    handleAddressSelect,
    handleNext,
    handleSkip,
    setDetailAddress,
    setSignupModalVisible,
  };
};