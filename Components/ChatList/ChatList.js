import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { getChatRooms } from '../../api/chatMyRoom';
import { getChatContents } from '../../api/chatContents';
import { getToken } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo'; // UserInfo 함수 추가

const ChatList = () => {
  const navigation = useNavigation();
  const [chatRooms, setChatRooms] = useState([]);
  const [nickname, setNickname] = useState(''); // nickname 상태 추가

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await getToken();
        if (!token) {
          console.error('Token is missing');
          return;
        }
        const userInfo = await UserInfo(token);
        if (userInfo) {
          setNickname(userInfo.name); // 사용자 이름 설정
        } else {
          console.error('User info is missing');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchChatRooms = async () => {
      const token = await getToken();
      if (token) {
        const data = await getChatRooms(0, token);
        if (data) {
          const roomsWithLastMessage = await Promise.all(
            data.content.map(async (room) => {
              const chatContents = await getChatContents(room.id, 0, token);
              const lastMessage = chatContents.length > 0 ? chatContents[0] : null; // 가장 최근 메시지
              if (lastMessage) {
                console.log(`Room ID: ${room.id}, Last Message Time: ${lastMessage.sendTime}`);
              }
              return {
                ...room,
                lastMessage: lastMessage ? lastMessage.message : '메시지가 없습니다',
                lastMessageTime: lastMessage ? new Date(lastMessage.sendTime) : new Date(),
              };
            })
          );
          setChatRooms(roomsWithLastMessage);
        }
      } else {
        console.error('토큰을 불러오지 못했습니다.');
      }
    };

    fetchChatRooms();
  }, []);

  const handleChatPress = (roomNumber, roomName) => {
    console.log(`Entering room with number: ${roomNumber}`);
    navigation.navigate('ChatScreen', { roomNumber, shopname: roomName, isWorkshop: true, nickname });
  };

  const getTimeDifference = (sendTime) => {
    const now = new Date();
    const sentTime = new Date(sendTime);
    const diffInMs = now - sentTime;
    const diffInMinutes = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInDays}일 전`;
    }
  };

  return (
    <View>
      {chatRooms.map((room) => {
        const roomName = room.roomName.split('님과')[0];
        const lastMessage = room.lastMessage || '메시지가 없습니다';

        return (
          <TouchableOpacity
            key={room.id}
            style={styles.listContainer}
            activeOpacity={0.8}
            onPress={() => handleChatPress(room.id, roomName)}
          >
            <View style={styles.userImageContainer}>
              <Image
                source={require('../../assets/images/profile.png')}
                style={styles.userImage}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>{roomName}</Text>
              <Text style={styles.messageText}>{lastMessage}</Text>
            </View>
            <View style={styles.timecountContainer}>
              <View style={styles.timeContainer}>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default ChatList;