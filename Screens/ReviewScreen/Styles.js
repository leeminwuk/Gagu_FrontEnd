import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#191919',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleTextContainer: {
    flex: 1,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  starImage: {
    width: 20,
    height: 20,
  },
  ratingTextContainer: {
    justifyContent: 'center',
  },
  ratingText: {
    color: '#ffffff',
    fontSize: 16,
  },
  reviewScrollView: {
    flex: 1,
  },
  reviewContainer: {
    flex: 1,
    gap: height * 0.03,
  },
  reviewButtonContainer: {
    marginTop: 16,
  },
});

export default styles;