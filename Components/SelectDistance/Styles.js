import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  selectDistancesContainer: {
    width: width * 0.35,
    height: 30,
    backgroundColor: '#FFffff',
    borderRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  listContainer: {
    position: 'absolute',
    width: width * 0.35,
    height: 90,
    backgroundColor: '#FFffff',
    borderRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  selectDistancesText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
  },
  slideImage: {
    marginTop: 2,
    width: 16,
    height: 10,
  },
});
export default styles;
