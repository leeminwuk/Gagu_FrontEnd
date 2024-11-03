import {StyleSheet, Dimensions, ImageComponent} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  fixedContainer: {
    height: height * 0.8,
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightImgae: {
    width: 300,
    height: 200,
    alignSelf: 'center',
  },
  bigLight: {
    width: 350,
    height: 200,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  
});
export default styles;
