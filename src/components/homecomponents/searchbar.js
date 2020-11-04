import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import SvgSearch from '../../../assets/svgs/searchicon'
import SvgBarkod from '../../../assets/svgs/barkodicon'



import styles from "../../../src/styles/stanasayfa";  



export default function Searchbarx()  {
   
   
      
  return (
    <View style={styles.searchcontainer}>
    <SvgSearch style={styles.aramaicon} />
    
    
    <Text style={styles.aramaplaceholder}>
    İlaç ya da firma ara
    </Text>

    <SvgBarkod style={styles.barkodicon} />
  </View>
    
   
      
   
  );
}


