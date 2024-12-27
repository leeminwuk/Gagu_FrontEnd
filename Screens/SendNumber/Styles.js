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
  singupText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  sideTextBox: {
    marginTop: 14,
  },
  sideText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },
  buttonContainer: {
    marginTop: height * 0.08,
  },
  input: {
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: 6,
    borderColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  timerText: {
    color: '#7eb2ff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
  },
  invalidInput: {
    borderColor: '#ff9696',
    borderWidth: 1,
  },
  button: {
    width: width * 0.9,
    height: height * 0.06,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  hintButton: {
    width: width * 0.9,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  hintbuttonText: {
    color: '#878787',
    fontSize: 14,
    fontWeight: '600',
  },
});
export default styles;
