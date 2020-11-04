import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import SvgSearch from '../../assets/svgs/searchicon'
import SvgBarkod from '../../assets/svgs/barkodicon'
import Carbonicon from '../../assets/svgs/carbon'
import Detay from './detay'
import styles from '../styles/stsiparisozeti'


 







export default class Siparisozeti extends React.Component {

  
  

 

   

    render() {  
    
  
              
      return (
        
    <SafeAreaView style={styles.container}>

    <Text style={styles.sayfabaslik}>Sipariş özeti
    </Text>

    <Text style={styles.urunleryazisi}>
        Ürünler      
    </Text>

    <View style={styles.sipariscont}>
      <View style={styles.sipustcont}>
        <Text style={styles.firmaisim}>DEVA</Text>
             
      </View>
      <View style={styles.sipaltcont}>
      <Text style={styles.ilacvesart}>Amoklavin BID 1000 mg 14 tablet (50+25)</Text> 
          <Text style={styles.toplamtuttar}>470.00 TL</Text>      
      </View>   
    </View>


    <View style={styles.sipariscont}>
      <View style={styles.sipustcont}>
        <Text style={styles.firmaisim}>DEVA</Text>
             
      </View>
      <View style={styles.sipaltcont}>
      <Text style={styles.ilacvesart}>Silverdin 40 G Krem  (100+20))</Text> 
          <Text style={styles.toplamtuttar}>950.90 TL</Text>      
      </View>   
    </View>



    <View style={styles.sipariscont}>
      <View style={styles.sipustcont}>
        <Text style={styles.firmaisim}>ABDİ İBRAHİM</Text>
             
      </View>
      <View style={styles.sipaltcont}>
      <Text style={styles.ilacvesart}>Apranax Fort 10 Tablet 550 mg (50+5)</Text> 
          <Text style={styles.toplamtuttar}>340.50 TL</Text>      
      </View>   
    </View>

    <View style={styles.gonderimcont}>
      <View style={styles.gonderimustcont}>
        <Text style={styles.gonderimbaslik}>Gönderim seçeneği</Text>
        <Text style={styles.digersecyazi}>Diğer depolar ></Text>
           
      </View>
      <View style={styles.gonderimaltcont}>
        <View style={styles.depocont}>
          <Image source={require('../../assets/depolar/istanbulecza.png')} 
          style={styles.depoimg}/>
            <Text style={styles.depoisim}>İstanbul   Ecza Koop</Text>            
        </View>
        

        <View style={[styles.depocont,{borderWidth: 0}]}>
          <Image source={require('../../assets/depolar/alliance.jpg')} 
          style={styles.depoimg}/>
            <Text style={[styles.depoisim,{color: "#b5bdd9"}]}>İAlliance Health Care</Text>            
        </View>

        <View style={[styles.depocont,{borderWidth: 0}]}>
          <Image source={require('../../assets/depolar/selcuk.jpg')} 
          
          style={styles.depoimg}/>
            <Text style={[styles.depoisim,{color: "#b5bdd9"}]}>Selçuk Ecza Deposu</Text>            
        </View>



        
      
    
      </View>
      
    
    </View>
    <View style={styles.sontoplamcont}>
        <Text style={styles.geneltoplamyazi}> Genel toplam </Text>
        <Text style={styles.sonfiyat}>1.761,40 TL</Text>

        <TouchableOpacity style={styles.buttoncont}
        onPress={() =>
          this.props.navigation.navigate('Sepettebrikler')
        }
        >
          <Text style={styles.buttonyazi}>
          Siparişi tamamla
          </Text>
        </TouchableOpacity>
      </View>

    

    
      
        
    </SafeAreaView>
  );
}
}


