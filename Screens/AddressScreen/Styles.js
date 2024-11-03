import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: '#191919',
  },
  textContainer: {
    marginTop: 36,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  sideTextBox: {
    marginTop: 30 ,
  },
  sideText: {
    color: '#ffffff',
    fontSize: 16 ,
    fontWeight: '400',
  },
  addressContainer: {
    marginTop: height * 0.05,
  },
  hintText: {
    color: '#ffffff',
    fontSize: 14,
  },
  inputContainer: {
    marginTop: height * 0.03,
  },
  textInputContainer: {
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: 6,
    borderColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  addressText: {
    fontSize: 16,
    color: '#ffffff',
  },
  buttonContainer: {
    marginTop: height * 0.1,
    alignItems: 'center',
  },
  invalidInput: {
    borderColor: '#ff9696',
    borderWidth: 1,
  },
});
export default styles;
