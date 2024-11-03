import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  fixedContainer: {
    flex: 1,
  },
  textContainer: {
    marginBottom: 20,
  },
  mainText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
    descriptionTitleText: {
    color: '#969696',
    fontSize: 16,
    fontWeight: '600',
},
  descriptionText: {
    color: 'white',
    fontSize: 16,
  },
  priceText: {
    color: 'white',
    fontSize: 16,
    
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
  arContainer: {
    marginTop: 20,
  },
});

export default styles;
