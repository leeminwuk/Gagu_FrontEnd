import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    alignItems: 'flex-start',
    backgroundColor: '#303030',
    width: width,
    height: height * 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 26,
    gap: height * 0.036,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: width * 0.036,
  },
  checkImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  mainTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: 30,
  },
  sideTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideText: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 24,
    fontWeight: '400',
  },
  buttonBox: {  
    flex: 1, 
    justifyContent: 'flex-end', 
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    width: width * 0.865, 
    height: height * 0.06,
    alignItems: 'center',
  },
  oneButton: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
});

export default styles;