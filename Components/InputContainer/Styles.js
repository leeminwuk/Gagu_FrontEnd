import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex-direction: column;
`;

export const TitleContainer = styled.View``;

export const TitleText = styled.Text`
  color: #d9d9d9;
  font-size: 16px;
  font-weight: 600;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${height * 0.02}px;
`;

export const Input = styled.TextInput`
  width: ${width * 0.887}px;
  height: ${height * 0.07}px;
  border-radius: 6px;
  border-color: #383838;
  border-width: 1px;
  padding-horizontal: 16px;
  color: #878787;
  font-size: 16px;
  font-weight: 400;
`;

export const EditingInput = styled(Input)`
  border-color: #5884e8;
  border-width: 1px;
`;

export const InvalidInput = styled(Input)`
  border-color: #ff9696;
`;