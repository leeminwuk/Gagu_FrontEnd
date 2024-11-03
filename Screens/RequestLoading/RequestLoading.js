import React, {useEffect} from 'react';
import {Animated, View, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import RequestLoadingAnimation from '../../Components/RequestLoadingAnimation/RequestLoadingAnimation';
import styles from './Styles';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';

const RequestLoading = (props) => {
  const navigation = useNavigation();
  const { item } = props.route.params;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SearchWorkShopScreen', { item });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#191919'}}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.fixedContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              공방을 찾고 있습니다{'\n'}
              잠시 기달려 주세요
            </Text>
          </View>
          <RequestLoadingAnimation />
          <ProgressBar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RequestLoading;