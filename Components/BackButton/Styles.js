import styled from 'styled-components/native';

export const Container = styled.View`
  padding-horizontal: 20px;
  padding-vertical: 20px;
  background-color: #191919;
  flex-direction: row;
  align-items: center;
`;

export const BackButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BackButtonImage = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

export const TitleText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
`;

export const HamburgerBarContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const HamburgerBarImage = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;