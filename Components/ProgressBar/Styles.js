import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  fixedBar: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.6,
    height: height * 0.03,
    backgroundColor: '#385682',
    borderRadius: 10,
  },
  loadingBar: {
    height: height * 0.03,
    backgroundColor: '#CADFFF',
    borderRadius: 10,
  },
});
export default styles;
