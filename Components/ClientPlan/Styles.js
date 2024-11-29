import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width * 0.887}px;
  height: ${height * 0.14}px;
  padding-horizontal: 12px;
  border-radius: 20px;
  background-color: #303030;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
`;

export const SemiContainer = styled.View`
  flex-direction: column;
  flex: 1;
  gap: ${height * 0.0047}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  width: ${width * 0.225}px;
  height: ${height * 0.1}px;
  border-radius: 20px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
`;

export const ProduceImage = styled.Image`
  width: ${width * 0.15}px;
  height: ${height * 0.08}px;
  resize-mode: contain;
`;

export const Title = styled.View`
  justify-content: center;
  padding-left: ${width * 0.0355}px;
  flex-direction: row;
  flex: 1;
`;

export const UserImageContainer = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
`;

export const UserImage = styled.Image`
  width: 20px;
  height: 20px;
  resize-mode: contain;
`;

export const LocationProduceContainer = styled.View`
  flex-direction: column;
  gap: ${height * 0.0047}px;
  align-self: center;
  margin-right: ${width * 0.03}px;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
`;

export const LocationImage = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LocationIcon = styled.Image`
  width: 8px;
  height: 8px;
  resize-mode: contain;
`;

export const LocationTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LocationText = styled.Text`
  color: #ffffff;
  font-size: 6px;
  font-weight: 400;
`;

export const WhoProduceContainer = styled.View``;

export const WhoProduceText = styled.Text`
  color: #ffffff;
  font-size: 8px;
  font-weight: 400;
`;

export const DateContainer = styled.View`
  align-self: center;
  background-color: #4d4d4d;
  border-radius: 6px;
  padding-horizontal: 8px;
  padding-vertical: 4px;
`;

export const DateText = styled.Text`
  color: #a8caff;
  font-size: 12px;
  font-weight: 400;
`;

export const NameButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProduceNameContainer = styled.View`
  justify-content: center;
`;

export const ProduceNameText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: ${width * 0.03}px;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding-horizontal: 16px;
  padding-vertical: 10px;
  border-radius: 6px;
  background-color: #4d4d4d;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const DeleteButtonText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
`;

export const DetailButton = styled.TouchableOpacity`
  padding-horizontal: 10px;
  padding-vertical: 12px;
  border-radius: 6px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const DetailButtonText = styled.Text`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

export const DeleteButtonImage = styled.Image`
  width: 14px;
  height: 14px;
  resize-mode: contain;
`;