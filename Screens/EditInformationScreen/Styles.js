import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#191919',
  },
  Container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  inputContainer: {
    gap: height * 0.05,
  },
  titleContainer: {
    height: height * 0.05,
    justifyContent: 'center',
  },
  profileBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 6,
  },
  cameraIcon: {
    width: 30,
    height: 30,
  },
});
export default styles;
