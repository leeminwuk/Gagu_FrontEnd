import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { getToken, getNickname } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo'; 
import { getChatRooms } from '../../api/chatMyRoom'; 
import { getChatContents } from '../../api/chatContents'; // 여기서 getChatContents를 가져옵니다.
import { getWorkshopEstimates } from '../../api/authWorkshop'; 
import { outChat } from '../../api/outChat'; 
import RequestButton from '../../Components/RequestButton/RequestButton';
import RequestPayment from '../../Components/RequestPayment/RequestPayment';
import BackButton from '../../Components/BackButton/BackButton';
import CommonModal from '../../Modal/CommonModal'; 
import styles from './Styles';
import Config from 'react-native-config';

const CHAT_URL = Config.CHAT_URL;

const ChatScreen = ({ navigation, route }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [chatRoomId, setChatRoomId] = useState(null); 
  const [nickname, setNickname] = useState(''); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [showExitButton, setShowExitButton] = useState(false); 
  const scrollViewRef = useRef();
  const client = useRef(null);
  const subscription = useRef(null);
  const shopname = route?.params?.shopname || '가구 공방';
  const isWorkshop = route?.params?.isWorkshop || false;

  useEffect(() => {
    console.log('shopname:', shopname); 
    const fetchUserInfo = async () => {
      try {
        const token = await getToken();
        if (!token) {
         // console.error('Token is missing');
          return;
        }
        const userInfo = await UserInfo(token);
        if (userInfo) {
          setNickname(userInfo.nickname); 
          //console.log('Fetched nickname:', userInfo.nickname); 
        } else {
          //console.error('User info is missing');
        }
      } catch (error) {
       // console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchChatRoomId = async () => {
      const token = await getToken();
      if (!token) {
        //console.error('Token is missing');
        return;
      }

      try {
        const chatRooms = await getChatRooms(0, token);
        console.log('chatRooms:', chatRooms);

        if (chatRooms && chatRooms.content.length > 0) {
          const room = chatRooms.content.find(room => room.roomName.includes(shopname));
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

    fetchChatRoomId();
  }, [shopname]);

  useEffect(() => {
    if (chatRoomId) {
      const connectWebSocket = async () => {
        const authToken = await getToken();
        if (!authToken) {
          console.error('Token is missing');
          return;
        }

        if (client.current) {
          client.current.deactivate();
        }

        client.current = new Client({
          webSocketFactory: () => new SockJS(CHAT_URL),
          connectHeaders: {
            Authorization: `Bearer ${authToken}`,
          },
          reconnectDelay: 5000,
          heartbeatIncoming: 4000,
          heartbeatOutgoing: 4000,
        });

        client.current.onConnect = (frame) => {
          console.log('Connected: ' + frame);
          setIsConnected(true);
          subscribeToMessages();
        };

        client.current.onStompError = (frame) => {
          console.error('Broker reported error: ' + frame.headers['message']);
          console.error('Additional details: ' + frame.body);
          setIsConnected(false);
        };

        // client.current.onWebSocketClose = (event) => {
        //   console.error('WebSocket connection closed: ', event);
        //   setIsConnected(false);
        // };

        client.current.activate();
      };

      connectWebSocket();
    }

    return () => {
      if (client.current) {
        client.current.deactivate();
      }
    };
  }, [chatRoomId]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (chatRoomId) {
        const token = await getToken();
        if (!token) {
          console.error('Token is missing');
          return;
        }

        try {
          const chatHistory = await getChatContents(chatRoomId, 0, token);
          console.log('Fetched chat history:', chatHistory); // 로그 추가
          setMessages(chatHistory);
        } catch (error) {
          console.error('Error fetching chat history:', error);
        }
      }
    };

    fetchChatHistory();
  }, [chatRoomId]);

  const subscribeToMessages = () => {
    if (!client.current || !client.current.connected) {
      console.error('WebSocket client is not connected.');
      return;
    }

    if (subscription.current) {
      subscription.current.unsubscribe();
    }

    subscription.current = client.current.subscribe(`/sub/chatroom/${chatRoomId}`, (message) => {
      const receivedMessage = JSON.parse(message.body);
      console.log('Received message:', receivedMessage); 
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    });
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) {
      Alert.alert('오류', '메시지를 입력하세요!');
      return;
    }
  
    if (!client.current || !client.current.connected) {
      //console.error('WebSocket client is not connected.');
      return;
    }
  
    const message = {
      type: 'SEND',
      contents: currentMessage,
      sender: nickname,
    };

    console.log('Sending message:', message);
  
    client.current.publish({
      destination: `/pub/gagu-chat/${chatRoomId}`,
      body: JSON.stringify(message),
    });
  
    setCurrentMessage('');
  };

  const handlePaymentRequest = async () => {
    try {
      const savedNickname = await getNickname(); // 닉네임 불러오기
      const estimates = await getWorkshopEstimates(savedNickname);
      console.log('Fetched workshop estimates:', estimates);

      const filteredEstimates = estimates.content.filter(item => item !== null);

      if (filteredEstimates.length === 0) {
        Alert.alert('알림', '더이상 조회할 가구 데이터가 없습니다!');
      } else {
        navigation.navigate('SelectEstimateScreen', { estimates: filteredEstimates });
      }
    } catch (error) {
      Alert.alert('오류', '결제 요청 중 오류가 발생했습니다.');
    }
  };

  const handleDeliveryRequest = () => {
    navigation.navigate('DeliveryScreen');
  };

  const handleOutModal = () => {
    setModalVisible(true);
  };

  const handleHamburgerPress = () => {
    setShowExitButton(!showExitButton);
  };

  const handleOutButtonPress = async () => {
    const token = await getToken();
    if (!token) {
      console.error('토큰이 없습니다.');
      Alert.alert('오류', '토큰이 없습니다.');
      return;
    }
    const { success, message } = await outChat(chatRoomId, token);
    if (success) {
      if (client.current) {
        client.current.deactivate();
      }
      navigation.navigate('WriteReviewScreen');
    } else {
      console.error(message);
    }
  };

  if (!isConnected) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919' }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton
        navigation={navigation}
        image={require('../../assets/images/hamburgerbar.png')}
        onHamburgerPress={handleHamburgerPress}
      />
      {showExitButton && (
        <TouchableOpacity onPress={handleOutModal} style={styles.exitButton} activeOpacity={0.8}>
          <Text style={styles.exitButtonText}>채팅 그만하기</Text>
        </TouchableOpacity>
      )}
      <View style={styles.workshopContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.shopnameContainer}>
            <Text style={styles.shopnameText}>{shopname}</Text>
          </View>
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
          contentContainerStyle={{ paddingBottom: 30 }}
          style={styles.chatContainer}
        >
          {messages.map((message, index) => (
            <View 
              key={index} 
              style={message.sender === nickname ? styles.senderMessage : styles.receiverMessage}
            >
              <Text 
                style={message.sender === nickname ? styles.messageSenderText : styles.messageReceiverText} 
              >
                {message.message}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.sendContainer}>
          {isWorkshop && (
            <View style={styles.requestContainer}>
              <RequestButton
                requestText="결제 요청"
                requestImage={require('../../assets/images/cardicon.png')}
                onPress={handlePaymentRequest}
              />
              <RequestButton
                requestText="배 달"
                requestImage={require('../../assets/images/deliveryicon.png')}
                onPress={handleDeliveryRequest}
              />
              <RequestButton
                requestText="거래 종료"
                requestImage={require('../../assets/images/handsicon.png')}
              />
            </View>
          )}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={currentMessage}
              onChangeText={setCurrentMessage}
              placeholder="메시지를 입력하세요"
              placeholderTextColor="#9CA6AE"
            />
            <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
              <Image
                source={require('../../assets/images/sendmessage.png')}
                style={styles.sendImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <CommonModal
        modalVisible={modalVisible}
        imageSource={require('../../assets/images/warning.png')}
        mainText="확인 필요"
        sideText={`채팅을 종료하시겠습니까?`}
        firstButtonText="확인"
        secondButtonText="취소"
        firstButtonColor="#ffffff"
        secondButtonColor="#666666"
        firstButtonTextColor="#000000"
        secondButtonTextColor="#FFFFFF"
        onFirstButtonPress={handleOutButtonPress}
        onSecondButtonPress={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;