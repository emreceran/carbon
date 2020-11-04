import {StyleSheet} from 'react-native'
import { moderateScale, scale, verticalScale } from '../../scale'
import {vw, vh} from 'react-native-viewport-units';

const styles = StyleSheet.create({

  container: {
    flex: 1,   
    backgroundColor: "#fafbff",
    paddingTop: Platform.OS === 'android' ? 25 : 0,  
  },
    
  
  tebriklercont : {
    marginTop: verticalScale(44),
    marginLeft: scale(25),
    flexDirection: "row",

  },

  confeticont : {


  },

  confetiimg : {
    

  },

  tebriklersagcont: {
    marginLeft: scale(18),

  },

  tebrikustyazi :{
    fontSize: moderateScale(24),
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#364351",


  },

  tebrikaltyazi : {
    fontSize: moderateScale(17),
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#74717e",
    marginTop: verticalScale(5),

  },

  siparislerimyazi : {
    fontSize: moderateScale(16),
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#74717e",
    marginLeft:scale(15),
    marginTop: verticalScale(35),

  },

  siparislercont : {
    width: scale(345),
    
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(214, 221, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 15,
    shadowOpacity: 1,
    marginTop: verticalScale(20),
    marginLeft: scale(15)



  },

  siparislerrow : {
    marginLeft: scale(15),
    marginTop: verticalScale(15),
    marginBottom: verticalScale(8),


  },

  siparislerfirma : {
    fontSize: 10,
  fontWeight: "600",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#333d47"

  },

  siparislerilac : {
    fontSize: 14,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#333d47",
  marginTop: verticalScale(5),

  } ,

  depobaslik : {
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#74717e",
    marginTop: verticalScale(35),
    marginLeft: scale(15),

  },

  depocont : {

    width: 345,
  height: 66,
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
  alignItems: "center",
  marginTop: verticalScale(20),
  marginLeft: scale(15)

  },

  depoyazi : {

    fontSize: moderateScale(14),
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#232b38"

  },

  anabuttoncont : {
    width: scale(345),
  height: verticalScale(50),
  borderRadius: 25,
  backgroundColor: '#4f60e5',
  position: "absolute",
  bottom: verticalScale(30),
  alignSelf: "center",
  justifyContent: "center",

  },

  anabuttonyazi : {
    fontSize: 15,
  fontWeight: "900",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#ffffff"

  },







    

})

export default styles;