import React, { useEffect } from 'react';
import { View, Text, Alert, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import SolidLoadingAnimation from '../../Components/SolidLoadingAnimation/SolidLoadingAnimation';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import { convert2DTo3D } from '../../api/create3dimage'; 
import {
  Container,
  FixedContainer,
  MainText,
} from './Styles';

const SolidLoadingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { imageUrl } = route.params; 

  useEffect(() => {
    const convertImage = async () => {
      try {
        const converted3DImage = await convert2DTo3D(imageUrl);
        if (converted3DImage) {
          const { glbUrl, gltfUrl } = converted3DImage;
          console.log('3D 이미지 변환 결과:', converted3DImage);
          navigation.navigate('FinishScreen', { glbUrl, gltfUrl, furniture2DUrl: imageUrl });
        } else {
          Alert.alert('오류', '3D 이미지 변환에 실패했습니다.');
        }
      } catch (error) {
        console.error('3D 이미지 변환 오류:', error);
        Alert.alert('오류', '3D 이미지 변환 중 오류가 발생했습니다.');
      }
    };

    convertImage();
  }, [imageUrl, navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <Container>
        <FixedContainer>
            <MainText>
              도면을 3D로 제작하고 있습니다{'\n'}
              잠시 기다려주세요
            </MainText>
          <SolidLoadingAnimation />
          <ProgressBar />
        </FixedContainer>
      </Container>
    </SafeAreaView>
  );
};

export default SolidLoadingScreen;