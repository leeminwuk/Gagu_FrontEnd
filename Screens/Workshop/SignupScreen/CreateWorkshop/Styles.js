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
    fontSize: 16,
    fontWeight: '400',
  },
  helpTextContainer:{
    marginTop: 26,
    marginLeft: 8,
  },
  workshopimageContainer: {
    marginTop: 10,
    width: width * 0.89,
    height: height * 0.25,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraImage: {
    width: 40,
    height: 40,
  },
  helpText: {
    color: '#878787',
    fontSize: 16,
    fontWeight: '400',
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
  buttonContainer: {
    marginTop: height * 0.03,
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
  inputcomment: {
    width: width * 0.9,
    height: height * 0.15,
    borderRadius: 6,
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 10,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  invalidInputComment: {
    borderColor: '#ff9696',
    borderWidth: 1,
    textAlignVertical: 'top',
    textAlign: 'left',
    padding: 10,
  },
});
export default styles;
