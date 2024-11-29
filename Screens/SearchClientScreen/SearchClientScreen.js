import React from 'react';
import { View, SafeAreaView } from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import { useNavigation } from '@react-navigation/native';
import ClientPlanButton from '../../../Components/ClientPlan/ClientPlanButton';
import TitleText from '../../../Components/TitleText/TitleText';
import {
  SafeContainer,
  Container,
} from './Styles';

const SearchClientScreen = () => {
  const mainText = '가구 의뢰자 찾기';
  const sideText = '사용자가 제작한 도면을 보고, 견적을 보내보세요';
  const navigation = useNavigation();
  return (
    <SafeContainer>
      <BackButton navigation={navigation} />
      <Container>
        <TitleText mainText={mainText} sideText={sideText} />
        <ClientPlanButton />
      </Container>
    </SafeContainer>
  );
};

export default SearchClientScreen;