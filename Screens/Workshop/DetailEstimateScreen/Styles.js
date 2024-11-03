import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    paddingHorizontal: 22,  
  },
  mainText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  miniTextContainer: {
    marginTop: 10,
  },
  miniText: {
    color: '#969696',
    fontSize: 14,
    fontWeight: '600',
  },
  imageBox: {
    alignItems: 'center',
    backgroundColor: '#2D2D2D',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chairImage: {
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 10,
  },
  paltImage: {
    width: '100%',
    height: '100%',
  },
  rotateContainer: {
    width: 100,
    height: 30,
    borderRadius: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 24,
    borderColor: 'white',
    borderWidth: 2,
    flexDirection: 'row',
  },
  rotateButton: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
  rotateText: {
    color: 'white',
    fontSize: 10,
    marginLeft: 6,
  },
});

export default styles;