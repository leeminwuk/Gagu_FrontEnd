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
    height: height * 0.06,
    justifyContent: 'center',
    flexDirection: 'column',
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
  selectContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listContainer: {
    height: height * 0.2,
  },
  listItem: { 
    paddingVertical: 10, 
  },
  selectText: {
    color: '#d7d7d7',
    fontSize: 14,
    fontWeight: '700',
  },
  slideImage: {
    width: 16,
    height: 10,
    resizeMode: 'contain',
  },
});
export default styles;