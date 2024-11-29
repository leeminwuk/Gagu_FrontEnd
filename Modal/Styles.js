import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const BlurContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalContainer = styled.View`
  align-items: flex-start;
  background-color: #303030;
  width: ${width}px;
  height: ${height * 0.4}px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 22px;
  position: absolute;
  bottom: 0;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const CheckContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CheckImage = styled.Image`
  width: 38px;
  height: 36px;
  resize-mode: contain;
`;

export const MainTextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const MainText = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  line-height: 30px;
`;

export const SideTextContainer = styled.View`
  margin-top: 20px;
`;

export const SideText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  line-height: 20px;
  font-weight: 400;
  line-height: 24px;
`;

export const ButtonBox = styled.View`
  margin-top: 20px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;