import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CommonModal from '../../Modal/CommonModal';
import {
  Container,
  ImageContainer,
  ProduceImage,
  Title,
  SemiContainer,
  TitleContainer,
  UserImageContainer,
  UserImage,
  LocationProduceContainer,
  LocationContainer,
  LocationImage,
  LocationIcon,
  LocationTextContainer,
  LocationText,
  WhoProduceContainer,
  WhoProduceText,
  DateContainer,
  DateText,
  NameButtonContainer,
  ProduceNameContainer,
  ProduceNameText,
  ButtonContainer,
  DeleteButton,
  DeleteButtonText,
  DetailButton,
  DetailButtonText,
  DeleteButtonImage,
} from './Styles';

const ClientPlanButton = ({ image, location }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleDeletePress = () => {
    setModalVisible(true);
  };

  const handleDetailPress = () => {
    navigation.navigate('UserProduceDetailScreen');
  };

  const handleFinishButtonPress1 = () => {
    setModalVisible(false);
  };

  const handleFinishButtonPress2 = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <ImageContainer>
        <ProduceImage
          source={require('../../assets/images/fake3dimage.png')}
        />
      </ImageContainer>
      <Title>
        <SemiContainer>
          <TitleContainer>
            <UserImageContainer>
              <UserImage
                source={require('../../assets/images/profile.png')}
              />
            </UserImageContainer>
            <LocationProduceContainer>
              <LocationContainer>
                <LocationImage>
                  <LocationIcon
                    source={require('../../assets/images/whitelocation.png')}
                  />
                </LocationImage>
                <LocationTextContainer>
                  <LocationText>경기도 화성시</LocationText>
                </LocationTextContainer>
              </LocationContainer>
              <WhoProduceContainer>
                <WhoProduceText>
                  손민기님이 제작한 가구 도면
                </WhoProduceText>
              </WhoProduceContainer>
            </LocationProduceContainer>
            <DateContainer>
              <DateText>한달 전 제작</DateText>
            </DateContainer>
          </TitleContainer>
          <NameButtonContainer>
            <ProduceNameContainer>
              <ProduceNameText>나무 의자</ProduceNameText>
            </ProduceNameContainer>
            <ButtonContainer>
              <DeleteButton
                activeOpacity={0.8}
                onPress={handleDeletePress}>
                <DeleteButtonImage
                  source={require('../../assets/images/wastebasket.png')}
                />
                <DeleteButtonText>삭제</DeleteButtonText>
              </DeleteButton>
              <DetailButton
                activeOpacity={0.8}
                onPress={handleDetailPress}>
                <DetailButtonText>{'자세히\n보기'}</DetailButtonText>
              </DetailButton>
            </ButtonContainer>
          </NameButtonContainer>
        </SemiContainer>
      </Title>
      <CommonModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        imageSource={require('../../assets/images/warning.png')}
        mainText="삭제 확인"
        sideText={
          '사용자의 도면을 삭제하면 관련 도면은 숨겨집니다.\n그래도 삭제하겠습니까?'
        }
        firstButtonText="삭제"
        secondButtonText="돌아가기"
        firstButtonColor="#FFFFFF"
        secondButtonColor="#454545"
        firstButtonTextColor="#000000"
        secondButtonTextColor="#FFFFFF"
        onFirstButtonPress={handleFinishButtonPress1}
        onSecondButtonPress={handleFinishButtonPress2}
      />
    </Container>
  );
};

export default ClientPlanButton;