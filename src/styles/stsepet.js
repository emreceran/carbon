import {StyleSheet} from 'react-native'
import { moderateScale, scale, verticalScale } from '../../scale'
import {vw, vh} from 'react-native-viewport-units';

const styles = StyleSheet.create({

  container: {
    flex: 1,   
    backgroundColor: "#fafbff",
    paddingTop: Platform.OS === 'android' ? 25 : 0,  
  },
    
    sepetyazicont : {
      marginLeft: scale(15),
      marginTop: verticalScale(15),
      marginBottom: verticalScale(20),

    },

    sepetyazi : {
      fontSize: moderateScale(26),
      fontWeight: "900",
      fontStyle: "normal",
      letterSpacing: 0,
      color: "#364351"

    },

    uruncont : {
      
      width: scale(345),
      height: verticalScale(128),
     
      borderRadius: 10,
      backgroundColor: "#ffffff",
      shadowColor: "rgba(214, 221, 244, 0.8)",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 15,
      shadowOpacity: 1,
      marginLeft: scale(15),
      marginTop: verticalScale(15),
      flexDirection: "row",

    },

    urunimgcont : {

      flex:80,


    },

    urunimg : {
      width: scale(55),
      height: verticalScale(55),
      marginLeft: scale(15),
      marginTop: verticalScale(15),
      resizeMode: "contain",
     


    },

    urunrowscont :{
      flexDirection: "column",
      marginLeft: scale(10),
      flex: 265,
      height: '100%',

    },

    urunrow1cont: {
      marginTop: verticalScale(25),
      
      
      

    },

    urunfirmaadi: {
      fontSize: moderateScale(10),
      fontWeight: "800",
      fontStyle: "normal",
      letterSpacing: 0,
      color: "#333d47",
      
    },

    urunrow2cont: {
      marginTop: verticalScale(5),

    },

    

    urunilacadi : {
      width: scale(200),
      fontSize: moderateScale(16),
      fontWeight: "800",
      fontStyle: "normal",
      letterSpacing: -0.25,
      color: "#333d47",
      lineHeight: 30,
      
      
      

    },

    urunrow3cont: {
      
      flexDirection: "row",
      width: '100%',
      position: "absolute",
      bottom: verticalScale(18),
      

    },
    urunfiyatcont1: {
      width: scale(61.5),
      
      
      
      borderStyle: "solid",
      borderRightWidth: 1,
      borderColor: '#b5bdd9',

    },

    urunkosulbilgi : {
      
      fontSize: moderateScale(16),
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      color: "#74717e", 

    },

    urunfiyatcont2 : {
      

    },

    urunfiyatbilgi : {
      fontSize: moderateScale(16),
      fontWeight: "900",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
      color: "#74717e",
      marginLeft: scale(10.5),
      

    },

    silcont : {
      position: "absolute",
      
      right: scale(15),
      marginBottom: verticalScale(8),

    },

    silyazi : {
      fontSize: moderateScale(16),
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "right",
      color: "#b5bdd9"
      

    },

    uyaricont : {
      width: scale(85),
      height: verticalScale(25),
      borderRadius:7,
      
      backgroundColor: "#ff5d92",
      position: "absolute",
      top: verticalScale(10),
      right: scale(15),
      borderBottomStartRadius: 30,
      borderBottomEndRadius: 30,
      


    },

    uyariyazi : {

      fontSize: moderateScale(10),
      fontWeight: "900",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",
      color: "#ffffff",
      marginTop: verticalScale(6),

    },

    sontoplamcont : {
      width: '100%',
      height: verticalScale(82),
      backgroundColor: "#ffffff",
      shadowColor: "rgba(214, 221, 244, 0.8)",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 15,
      shadowOpacity: 1,
      position: "absolute",
      bottom: 0,

    },

    geneltoplamyazi:{
      fontSize: moderateScale(16),
      fontWeight: "600",
      fontStyle: "normal",
      letterSpacing: 0,
      color: "#b5bdd9",
      marginLeft: scale(16),
      marginTop: verticalScale(17),

    },

    sonfiyat :{
      fontSize: 20,
      fontWeight: "900",
      fontStyle: "normal",
      letterSpacing: 0,
      color: "#333d47",
      marginLeft: scale(16),
      marginTop: verticalScale(5),
      
    },

    buttoncont: {
      width: scale(170),
      height: verticalScale(50),
      borderRadius: 25,
      backgroundColor: "#6081ee",
      position: "absolute",
      right: scale(16),
      top: verticalScale(16),
      justifyContent: "center",
      alignItems: "center",

    },

    buttonyazi : {
      fontSize: moderateScale(16),
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",
      color: "#ffffff"


    },



    

})

export default styles;