import { Payment } from '@portone/react-native-sdk';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const commonTextStyles = `
  font-size: 16px;
  font-weight: 600;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 20px;
  gap: ${height * 0.03}px;
`;

export const SideText = styled.Text`
  ${commonTextStyles}
  color: #ffffff;
  font-weight: 900;
`;

export const EstimateContainer = styled.View`
  background-color: #ffffff;
  height: ${height * 0.15}px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  margin-vertical: ${height * 0.02}px;
  padding-horizontal: ${width * 0.05}px;
`;

export const EstimateBox = styled.View`
  margin-vertical: ${height * 0.01}px;
`;

export const Estimate = styled.View`
  flex-direction: row;
  margin-horizontal: ${width * 0.05}px;
`;

export const EstimateImage = styled.Image`
  width: ${width * 0.15}px;
  height: ${height * 0.1}px;
  border-radius: 10px;
`;

export const EstimateText = styled.View`
  flex-direction: column;
  justify-content: center;
  padding-horizontal: ${width * 0.05}px;
`;

export const EstimateDate = styled.Text`
  font-size: 10px;
  color: #575757;
  font-weight: 600;
`;

export const EstimateName = styled.Text`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
`;

export const OrdererBox = styled.View`
  margin-vertical: ${height * 0.01}px;
`;

export const OrdererContainer = styled.View`
  background-color: #303030;
  height: ${height * 0.25}px;
  border-radius: 20px;
  margin-vertical: ${height * 0.02}px;
  padding-horizontal: ${width * 0.05}px;
  justify-content: center;
  gap: ${height * 0.04}px;
`;

export const OrdererText = styled.View`
  flex-direction: row;
  gap: ${width * 0.01}px;
`;

export const LeftText = styled.Text`
  ${commonTextStyles}
  color: #cbcbcb;
  flex: 1;
`;

export const RightText = styled.Text`
  ${commonTextStyles}
  color: #ffffff;
  font-weight: 400;
  flex: 2;
`;

export const AddressBox = styled.View``;

export const AddressContainer = styled.View`
  background-color: #303030;
  border-radius: 20px;
  height: ${height * 0.2}px;
  margin-vertical: ${height * 0.02}px;
  align-items: center;
  justify-content: center;
`;

export const PlusAddressButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${width * 0.03}px;
`;
export const PlusIcon = styled.Image`
  width: ${width * 0.05}px;
  height: ${height * 0.05}px;
  resize-mode: contain;
`;
export const PlusText = styled.Text`
  font-size: 12px;
  color: #ffffff;
  font-weight: 400;
`;
export const PaymentContainer = styled.View`
  background-color: #313030;
  flex-direction: row;
  padding-horizontal: 30px;
  height: ${height * 0.12}px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
`;
export const PriceTextContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  gap: ${height * 0.002}px;
`;
export const PriceText = styled.Text`
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
`;
export const DetailText = styled.Text`
  font-size: 14px;
  color: #2095fd;
  font-weight: 500;
`;
export const PaymentButton = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: ${width * 0.35}px;
  height: ${height * 0.05}px; 
  flex-direction: row;
  gap: ${width * 0.01}px;
`;
export const PaymentText = styled.Text`
  font-size: 12px;
  color: #000000;
  font-weight: 700;
`;
export const ArrowIcon = styled.Image`
  width: ${width * 0.05}px;
  height: ${height * 0.05}px;
  resize-mode: contain;
`;