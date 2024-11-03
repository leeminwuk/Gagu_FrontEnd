import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#191919',
    flexDirection: 'row',
    alignItems: 'center', 
  },
  backbuttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  titleContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  hamburgerbarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburgerbar: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default styles;