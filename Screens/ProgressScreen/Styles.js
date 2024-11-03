import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
  },
  textContainer: {
    marginTop: 100,
    marginLeft: 22,
  },
  overlayText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  startButton: {
    marginTop: 200,
    marginLeft: 22,
  },
  startText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: -0.5,
    width: width * 0.3,
  },
  startArrowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  startArrow: {
    width: width * 0.7,
    height: 2,
    backgroundColor: '#ffffff',
  },
  rightArrow: {
    marginLeft: -20,
    marginTop: 10,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
