import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  background-color: #ffffff;
  padding: 16px;
  height: ${height * 0.25}px;
  width: ${width * 0.57}px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 6px;
`;

export const Title = styled.View`
  flex: 0.2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Icon = styled.Image`
  flex: 0.4;
  justify-content: center;
  align-items: center;
  resize-mode: contain;
`;

export const TitleText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #000000;
  justify-content: center;
`;

export const EstimateContainer = styled.View`
  flex: 0.8;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  flex-direction: row;
`;

export const EstimateImage = styled.Image`
  width: ${width * 0.2}px;
  height: ${height * 0.1}px;
  resize-mode: contain;
  border-radius: 10px;
`;
export const EstimateText = styled.View`
  justify-content: center;
`;
export const EstimateName = styled.Text`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const EstimateDate = styled.Text`
  color: #575757;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const EstimateButton = styled.TouchableOpacity`
  flex: 0.35;
  margin-top: 12px;
  background-color: #f2f2f2;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 180% */
  letter-spacing: -0.5px;
`;
