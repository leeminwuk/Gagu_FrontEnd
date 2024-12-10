import { ImageSourcePropType } from 'react-native';

export interface BackButtonProps {
  navigation: any;
  titleText: string;
  image: ImageSourcePropType;
  onHamburgerPress: () => void;
  steps?: number;
}