import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';

import Carbonicon from '../../../assets/svgs/carbon'



import styles from "../../styles/stanasayfa";  
import KAMPAN1 from '../../../assets/data/kampanyalar1'






  
export default function  
  EmptyListMessage ({item}) {
    return (
      // Flat List Item
      <FlatList       
      data={KAMPAN1[0].kamp}
      
      
      
      keyExtractor={item => item.ilacid}
      numColumns={2} 
        
      renderItem={({ item, index }) => {  
        
             
        return (
          (index % 2)?
          <TouchableOpacity 
          onPress={() =>
            this.props.navigation.navigate('Detay', {firma : this.state.firma,
            ilac: item})
          }
          style= {[styles.verticalitems,{ marginLeft:10}]}
          >
                <Image style = {styles.verticalimage}
                 source={item.ilacfoto} />
                <Text style={styles.verticalfirma }>{KAMPAN1[0].firma}</Text>
                <Text style={styles.verticalilacadi} >{item.ilacname}</Text>
                <Text style={styles.verticalodeme} >{item.odeme}</Text>
          </TouchableOpacity>
    
          :
    
          <TouchableOpacity 
          onPress={() =>
            this.props.navigation.navigate('Detay', {firma : this.state.firma,
            ilac: item})
          }
          style= {[styles.verticalitems,{ marginLeft:25}]}
          >
            
                <Image style = {styles.verticalimage} source={item.ilacfoto} />
                <Text style={styles.verticalfirma }>{KAMPAN1[0].firma}</Text>
                <Text style={styles.verticalilacadi} >{item.ilacname}</Text>
                <Text style={styles.verticalodeme} >{item.odeme}</Text>
            
          </TouchableOpacity>
          );
        
    
        
    }}
     
      
      
    />
     
    );
  };
  
   
  