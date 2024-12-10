import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
`;

export const ListContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserImageContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 20px;
`;

export const NameContainer = styled.View`
  margin-left: ${width * 0.05}px;
  gap: 2px;
  justify-content: center;
  align-self: center;
`;

export const NameText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
`;

export const MessageText = styled.Text`
  color: #aeaeae;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const TimeCountContainer = styled.View`
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const TimeContainer = styled.View`
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

export const TimeText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
`;

export const MessageCountContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #e94242;
  border-radius: 10px;
  padding-horizontal: 6px;
  padding-vertical: 2px;
`;

export const MessageCountText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
`;