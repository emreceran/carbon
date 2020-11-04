import React, { useState } from "react";

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList } from 'react-native';
import { TextInput } from 'react-native-paper';
import SvgSearch from '../../assets/svgs/searchicon'
import SvgBarkod from '../../assets/svgs/barkodicon'
import Carbonicon from '../../assets/svgs/carbon'
import Detay from '../screens/detay'


import styles from "../../src/styles/stprofil";  
import Arama from '../components/arama'; 
import KAMPAN from '../../assets/data/kampanyalar'




const App = () => {

  

   

  return (
    <SafeAreaView style={styles.container}>
      <Text> Profil </Text>
    </SafeAreaView>
  );
};



export default App;
