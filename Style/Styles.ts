import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #191919;
`;
export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 20px;
`;

