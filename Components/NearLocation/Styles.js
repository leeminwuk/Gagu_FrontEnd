import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  nearLocationContainer: {
    width: width * 0.4,
    height: 30,
    backgroundColor: '#FFffff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationImageContainer: {},
  locationImage: {
    width: 18,
    height: 18,
  },
  locationTextContainer: {
    marginRight: 10,
  },
  nearLocationText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '400',
  },
});
export default styles;
