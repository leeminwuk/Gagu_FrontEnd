import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  reviewContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.2,
  },
  reviewBox: {
    backgroundColor: 'rgba(133, 133, 133, 0.12)',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
    width: width * 0.35,
    height: height * 0.2,
  },
  reviewimageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c5c5c',
    borderRadius: 8,
    width: width * 0.35 - 24,
    height: height * 0.1,
  },
  reviewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  reviewtextContainer: {
    marginTop: 12,
  },
  reviewText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default styles;