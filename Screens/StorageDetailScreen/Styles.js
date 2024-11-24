import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 22px;
`;

export const FixedContainer = styled.View``;

export const TextContainer = styled.View`
  margin-bottom: 10px;
`;

export const MainText = styled.Text`
  color: white;
  font-size: 26px;
  font-weight: bold;
`;

export const SideTextContainer = styled.View`
  margin-top: 10px;
`;

export const SideText = styled.Text`
  color: #969696;
  font-size: 12px;
`;

export const StorageImageBox = styled.View`
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StorageImageContainer = styled.View`
  width: ${width * 0.42}px;
  height: ${height * 0.27}px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 70%;
  resize-mode: contain;
`;

export const MiniTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FurnitureText = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
`;

export const DateTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const DateText = styled.Text`
  color: #575757;
  font-size: 10px;
  font-weight: 500;
`;