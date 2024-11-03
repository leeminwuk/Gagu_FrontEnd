import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#303030',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginTop: 26,
    paddingTop: 22,
  },
  menuTitle: {
    width: width * 0.9,
    height: 50,
    backgroundColor: '#303030',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
  searchCustomerContainer: {
    width: width * 0.9,
    height: height * 0.2,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  produceImage: {
    width: width * 0.9,
    height: height * 0.225,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
  },
  produceImageWrapper: {
    width: width * 0.9,
    height: height * 0.225,
    borderRadius: 6,
    overflow: 'hidden',
  },
  imagetextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chairsearchImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  contentText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: height * 0.025,
    width: width * 0.9,
    justifyContent: 'space-between',
  },
  cardContainerWrapper: {
    width: width * 0.43,
    height: height * 0.34,
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 20,
  },
  chatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatImageWrapper: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default styles;
