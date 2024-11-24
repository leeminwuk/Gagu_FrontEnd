import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #191919;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 22px;
`;

export const InputContainer = styled.View`
  gap: ${height * 0.05}px;
`;

export const TitleContainer = styled.View`
  height: ${height * 0.05}px;
  justify-content: center;
`;

export const ProfileBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ProfileContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProfileImageContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.Image`
  width: ${width * 0.3}px;
  height: ${width * 0.3}px;
  border-radius: ${width * 0.15}px;
`;

export const CameraButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 0;
  background-color: #ffffff;
  border-radius: 50px;
  padding: 6px;
`;

export const CameraIcon = styled.Image`
  width: 30px;
  height: 30px;
`;