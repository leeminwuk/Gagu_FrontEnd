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
  buttonContainer: {
    marginTop: height * 0.08,
  },

  invalidInput: {
    borderColor: '#ff9696',
    borderWidth: 1,
  },
  conditionContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  morethantextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filledImage: {
    width: 24,
    height: 24,
  },
  conditionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
    marginRight: 30,
  },
  invalidInput: {
    borderColor: '#ff9696',
    borderWidth: 1,
  },
  button: {
    width: width * 0.9,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  showPasswordImage: {
    width: 24,
    height: 24,
  },
  imageContainer: {
    position: 'absolute',
    right: 16,
  },
  image: {
    width: 20,
    height: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  input: {
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: 6,
    borderColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 16,
    color: '#ffffff',
  },
});
export default styles;
