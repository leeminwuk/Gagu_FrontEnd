import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ListContainer,
  UserImageContainer,
  UserImage,
  NameContainer,
  NameText,
  MessageText,
  TimeCountContainer,
  TimeContainer,
  TimeText,
} from './Styles';
import { ChatRoom, ChatListProps, Navigation } from './types';
import { fetchUserInfo, fetchChatRooms, getTimeDifference } from './events';

const ChatList: React.FC<ChatListProps> = () => {
  const navigation = useNavigation<Navigation>();
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [nickname, setNickname] = useState<string>(''); 

  useEffect(() => {
    fetchUserInfo(setNickname);
  }, []);

  useEffect(() => {
    fetchChatRooms(setChatRooms);
  }, []);

  const handleChatPress = (roomNumber: number, roomName: string) => {
    console.log(`Entering room with number: ${roomNumber}`);
    navigation.navigate('ChatScreen', { roomNumber, shopname: roomName, isWorkshop: true, nickname });
  };

  return (
    <Container>
      {chatRooms.map((room) => {
        const roomName = room.roomName.split('님과')[0];
        const lastMessage = room.lastMessage || '메시지가 없습니다';

        return (
          <TouchableOpacity
            key={room.id}
            activeOpacity={0.8}
            onPress={() => handleChatPress(room.id, roomName)}
          >
            <ListContainer>
              <UserImageContainer>
                <UserImage
                  source={require('../../assets/images/profile.png')}
                />
              </UserImageContainer>
              <NameContainer>
                <NameText>{roomName}</NameText>
                <MessageText>{lastMessage}</MessageText>
              </NameContainer>
            </ListContainer>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}

export default ChatList;