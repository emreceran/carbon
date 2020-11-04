import { StyleSheet, Platform, Vibration } from 'react-native';
import {scale, verticalScale, moderateScale} from "../../scale"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fafbff",
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },

    navheader : {
        backgroundColor: 'gray',
        height: 45,
        width: '100%',
        

    },

    uyaricont : {
        width: 94,
        height: 25,
        borderRadius: 7,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        backgroundColor: "#ff5d92",
        marginTop:'2.2%',
        marginLeft: '4%',
    },

    uyari : {
        
        fontSize: moderateScale(10),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff",
        marginTop:6,

    },

    ilacbilgicontainer : {
        height: 100,
        width: '100%',
        flexDirection: "row",
        
        marginTop:30,
        


    },

    ilacfotocont : {
        
        width:94,
        height:72,
        marginLeft:15,
        
        
        

    },

    ilacfoto : {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain",
        
    },

    ilacsagcont :{
        width: 231,
        height: '100%',
        
        

    },

    firmabilgi : {
        fontSize: moderateScale(12),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#b5bdd9"

    },

    ilacisim : {
        fontSize: moderateScale(20),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#364351",
        marginTop: verticalScale(10),
       

    },

    sartlarbaslikcont : {
        marginTop: verticalScale(35),
        marginLeft: scale(15),

    },

    sartlarbaslikustyazi : {
        fontSize: moderateScale(16),
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#333d47"

    },

    sartlarbaslikaltyazi : {
        fontSize: moderateScale(16),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#b5bdd9",
        marginTop: verticalScale(5),

    },

    sartlarkonteynir : {

        flexDirection: "row",
        marginTop: verticalScale(30),
        justifyContent: "center",
        
        

    },

    sartlarkonteynir1 : {

        flexDirection: "row",
        justifyContent: "center",
        

    },
    sartlarbutton : {
        
        width: '42.4%',
        height: verticalScale(40),
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#b5bdd9",
        marginHorizontal: scale(15),
        marginBottom: scale(15),
        alignItems: "center",
        justifyContent: "center",
        
        
         

    },

    sartlarbutton2 : {
        
        width: '42.4%',
        height: verticalScale(40),
        borderRadius: 10,
        backgroundColor: "#6081ee",
        
        marginHorizontal: scale(15),
        marginBottom: scale(15),
        alignItems: "center",
        justifyContent: "center",
        
        
         

    },

    sartlaryazi2 : {
        fontSize: moderateScale(15),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#fff",
        


    },

    sartlaryazi : {
        fontSize: moderateScale(15),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#333d47",
        


    },


    artieksicont : {
        width: '92%',
        flexDirection: "row",
        marginTop: verticalScale(30),
        justifyContent: "center",
        marginLeft: '4%' ,
       

    },

    artieksi : {
        
        height: verticalScale(40),
        
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#5f80ee",
        
        alignItems: "center",
        justifyContent: "center",

    },

    artieksiyazi : {
        fontSize: 20,
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#333d47"

    },

    artieksiyazi1 : {
        fontSize: 16,
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "right",
        color: "#647f9c"

    },


    temsilcibilgicont : {
        
        
        width: scale(345),
        height: verticalScale(113),
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(214, 221, 244, 0.8)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 15,
        shadowOpacity: 1,
        marginTop: verticalScale(30),
        marginHorizontal: scale(15),

    },

    temsilcisolcont : {

    },

    temsilcibaslik: {
        fontSize: moderateScale(12),
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#333d47",
        marginLeft: scale(15),
        marginTop: verticalScale(20),

    },

    temsilcisagcont: {
        flexDirection: "row",

    },


    temsilciisim: {
        width: scale(178),
        fontSize: moderateScale(16),
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#232b38",
        marginLeft: scale(15),
        marginTop: verticalScale(21),


    },

    phone : {
        marginLeft: scale(15),
        marginTop: verticalScale(21),

    },

    whatsapp: {
        marginLeft: scale(20),
        marginTop: verticalScale(21),

    },

    

    

    

    ilacsatisbilgcont : {
        width: '92%',
        
        height: verticalScale(201),
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(214, 221, 244, 0.8)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 15,
        shadowOpacity: 1 ,
        elevation:50,
        marginTop: 50,  
        marginHorizontal: scale(15),     

    },

    ilacsatisbilgbaslik: {
        fontSize: moderateScale(12),
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#333d47",
        
        marginTop: verticalScale(20),

        marginLeft:scale(15),
        marginBottom: verticalScale(7)
    

    },

    ilacsatisbilgisatir : {
       
        
        
        flexDirection: "row",
        marginTop: verticalScale(12),
        marginLeft: scale(15),
        marginRight: scale(15),
        
        
        justifyContent : 'space-between',

    },

    

    ilacsatissol: {
        fontSize: moderateScale(16),
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#232b38"

    },

    ilacsatissag: {
        fontSize: moderateScale(16),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "right",
        color: "#232b38",
        

    },

    sontoplamcont : {
        position: "absolute",
        bottom:10,
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
        flexDirection: "row"

    },

    sontoplamsol : {
        
        width: '50%',
        height: '100%'

    },

    sontoplamsag: {
        
        width: '50%',
        height: '100%'

    },

    sontoplambirimyazi: {
        fontSize: moderateScale(16),
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#b5bdd9",
        marginLeft: scale(16),
        marginTop: verticalScale(17),

    },

    sontoplamyazi : {
        fontSize: moderateScale(20),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#333d47",
        marginTop: verticalScale(5),
        marginLeft: scale(16),

    },

    sepetbutton : {
        width: 170,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#6081ee",
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(16),
        marginRight: scale(16),

    },

    sepetbuttonyazi : {
        fontSize: 16,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#ffffff"

    },


    



        
     

    
});

export default styles;