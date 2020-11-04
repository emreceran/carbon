
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList, Alert } from 'react-native';



import styles from "../../src/styles/stbildirimler";  


import Searchbarx from '../components/homecomponents/searchbar'




import {scale, verticalScale, moderateScale} from "../../scale";
import { Assets } from '@react-navigation/stack';






export default class Firma extends React.Component {

  
  
    render() {  
    
  
              
      return (
        
    <SafeAreaView style={styles.container}>
      <ScrollView style = {{flex:1}} >
     
      <Searchbarx />

      <Text style={styles.bildirimleryazisi}>
        Bildirimler
      </Text>

      <View style={styles.bilcont}>
        <View style={styles.bilsolcont}>
          <Image source={require('../../assets/haplar/Amoklavin.png')} 
          style={styles.bilimg} />
        
        </View>
        <View style={styles.bilsagcont}>

        <Text style={styles.bilfirma}>
            DEVA
          </Text>

          <Text style={styles.bililac}>
          Amoklavin BID 1000 mg 14 tablet ed posuere consectetur est at
          </Text>

          <View style={styles.bilaltcont}>
            <View style={styles.bilsartcont}>
              <Text style={styles.bilsartyazi}>
              50 + 25
              </Text>
            </View>

            <View style={[styles.bilsartcont, {marginLeft: scale(10)}]}>
              <Text style={styles.bilsartyazi}>
              50 + 25
              </Text>
            </View>

            <Text style={[styles.bilsartyazi,{color: "#b5bdd9", marginLeft: scale(30)
          }]}>
            +4
              </Text>
          </View>
              


        
        </View>

        <View style={[styles.uyaricont, ]}>
          <Text style={styles.uyariyazi}>
            SON 1 SAAT
          </Text>
        </View>   
    

      </View>

      <View style={styles.bilcont}>
        <View style={styles.bilsolcont}>
          <Image source={require('../../assets/haplar/silvardin.jpg')} 
          style={styles.bilimg} />
        
        </View>
        <View style={styles.bilsagcont}>

        <Text style={styles.bilfirma}>
            DEVA
          </Text>

          <Text style={styles.bililac}>
          Silverdin 40 G Krem 
          </Text>

          <View style={styles.bilaltcont}>
            <View style={styles.bilsartcont}>
              <Text style={styles.bilsartyazi}>
              100 + 55
              </Text>
            </View>

            <View style={[styles.bilsartcont, {marginLeft: scale(10)}]}>
              <Text style={styles.bilsartyazi}>
              150 + 70
              </Text>
            </View>

            <Text style={[styles.bilsartyazi,{color: "#b5bdd9", 
          }]}>
            +2
              </Text>
          </View>
              


        
        </View>

        <View style={[styles.uyaricont, ]}>
          <Text style={styles.uyariyazi}>
            SON 24 SAAT
          </Text>
        </View>   
    

      </View>

      <View style={styles.bilcont}>
        <View style={styles.bilsolcont}>
          <Image source={require('../../assets/haplar/apranax.jpg')} 
          style={styles.bilimg} />
        
        </View>
        <View style={styles.bilsagcont}>

        <Text style={styles.bilfirma}>
        ABDİ İBRAHİM
          </Text>

          <Text style={styles.bililac}>
          Apranax Fort 10 Tablet 550 mg
          </Text>

          <View style={styles.bilaltcont}>
            <View style={styles.bilsartcont}>
              <Text style={styles.bilsartyazi}>
              50 + 25
              </Text>
            </View>

            <View style={[styles.bilsartcont, {marginLeft: scale(10)}]}>
              <Text style={styles.bilsartyazi}>
              100 + 55
              </Text>
            </View>

            <Text style={[styles.bilsartyazi,{color: "#b5bdd9", 
          }]}>
            +7
              </Text>
          </View>
              


        
        </View>

        <View style={[styles.uyaricont,{backgroundColor: "#ffd020"} ]}>
          <Text style={styles.uyariyazi}>
            SON 2 GÜN
          </Text>
        </View>   
    

      </View>

      <View style={styles.bilcont}>
        <View style={styles.bilsolcont}>
          <Image source={require('../../assets/haplar/Amoklavin.png')} 
          style={styles.bilimg} />
        
        </View>
        <View style={styles.bilsagcont}>

        <Text style={styles.bilfirma}>
            DEVA
          </Text>

          <Text style={styles.bililac}>
          Amoklavin BID 1000 mg 14 tablet ed posuere consectetur est at
          </Text>

          <View style={styles.bilaltcont}>
            <View style={styles.bilsartcont}>
              <Text style={styles.bilsartyazi}>
              50 + 25
              </Text>
            </View>

            <View style={[styles.bilsartcont, {marginLeft: scale(10)}]}>
              <Text style={styles.bilsartyazi}>
              50 + 25
              </Text>
            </View>

            <Text style={[styles.bilsartyazi,{color: "#b5bdd9", marginLeft: scale(30)
          }]}>
            +4
              </Text>
          </View>
              


        
        </View>

        <View style={[styles.uyaricont, ]}>
          <Text style={styles.uyariyazi}>
            SON 1 SAAT
          </Text>
        </View>   
    

      </View>


      


      
      </ScrollView>
        
    </SafeAreaView>
  );
}
}

