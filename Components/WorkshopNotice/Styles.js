import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SectionContainer = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const NoticeContainer = styled.View`
  align-self: center;
  width: ${width * 0.9}px;
  height: ${height * 0.08}px;
  border-radius: 10px;
  background-color: rgba(110, 110, 110, 0.8);
  align-items: center;
  flex-direction: row;
  padding-horizontal: 10px;
`;

export const ScrollviewState = styled.View`
  flex-direction: row;
`;

export const IndicatorContainer = styled.View`
  position: absolute;
  right: 20px;
  top: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 40px;
`;

export const Indicator = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: gray;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #ffffff;
  margin: 10px;
`;

export const NoticeImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
`;

export const NoticeMainText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
`;

export const NoticeSubText = styled.Text`
  color: #aeaeae;
  font-size: 12px;
  font-weight: 400;
`;