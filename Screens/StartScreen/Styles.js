import { StyleSheet ,Dimensions} from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: height * 0.45,
  },
  logoBox: {
    marginTop: height * 0.1,
    alignItems: 'center',
    
  },
  logoImage: {
    width: width * 0.6,
    height: 60,
    marginTop: height * 0.1,
  },
  sideText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 14,
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
});
export default styles;