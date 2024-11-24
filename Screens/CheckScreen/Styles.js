import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 22px;
`;

export const FixedContainer = styled.View``;

export const TextContainer = styled.View`
  margin-bottom: 10px;
`;

export const MainText = styled.Text`
  color: white;
  font-size: 26px;
  font-weight: 900;
`;

export const ImageBox = styled.View`
  align-items: center;
  background-color: #2d2d2d;
  border-radius: 20px;
  padding: 20px;
  margin-vertical: 20px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ChairImage = styled.Image`
  width: ${width * 0.8}px;
  height: ${height * 0.4}px;
  border-radius: 10px;
`;

export const ButtonContainer = styled.View`
  margin-top: 40px;
  background-color: #191919;
`;