import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const RequestButtonContainer = styled.TouchableOpacity`
  background-color: #dedede;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  gap: ${width * 0.02}px;
`;

export const RequestButtonText = styled.Text`
  color: #585858;
  font-size: 10px;
  font-weight: 600;
  align-self: center;
`;

export const RequestImage = styled.Image`
  width: 14px;
  height: 14px;
  resize-mode: contain;
`;