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
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: height * 0.02,
  },
  subtitle: {
    color: '#9CA6AE',
    fontSize: 14,
    marginBottom: height * 0.02,
  },
  contentContainer: {
    justifyContent: 'center',
    gap: height * 0.0144,
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
  estimateTextContainer: {},
  estimateText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  estimateInputContainer: {
    backgroundColor: '#303030',
    borderRadius: 5,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: '700',
  },
  descriptionContainer: {
    gap: height * 0.0144,
  },
  descriptionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
  },
  descriptionInputContainer: {
    backgroundColor: '#303030',
    borderRadius: 5,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.036,
  },
  descriptionIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  descriptionInput: {
    color: '#ffffff',
    fontSize: 14,
    flex: 1,
    height: height * 0.2,
    fontWeight: '700',
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
