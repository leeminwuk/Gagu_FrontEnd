import { getToken, getNickname } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo';
import { getChatRooms } from '../../api/chatMyRoom';
import { getChatContents } from '../../api/chatContents';
import getFurniture from '../../api/getFuniture';
import { outChat } from '../../api/outChat';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import Config from 'react-native-config';

const CHAT_URL = Config.CHAT_URL;

export const fetchUserInfo = async (setNickname) => {
  try {
    const token = await getToken();
    if (!token) {
      // console.error('Token is missing');
      return;
    }
    const userInfo = await UserInfo(token);
    if (userInfo) {
      setNickname(userInfo.nickname);
      console.log('Fetched nickname:', userInfo.nickname);
    } else {
      //console.error('User info is missing');
    }
  } catch (error) {
    // console.error('Error fetching user info:', error);
  }
};

export const fetchChatRoomId = async (shopname, setChatRoomId) => {
  const token = await getToken();
  if (!token) {
    //console.error('Token is missing');
    return;
  }

  try {
    const chatRooms = await getChatRooms(0, token);
    console.log('chatRooms:', chatRooms);

    if (chatRooms && chatRooms.content.length > 0) {
      const room = chatRooms.content.find(room =>
        room.roomName.includes(shopname),
      );
      if (room) {
        setChatRoomId(room.id);
        //console.log('Fetched chatRoomId:', room.id);
      } else {
        // console.error('No chat room found for the given shop name.');
      }
    } else {
      //console.error('No chat rooms found.');
    }
  } catch (error) {
    // console.error('Error fetching chat rooms:', error);
  }
};

export const fetchChatHistory = async (chatRoomId, setMessages) => {
  const token = await getToken();
  if (!token) {
    console.error('Token is missing');
    return;
  }

  try {
    const chatHistory = await getChatContents(chatRoomId, 0, token);
    //console.log('Fetched chat history:', chatHistory);
    // setMessages(chatHistory.map(msg => ({ ...msg, sender: msg.nickName })));
  } catch (error) {
    console.error('Error fetching chat history:', error);
  }
};

export const connectWebSocket = async (chatRoomId, setIsConnected, subscribeToMessages) => {
  const authToken = await getToken();
  if (!authToken) {
    console.error('Token is missing');
    return;
  }

  const client = new Client({
    webSocketFactory: () => new SockJS(CHAT_URL),
    connectHeaders: {
      Authorization: `Bearer ${authToken}`,
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  client.onConnect = frame => {
    console.log('Connected: ' + frame);
    setIsConnected(true);
    subscribeToMessages(client, chatRoomId);
  };

  client.onStompError = frame => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
    setIsConnected(false);
  };

  client.activate();
  return client;
};

export const subscribeToMessages = (client, chatRoomId, setMessages) => {
  if (!client || !client.connected) {
    console.error('WebSocket client is not connected.');
    return;
  }

  const subscription = client.subscribe(
    `/sub/chatroom/${chatRoomId}`,
    message => {
      const receivedMessage = JSON.parse(message.body);
      console.log('Received message:', receivedMessage);
      setMessages(prevMessages => [
        ...prevMessages,
        {...receivedMessage, sender: receivedMessage.nickName},
      ]);
    },
  );

  return subscription;
};

export const sendMessage = (client, chatRoomId, type, messageContent, template, estimateId, setCurrentMessage) => {
  if (!client || !client.connected) {
    console.error('WebSocket client is not connected.');
    return;
  }

  const message = {
    type: type,
    prompt: null,
    estimateInfo: {
      template: template,
      estimateId: estimateId,
    },
    chatContentsInfo: {
      contents: messageContent,
    },
  };

  console.log('Sending message:', message);

  client.publish({
    destination: `/pub/gagu-chat/${chatRoomId}`,
    body: JSON.stringify(message),
  });

  setCurrentMessage('');
};

export const handleOutButtonPress = async (chatRoomId, navigation, setModalVisible) => {
  const token = await getToken();
  if (!token) {
    console.error('토큰이 없습니다.');
    Alert.alert('오류', '토큰이 없습니다.');
    return;
  }
  const {success, message} = await outChat(chatRoomId, token);
  if (success) {
    if (client.current) {
      client.current.deactivate();
    }
    navigation.navigate('WriteReviewScreen', {shopname}); // shopname 전달
    setModalVisible(false);
  } else {
    console.error(message);
  }
};

export const handleRequestFurniture = async (setFurnitureList, setRequestModalVisible) => {
  try {
    const token = await getToken();
    const furnitureData = await getFurniture(0, token);
    console.log('Fetched furniture data:', furnitureData);

    const filteredFurniture = furnitureData.content.filter(
      item => item !== null,
    );

    if (filteredFurniture.length === 0) {
      Alert.alert('알림', '더이상 조회할 가구 데이터가 없습니다!');
    } else {
      setFurnitureList(filteredFurniture);
      setRequestModalVisible(true);
    }
  } catch (error) {
    Alert.alert('오류', '제작 요청 중 오류가 발생했습니다.');
  }
};