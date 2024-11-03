import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    width: width * 0.8,
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  modelView: {
    width: width * 0.8,
    height: height * 0.4,
    backgroundColor: 'transparent',
  },
  layoutText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#ffffff',
    fontSize: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  ovalContainer: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: (width * 0.4) / 2,
    borderColor: '#ffffff',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scaleX: 2}],
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  textContainer: {
    marginBottom: 10,
    zIndex: 2,
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
