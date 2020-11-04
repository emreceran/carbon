import {StyleSheet} from 'react-native'
import { moderateScale, scale, verticalScale } from '../../scale'

const styles = StyleSheet.create({

  container: {
    flex: 1,    
    backgroundColor: "#fafbff",
    paddingTop: Platform.OS === 'android' ? 25 : 0,    
  },

  bildirimleryazisi: {
    fontSize: 24,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#333d47",
    marginTop: verticalScale(20),
    marginLeft    : scale(25),
    marginBottom: verticalScale(10),

  },

  bilcont :{

    width: scale(325),
    height: verticalScale(120),
 
  borderRadius: 10,
  backgroundColor: "#ffffff",
  shadowColor: "rgba(214, 221, 244, 0.8)",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowRadius: 15,
  shadowOpacity: 1,
  marginHorizontal: scale(25),
  marginTop: verticalScale(10),
  flexDirection: "row",

  },

  bilsolcont : {
    flex: 80,

  },

  bilimg: {
    width: 55,
    height: 55,
    marginTop: verticalScale(15),
    marginLeft: scale(15),  

  },

  bilsagcont : {
    flex:245,

  },

  bilfirma: {
    fontSize: 10,
  fontWeight: "600",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#333d47",
  marginTop: verticalScale(25),

  },

  bililac : {
    fontSize: 14,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#333d47",
  marginTop: verticalScale(5),
  marginRight: scale(15),


  },

  bilaltcont : {
    flexDirection: "row",
    position: "absolute",
    bottom: verticalScale(10),
    width: scale(140),

  },

  bilsartcont  : {
    
    
    
    borderRadius: 10,
    backgroundColor: "#b5bdd9",
    marginBottom: verticalScale(10),

    

  },

  bilsartyazi : {
    fontSize: 14,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
    marginHorizontal: scale(15),
    marginVertical: verticalScale(5)

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





})

export default styles;