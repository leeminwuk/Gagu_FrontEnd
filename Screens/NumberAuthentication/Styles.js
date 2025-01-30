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
    marginTop: height * 0.05,
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
  invalidInput: {
    borderColor: '#ff9696',
    borderWidth: 1,
  },
  button: {
    width: width * 0.9,
    height: height * 0.06,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#191919',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default styles;
