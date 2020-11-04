import React, {useState} from 'react';

import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SearchBar } from 'react-native-elements';
import {scale, verticalScale, moderateScale} from "../../../scale"
import Firmaliste from '../../../assets/data/firmalar'
import { render } from 'react-dom';



export default function Firmahorlist()  {
  const renderItem = ({ item, index }) => {
    

    return (
      <TouchableOpacity 
      style={[styles.firmaitem,(index % 3==0 )? {marginLeft:0} : {marginLeft:12}]}
      onPress={() =>
        this.props.navigation.navigate('firmailaclistesi', {firma : item.firma,
        })
      }
       >
        <Image 
        source={item.img}
        style = {styles.itemimg}
        />

        <Text style= {styles.itemfirmaisim} >
          {item.firma}
        </Text>
      </TouchableOpacity>
    );
  };
  
   
      
  return (
    <View style={styles.firmalarcont}>
      <FlatList
        data={Firmaliste}
        horizontal={false}
        numColumns = {3}
        renderItem={renderItem}     
      />
  </View> 
   
  );
}

const styles = StyleSheet.create({
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