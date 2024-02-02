import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,useColorScheme,Pressable} from 'react-native';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittlelLemonHeader';
import WelcomeScreen  from './components/WelcomeScreen';
import Menuitems from './components/Menuitems';
import LoginScreen from './components/LoginScreen';
import { useDeviceOrientation,useClipboard } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



const stack= createNativeStackNavigator();




export default function App() {
 
  return (
   
   <NavigationContainer >
    <View style={AppStyles.FirstView}>
   <stack.Navigator  initialRouteName='Welcome'>
   <stack.Screen   name='Welcome' component={WelcomeScreen}>
   </stack.Screen>
   <stack.Screen name='Login' component={LoginScreen}>

   </stack.Screen>
 
   </stack.Navigator>
   </View>
   
   </NavigationContainer>
  
  );
}
const AppStyles= StyleSheet.create({
  FirstView:{
     flex: 1,
     textAlign:'center',
 
    
     
    
  },
  SeconedView:{
    backgroundColor: '#333333',

  },
  
})
/*
style={{flex:1 ,justifyContent:"flex-start", padding:30,margin:20 ,alignItems: 'center',backgroundColor:'#495E57'}}
const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];
   
    <Menuitems/>
*/ 