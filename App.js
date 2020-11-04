import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton  } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Anasayfa from './src/screens/Home';
import Sepet from './src/screens/Sepet';
import Firma from './src/screens/Firmalar';
import Bildirim from './src/screens/Bildirimler';
import Profil from './src/screens/Profil';
import Detay from './src/screens/detay';
import Sepetim from './src/screens/Sepetim';
import Siparisozeti from './src/screens/SiparisOzeti';
import Sepettebrikler from './src/screens/sepettebrikler';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import SvgBildirim from './assets/svgs/bildirim';
import SvgProfil from './assets/svgs/profil';
import SvgSepet from './assets/svgs/sepet';
import SvgCross from './assets/svgs/cross';

import SvgFirma from './assets/svgs/firma';
import SvghOME from './assets/svgs/home';
import SvgHome from './assets/svgs/home';
import Svgback from './assets/svgs/backbutton';
import Firmailaclistesi from './src/screens/firmailaclistesi'
import { color } from 'react-native-reanimated';
import { moderateScale } from './scale';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function badgedbildicon({color}) {

}

function Customicon({color}) {
  const isFocused = useIsFocused();
  let altson;

  return (
    isFocused ? altson='none' : altson='flex',
     
    
    <View style={{
      display: altson,
      width: 52,
      height: 52,
      borderRadius: 8,
       
      backgroundColor: color,
      shadowColor: "gray",
      shadowOffset: {
        width: 10,
        height: 9
      },
      shadowRadius: 23,
      shadowOpacity: 0.5,
      justifyContent:"center",
      alignItems:"center",
      marginBottom:5,
      
    }} >
    <SvgSepet style={{elevation:50}}  size={25} color={"#fff"}/>
    </View>
  )
}

function LogoTitle() {
  return (
    <Svgback
      style={{ width: 50, height: 50,
       marginLeft: 15}}
      
    />
  );
}


function Homestack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Anasayfa}
      options={{ headerShown: false}}
      
      />
      <Stack.Screen name="detay" component={Detay} />
      
    </Stack.Navigator>
  );

}

function Firmastack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Firma" component={Firma}
      options={{ headerShown: false}} />
      <Stack.Screen name="detay" component={Firmailaclistesi} />
      
    </Stack.Navigator>
  );

}

function Sepetstack({ navigation }) {
  return (
    <Stack.Navigator>
      






<Stack.Screen name="Sepet" component={Sepet}
      options={{
        headerTitle:null,
        
        headerRight: () => (
          <SvgCross 
          style={{marginRight: 25}}
          
        onPress={() => navigation.navigate('Home')} />
        ),
      }}
       />
      
      
    </Stack.Navigator>
  );

}

function Bildirimstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bildirim" component={Bildirim}
      options={{
        headerShown: false,
      }} />
      
      
    </Stack.Navigator>
  );

}

function Profilstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profil" component={Profil} />
      
      
    </Stack.Navigator>
  );

}
function HomeTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: "#b5bdd9",
        style : {
          backgroundColor: '#fafbff'
        }
        
      }}>
      <Tab.Screen name="Home" component={Homestack} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgHome
              name="home" color={color}     size={size}/>),
        }}  />
      <Tab.Screen name="firma" component={Firmastack} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgFirma
              name="home" color={color}     size={size}/>),
        }}  />
      <Tab.Screen name="sepet" component={Sepetstack} 
      
      options={{ headerShown: true}}
     
      options={{
          tabBarLabel: '',
          tabBarVisible: false,        
          
          tabBarIcon:({color,size}) => <Customicon  color={color} /> 
        }}  />


      <Tab.Screen name="bildirim" component={Bildirimstack} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View>
                            <SvgBildirim
                                name={'account'}
                                size={25}
                                color={color}
                                
                            />
                            {
                                <View
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                        top: 0,
                                        backgroundColor:'#ff5d92',
                                        borderRadius: 5,
                                        width: 15,
                                        height: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text style={{ fontSize: moderateScale(13),
  fontWeight: "900",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#ffffff"}}>4</Text>
                                </View>
                            }
                        </View>
            ),
        }}  />
        <Tab.Screen name="profil" component={Profilstack} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgProfil
              name="home" color={color}     size={size}/>),
        }}  />
      
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

           
<Stack.Screen
    name="hometabs"
    component={HomeTabs}
    options={{ title: ' ',
      headerStyle: {
      backgroundColor: '#333d47',
      elevation: 0,
      },
      headerTintColor: '#fff'
   }}
   options={{ headerShown: false }}
 />

<Stack.Screen
    name="Detay"
    component={Detay}
    

    options={{
      headerTitle: ' ',
      headerBackImage: LogoTitle,
      headerBackTitleVisible: false,
      
    }}
    
    
 />

<Stack.Screen
    name="firmailaclistesi"
    component={Firmailaclistesi}
    

    options={{
      headerShown: false,
      
    }}

    

    
    
    
 />

<Stack.Screen name="Sepettebrikler" component={Sepettebrikler}
      options={{
        headerShown: false,
        
        
      }}
       />


<Stack.Screen name="Siparisozeti" component={Siparisozeti}
      options={{
        headerTitle:null,
        
      headerBackImage: LogoTitle,
      headerBackTitleVisible: false,
        
        
      }}
       />


 
  
  </Stack.Navigator>
    </NavigationContainer>
  );
}