import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import SvgSearch from '../../assets/svgs/searchicon'
import SvgBarkod from '../../assets/svgs/barkodicon'
import Carbonicon from '../../assets/svgs/carbon'
import Detay from './detay'
import styles from '../styles/stsepettebrikler'
import Svgconfeti from '../../assets/svgs/confetti'
import { scale, verticalScale, moderateScale } from '../../scale';


 







export default class Sepettebrikler extends React.Component {

  
  

 

   

    render() {  
    
  
              
      return (
        
    <SafeAreaView style={styles.container}>

    <View style={styles.tebriklercont}>
      <View style={styles.confeticont}>
        <Svgconfeti  width={scale(83.4)} height = { verticalScale(78)} />      
    </View>
    <View style={styles.tebriklersagcont}>

      <Text style={styles.tebrikustyazi}>Tebrikler</Text>
      <Text style={styles.tebrikaltyazi}>Talebiniz başarıyla oluşturuldu</Text>

      
    </View>


    </View>
    <Text style={styles.siparislerimyazi}>
      Siparişlerim
    </Text>

    <View style={styles.siparislercont}>
      <View style={styles.siparislerrow}>
        <Text style={styles.siparislerfirma}>
        DEVA        </Text>

        <Text style={styles.siparislerilac}>
        Amoklavin BID 1000 mg 14 tablet (50+25)          
        </Text>
      </View>

      <View style={styles.siparislerrow}>
        <Text style={styles.siparislerfirma}>
        DEVA        </Text>

        <Text style={styles.siparislerilac}>
        Silverdin 40 G Krem  (100+20)       
        </Text>
      </View>

      <View style={styles.siparislerrow}>
        <Text style={styles.siparislerfirma}>
        ABDİ İBRAHİM        </Text>

        <Text style={styles.siparislerilac}>
        Apranax Fort 10 Tablet 550 mg (50+5)          
        </Text>
      </View>
    </View>

    <Text style={styles.depobaslik}>
    Gönderilecek depo
    </Text>

    <View style={styles.depocont}>
      <Text style={styles.depoyazi}>
      İstanbul Ecza Koop Gaziosmanpaşa Şubesi
      </Text>
    </View>

    <TouchableOpacity style={styles.anabuttoncont}
    onPress={() =>
      this.props.navigation.navigate('Home')
    }>
      <Text style={styles.anabuttonyazi}>
        Ana Sayfa
      </Text>
    </TouchableOpacity>
    

    
      
        
    </SafeAreaView>
  );
}
}


