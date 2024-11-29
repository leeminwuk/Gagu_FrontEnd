import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import RequestLoadingAnimation from '../../Components/RequestLoadingAnimation/RequestLoadingAnimation';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import {
  Container,
  FixedContainer,
  MainText,
} from './Styles';

const RequestLoading = (props) => {
  const navigation = useNavigation();
  const { item } = props.route.params;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SearchWorkShopScreen', { item });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <Container>
        <FixedContainer>
            <MainText>
              공방을 찾고 있습니다{'\n'}
              잠시 기달려 주세요
            </MainText>
          <RequestLoadingAnimation />
          <ProgressBar />
        </FixedContainer>
      </Container>
    </SafeAreaView>
  );
};

export default RequestLoading;