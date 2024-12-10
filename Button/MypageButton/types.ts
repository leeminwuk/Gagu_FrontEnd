import { ImageSourcePropType, StyleProp, ViewStyle, ImageStyle } from 'react-native';

export interface MypageButtonProps {
  image: ImageSourcePropType;
  text: string;
  style?: StyleProp<ViewStyle>;
  imagecontainerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  onPress: () => void;
}