import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export const PaymentRequestMessage = styled.View`
  align-self: flex-end;
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  width: ${width * 0.65}px;
  max-width: 80%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 2px;
`;

export const PaymentTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.Image`
  width: 44px;
  height: 14px;
  resize-mode: contain;
`;

export const PaymentRequestText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #000000;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

export const ProductContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  width: ${width * 0.55}px;
  height: ${height * 0.15}px;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 10px;
`;

export const ProductInfoContainer = styled.View`
  flex-direction: column;
`;

export const ProductImage = styled.Image`
  width: 70px;
  height: 110px;
  resize-mode: contain;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-top: 12px;
  color: #000000;
`;

export const ProductDate = styled.Text`
  font-size: 10px;
  font-weight: 400;
  margin-top: 4px;
  color: #575757;
`;

export const ProductPrice = styled.Text`
  font-size: 22px;
  margin-top: 14px;
  color: #494949;
  font-weight: 600;
`;