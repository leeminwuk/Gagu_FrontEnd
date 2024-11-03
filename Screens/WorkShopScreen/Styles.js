import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  closeButton: {
    width: 14,
    height: 20,
  },
  imageContainer: {
    width: width,
    height: height * 0.3,
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height * 0.3,
  },
  contentsContainer: {
    width: width,
    paddingHorizontal: 22,
  },
  opinionContainer: {},
  opiniontitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
  },
  opImageContainer: {
    width: 24,
    height: 24,
  },
  opinionImage: {
    width: 24,
    height: 24,
  },
  opnititleContainer: {
    marginLeft: 6,
  },
  opinionTitle: {
    color: '#ffffff',
    fontSize: 14,
    height: 24,
  },
  opinioncontentsContainer: {
    backgroundColor: 'rgba(133, 133, 133, 0.12)',
    borderRadius: 8,
    padding: 12,
  },
  opinionContents: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
  },
  reviewContainer: {
    marginTop: 24,
  },
  reviewTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
  },
  reviewTextContainer: {
    marginLeft: 6,
  },
  reviewIcon: {
    width: 24,
    height: 24,
  },
  reviewTitleText: {
    color: '#ffffff',
    fontSize: 14,
    height: 24,
  },
  reviewRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.04,
    flexWrap: 'wrap',
  },
  noReviews: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.1,
    flex: 1,
  },
  reviewImage:{
    width: width * 0.35 - 24,
    height: height * 0.1,
    borderRadius: 8,
  },
  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 10,
  },
  moreIconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreIcon: {
    width: 24,
    height: 24,
  },
  moretextContainer: {
    marginTop: 6,
  },
  moreText: {
    color: '#ffffff',
    fontSize: 12,
  },
  buttonContainer: {
    marginTop: 20,
  },
  noReviewText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
  },
});

export default styles;