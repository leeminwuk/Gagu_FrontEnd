import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const NearLocationContainer = styled.View`
  background-color: #ffffff;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 20px;
  padding-vertical: 8px;
`;

export const LocationImageContainer = styled.View``;

export const LocationImage = styled.Image`
  width: 18px;
  height: 18px;
`;

export const LocationTextContainer = styled.View`
  margin-right: 10px;
`;

export const NearLocationText = styled.Text`
  color: #000000;
  font-size: 10px;
  font-weight: 400;
`;