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
  rotateContainer: {
    width: 100,
    height: 30,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 2,
    flexDirection: 'row',
  },
  rotateButton: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
  rotateText: {
    color: 'white',
    fontSize: 10,
    marginLeft: 6,
  },
});
export default styles;