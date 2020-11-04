import {StyleSheet} from 'react-native'
import { moderateScale, scale, verticalScale } from '../../scale'
import {vw, vh} from 'react-native-viewport-units';

const styles = StyleSheet.create({

  container: {
    flex: 1,   
    backgroundColor: "#fafbff",
    paddingTop: Platform.OS === 'android' ? 25 : 0,  
  },
    
  sayfabaslik : {
    fontSize: moderateScale(24),
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#364351",
    marginTop: verticalScale(15),
    marginLeft: scale(15),


  },

  urunleryazisi : {

    fontSize: moderateScale(16),
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#74717e",
    marginTop: verticalScale(35),
    marginLeft: scale(15),
    

  },

  sipariscont : {
   
    
    marginTop: verticalScale(20),
    marginLeft: scale(15),
    marginRight: scale(15),
   

  },

  sipustcont :{
   
    

  },

  firmaisim : {
    fontSize: moderateScale(10),
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#333d47"

  },

  

  


  sipaltcont : {
    flexDirection: "row",
    marginTop: verticalScale(5),

  },

  ilacvesart: {
    flex:215,
    fontSize: moderateScale(14),
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: -0.25,
    color: "#232b38",
    marginTop: verticalScale(5),

},

  toplamtuttar : {
    flex: 130,
    fontSize: moderateScale(14),
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#333d47"

  },

  gonderimcont : {
    marginHorizontal: scale(15),
    marginTop: verticalScale(45)

  },

  gonderimustcont: {
    flexDirection: "row",
    justifyContent: "space-between",

  },

  

  gonderimbaslik : {

    fontSize: 16,
  fontWeight: "600",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#74717e"

  },

  digersecyazi:{
    fontSize: 14,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "right",
  color: '#5f80ee',

  },

  gonderimaltcont: {

    flexDirection: "row",
    marginTop: verticalScale(20),

  },

  depocont: {
    width: scale(99),
  height: verticalScale(106),
  borderRadius: 10,
  backgroundColor: "#ffffff",
  shadowColor: "rgba(185, 198, 238, 0.8)",
  shadowOffset: {
    width: 0,
    height: 5
  },
  shadowRadius: 15,
  shadowOpacity: 1,
  borderStyle: "solid",
  borderWidth: 2,
  borderColor: '#5f80ee',
  marginRight: scale(15),

 
  alignItems: "center",

  },


  depoimgcont: {
   

  },

  depoimg: {
    width: scale(52),
    height: verticalScale(50),
    marginTop: verticalScale(10),
    

  },

  depoisim :{
    fontSize: moderateScale(11),
    
  fontWeight: "700",
  fontStyle: "normal",
  letterSpacing: -0.25,
  textAlign: "center",
  color: "#333d47",
  position: "absolute",
  bottom: verticalScale(10),
  maxWidth: scale(60),
  lineHeight: 15

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