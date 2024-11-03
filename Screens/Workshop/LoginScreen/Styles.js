import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginLeft: 22,
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  singupText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 180,
  },
  sideText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 14,
    letterSpacing: -0.5,
  },
  sideTextBox: {
    marginTop: 40,
  },
  shopButton: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.06,
  },
  idContainer: {
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: 6,
    borderColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 16,
    color: '#ffffff',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  passwordContainer: {
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: 6,
    borderColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 16,
    color: '#ffffff',
  },
  image: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    marginTop: height * 0.25,
  },
  imageContainer: {
    position: 'absolute',
    right: 16,
  },
});
export default styles;
