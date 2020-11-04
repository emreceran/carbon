import * as React from 'react';
import { Text, View,SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Svgwhatsapp from '../../assets/svgs/whatsapp'
import Svgphone from '../../assets/svgs/phone'
import KAMPAN1 from '../../assets/data/kampanyalar1';
import KAMPAN from '../../assets/data/kampanyalar';
import { FlatList } from 'react-native-gesture-handler';

import styles from '../styles/stfirmadetay';
import SvgSearch from '../../assets/svgs/searchicon'
import SvgBarkod from '../../assets/svgs/barkodicon'
import Svgback from '../../assets/svgs/backbutton'

import Searchbarx from '../components/homecomponents/searchbar'
import { verticalScale } from '../../scale';


export default function Firmailaclistesi({ route, navigation })  {
  const firma = route.params.firma;
  

 
    
  
  
  
    
      
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style = {{flex:1}} >

        
      <View style={styles.searchcontainer}>
      <TouchableOpacity style={styles.buttoncont}
        onPress={() => navigation.goBack()}
        >
    <Svgback style={styles.backicon}
    />
    </TouchableOpacity>
    
    
    <Text style={styles.aramaplaceholder}>
    Sandoz A Novartis Division
    </Text>

    
  </View>

 
        <View style={styles.firmabilgicont}>
          <View style={styles.firmabilgustcont} >
            <View style={styles.firmaimgcont}>
              <Image 
              
              source={require('../../assets/firmalar/sandoz.jpg')}
              style={styles.firmaimg}
              
               />
            </View>
            <View style = {styles.firmaisismcont} >
              <Text style={styles.firmaisism}>Sandoz A Novartis Division</Text>
            </View>            
          </View>
          <View style={[styles.firmabilgirow, {marginTop: verticalScale(35)}]}>
            <View style={styles.firmarowsolcont}>
              <Text style={styles.firmarowyazisi}>Telefon </Text>
              <Text style={styles.firmarowyazisi}> : </Text>
            </View>
            <View style={styles.firmarowsagcont}>
            <Text style={styles.firmarowyazisi}>0(216) 570 95 01</Text>
            </View>
            
          </View> 

          <View style={[styles.firmabilgirow,{marginTop:verticalScale(15)}]}>
            <View style={styles.firmarowsolcont}>
              <Text style={styles.firmarowyazisi}>Adres </Text>
              <Text style={styles.firmarowyazisi}> : </Text>
            </View>
            <View style={styles.firmarowsagcont}>
            <Text style={styles.firmarowyazisi}>Suryapı Akel İş Merkezi, Rüzgarlıbahçe Mah. Şehit Sinan Eroglu Cad: No. 6 Kavacık – Beykoz/İstanbul </Text>
            <Text style={{
              fontSize: 16,
              fontWeight: "600",
              fontStyle: "normal",
              letterSpacing: 0,
              color: '#5f80ee'
            }}>Haritada aç</Text>
            </View>
            
          </View> 
                 
        </View>


        <View style={styles.urunlercont}>
          <View style={styles.urunlerustbaslikcont}>
            <Text style={styles.urunlerustbaslik}>
            Firmanın ürünleri
            </Text>
          </View>

          <View style={styles.urunlerbaslikrow}>
            <Text style= {styles.urunlerbaslik}>
              A
            </Text>
          </View>
          <View style={styles.urunlerrow}>
            <Text style={styles.urunleryazi}>
            Acerilin
            </Text>
          </View>


          <View style={styles.urunlerbaslikrow}>
            <Text style= {styles.urunlerbaslik}>
              B
            </Text>
          </View>
          <View style={styles.urunlerrow}>
            <Text style={styles.urunleryazi}>
            Acerilin
            </Text>
          </View>

          <View style={styles.urunlerrow}>
            <Text style={styles.urunleryazi}>
            Acerilin
            </Text>
          </View>

          <View style={styles.urunlerrow}>
            <Text style={styles.urunleryazi}>
            Acerilin
            </Text>
          </View>


          <View style={styles.urunlerbaslikrow}>
            <Text style= {styles.urunlerbaslik}>
              A
            </Text>
          </View>
          <View style={styles.urunlerrow}>
            <Text style={styles.urunleryazi}>
            Acerilin
            </Text>
          </View>


          <View style={styles.urunlerbaslikrow}>
            <Text style= {styles.urunlerbaslik}>
              A
            </Text>
          </View>
          <View style={styles.urunlerrow}>
            <Text style={styles.urunleryazi}>
            Acerilin
            </Text>
          </View>


          
        </View>

        
        


      
     
     

      
      
      </ScrollView>

      
      </SafeAreaView>
      
   
  );
}


