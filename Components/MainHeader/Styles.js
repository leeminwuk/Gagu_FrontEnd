import { StyleSheet, Dimensions} from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({ 
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        zIndex: 100,
    },
    logoContainer:{
        alignItems: 'center',
    },
    miniLogo:{
        width: 120,
        height: 32,
        marginTop: 10,
    },
    headerText:{
        marginTop: 8,
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
    },
    profileContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: width * 0.03,
    },
    nicknameText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    profileImage:{
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'contain',
    },
});

export default styles;