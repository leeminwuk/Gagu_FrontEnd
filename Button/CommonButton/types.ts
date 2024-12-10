import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface CommonButtonProps {
  buttonText: string;
  buttonColor: string;
  textColor: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}