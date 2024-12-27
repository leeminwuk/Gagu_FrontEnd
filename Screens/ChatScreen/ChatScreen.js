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
  Platform,
  Modal,
} from 'react-native';
import {
  fetchUserInfo,
  fetchChatRoomId,
  fetchChatHistory,
  connectWebSocket,
  subscribeToMessages,
  sendMessage,
  handleOutButtonPress,
  handleRequestFurniture,
} from './events';
import RequestModal from '../../Modal/RequestModal/RequestModal';
import RequestButton from '../../Components/RequestButton/RequestButton';
import BackButton from '../../Components/BackButton/BackButton';
import CommonModal from '../../Modal/CommonModal';
import EstimateContent from '../../Components/EstimateContent/EstimateContent';
import styles from './Styles';

const ChatScreen = ({ navigation, route }) => {
  const scrollViewRef = useRef();
  const client = useRef(null);
  const subscription = useRef(null);

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [chatRoomId, setChatRoomId] = useState(null);
  const [nickname, setNickname] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [requestModalVisible, setRequestModalVisible] = useState(false);
  const [showExitButton, setShowExitButton] = useState(false);
  const [furnitureModalVisible, setFurnitureModalVisible] = useState(false);
  const [furnitureList, setFurnitureList] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState(null); // 선택된 가구 데이터
  const shopname = route?.params?.shopname || '가구 공방';
  const isWorkshop = route?.params?.isWorkshop || false;

  useEffect(() => {
    console.log('shopname:', shopname);
    fetchUserInfo(setNickname);
  }, []);

  useEffect(() => {
    fetchChatRoomId(shopname, setChatRoomId);
  }, [shopname]);

  useEffect(() => {
    if (chatRoomId) {
      fetchChatHistory(chatRoomId, setMessages);

      const connect = async () => {
        client.current = await connectWebSocket(chatRoomId, setIsConnected, (client, chatRoomId) => {
          subscription.current = subscribeToMessages(client, chatRoomId, setMessages);
        });
      };

      connect();
    }

    return () => {
      if (client.current) {
        client.current.deactivate();
      }
    };
  }, [chatRoomId]);

  const handleSendMessage = () => {
    if (!currentMessage.trim()) {
      Alert.alert('오류', '메시지를 입력하세요!');
      return;
    }
    sendMessage(client.current, chatRoomId, 'SEND', currentMessage, null, null, setCurrentMessage);
  };

  const handleSelectFurniture = (item) => {
    setSelectedFurniture(item);
    const template = `
      import React from 'react';
      import { Container, EstimateContainer, Icon, Title, TitleText, EstimateImage, EstimateName, EstimateDate, EstimateText, EstimateButton, ButtonText } from './Styles';

      const EstimateContent = () => {
        return (
          <Container>
            <Title>
              <Icon source={require('../../assets/images/blackLogo.png')} />
              <TitleText>제작 요청을 했어요!</TitleText>
            </Title>
            <EstimateContainer>
              <EstimateImage source={{ uri: '${item.furniture2DUrl}' }} />
              <EstimateText>
                <EstimateName>${item.furnitureName}</EstimateName>
                <EstimateDate>${item.createdDate}</EstimateDate>
              </EstimateText>
            </EstimateContainer>
            <EstimateButton activeOpacity={0.8}>
              <ButtonText>견적서 저장하기</ButtonText>
            </EstimateButton>
          </Container>
        );
      };

      export default EstimateContent;
    `;
    sendMessage(client.current, chatRoomId, 'REQUEST_ESTIMATE', null, template, item.id, setCurrentMessage);
  };

  if (!isConnected) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#191919',
        }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton
        navigation={navigation}
        image={require('../../assets/images/hamburgerbar.png')}
        onHamburgerPress={() => setShowExitButton(!showExitButton)}
      />
      {showExitButton && (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.exitButton}
          activeOpacity={0.8}>
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

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
          contentContainerStyle={{ paddingBottom: 30 }}
          style={styles.chatContainer}>
          {messages.map((message, index) => (
            <View
              key={index}
              style={
                message.sender === nickname
                  ? styles.senderMessage
                  : styles.receiverMessage
              }>
              <Text
                style={
                  message.sender === nickname
                    ? styles.messageSenderText
                    : styles.messageReceiverText
                }>
                {message.contents}
              </Text>
            </View>
          ))}
          {selectedFurniture && (
            <EstimateContent
              image={selectedFurniture.furniture2DUrl}
              name={selectedFurniture.furnitureName}
              date={selectedFurniture.createdDate}
            />
          )}
        </ScrollView>

        <View style={styles.sendContainer}>
          {isWorkshop ? (
            <View style={styles.requestContainer}>
              {/* 
              <RequestButton
                requestText="배 달"
                requestImage={require('../../assets/images/deliveryicon.png')}
                onPress={handleDeliveryRequest}
              />
              <RequestButton
                requestText="거래 종료"
                requestImage={require('../../assets/images/handsicon.png')}
              /> */}
            </View>
          ) : (
            <View style={styles.requestContainer}>
              <RequestButton
                requestText="제작 요청"
                requestImage={require('../../assets/images/handsicon.png')}
                onPress={() => handleRequestFurniture(setFurnitureList, setRequestModalVisible)}
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
            <TouchableOpacity
              onPress={handleSendMessage}
              style={styles.sendButton}>
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
        onFirstButtonPress={() => handleOutButtonPress(chatRoomId, navigation, setModalVisible)}
        onSecondButtonPress={() => setModalVisible(false)}
      />
      <RequestModal
        modalVisible={requestModalVisible}
        setModalVisible={setRequestModalVisible}
        furnitureList={furnitureList}
        onSelect={handleSelectFurniture}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={furnitureModalVisible}
        onRequestClose={() => {
          setFurnitureModalVisible(!furnitureModalVisible);
        }}></Modal>
    </SafeAreaView>
  );
};

export default ChatScreen;