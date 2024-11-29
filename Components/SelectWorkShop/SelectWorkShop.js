import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Container,
  ImageStyled,
  Overlay,
  Header,
  WorkshopName,
  WorkshopLocation,
  Footer,
  Button,
  ButtonText,
  Icon,
} from './Styles';

const SelectWorkShop = ({
  workshopName,
  workshopLocation,
  onCheckEstimate,
  onChatWithWorkshop,
}) => {
  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/longworkshop.png')}
        style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
        <Overlay>
          <Header>
            <WorkshopName>{workshopName}</WorkshopName>
            <WorkshopLocation>{workshopLocation}</WorkshopLocation>
          </Header>
          <Footer>
            <Button onPress={onCheckEstimate} activeOpacity={0.8}>
              <ButtonText>견적서 확인</ButtonText>
              <Icon source={require('../../assets/images/estimate.png')} />
            </Button>
            <Button onPress={onChatWithWorkshop} activeOpacity={0.8}>
              <ButtonText>공방과 대화</ButtonText>
              <Icon source={require('../../assets/images/chat.png')} />
            </Button>
          </Footer>
        </Overlay>
      </ImageBackground>
    </Container>
  );
};

export default SelectWorkShop;