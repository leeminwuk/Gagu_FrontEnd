import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#191919',
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: '#191919',
  },
  title: {
    marginVertical: height * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImage: {
    width: 24,
    height: 24,
  },
  ratingText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
  starContainer: {
    marginRight: 5,
  },
  ratingTextContainer: {
    marginLeft: 5,
  },
  reviewContainer: {
    backgroundColor: '#303030',
    height: height * 0.3,
    borderRadius: 20,
    padding: 24,
  },
  reviewTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  profileText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 10,
  },
  reviewRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewStarContainer: {
    flexDirection: 'row',
  },
  reviewStarImage: {
    marginHorizontal: 1,
    width: 10,
    height: 10,
  },
  reviewDateContainer: {
    marginLeft: 10,
  },
  reviewDateText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },
  reviewDetailContainer: {
    marginTop: height * 0.02,
  },
  reviewCommentContainer: {},
  commentText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },
  reviewImageContainer: {
    marginTop: height * 0.055,
    flexDirection: 'row',
  },
  reviewImage: {
    marginRight: 10,
    width: 80,
    height: 80,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  },
  modalComment: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
  },
});

export default styles;