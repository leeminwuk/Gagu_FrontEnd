import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#191919',
  },
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  title: {
    marginVertical: height * 0.05,
    justifyContent: 'center',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  noticeBox: {
    backgroundColor: '#191919',
  },
  noticeCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.4,
  },
  noticeCategoryText: {
    fontSize: 20,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#ffffff',
  },
  inactiveTabText: {
    color: '#666666',
  },
  animatedLine: {
    height: 2,
    marginTop: height * 0.005,
    width: width * 0.18,
    backgroundColor: '#ffffff',
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
  noticeContent: {
    gap: height * 0.02,
    marginTop: height * 0.05,
  },
});

export default styles;