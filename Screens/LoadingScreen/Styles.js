import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  fixedContainer: {
    height: height * 0.8,
  },
  mainText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },

  loadingBar: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.8,
    height: height * 0.06,
    backgroundColor: '#474747',
    borderRadius: 10,
  },
  innerBar: {
    width: width * 0.78,
    height: height * 0.05,
    borderRadius: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  dotContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    marginRight: 4,
    opacity: 0.7,
  },
});

export default styles;
