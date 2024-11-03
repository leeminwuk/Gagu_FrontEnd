import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  fixedContainer: {
    height: height * 0.6,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  lightImage: {
    width: 250,
    height: 150,
  },
  animationImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});

export default styles;