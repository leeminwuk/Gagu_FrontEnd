import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const WorkShopContainer = styled.TouchableOpacity`
  width: ${width * 0.887}px;
  background-color: #353535;
  border-radius: 20px;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  width: ${width * 0.30}px;
  height: ${height * 0.15}px;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: ${height * 0.014}px;
  padding-horizontal: ${width * 0.02}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LocationImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LocationImage = styled.Image`
  width: 14px;
  height: 14px;
`;

export const LocationTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LocationText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: 400;
`;

export const SubTextContainer = styled.View`
  width: ${width * 0.4}px;
`;

export const SubText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: 400;
`;

export const ReviewContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${width * 0.02}px;
`;

export const StarImageContainer = styled.View`
  flex-direction: row;
  gap: ${width * 0.008}px;
`;

export const StarImage = styled.Image`
  width: 14px;
  height: 14px;
`;

export const ReviewTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ReviewText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: 400;
`;

export const ExpactedCostContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ExpactedTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ExpactedText = styled.Text`
  color: white;
  font-size: 8px;
  font-weight: 400;
`;

export const CostContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CostText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;