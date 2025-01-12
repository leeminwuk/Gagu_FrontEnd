import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { fetchChatHistory } from './events';
import styles from './Styles';

const PreviousChatScreen = ({ chatRoomId, nickname }) => {
  const flatListRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (chatRoomId) {
      fetchChatHistory(chatRoomId, setMessages).then(() => {
        setIsLoading(false);
      });
    }
  }, [chatRoomId]);

  const renderItem = ({ item }) => {
    return (
      <View
        style={
          item.sender === nickname
            ? styles.senderMessage
            : styles.receiverMessage
        }>
        <Text
          style={
            item.sender === nickname
              ? styles.messageSenderText
              : styles.messageReceiverText
          }>
          {item.message}
        </Text>
      </View>
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#ffffff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        style={styles.chatContainer}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
      />
    </SafeAreaView>
  );
};

export default PreviousChatScreen;