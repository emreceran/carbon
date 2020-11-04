import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton  } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Anasayfa from './src/screens/Home';
import Sepet from './src/screens/Sepet';
import Firma from './src/screens/Firmalar';
import Bildirim from './src/screens/Bildirimler';
import Profil from './src/screens/Profil';
import Detay from './src/screens/detay';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import SvgBildirim from './assets/svgs/bildirim';
import SvgProfil from './assets/svgs/profil';
import SvgSepet from './assets/svgs/sepet';

import SvgFirma from './assets/svgs/firma';
import SvghOME from './assets/svgs/home';
import SvgHome from './assets/svgs/home';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();





function MyTabs() {
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
      <Tab.Screen name="Home" component={HomeStack} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgHome
              name="home" color={color}     size={size}/>),
        }}  />
      <Tab.Screen name="firma" component={Firma} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgFirma
              name="home" color={color}     size={size}/>),
        }}  />
      <Tab.Screen name="sepet" component={Sepet}  options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
<View style={{
  width: 52,
  height: 52,
  borderRadius: 8,
  elevation:10,  
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
  position: "absolute",
  bottom: 5,
  
}} >
<SvgSepet style={{elevation:50}}  size={size} color={"#fff"}/>
</View>
),
        }}  />
      <Tab.Screen name="bildirim" component={Bildirim} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgBildirim
               color={color}     size={size}/>),
        }}  />
        <Tab.Screen name="profil" component={Profil} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgProfil
              name="home" color={color}     size={size}/>),
        }}  />
      
    </Tab.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator>

           
         <Stack.Screen
             name="anasayfa"
             component={Anasayfa}
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
             
             options={{ title: ' ',
               headerStyle: {
               backgroundColor: '#333d47',
               elevation: 0,
               },
               headerTintColor: '#fff',
               
            }}
            options={{ headerShown: true ,
            }}
          />
          
           
           </Stack.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}