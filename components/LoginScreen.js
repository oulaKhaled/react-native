import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,Pressable,Image, Alert, Button } from 'react-native';
import Button1 from './Button1'; 
import { validateEmail } from '../utils';


//main fun
const LoginScreen =()=>{
  
   const[email,SetEmail]=React.useState("");
 
  // a fun from util folder 
 const Emailval=validateEmail(email);
  
   return(
    <View style={LoginStyles.container}>
    <Image 
    style={LoginStyles.imageStyle} 
    source={require('../img/little-lemon-logo-grey.png')}/>
    <Text style={LoginStyles.FirstText}> 
    Subscribe to our newsletter for our latest delicious recipes
     </Text>
    
   <TextInput 
   style={LoginStyles.input} 
   placeholder={'Enter Your Email'}
   onChangeText={SetEmail}
   keyboardType="email-address"
   textContentType="emailAddress"
   value={email}
       />

  <Button1 onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
        }}
        disabled={!Emailval}> Subscribe
   </Button1>
   </View>
    );
}

export default LoginScreen;



const LoginStyles= StyleSheet.create({
    FirstText:{
        padding: 10,
          fontSize: 25,
          color: '#000000',
          textAlign: 'center'
    },
    container: {
        flex: 1,
        padding: 24,
      },
      regularText:
       {
        fontSize: 20,
        padding: 10,
        marginVertical: 1,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      input: 
      { 
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
 
         }, 
         button: {
          fontSize: 22,
          padding: 10,
          marginVertical: 8,
          margin: 40,
          backgroundColor: '#EE9972',
          borderColor: '#EDEFEE',
          borderWidth: 2,
          borderRadius: 12
        },
        buttonText: {
          color: '#333333',
          textAlign: 'center',
          fontSize: 32,
        },
        Pressable2:{
          fontSize: 22,
          backgroundColor: '#17594A',
         borderColor: '#EDEFEE',
         borderWidth: 2,
         borderRadius: 15,
       margin:10
        
        },
        imageStyle:{
          width:300,
          height:200,
        marginBottom:32,
          resizeMode:'contain',
          left:20
       },

})
/**={()=>Alert.alert("Thanks For subscribing stay tuned")} 
 * email.target?.value &&email.target.value.match(val)
 * <Pressable style={LoginStyles.Pressable2} onPress={setEmail2}>
   <Text style={LoginStyles.regularText}> Subscribe</Text>
    </Pressable>

    const SetEmailVal=()=>{
    if( email.target?.value &&email.target.value.match(validateEmail)){
      CheckError(true);
    }
    else{
      CheckError(false);
    }

  }
/////////////////////////////////////////
<Button1 onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
        }}
        disabled={!SetEmailVal}> Subscribe

   </Button1>
   //////////////////////////////////////
     <Pressable style={LoginStyles.Pressable2} 
    onPress={()=>{
      Alert.alert("Thanx for subscribing");
    }}
    disabled={!SetEmailVal}
    >
   <Text style={LoginStyles.regularText}> Subscribe</Text>
    </Pressable>
   
 const validateEmail = (email) => {
    const regulerExpression=new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        return toString(email.target?.value &&email.target.value).match(regulerExpression);
  };
  






 * 
*/