import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,SafeAreaView, FlatList,   View, Button,TouchableOpacity, Pressable, Image, Animated,ScrollView, SectionList, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import SvgSearch from '../../assets/svgs/searchicon'
import SvgBarkod from '../../assets/svgs/barkodicon'
import Carbonicon from '../../assets/svgs/carbon'
import Detay from '../screens/detay'
import {scale, verticalscale, moderatescale} from '../../scale'


import styles from "../../src/styles/stanasayfa";  
import Arama from '../components/arama'; 
import KAMPAN from '../../assets/data/kampanyalar'
import KAMPAN1 from '../../assets/data/kampanyalar1'

import Searchbarx from '../components/homecomponents/searchbar'

import renderListHeader from '../components/homecomponents/listheader'






class Anasayfa extends React.Component {

  
  

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
    this.onPressButton= this.onPressButton.bind(this);
  }

  

  

  onPressButton(txt) {   
    this.setState({
        textValue: txt,
        firma : txt.firma,
        kalangun: txt.akalangun,      
    })
  }

  
  renderListHeader = (item) => {
    const borderWidth = '0' === this.state.setSelectedId ? 2 : 0;
    return (
      <TouchableOpacity style={[styles.        horizontalitems, {borderWidth}]}
      onPress={this.onheaderpressset.bind(this, item)}     
      >
        <Carbonicon width='45' height="38" style= {styles.carbonicon}
        />
        <Text style={ styles.seninicinyazi }>SENİN İÇİN</Text>
     
      </TouchableOpacity>

      
     );
  }

  

  checkIndexIsEven (n) {
    return n % 2 == 0;
  }
  
  

 onpressset = (item) =>{
   this.setState({
    setSelectedId: item.id,
    secili: item.kamp,
    firma: item.firma,
   });   
 }

 onheaderpressset = (item) =>{
  this.setState({
   setSelectedId: '0',
   secili: [],
   firma: item.firma,

  });
  
}

rendervertlist = ({item, index}) => {
  return (
            
    <TouchableOpacity 
    onPress={() =>
      this.props.navigation.navigate('Detay', {firma : this.state.firma,
      ilac: item})
    }
    

    style= {[styles.verticalitems,(index % 2)? { marginLeft:scale(8)} : {marginLeft:scale(25)}]}
    >
          <Image style = {styles.verticalimage}
           source={item.ilacfoto} />
          <Text style={styles.verticalfirma }>{this.state.firma}</Text>
          <Text style={styles.verticalilacadi} >{item.ilacname}</Text>
          <Text style={styles.verticalodeme} >{item.odeme}</Text>
    </TouchableOpacity>

    
    );

}

 EmptyListMessage = ({item}) => {
  return (
    // Flat List Item
    <FlatList       
    data={KAMPAN1[0].kamp}
    
    
    
    keyExtractor={item => item.ilacid}
    numColumns={2} 
      
    renderItem={({ item, index }) => {  
      
           
      return (
        
        <TouchableOpacity 
        onPress={() =>
          this.props.navigation.navigate('Detay', {firma : this.state.firma,
          ilac: item})
        }
        style= {[styles.verticalitems,(index % 2)?{ marginLeft:scale(8)} :  {marginLeft:scale(25)} ]}
        >
              <Image style = {styles.verticalimage}
               source={item.ilacfoto} />
              <Text style={styles.verticalfirma }>{KAMPAN1[0].firma}</Text>
              <Text style={styles.verticalilacadi} >{item.ilacname}</Text>
              <Text style={styles.verticalodeme} >{item.odeme}</Text>
        </TouchableOpacity>
  
        
        );
      
  
      
  }}
   
    
    
  />
   
  );
};

 

   

    render() {  
    
  
              
      return (
        
    <SafeAreaView style={styles.container}>
      <Searchbarx />
      <View style={styles.baslikcontainer}>
        <Text style= {styles.baslik}>
          Kampanyalar
        </Text>
      </View>
      <View style={styles.horizontalcontainer}>


      <FlatList style={styles.horizonliste}
        data={KAMPAN.sort((a, b) => {
        return a.akalansaat - b.akalansaat;})}
        renderItem={({ item }) => {
          const borderWidth = item.id === this.state.setSelectedId ? 2 : 0;
      return (
        <TouchableOpacity
        item={item} 
        style={[styles.horizontalitems, {borderWidth:item.id === this.state.setSelectedId ? 2 : 0,}]} 
        onPress={this.onpressset.bind(this, item)}
        >
          
          {item.akalansaat <= 24 && item.akalansaat > 0 ?
            <View style={styles.uyaricont} >
              <Text style={[styles.horizontuyari,{backgroundColor:"#ff5d92",}]} >SON {item.akalansaat} SAAT</Text>
            </View>
           :
           <View style={styles.uyaricont}>
              <Text style={[styles.horizontuyari,{backgroundColor:"#ffd020"}]} > SON  {item.akalangun} GÜN</Text>
           </View>

          }
            <Image source={item.img}
            style = {styles.horizontimage}
            />
              <Text style= {styles.horizontfirmaisim} >{item.firma}</Text>
          
        </TouchableOpacity>
      )
  }}
    ListHeaderComponent={this.renderListHeader}
    keyExtractor={item => item.id}
    ListEmptyComponent= {this.emptyplaceholder}
    showsHorizontalScrollIndicator={false}
    
    horizontal
/>
      </View>


      <FlatList       
        data={this.state.secili}
        extraData={KAMPAN1[0].kamp}
        ListEmptyComponent={this.EmptyListMessage}
        keyExtractor={item => item.ilacid}
        numColumns={2}           
        renderItem={this.rendervertlist}   
        
      />
        
    </SafeAreaView>
  );
}
}

export default Anasayfa;

