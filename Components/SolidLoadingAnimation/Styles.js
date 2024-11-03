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
    alignSelf: 'center',
    marginTop: 100,
},
  solidImage: {
    width: width * 0.8,
    height: height * 0.4,
  },
});

export default styles;