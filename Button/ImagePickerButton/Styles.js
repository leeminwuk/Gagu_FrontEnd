import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    workshopimageContainer: {
        marginTop: 10,
        width: width * 0.89,
        height: height * 0.25,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
      },
      cameraImage: {
        width: 40,
        height: 40,
      },
      profileImage:{
        width: width * 0.88,
        height: height * 0.245,
        borderRadius: 6,
      },
});
export default styles;