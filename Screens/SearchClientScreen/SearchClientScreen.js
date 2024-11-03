import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './Styles';
import BackButton from '../../../Components/BackButton/BackButton';
import {useNavigation} from '@react-navigation/native';
import ClientPlanButton from '../../../Components/ClientPlan/ClientPlanButton';
import TitleText from '../../../Components/TitleText/TitleText';
const SearchClientScreen = () => {
  const mainText = '가구 의뢰자 찾기';
  const sideText = '사용자가 제작한 도면을 보고, 견적을 보내보세요';
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeContainer}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <TitleText mainText={mainText} sideText={sideText} />
        <ClientPlanButton />
      </View>
    </SafeAreaView>
  );
};

export default SearchClientScreen;
