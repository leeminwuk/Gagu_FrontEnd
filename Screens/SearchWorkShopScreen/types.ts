import { RouteProp } from '@react-navigation/native';

export interface WorkshopType {
  id: number;
  workshopName: string;
  description: string;
  address: string;
  starAverage: number;
  count: number;
}

export interface SearchWorkShopScreenProps {
  route: RouteProp<{ params: { item: any } }, 'params'>;
}