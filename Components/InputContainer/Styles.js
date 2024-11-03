import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  input: {
    width: width * 0.887,
    height: height * 0.07,
    borderRadius: 6,
    borderColor: '#383838',
    borderWidth: 1,
    paddingHorizontal: 16,
    color: '#878787',
    fontSize: 16,
    fontWeight: '400',
  },
  titleText: {
    color: '#d9d9d9',
    fontSize: 16,
    fontWeight: '600',
  },
  editingInput: {
    borderColor: '#5884E8',
    borderWidth: 1,
  },
  invalidInput: {
    borderColor: '#FF9696',
  },
});
export default styles;
