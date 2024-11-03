import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    requestButton: {
        backgroundColor: '#dedede',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        gap: width * 0.02,
      },
      requestButtonText: {
        color: '#585858',
        fontSize: 10,
        fontWeight: '600',
        alignSelf: 'center',
      },
      requestImage: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
      },
});
export default styles;