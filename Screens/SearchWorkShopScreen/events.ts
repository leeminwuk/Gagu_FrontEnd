import { Dispatch, SetStateAction } from 'react';
import { Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { checkWorkshop } from '../../api/checkWorkshop';
import { getToken } from '../../utils/storage';
import { WorkshopType } from './types';

export const fetchWorkshops = async (
  filterType: string,
  setWorkshops: Dispatch<SetStateAction<WorkshopType[]>>,
  navigation: NavigationProp<any>
) => {
  const token = await getToken();
  console.log('토큰:', token); // 토큰 로그 출력
  if (token) {
    try {
      const data = await checkWorkshop(0, filterType, token);
      console.log('조회된 데이터:', data); // 조회된 데이터 로그 출력
      if (data) {
        setWorkshops(data);
      } else {
        Alert.alert('오류', '공방 조회에 실패했습니다.');
      }
    } catch (error) {
      if (error instanceof Error && error.message === 'Unauthorized') {
        Alert.alert('오류', '공방 조회에 실패했습니다. 다시 로그인해주세요.');
        navigation.navigate('LoginScreen');
      } else {
        Alert.alert('오류', '공방 조회 중 오류가 발생했습니다.');
      }
    }
  }
};

export const handleConditionChange = (
  condition: string,
  setFilterType: Dispatch<SetStateAction<string>>
) => {
  if (condition === '거리순') {
    setFilterType('NEAR');
  } else if (condition === '리뷰순') {
    setFilterType('POPULAR');
  }
  console.log('필터 타입 변경:', condition === '거리순' ? 'NEAR' : 'POPULAR'); // 필터 타입 변경 로그 출력
};

export const handleButtonPress = (
  workshopId: number,
  navigation: NavigationProp<any>,
  item: any
) => {
  console.log(`Clicked workshop ID: ${workshopId}`);
  navigation.navigate('WorkShopScreen', { workshopId, item });
};