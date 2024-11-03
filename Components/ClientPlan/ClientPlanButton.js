import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CommonModal from '../../Modal/CommonModal';

const ClientPlanButton = ({ image, location }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleDeletePress = () => {
    setModalVisible(true);
  };

  const handleDetailPress = () => {
    navigation.navigate('UserProduceDetailScreen');
  };

  const handleFinishButtonPress1 = () => {
    setModalVisible(false);
  };

  const handleFinishButtonPress2 = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/fake3dimage.png')}
          style={styles.produceImage}
        />
      </View>
      <View style={styles.title}>
        <View style={styles.semiContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.userImageContainer}>
              <Image
                source={require('../../assets/images/profile.png')}
                style={styles.userImage}
              />
            </View>
            <View style={styles.locationproduceContainer}>
              <View style={styles.locationContainer}>
                <View style={styles.locationImage}>
                  <Image
                    source={require('../../assets/images/whitelocation.png')}
                    style={styles.locationIcon}
                  />
                </View>
                <View style={styles.locationTextContainer}>
                  <Text style={styles.locationText}>경기도 화성시</Text>
                </View>
              </View>
              <View style={styles.whoProduceContainer}>
                <Text style={styles.whoProduceText}>
                  손민기님이 제작한 가구 도면
                </Text>
              </View>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>한달 전 제작</Text>
            </View>
          </View>
          <View style={styles.nameButtonContainer}>
            <View style={styles.produceNameContainer}>
              <Text style={styles.produceNameText}>나무 의자</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.deleteButton}
                activeOpacity={0.8}
                onPress={handleDeletePress}>
                <View>
                  <Image
                    source={require('../../assets/images/wastebasket.png')}
                    style={styles.deleteButtonImage}
                  />
                </View>
                <Text style={styles.deleteButtonText}>삭제</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.detailButton}
                activeOpacity={0.8}
                onPress={handleDetailPress}>
                <Text style={styles.detailButtonText}>{'자세히\n보기'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <CommonModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        imageSource={require('../../assets/images/warning.png')}
        mainText="삭제 확인"
        sideText={
          '사용자의 도면을 삭제하면 관련 도면은 숨겨집니다.\n그래도 삭제하겠습니까?'
        }
        firstButtonText="삭제"
        secondButtonText="돌아가기"
        firstButtonColor="#FFFFFF"
        secondButtonColor="#454545"
        firstButtonTextColor="#000000"
        secondButtonTextColor="#FFFFFF"
        onFirstButtonPress={handleFinishButtonPress1}
        onSecondButtonPress={handleFinishButtonPress2}
      />
    </View>
  );
};

export default ClientPlanButton;