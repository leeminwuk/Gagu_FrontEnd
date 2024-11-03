import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  mainText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
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
  textInputBox: {
    marginTop: height * 0.3,
  },
  textInputContainer: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.86,
    height: height * 0.07,
    backgroundColor: '#303030',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  
  textInput: {
    color: 'white',
    fontSize: 16,
  },
  miniImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#10A37F",
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  miniImage: {
    width: 18,
    height: 18,
  },
  hintText: {
    color: '#969696',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#969696',
  },
});

export default styles;