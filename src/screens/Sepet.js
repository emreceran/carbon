import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import SvgSearch from '../../assets/svgs/searchicon'
import SvgBarkod from '../../assets/svgs/barkodicon'
import Carbonicon from '../../assets/svgs/carbon'
import Detay from '../screens/detay'
import styles from '../styles/stsepet'


 







export default class Sepet extends React.Component {

  
  

 

   

    render() {  
    
  
              
      return (
        
    <SafeAreaView style={styles.container}>
      <View style={styles.sepetyazicont}>
        <Text style={styles.sepetyazi}>
          Sepet
        </Text>
      </View>

      <View style={styles.uruncont}>
        <View style={styles.urunimgcont}>
          <Image source={require('../../assets/haplar/Amoklavin.png')}
          style={styles.urunimg} />
        </View>
        <View style={styles.urunrowscont}>
          <View style={styles.urunrow1cont}>
          <Text style={styles.urunfirmaadi}> DEVA </Text>
          </View>

          <View style={styles.urunrow2cont}>
          <Text style={styles.urunilacadi}>Amoklavin BID 1000 mg 14 tablet </Text>
          </View>

          <View style={styles.urunrow3cont}>
            <View style={styles.urunfiyatcont1}>
              <Text style={styles.urunkosulbilgi}>50+25 </Text>            
            </View>

            <View style={styles.urunfiyatcont2}>
              <Text style={styles.urunfiyatbilgi}>470.00 TL</Text>            
            </View>
            <View style={styles.silcont}>
            <Text style={styles.silyazi}>
              Sil
            </Text>
            </View>

            
          </View>
          
          
        </View>
        <View style={styles.uyaricont}>
          <Text style={styles.uyariyazi}>
            SON 1 SAAT
          </Text>
        </View>
      </View>
      
      <View style={styles.uruncont}>
        <View style={styles.urunimgcont}>
          <Image source={require('../../assets/haplar/silvardin.jpg')}
          style={styles.urunimg} />
        </View>
        <View style={styles.urunrowscont}>
          <View style={styles.urunrow1cont}>
          <Text style={styles.urunfirmaadi}> DEVA </Text>
          </View>

          <View style={styles.urunrow2cont}>
          <Text style={styles.urunilacadi}>Silverdin 40 G Krem </Text>
          </View>

          <View style={styles.urunrow3cont}>
            <View style={styles.urunfiyatcont1}>
              <Text style={styles.urunkosulbilgi}>100+20</Text>            
            </View>

            <View style={styles.urunfiyatcont2}>
              <Text style={styles.urunfiyatbilgi}>950.90 TL</Text>            
            </View>
            <View style={styles.silcont}>
            <Text style={styles.silyazi}>
              Sil
            </Text>
            </View>

            
          </View>
          
          
        </View>
        <View style={styles.uyaricont}>
          <Text style={styles.uyariyazi}>
            SON 1 SAAT
          </Text>
        </View>
      </View>


      <View style={styles.uruncont}>
        <View style={styles.urunimgcont}>
          <Image source={require('../../assets/haplar/apranax.jpg')}
          style={styles.urunimg} />
        </View>
        <View style={styles.urunrowscont}>
          <View style={styles.urunrow1cont}>
          <Text style={styles.urunfirmaadi}> DEVA </Text>
          </View>

          <View style={styles.urunrow2cont}>
          <Text style={styles.urunilacadi}>Apranax Fort 10 Tablet 550 mg</Text>
          </View>

          <View style={styles.urunrow3cont}>
            <View style={styles.urunfiyatcont1}>
              <Text style={styles.urunkosulbilgi}>50+5</Text>            
            </View>

            <View style={styles.urunfiyatcont2}>
              <Text style={styles.urunfiyatbilgi}>340.50 TL</Text>            
            </View>
            <View style={styles.silcont}>
            <Text style={styles.silyazi}>
              Sil
            </Text>
            </View>

            
          </View>
          
          
        </View>
        <View style={[styles.uyaricont, {backgroundColor: '#ffd020'}]}>
          <Text style={styles.uyariyazi}>
            SON 1 SAAT
          </Text>
        </View>
      </View>

      <View style={styles.sontoplamcont}>
        <Text style={styles.geneltoplamyazi}> Genel toplam </Text>
        <Text style={styles.sonfiyat}>1.761,40 TL</Text>

        <TouchableOpacity style={styles.buttoncont}
        onPress={() =>
          this.props.navigation.navigate('Siparisozeti')
        }
        >
          <Text style={styles.buttonyazi}>
          Devam et
          </Text>
        </TouchableOpacity>
      </View>
        
    </SafeAreaView>
  );
}
}



const styles1 = StyleSheet.create({

  container: {
    flex: 1,   
    backgroundColor: "#fafbff",
    paddingTop: Platform.OS === 'android' ? 25 : 0,  
  },
    
    sepetyazicont : {
      marginLeft: 15,
      marginTop: 15,

    },

    sepetyazi : {
      fontSize: 24,
      fontWeight: "900",
      fontStyle: "normal",
      letterSpacing: 0,
      color: "#364351"

    },

    uruncont : {
      width: 345,
      height: 128,
      borderRadius: 10,
      backgroundColor: "#ffffff",
      shadowColor: "rgba(214, 221, 244, 0.8)",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 15,
      shadowOpacity: 1

    },

    urunimgcont : {

    },

    urunrowscont :{

    },

    urunrow1cont: {

    },

    urunrow2cont: {

    },

    urunrow3cont: {

    },

})

