import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#191919',
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: '#191919',
  },
  title: {
    marginVertical: height * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: height * 0.02,
  },
  starImage: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  ratingText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  inputContainer: {
    marginVertical: height * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    color: '#ffffff',
    padding: 14,
    borderRadius: 5,
    paddingTop: 10,
  },
  textArea: {
    height: height * 0.2,
    textAlignVertical: 'top',
  },
  photoSelectContainer: {
    marginVertical: height * 0.02,
  },
  photoTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoTitleText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
  photoSubTitleText: {
    color: '#707070',
    fontSize: 12,
    marginLeft: 10,
    fontWeight: '400',
  },
  photoSelect: {
    flexDirection: 'row',
    gap: width * 0.03,
    marginTop: height * 0.03,
  },

  buttonContainer: {
    marginVertical: height * 0.05,
    gap: height * 0.02,
  },
});

export default styles;
