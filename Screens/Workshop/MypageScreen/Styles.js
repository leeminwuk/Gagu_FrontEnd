import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  workshopImage: {
    marginVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  workshopIcon: {
    width: width,
    height: height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  workshopName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    gap: height * 0.0282,
    marginTop: 20,
  },
  logoStyle: {
    width: 40,
    height: 40,
  },
  logoContainer: {
    marginRight: 22,
  },
  buttonBox: {
    marginTop: height * 0.06,
  },
});
export default styles;
