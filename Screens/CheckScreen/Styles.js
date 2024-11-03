import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  fixedContainer: {},
  textContainer: {
    marginBottom: 10,
  },
  mainText: {
    color: 'white',
    fontSize: 26,
    fontWeight: '900',
  },
  imageBox: {
    alignItems: 'center',
    backgroundColor: '#2D2D2D', 
    borderRadius: 20,
    padding: 20,
    marginVertical: 20, 
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chairImage: {
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 10, 
  },
  buttonContainer: {
    marginTop: 40,
    backgroundColor: '#191919',
  },
});

export default styles;