import { StyleSheet, Platform } from 'react-native';
import {scale, verticalScale, moderateScale} from "../../scale"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: "#fafbff",
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        
        
        
      },
    searchcontainer :{
        width: scale(325) ,
        height: verticalScale(50),
        flexDirection: "row",
        marginHorizontal: scale(25),     
        marginTop:verticalScale(20),
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(185, 198, 238, 0.4)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        alignItems:"center",
       
        
        

    },
    aramaicon : {
       
        marginLeft: scale(16),

    },

    aramaplaceholder : {
        fontSize: moderateScale(20),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#b5bdd9",
        overflow: "hidden",
        
        marginLeft: scale(15),

        

    },

    barkodicon : {
        position: "absolute",
        
        right: scale(16),

    },

    baslikcontainer: {
        
        marginLeft: scale(25),
        marginTop:verticalScale(25),
        shadowColor: "rgba(185, 198, 238, 0.4)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        


    },

    baslik : {
      
      
      fontSize: moderateScale(24),
      fontWeight: "900",
      fontStyle: "normal",
      letterSpacing: 0,
      color: "#333d47"

    },

    horizontalcontainer : {
        
        width: "100%", 
       paddingVertical:10,
        flexDirection: "row",
        marginLeft: scale(25),
        marginTop: verticalScale(30),
        
        
        
        
        },
    carbonicon : {
        
        marginTop:22

    },
    
    seninicinyazi : {
        fontSize: 11,
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#333d47",
        
        marginHorizontal:10,
        marginTop:10,

    },

    horizonliste : {
         
        overflow: "visible",   


    },

    horizontalitems: {
        width: scale(95),
        height: verticalScale(90),
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "#f1f2f7",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1,        
         
        alignContent: "center",
        alignItems: "center",
        borderColor: '#5f80ee',
        
        
        
        marginLeft: scale(8),
        
       
    },
    

    uyaricont : {
        width: '89.5%',
        height:25,
        backgroundColor: 'pink',
        
       
        borderRadius: 10,
        overflow: "hidden",
        borderBottomEndRadius: 30,
        borderBottomStartRadius:30,

    },

    horizontuyari : {
        
        
        
        
        
       
        textAlign: 'center',
        fontSize: moderateScale(10),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff",
        
        paddingTop: scale(6),
        paddingBottom: scale(7),
       
       

    },

    horizontimage : {
        height:"31%",
        width:"33%",
        marginTop: verticalScale(8),
        
        
    },

    horizontfirmaisim : {
        fontSize: 11,
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#b5bdd9",
        marginTop: 4,
                              

    },
     

     verticalcontainer : {
        
       
       
        
        marginLeft: scale(25),
        flexDirection: "row",
        
        
        
        
       

     },

     
     
     verticalitems: {
        width: scale(159),
        flexDirection: "column",
        
        
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "#f1f2f7",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1,        
              
        marginTop:verticalScale(8),
        

     },

     verticalimage : {
        width:88,
        height:88,
        marginHorizontal: '25%',
        marginTop: 25,
     },

    verticalfirma: {
        
        fontSize: moderateScale(11),
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#74717e",
        marginTop:verticalScale(19),
        
        marginLeft:scale(13),
        

    },

    verticalilacadi : {

        fontSize: moderateScale(15),
        fontWeight: "800",
        fontStyle: "normal",
        letterSpacing: -0.5,
        color: "#333d47",
        marginTop: verticalScale(7),
        marginHorizontal:scale(13),
       
      

    },

    verticalodeme : {
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#333d47",
        marginVertical: verticalScale(11),
        marginLeft:scale(13),
        
      },

    
});

export default styles;