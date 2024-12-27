import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  TitleContainer,
  LeftContainer,
  NameLocationContainer,
  NameContainer,
  NameText,
  LocationContainer,
  ImageContainer,
  LocationImage,
  LocationTextContainer,
  LocationText,
  AuthContainer,
  AuthImage,
  ExpectedCostContainer,
  ExpectedContainer,
  ExpectedText,
  CostContainer,
  CostText,
} from './Styles';

const Title = ({ nameText, locationText, costText }) => {
  return (
    <TitleContainer>
      <LeftContainer>
        <NameLocationContainer>
          <NameContainer>
            <NameText>{nameText}</NameText>
          </NameContainer>
          <LocationContainer>
            <ImageContainer>
              <LocationImage
                source={require('../../../assets/images/whitelocation.png')}
              />
            </ImageContainer>
            <LocationTextContainer>
              <LocationText>{locationText}</LocationText>
            </LocationTextContainer>
          </LocationContainer>
        </NameLocationContainer>
        <AuthContainer>
          <AuthImage
            source={require('../../../assets/images/auth.png')}
          />
        </AuthContainer>
      </LeftContainer>
      <ExpectedCostContainer>
      </ExpectedCostContainer>
    </TitleContainer>
  );
};

export default Title;