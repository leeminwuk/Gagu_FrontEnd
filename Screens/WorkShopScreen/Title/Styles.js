import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const TitleContainer = styled.View`
  width: ${width}px;
  height: 60px;
  background-color: #191919;
  padding-horizontal: 22px;
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 22px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NameLocationContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 140px;
`;

export const NameContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
`;

export const NameText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LocationImage = styled.Image`
  width: 14px;
  height: 14px;
`;

export const LocationTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LocationText = styled.Text`
  color: #ffffff;
  font-size: 10px;
  font-weight: 400;
`;

export const AuthContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AuthImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ExpectedCostContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ExpectedContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ExpectedText = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: 400;
`;

export const CostContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CostText = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
`;