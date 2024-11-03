import React, {useState, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, Animated, SafeAreaView} from 'react-native';
import styles from './Styles';
import BackButton from '../../Components/BackButton/BackButton';
import {useNavigation} from '@react-navigation/native';
import NoticeContent from '../../Components/Notice/NoticeContent';

const NoticeScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('공지사항');
  const translateX = useRef(new Animated.Value(0)).current;

  const handleTabPress = tab => {
    setActiveTab(tab);
    Animated.spring(translateX, {
      toValue: tab === '공지사항' ? 0 : styles.noticeCategory.width / 1.8,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>알림</Text>
        </View>
        <View style={styles.noticeBox}>
          <View style={styles.noticeCategory}>
            <TouchableOpacity
              onPress={() => handleTabPress('공지사항')}
              activeOpacity={0.8}>
              <Text
                style={[
                  styles.noticeCategoryText,
                  activeTab === '공지사항'
                    ? styles.activeTabText
                    : styles.inactiveTabText,
                ]}>
                공지사항
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleTabPress('개인알림')}
              activeOpacity={0.8}>
              <Text
                style={[
                  styles.noticeCategoryText,
                  activeTab === '개인알림'
                    ? styles.activeTabText
                    : styles.inactiveTabText,
                ]}>
                개인알림
              </Text>
            </TouchableOpacity>
          </View>
          <Animated.View
            style={[styles.animatedLine, {transform: [{translateX}]}]}
          />
        </View>
        <View style={styles.noticeContent}>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoticeScreen;
