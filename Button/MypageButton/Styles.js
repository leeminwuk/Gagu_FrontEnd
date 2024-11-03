import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: width * 0.887,
    height: height * 0.065,
    borderRadius: 16,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '800',
  },
});
export default styles;
