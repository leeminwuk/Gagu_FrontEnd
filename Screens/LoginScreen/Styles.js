import { StyleSheet } from 'react-native';
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textContainer: {
        flex: 1,
        marginLeft: 42,
      },
      backgroundImage: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
      },
      singupText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#ffffff',
        marginTop: 180,
      },
      sideText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        marginTop: 14,
        letterSpacing: -0.5,
      },
      sideTextBox: {
        marginTop: 40,
      },
      shopButton: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      shopText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ffffff',
      },
    });
export default styles;