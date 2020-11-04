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





export default function Sepetim({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => {navigation.navigate('Home')}
      } title="Update count" />
      ),
    });
  }, [navigation]);

  return <Text>dssd: {count}</Text>;
}