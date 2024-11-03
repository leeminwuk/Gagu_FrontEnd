import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.887,
    height: height * 0.14,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#303030',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden', 
  },
  semiContainer: {
    flexDirection: 'column',
    flex: 1,
    gap: height * 0.0047,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: width * 0.225,
    height: height * 0.1,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1, 
  },
  produceImage: {
    width: width * 0.15,
    height: height * 0.08,
    resizeMode: 'contain',
  },
  title: {
    justifyContent: 'center',
    paddingLeft: width * 0.0355,
    flexDirection: 'row',
    flex: 1,
  },
  userImageContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1, 
  },
  userImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  locationproduceContainer: {
    flexDirection: 'column',
    gap: height * 0.0047,
    alignSelf: 'center',
    marginRight: width * 0.03,
  },
  locationContainer: {
    flexDirection: 'row',
  },
  locationImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    width: 8,
    height: 8,
    resizeMode: 'contain',
  },
  locationTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: '#ffffff',
    fontSize: 6,
    fontWeight: '400',
  },
  whoProduceContainer: {},
  whoProduceText: {
    color: '#ffffff',
    fontSize: 8,
    fontWeight: '400',
  },
  dateContainer: {
    alignSelf: 'center',
    backgroundColor: '#4D4D4D',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dateText: {
    color: '#A8CAFF',
    fontSize: 12,
    fontWeight: '400',
  },
  nameButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  produceNameContainer: {
    justifyContent: 'center',
  },
  produceNameText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: width * 0.03,
  },
  deleteButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#4d4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
  },
  detailButton: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailButtonText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  deleteButtonImage: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
});

export default styles;