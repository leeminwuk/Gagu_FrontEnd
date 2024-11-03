import { useState, useEffect, useRef, useCallback } from 'react';
import { getToken } from '../utils/storage';
import { UserInfo } from '../api/userInfo';
import SockJS from 'sockjs-client';
import Stomp from '@stomp/stompjs';
import Config from 'react-native-config';

const CHAT_URL = Config.CHAT_URL;

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [chatRoomNumber, setChatRoomNumber] = useState('');
  const [token, setToken] = useState('');
  const [nickname, setNickname] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const stompClient = useRef(null);

  const connect = useCallback((token, roomNumber) => {
    const socket = new SockJS(CHAT_URL);
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect(
      { 'Authorization': `Bearer ${token}` },
      frame => {
        console.log('Connected: ' + frame);
        setIsConnected(true);
        subscribe(roomNumber);
      },
      error => {
        console.error('WebSocket connection error: ' + error);
        setIsConnected(false);
      }
    );
  }, []);

  const subscribe = useCallback((roomNumber) => {
    if (!stompClient.current) {
      console.error('STOMP client is not initialized');
      return;
    }

    stompClient.current.subscribe(`/sub/chatroom/${roomNumber}`, (message) => {
      const receivedMessage = JSON.parse(message.body);
      console.log('Received message:', receivedMessage);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    });
  }, []);

  const sendMessage = useCallback(() => {
    if (stompClient.current && stompClient.current.connected && currentMessage.trim()) {
      const messageToSend = {
        type: 'SEND',
        contents: currentMessage,
        nickname: nickname,
        sender: nickname,
        timestamp: new Date().toISOString(),
      };

      stompClient.current.send(`/pub/gagu-chat/${chatRoomNumber}`, {}, JSON.stringify(messageToSend));
      setCurrentMessage('');
      console.log('Message sent:', messageToSend);
    } else {
      console.error('WebSocket is not connected or message is empty');
    }
  }, [currentMessage, nickname, chatRoomNumber]);

  const disconnect = useCallback(() => {
    if (stompClient.current) {
      stompClient.current.disconnect();
      setIsConnected(false);
      console.log('WebSocket connection closed');
    }
  }, []);

  useEffect(() => {
    const fetchTokenAndUserInfo = async () => {
      try {
        const fetchedToken = await getToken();
        if (!fetchedToken) {
          console.error('Token is missing');
          return;
        }
        setToken(fetchedToken);

        const userInfo = await UserInfo(fetchedToken);
        if (userInfo && userInfo.name) {
          setNickname(userInfo.name);
          console.log('User nickname:', userInfo.name);
        } else {
          console.error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching token or user info:', error);
      }
    };

    fetchTokenAndUserInfo();

    return () => {
      disconnect();
    };
  }, [disconnect]);

  useEffect(() => {
    if (token && chatRoomNumber) {
      connect(token, chatRoomNumber);
    }
  }, [token, chatRoomNumber, connect]);

  return {
    messages,
    currentMessage,
    setCurrentMessage,
    sendMessage,
    chatRoomNumber,
    setChatRoomNumber,
    token,
    disconnect,
    connect,
    nickname,
    isConnected,
  };
};