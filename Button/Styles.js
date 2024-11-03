import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    height: height * 0.06,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    width: width * 0.8,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
});
export default styles;
