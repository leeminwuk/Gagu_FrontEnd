import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  align-items: center;
  background-color: #fff;
  flex: 1;
  gap: ${height * 0.45}px;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

export const LogoBox = styled.View`
  margin-top: ${height * 0.1}px;
  align-items: center;
`;

export const Logo = styled.View``;

export const LogoImage = styled.Image`
  width: ${width * 0.6}px;
  height: 60px;
  margin-top: ${height * 0.1}px;
`;

export const SideTextContainer = styled.View``;

export const SideText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 14px;
`;