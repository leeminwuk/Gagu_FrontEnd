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
  locationContainer: {
    marginVertical: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workShopcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: height * 0.0235,
  },
});
export default styles;
