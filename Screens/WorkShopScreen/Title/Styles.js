import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  titleContainer: {
    width: width,
    height: 60,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 22,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  namelocationContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 140,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nameText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationimage: {
    width: 14,
    height:14,
  },
  locationTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '400',
  },
  authcostContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  authimage: {
    width: 40,
    height: 40,
  },
  expactedcostContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  expactedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  expactedText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '400',
  },
  costContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  costText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '600',
  },

});

export default styles;
