import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './Styles';
import Notice from '../../../Components/WorkshopNotice/Notice';
import WorkshopHeader from '../../../Components/MainHeader/WorkshopHeader';
import CardContainer, { WideCardContainer } from './cardContainer';

const WorkshopMainScreen = ({ navigation }) => {
  const title = '공방 관계자 메뉴';
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <View style={styles.container}>
        <WorkshopHeader />
        <Notice />
        <View style={styles.menuContainer}>
          <View style={styles.menuTitle}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.searchCustomerContainer}>
            <WideCardContainer
              imageSource={require('../../../assets/images/backproduce.png')}
              iconSource={require('../../../assets/images/chairsearch.png')}
              text="가구 의뢰자 찾기"
              onPress={() => navigation.navigate('SearchClientScreen')}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardContainer
              imageSource={require('../../../assets/images/backchat.png')}
              iconSource={require('../../../assets/images/chaticon.png')}
              text="채팅"
              onPress={() => navigation.navigate('ChatListScreen')}
            />
            <CardContainer
              imageSource={require('../../../assets/images/backworkshop.png')}
              iconSource={require('../../../assets/images/persionicon.png')}
              text="마이공방"
              onPress={() => navigation.navigate('WorkshopMypageScreen')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WorkshopMainScreen;