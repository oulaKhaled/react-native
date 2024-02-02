import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
    return (
  
     <View  style={styles.viewContainer}>
      <Text style={styles.container}> Little Lemon Resturant </Text>
      </View>
     
    );}
    
    
    
    
    const styles=StyleSheet.create({
      container:{
        padding: 30,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',

      },
      viewContainer:{
        backgroundColor: "#EE9972"

      }
    });

  
  
  