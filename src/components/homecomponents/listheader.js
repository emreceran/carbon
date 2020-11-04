import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';

import Carbonicon from '../../../assets/svgs/carbon'



import styles from "../../../src/styles/stanasayfa"; 
import onheaderpressset from '../../screens/Home' 






  
export default function  renderListHeader(item) {
    const borderWidth = '0' === this.state.setSelectedId ? 2 : 0;
    return (
      <TouchableOpacity style={[styles.horizontalitems, {borderWidth}]}
      onPress={this.onheaderpressset.bind(this, item)} 
      
      
      >
        <Carbonicon width='45' height="38" style= {styles.carbonicon}
      />
      <Text style={ styles.seninicinyazi }>SENİN İÇİN</Text>
     
      </TouchableOpacity>

      
     );
  }