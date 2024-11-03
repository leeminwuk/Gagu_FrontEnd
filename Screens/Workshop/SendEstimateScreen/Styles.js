import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#191919',
  },
  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: '#191919',
  },
  contentContainer: {
    justifyContent: 'center',
    gap: height * 0.036,
  },
  estimateContainer: {
    gap: height * 0.0144,
  },
  estimateTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02, 
  },
  titleIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  estimateTextContainer: {
  },
  estimateText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight:'600',
  },
  estimateInputContainer: {
    backgroundColor: '#303030',
    borderRadius: 5,
    padding: 16,
    flexDirection: 'row',
    gap: width * 0.036,
  },
  wonIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  estimateInput: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight:'700',
  },
  multilineInput: {
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  errorBorder: {
    borderColor: '#FF9696',
    borderWidth: 1,
  },
});
export default styles;
