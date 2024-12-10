import { getChatRooms } from '../../api/chatMyRoom';
import { getChatContents } from '../../api/chatContents';
import { getToken } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo';
import { ChatRoom, ChatContent } from './types';

export const fetchUserInfo = async (setNickname: (name: string) => void) => {
  try {
    const token = await getToken();
    if (!token) {
      console.error('Token is missing');
      return;
    }
    const userInfo = await UserInfo(token);
    if (userInfo) {
      setNickname(userInfo.name);
    } else {
      console.error('User info is missing');
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
  }
};

export const fetchChatRooms = async (setChatRooms: (rooms: ChatRoom[]) => void) => {
  const token = await getToken();
  if (token) {
    const data = await getChatRooms(0, token);
    if (data) {
      const roomsWithLastMessage = await Promise.all(
        data.content.map(async (room: any) => {
          const chatContents: ChatContent[] = await getChatContents(room.id, 0, token);
          const lastMessage = chatContents.length > 0 ? chatContents[0] : null;
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

export const getTimeDifference = (sendTime: Date): string => {
  const now = new Date();
  const sentTime = new Date(sendTime);
  const diffInMs = now.getTime() - sentTime.getTime();
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