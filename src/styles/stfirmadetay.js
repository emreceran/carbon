import { StyleSheet, Platform, Vibration } from 'react-native';
import {scale, verticalScale, moderateScale} from "../../scale"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fafbff",
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    searchcontainer :{
        width: scale(325),
        height: verticalScale(50),
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(185, 198, 238, 0.4)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        marginTop: verticalScale(20),
        marginHorizontal: scale(20),
        
        alignItems: "center",
        
       

    },
    backicon : {
        
        marginLeft: scale(16),

    },

    aramaplaceholder : {
        fontSize: moderateScale(14),
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#333d47",
        marginLeft: scale(18),

        

    },

    barkodicon : {
        position: "absolute",
        top: verticalScale(17),
        right: scale(16),

    },

    

    firmabilgicont : {
        marginLeft: scale(25),
        marginTop: verticalScale(25),
        
        

    },

    firmabilgustcont : {
        flexDirection: "row",
        
        

    },

    firmaimgcont : {
        width: scale(90),
        height: verticalScale(60),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: "center",        

    },

    firmaimg : {
        width: scale(80),
        height: verticalScale(50),
        resizeMode: "stretch",

    },

    firmaisism: {
        width: scale(215),
        fontSize: moderateScale(24),
        fontWeight: "700",
        fontStyle: "normal",
        letterSpacing: -1,
        color: "#364351",
        marginLeft: scale(20),
        
        

    },
    
    firmabilgirow : {
        width: '100%',
        
        flexDirection: "row",
        

    },

    firmarowsolcont : {
        width:scale(90),
        height: verticalScale(20),
        
        flexDirection: "row",
        justifyContent: "space-between",

    },

    firmarowsagcont : {

        width:scale(215),
        marginLeft: scale(25),
        
       


    },

    firmarowyazisi: {
        fontSize: moderateScale(16),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#333d47",
        flexWrap: "wrap",

    },

    urunlercont: {
        width: scale(325),
        marginLeft: scale(25),
        marginTop: verticalScale(25),

    },

    urunlerustbaslikcont : {
        marginBottom: verticalScale(12),

    },

    urunlerustbaslik : {
        fontSize: moderateScale(16),
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#b5bdd9"

    },

    urunlerbaslikrow : {
        marginTop: verticalScale(13),
        backgroundColor: 'transparent'

    },

    urunlerbaslik : {
        fontSize: moderateScale(24),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#b5bdd9",

    },

    urunlerrow: {
        marginTop: verticalScale(10),
        width: '100%',
        height: verticalScale(51),
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(214, 221, 244, 0.8)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 15,
        shadowOpacity: 1,
        
        justifyContent: "center",

    },

    urunleryazi : {
        marginLeft: scale(15),
        fontSize: moderateScale(16),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#333d47"

    },





    
    
});

export default styles;