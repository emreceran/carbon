import * as React from 'react';
import { Text, View,SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/stdetay'
import Svgwhatsapp from '../../assets/svgs/whatsapp'
import Svgphone from '../../assets/svgs/phone'
import KAMPAN1 from '../../assets/data/kampanyalar1';
import KAMPAN from '../../assets/data/kampanyalar';
import { FlatList } from 'react-native-gesture-handler';


function Detay({ route, navigation })  {
  const firma = route.params.firma;
  const ilac= route.params.ilac;
  const ilacid = ilac.ilacid;
  const [sart, setsart] = React.useState(50);
  const [mf, setmf] = React.useState(25);
  const birimfiyat = 6.70;
  const [ sontutar, setsontutar] = React.useState(0)

 
    
  
  
  
    
      
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style = {{flex:1,marginBottom:82}} >
       
      
      <View style={styles.uyaricont}>
        <Text style={styles.uyari}>
        Son 1 saat
        </Text>
      </View>
      <View style={styles.ilacbilgicontainer}>
      <View style={styles.ilacfotocont}>
      <Image style = {styles.ilacfoto}
      source={require("../../assets/asprin.jpg")} />
      </View>

      
      <View style={styles.ilacsagcont}>
      <Text style={styles.firmabilgi} >{firma} </Text>
      <Text style={styles.ilacisim}>{ilac.ilacname} </Text>
      
      </View>
      </View>

      
      
 
      <View style={styles.sartlarbaslikcont}>
        <Text style={styles.sartlarbaslikustyazi}> Kampanyalı satış şartları </Text>
        <Text style={styles.sartlarbaslikaltyazi}> Size uygun teklifi seçin (Max. 200 adet) </Text>
      </View>
      <View style={styles.sartlarkonteynir}>
      <FlatList
      

data={ilac.odemeler}
numColumns = {2}
renderItem={({item})=>(
<TouchableOpacity
onPress ={() => {setsart(item.kosul); setmf(item.mf)}}

style={item.kosul == sart? styles.sartlarbutton2: styles.sartlarbutton}>
<Text style={styles.sartlaryazi}>
{item.kosul} + {item.mf}
</Text>
</TouchableOpacity>
)}
/>
</View> 
      <View style={styles.artieksicont}>
        <View style={[styles.artieksi, {
          width: '17.4%', borderTopStartRadius:10,borderBottomStartRadius:10,
        }]}>
          <TouchableOpacity
                  onPress = {() => setsontutar(sontutar- (sart * birimfiyat))}>
                  <Text style={styles.artieksiyazi}> - </Text>
                  </TouchableOpacity>
          </View> 

        <View style={[styles.artieksi, {
          width: '28.1%', borderStartWidth:0, borderEndWidth:0,
                  
                }]}>
                  <Text style={styles.artieksiyazi}> {sart} </Text>
                </View>

        <View style={[styles.artieksi, {
          width: '17.4%',
                  
                }]}>
                  <TouchableOpacity
                  onPress = {() => setsontutar(sontutar+ (sart * birimfiyat))}>
                  <Text style={styles.artieksiyazi}> + </Text>
                  </TouchableOpacity>
                </View>

        <View style={[styles.artieksi, {
          width: '37.1%', borderStartWidth:0, borderTopEndRadius:10, borderBottomEndRadius:10,
                  
                }]}>
                  <Text style={styles.artieksiyazi1}> MF: {mf} </Text>
                </View>
        
        
        
      </View>

      <View style= {styles.temsilcibilgicont} > 
        <View style={styles.temsilcisolcont}>
        < Text style={styles.temsilcibaslik}> İLAÇ TANITIM TEMSİLCİSİ </Text>

          
        </View>

        <View style={styles.temsilcisagcont} >

        <Text style={styles.temsilciisim}>Mahmut Sami Büyükyüzbaşıgil</Text>
          
          <Svgphone style={styles.phone} />

          <Svgwhatsapp style={styles.whatsapp} />

        </View>

        </View>

        <View style={styles.ilacsatisbilgcont}>

          
          <Text style={styles.ilacsatisbilgbaslik}>
          İLAÇ BİLGİLERİ
          </Text>

          <View style={styles.ilacsatisbilgisatir} >
            <Text style={styles.ilacsatissol}>
            Depo satış fiyatı:
            </Text>

            <Text style={styles.ilacsatissag}>
              5,70 TL
            </Text>

          </View>

          <View style={styles.ilacsatisbilgisatir} >
            <Text style={styles.ilacsatissol}>
            Perakende satış fiyatı:
            </Text>

            <Text style={styles.ilacsatissag}>
              9,70 TL
            </Text>

          </View>

          <View style={styles.ilacsatisbilgisatir} >
            <Text style={styles.ilacsatissol}>
            Kamu satış fiyatı:
            </Text>

            <View style={{flexDirection: "column",
          alignItems: "flex-end"}}>
            <Text style={[styles.ilacsatissag, {
              alignSelf: "flex-end",
            }]}>6,70 TL</Text>
            <Text style={{
              fontSize: 14,
              fontWeight: "900",
              fontStyle: "normal",
              letterSpacing: 0,
              textAlign: "right",
              color: "#ff5d92"

            }}>(FF 4,30 TL)</Text>
            </View>

          </View>

          <View style={styles.ilacsatisbilgisatir} >
            <Text style={styles.ilacsatissol}>
            Depo satış fiyatı:
            </Text>

            <Text style={styles.ilacsatissag}>
              5,70 TL
            </Text>

          </View>



       
        </View>

       

       



     

      
      
      </ScrollView>

      <View style={styles.sontoplamcont}>
        <View style= {styles.sontoplamsol}>
          <Text style={styles.sontoplambirimyazi}> Birim fiyat </Text>
          <Text style={styles.sontoplamyazi}> {sontutar} TL </Text>
        </View>
        <View style= {styles.sontoplamsag}>
          <TouchableOpacity
          style= {styles.sepetbutton}
          >
            <Text style= {styles.sepetbuttonyazi}> Sepete Ekle  </Text>
          </TouchableOpacity>
        </View>

        
      </View>
      </SafeAreaView>
      
   
  );
}


export default Detay;