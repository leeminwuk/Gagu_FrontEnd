import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
    noticeContainer: {
    alignSelf: 'center',
    width: width * 0.9,
    height: height * 0.08,
    borderRadius: 10,
    backgroundColor: 'rgba(110,110,110, 0.8)',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  scrollviewState: {
    flexDirection: 'row',
  },
  indicatorContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffffff',
    margin: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  noticeMainText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },
  noticeSubText: {
    color: '#aeaeae',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default styles;
