import React, { useRef, useEffect } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { Payment, PortOneController } from '@portone/react-native-sdk';
import { useRoute } from '@react-navigation/native';
import { sendPaymentComplete } from '../../api/paymentComplete';
import { getToken } from '../../utils/storage';
import Config from 'react-native-config';

const STORE_ID = Config.STORE_ID;
const CHANNEL_KEY = Config.CHANNEL_KEY;
const REDIRECT_URL = Config.REDIRECT_URL;

const DoPayment = () => {
  const controller = useRef<PortOneController>(null);
  const uid = Date.now().toString(16);
  const route = useRoute();
  const { orderName, totalAmount } = route.params;

  console.log('STORE_ID:', STORE_ID);
  console.log('CHANNEL_KEY:', CHANNEL_KEY);
  console.log('REDIRECT_URL:', REDIRECT_URL);

  const handlePaymentComplete = async (complete: any) => {
    Alert.alert('완료', JSON.stringify(complete));
    console.log('결제 완료:', complete);

    try {
      const token = await getToken();
      console.log('토큰:', token); 
      const responseData = await sendPaymentComplete(complete.paymentId, token);
      console.log('서버 응답:', responseData);
    } catch (error) {
      console.error('결제 완료 정보 전송 중 오류 발생:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Payment
        ref={controller}
        request={{
          storeId: STORE_ID,
          channelKey: CHANNEL_KEY,
          paymentId: uid,
          orderName: orderName,
          totalAmount: totalAmount,
          currency: 'CURRENCY_KRW',
          payMethod: 'CARD',
          redirectUrl: REDIRECT_URL,
        }}
        onError={error => Alert.alert('실패', error.message)}
        onComplete={handlePaymentComplete}
      />
    </SafeAreaView>
  );
};

export default DoPayment;