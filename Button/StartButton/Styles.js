import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  startButton: {
    width: width * 0.887,
    height: 52,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    flexDirection: 'row',
  },
  startText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000000',
    marginLeft: 32,
  },
  startButtonEnd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
    arrowImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
  rightArrow: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  idText:{
    fontWeight: "bold",
    fontSize: 14,
    color: "#ffffff",
    marginLeft: 32,
  },
  personImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    
  },
  person: {
    width: 24,
    height: 24,
  },
  immediatelyButton: {
    width: width * 0.887,
    height: 52,
    backgroundColor: '#8f8f8f',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    flexDirection: 'row',
    opacity: 0.2,
    zIndex: -1,
  },
  immediatelyButtonEnd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;