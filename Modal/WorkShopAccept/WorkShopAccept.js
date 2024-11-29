import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  TextContainer,
  MainText,
  SideTextBox,
  SideText,
  StartButton,
  StartText,
  StartArrowContainer,
  StartArrow,
  ArrowCircle,
  RightArrow,
  RightArrowImage,
} from './Styles';

const WorkShopAccept = ({ setModalVisible, workshopName }) => {
  const navigation = useNavigation();
  const welcomeText = workshopName ? `${workshopName}공방\n환영합니다!` : "환영합니다!";

  const onClickMain = () => {
    console.log('onClickMain');
    navigation.navigate('LoginScreen');
    setModalVisible(false);
  };

  const sideText = '성공적으로 가입완료 되었습니다.\n가구 제작을 희망하는 사용자를 저희가 찾아드릴께요!';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TextContainer>
          <MainText>{welcomeText}</MainText>
          <SideTextBox>
            <SideText>{sideText}</SideText>
          </SideTextBox>
          <StartButton>
            <TouchableOpacity onPress={onClickMain} activeOpacity={0.8}>
              <StartText>시작하기</StartText>
              <StartArrowContainer>
                <StartArrow />
                <ArrowCircle />
                <RightArrow>
                  <RightArrowImage source={require('../../assets/images/rightArrow.png')} />
                </RightArrow>
              </StartArrowContainer>
            </TouchableOpacity>
          </StartButton>
        </TextContainer>
      </Container>
    </SafeAreaView>
  );
};

export default WorkShopAccept;