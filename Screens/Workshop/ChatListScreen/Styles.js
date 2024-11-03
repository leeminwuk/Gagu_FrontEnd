import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 22,
  },
  chatListContainer: {
    flex: 1,
    backgroundColor: '#303030',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 20,
  },
  nameContainer: {
    marginLeft: width * 0.05,
    gap: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  nameText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  messageText: {
    color: '#aeaeae',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  timecountContainer: {
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  timeContainer: {
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  messageCountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E94242',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  messageCountText: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
  },
});

export default styles;