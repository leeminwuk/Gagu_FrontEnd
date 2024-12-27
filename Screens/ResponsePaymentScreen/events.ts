import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ResponsePaymentScreenLogic, Item } from './types';

export const useResponsePaymentScreenLogic = (): ResponsePaymentScreenLogic => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params as { item: Item };

  useEffect(() => {
    console.log('Received item:', item);
  }, [item]);

  const formatDate = (dateString: string) => {
    const dateParts = dateString.split(' ')[0].split('-');
    if (dateParts.length !== 3) {
      return '2000년 01월 01일'; // 기본 날짜 설정
    }
    const [year, month, day] = dateParts;
    return `${year}년 ${month}월 ${day}일`;
  };

  const formatPrice = (price: number) => {
    return Number(price).toLocaleString('ko-KR');
  };

  const handleAddAddress = () => {
    navigation.navigate('PlusAddressScreen');
  };

  const handlePayment = () => {
    navigation.navigate('DoPayment', {
      orderName: item.furnitureName || '가구 이름',
      totalAmount: item.price || 0,
    });
  };

  return { item, formatDate, formatPrice, handleAddAddress, handlePayment, navigation };
};