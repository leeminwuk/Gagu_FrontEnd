import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  fixedContainer: {
    height: height * 0.8,
  },
  mainText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;