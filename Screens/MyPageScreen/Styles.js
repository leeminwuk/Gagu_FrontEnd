import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mypageContainer: {
    flex: 1,
    backgroundColor: '#191919',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 40,
  },
  logoContainer: {
    alignItems: 'center',
  },
  miniLogo: {
    width: 120,
    height: 32,
    marginTop: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileDetailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  userEmailContainer: {
    marginVertical: height * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  emailText: {
    fontSize: 16,
    color: '#A6A6A6',
    letterSpacing: -0.5,
    lineHeight: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
    gap: height * 0.01,
  },
  button: {
    width: 18,
    height: 18,
  },
  logoImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  barButtonContainer: {
    gap: height * 0.03,
  },
  logoStyle: {
    width: 40,
    height: 40,
  },
  logoContainer: {
    marginRight: 22,
  },
});
export default styles;
