import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 22px;
  background-color: #191919;
`;

export const TextContainer = styled.View`
  margin-top: 36px;
`;

export const TitleText = styled.Text`
  color: #ffffff;
  font-size: 26px;
  font-weight: 600;
`;

export const SideTextBox = styled.View`
  margin-top: 30px;
`;

export const SideText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`;

export const AddressContainer = styled.View`
  margin-top: ${height * 0.05}px;
`;

export const HintText = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;

export const InputContainer = styled.View`
  margin-top: ${height * 0.03}px;
`;

export const TextInputContainer = styled.View`
  margin-top: 10px;
  width: ${width * 0.9}px;
  height: ${height * 0.07}px;
  border-radius: 6px;
  border-color: #ffffff;
  border-width: 1px;
  color: #ffffff;
  padding-horizontal: 10px;
  justify-content: center;
`;

export const AddressText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

export const TextInputStyled = styled.TextInput`
  font-size: 16px;
  color: #ffffff;
`;

export const ButtonContainer = styled.View`
  margin-top: ${height * 0.1}px;
  align-items: center;
`;

export const InvalidInput = styled.View`
  border-color: #ff9696;
  border-width: 1px;
`;

export const ModalSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #191919;
`;