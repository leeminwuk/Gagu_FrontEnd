import * as StompJs from '@stomp/stompjs';
import { getNickname, saveImageUrl } from '../utils/storage'; 
import Config from 'react-native-config';

const PROMPT_CHAT_URL = Config.PROMPT_CHAT_URL; 
let stompClient = null;
let messageQueue = []; 
let shouldReconnect = true; // 재연결 여부를 관리하는 플래그

const connectWebSocket = async (authToken, onMessageReceived) => {
  if (stompClient && stompClient.connected) {
    //console.log('이미 연결된 WebSocket이 있습니다.');
    return;
  }

  try {
    const nickname = await getNickname();

    if (!nickname) {
      throw new Error('Nickname is undefined');
    }

    stompClient = new StompJs.Client({
      brokerURL: PROMPT_CHAT_URL,
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      connectHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
      debug: (str) => {
        console.log('STOMP Debug:', str);
      },
      reconnectDelay: 5000, // 재연결 시도 간격 설정
      heartbeatIncoming: 4000, // 서버에서 클라이언트로의 heartbeat 간격
      heartbeatOutgoing: 4000, // 클라이언트에서 서버로의 heartbeat 간격
      
      onConnect: (frame) => {
        console.log('Connected:', frame);
        const subscription = stompClient.subscribe(`/user/${nickname}/sub`, async (message) => {
          const receivedMessage = JSON.parse(message.body);
          await saveImageUrl(receivedMessage.image); // 수신한 이미지 URL 저장
          //console.log('Received message:', receivedMessage);
          onMessageReceived(receivedMessage);
        });
       //console.log('Subscription:', subscription);

        // 연결이 성공하면 큐에 있는 메시지를 전송
        while (messageQueue.length > 0) {
          const message = messageQueue.shift();
          sendMessage(message.contents);
        }
      },
      onStompError: (frame) => {
       // console.error('Broker reported error:', frame.headers['message']);
        //console.error('Additional details:', frame.body);
      },
      onWebSocketClose: (event) => {
        //console.log('WebSocket 연결이 종료되었습니다:', event);
        if (shouldReconnect) {
          // 연결이 종료되면 재연결 시도
          setTimeout(() => {
            connectWebSocket(authToken, onMessageReceived);
          }, 5000);
        }
      },
      onWebSocketError: (error) => {
        //console.error('WebSocket 오류:', error);
      },
    });

    stompClient.activate(); 
  } catch (error) {
    //console.error('Error fetching user info:', error);
  }
};

const sendMessage = (contents) => {
  if (stompClient && stompClient.connected) {
    const message = {
      type: "LLM",
      contents: contents,
    };
    stompClient.publish({
      destination: "/pub/gagu-chat/2d",
      body: JSON.stringify(message),
    });
    //console.log('메시지가 성공적으로 전송되었습니다:', message);
  } else {
    //console.error('WebSocket Error');
    messageQueue.push({ contents });
  }
};

const disconnectWebSocket = () => {
  if (stompClient) {
    shouldReconnect = false; // 재연결 시도하지 않도록 설정
    stompClient.deactivate();
    //console.log('WebSocket 연결이 종료되었습니다.');
  }
};

const getWebSocketInstance = () => {
  return stompClient;
};

export { connectWebSocket, sendMessage, disconnectWebSocket, getWebSocketInstance };