import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#191919',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backbuttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  backButton: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  titleContainer: {
    justifyContent: 'center',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.03,
  },
  nicknameText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
});

export default styles;