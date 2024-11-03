import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  mainText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  sideTextContainer: {
    marginTop: 10,
  },
  sideText: {
    color: '#969696',
    fontSize: 12,
  },
  storgaeImgaeBox: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
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
  image:{
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
