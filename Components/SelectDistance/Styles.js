import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const SelectDistancesContainer = styled.TouchableOpacity`
  width: ${width * 0.35}px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 30px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 20px;
`;

export const ListContainer = styled.View`
  position: absolute;
  width: ${width * 0.35}px;
  height: 90px;
  background-color: #ffffff;
  border-radius: 30px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 20px;
`;

export const SelectDistancesText = styled.Text`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
`;

export const SlideImage = styled.Image`
  margin-top: 2px;
  width: 16px;
  height: 10px;
`;