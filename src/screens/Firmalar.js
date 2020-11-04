import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import SvgSearch from '../../assets/svgs/searchicon'
import SvgBarkod from '../../assets/svgs/barkodicon'
import Carbonicon from '../../assets/svgs/carbon'
import Detay from '../screens/detay'


import styles from "../../src/styles/stanasayfa";  
import Arama from '../components/arama'; 
import KAMPAN from '../../assets/data/kampanyalar'
import KAMPAN1 from '../../assets/data/kampanyalar1'

import Searchbarx from '../components/homecomponents/searchbar'

import renderListHeader from '../components/homecomponents/listheader';

import Firmahorlist from '../components/firmalarcomponenets/firmahor';
import {scale, verticalScale, moderateScale} from "../../scale";
import Firmaliste from '../../assets/data/firmalar'
import Firmailaclistesi from '../screens/firmailaclistesi'





export default class Firma extends React.Component {

  
  

  constructor(){
    super();
    this.state = {
    textValue: KAMPAN[0].kamp,
    firma: KAMPAN[0].firma,
    headborder: 0,
   
    setSelectedId: '0',
    presses: false,
    secili : [],
    
    
    }
    
  }

  renderItem = ({ item, index }) => {
    

    return (
      <TouchableOpacity 
      style={[styles1.firmaitem,(index % 3==0 )? {marginLeft:0} : {marginLeft:12}]}
      onPress={() =>
        this.props.navigation.navigate('firmailaclistesi', {firma: item.firma})}
      
       >
        <Image 
        source={item.img}
        style = {styles1.itemimg}
        />

        <Text style= {styles1.itemfirmaisim} >
          {item.firma}
        </Text>
      </TouchableOpacity>
    );
  };
  

  


 

   

    render() {  
    
  
              
      return (
        
    <SafeAreaView style={styles.container}>
     
      <Searchbarx />
      <View style={styles1.firmalaryazisicont}>
        <Text style={styles1.firmlaryazisi}>
          Firmalar 
        </Text>
      </View>
      <View style={styles1.firmalarcont}>
      <FlatList
        data={Firmaliste}
        horizontal={false}
        numColumns = {3}
        renderItem={this.renderItem}     
      />
  </View>


      
      
        
    </SafeAreaView>
  );
}
}

const styles1 =StyleSheet.create({
  firmalaryazisicont : {
    marginTop: verticalScale(25),
    marginLeft: scale(25),

  },
  firmlaryazisi: {
    fontSize: 24,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#333d47",

  },
  firmalarcont : {
    marginLeft: verticalScale(25),
    marginTop: verticalScale(18),
    overflow: "visible",

  },

  firmaitem : {

    width: scale(100),
    height: verticalScale(100),
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(214, 221, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 15,
    shadowOpacity: 1,
    overflow: "visible",
    
    marginTop: 12,
    
    alignItems: "center",
    

  },

  itemimg : {
    width: 80,
    height: 50,
    marginTop: verticalScale(5),
    
  },

  itemfirmaisim : {
    fontSize: moderateScale(12),
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#333d47",
    marginTop: verticalScale(10),
    
  }
})
