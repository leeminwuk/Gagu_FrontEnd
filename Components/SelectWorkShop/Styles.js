import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.887,
    height: height * 0.2,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  workshopName: {
    fontSize: 30,
    fontWeight: '900',
    color: '#ffffff',
  },
  workshopLocation: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
  },
  icon:{
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
});

export default styles;
