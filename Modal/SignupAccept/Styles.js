import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 22,
    marginTop: 180,
  },
  mainText: {
    fontWeight: '900',
    fontSize: 30,
    color: '#ffffff',
  },
  sideTextBox: {
    marginTop: 40,
  },
  sideText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 14,
    lineHeight: 24,
  },
  startButton: {
    marginTop: height * 0.3,
  },
  startText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: -0.5,
    marginLeft: 8,
  },
  startArrow: {
    width: width * 0.8,
    height: 2,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  startArrowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightArrow: {
    marginLeft: -60,
    marginTop: -20,
  },
  rightArrowImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  arrowCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    marginTop: -20,
    marginLeft: -30,
  },
});
export default styles;
