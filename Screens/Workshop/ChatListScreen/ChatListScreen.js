import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './Styles';
import BackHeader from '../../../Components/WorkshopBackHeader/BackHeader';
import ChatList from '../../../Components/ChatList/ChatList';

const ChatListScreen = ({ navigation }) => {
  const title = '채팅';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackHeader
        navigation={navigation}
        titleText={title}
      />
      <View style={styles.container}>
        <View style={styles.chatListContainer}>
          <ChatList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatListScreen;