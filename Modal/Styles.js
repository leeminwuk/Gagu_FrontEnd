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
    padding: 22,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkImage: {
    width: 38,
    height: 36,
    resizeMode: 'contain',
  },
  mainTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  mainText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: 30,
  },
  sideTextContainer: {
    marginTop: 20,
  },
  sideText: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 20,
    fontWeight: '400',
    lineHeight: 24,
  },
  buttonBox: {
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
