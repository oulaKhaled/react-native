import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,Image,useColorScheme, Pressable } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator}  from '@react-navigation/native';
import LoginScreen from './LoginScreen'; 





const WelcomeScreen= ({navigation})=>{
  return(
    <View  style={ScreenStyles.ViewStyle}>
         <View style={ScreenStyles.headerWrapper}>
         <Image style={ScreenStyles.imageStyle}
         source={require('../img/little-lemon-logo.png')}
    
         />
         <Text style={ScreenStyles.headerText}> Little lemon, your local Mediterranean bistro</Text>
        
         <Pressable style={ScreenStyles.PressableStyle} onPress={()=> navigation.navigate("Login")}>
          <Text style={ScreenStyles.regularText}> Press here </Text>
         </Pressable>
         </View>
     </View>  

  );
};
export default WelcomeScreen;



const ScreenStyles=StyleSheet.create({
   ViewStyle:{
    flex:1, 
    padding:24
   },
   headerText: {
    paddingVertical:10,
    fontSize: 25,
    marginTop:48,
    color: '#333333',
    textAlign: 'center',
    marginTop:48
  
  
  },
  regularText: {
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
    margin:10
  },
 input: { 
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: '#EDEFEE', 
        backgroundColor: '#EDEFEE', 
         }, 
    imageStyle:{
            width:300,
            height:200,
            resizeMode:'contain',
            left:20
        
            
       
        
         },
    headerWrapper: {
       flex:1,
        justifyContent: 'center',
         textAlign:'center',
     },
    PressableStyle:{
            fontSize: 22,
           backgroundColor: '#17594A',
          borderColor: '#EDEFEE',
          borderWidth: 2,
          borderRadius: 15,
        margin:10
          
          }

});
/**  <TextInput
            style={ScreenStyles.input}
            value={Firstname}
            onChangeText={setFirstName}
            placeholder='First Name'
            keyboardType={"phone-pad"} 
        />  
        <Text style={ScreenStyles.SeconedText}>
         Little Lemon is a charming neighborhood bistro that serves simple 
        food an classic cocktails in a lively but casual environment. We would love 
        to hear about your experience with us !</Text>
         <Image
            source={require('../components/FirstPic.png')}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
        />
          <Image source={require('./img/little-lemon-logo.png')}
          resizeMode='cover'
        style={ScreenStyles.imageStyle} />
      
        
        */