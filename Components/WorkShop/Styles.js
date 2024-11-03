import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  workShopContainer: {
    width: width * 0.887,
    backgroundColor: '#353535',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width:width * 0.30,
    height: height * 0.15,
  },
  conatiner: {
    flex:1,
    flexDirection: 'column',
    gap: height * 0.014,
    paddingHorizontal: width * 0.02,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationImage: {
    width: 14,
    height: 14,
  },
  locationTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '400',
  },
  subTextContainer: {
    width: width * 0.4,
  },
  subText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '400',
  },

  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: width * 0.02,
  },
  starImageContainer: {
    flexDirection: 'row',
    gap: width * 0.008,
  },
  starImage: {
    width: 14,
    height: 14,
  },
  reviewTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '400',
  },
  expactedCostContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  expactedTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  expactedText: {
    color: 'white',
    fontSize: 8,
    fontWeight: '400',
  },
  costContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  costText:{
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});
export default styles;
