import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    paymentRequestMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 10,
        width: width * 0.65,
        maxWidth: '80%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 2,
      },
      paymentTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      logoImage: {
        width: 44,
        height: 14,
        resizeMode: 'contain',
      },
      paymentRequestText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#000000',
        lineHeight: 20,
        letterSpacing: -0.5,
      },
      productContainer: {
        marginTop: 10,
        flexDirection: 'row',
        width: width * 0.55,
        height: height * 0.15,
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
      },
      productInfoContainer: {
        flexDirection: 'column',
      },
      paymentButton: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
      },
      paymentButtonText: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '400',
        alignSelf: 'center',
      },
      cancelButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
      },
      cancelButtonText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '400',
        alignSelf: 'center',
      },
      productImage: {
        width: 70,
        height: 110,
        resizeMode: 'contain',
      },
      productName: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 12,
        color: '#000000',
      },
      productDate: {
        fontSize: 10,
        fontWeight: '400',
        marginTop: 4,
        color: '#575757',
      },
      productPrice: {
        fontSize: 22,
        marginTop: 14,
        color: '#494949',
        fontWeight: '600',
      },
});
export default styles;