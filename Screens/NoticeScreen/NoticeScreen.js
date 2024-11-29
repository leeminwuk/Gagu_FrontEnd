import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import { useNavigation } from '@react-navigation/native';
import NoticeContent from '../../Components/Notice/NoticeContent';
import {
  SafeContainer,
  Container,
  Title,
  TitleText,
  NoticeBox,
  NoticeCategory,
  NoticeCategoryText,
  ActiveTabText,
  InactiveTabText,
  AnimatedLine,
  NoticeContentContainer,
} from './Styles';

const NoticeScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('공지사항');
  const translateX = useRef(new Animated.Value(0)).current;

  const handleTabPress = tab => {
    setActiveTab(tab);
    Animated.spring(translateX, {
      toValue: tab === '공지사항' ? 0 : 90, // Adjusted value for translation
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeContainer>
      <BackButton navigation={navigation} />
      <Container>
        <Title>
          <TitleText>알림</TitleText>
        </Title>
        <NoticeBox>
          <NoticeCategory>
            <TouchableOpacity
              onPress={() => handleTabPress('공지사항')}
              activeOpacity={0.8}>
              <NoticeCategoryText
                style={activeTab === '공지사항' ? ActiveTabText : InactiveTabText}>
                공지사항
              </NoticeCategoryText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleTabPress('개인알림')}
              activeOpacity={0.8}>
              <NoticeCategoryText
                style={activeTab === '개인알림' ? ActiveTabText : InactiveTabText}>
                개인알림
              </NoticeCategoryText>
            </TouchableOpacity>
          </NoticeCategory>
          <AnimatedLine style={{ transform: [{ translateX }] }} />
        </NoticeBox>
        <NoticeContentContainer>
          {activeTab === '공지사항' ? (
            <>
              <NoticeContent
                imageSource={require('../../assets/images/speaker.png')}
                mainText="가구 서비스 런칭 기념 이벤트!"
                subText="자세한 설명은 공지사항을 참고하세요."
              />
              <NoticeContent
                imageSource={require('../../assets/images/speaker.png')}
                mainText="다른 이벤트!"
                subText="다른 설명을 참고하세요."
              />
            </>
          ) : (
            <>
              <NoticeContent
                imageSource={require('../../assets/images/speaker.png')}
                mainText="개인 알림 1"
                subText="개인 알림 설명 1"
              />
              <NoticeContent
                imageSource={require('../../assets/images/speaker.png')}
                mainText="개인 알림 2"
                subText="개인 알림 설명 2"
              />
            </>
          )}
        </NoticeContentContainer>
      </Container>
    </SafeContainer>
  );
};

export default NoticeScreen;