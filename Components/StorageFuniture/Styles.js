import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  storageImageContainer: {
    width: width * 0.42,
    height: height * 0.27,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  miniTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  furnitureText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  dateTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: '#575757',
    fontSize: 10,
    fontWeight: '500',
  },
});

export default styles;