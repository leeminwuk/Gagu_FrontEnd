import React from 'react';
import { TouchableOpacity } from 'react-native';
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
  StartArrow,
  StartArrowContainer,
  RightArrow,
  RightArrowImage,
  ArrowCircle,
} from './Styles';

const SignupAccept = ({ setModalVisible, mainText, sideText, navigationTo }) => {
  const navigation = useNavigation();

  const onClickMain = () => {
    navigation.navigate(navigationTo);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TextContainer>
          <MainText>{mainText}</MainText>
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
                  <RightArrowImage
                    source={require('../../assets/images/rightArrow.png')}
                  />
                </RightArrow>
              </StartArrowContainer>
            </TouchableOpacity>
          </StartButton>
        </TextContainer>
      </Container>
    </SafeAreaView>
  );
};

export default SignupAccept;