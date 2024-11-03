import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  photoSelectBox: {
    width: width * 0.2,
    height: width * 0.18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  cameraImage: {
    width: 30,
    height: 30,
  },
});
export default styles;
