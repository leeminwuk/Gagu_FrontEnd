import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  title: {
    marginHorizontal: 22,
    marginBottom: 20,
    justifyContent: 'center',
  },
  userProgress: {},
  userProgressText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 30,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  noselectTextContainer: {
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noselectText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: 20,
    textAlign: 'center',
  },
  choiceTitle: {
    marginHorizontal: 22,
    marginVertical: 14,
    justifyContent: 'center',
  },
  choiceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 30,
  },
  selectContainer:{
    marginHorizontal: 22,
  },
  noSelectContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noSelectText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
});
export default styles;