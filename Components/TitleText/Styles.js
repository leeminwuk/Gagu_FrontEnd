import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: height * 0.05,
  },
  titleText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
  },
  sideTextBox: {
    marginTop: 14,
  },
  sideText: {
    color: '#969696',
    fontSize: 14,
    fontWeight: '400',
  },
});
export default styles;
