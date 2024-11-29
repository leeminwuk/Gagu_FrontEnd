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
  padding: 26px;
  gap: ${height * 0.036}px;
  position: absolute;
  bottom: 0;
`;

export const CheckContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.036}px;
`;

export const CheckImage = styled.Image`
  width: 36px;
  height: 36px;
  resize-mode: contain;
`;

export const MainTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const MainText = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  line-height: 30px;
`;

export const SideTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SideText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  line-height: 24px;
  font-weight: 400;
`;

export const ButtonBox = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 20px;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: ${width * 0.865}px;
  height: ${height * 0.06}px;
  align-items: center;
`;

export const OneButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;