import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonFooter(){
    return(
        <View style={footerStyles.SeconedContainer}>
            <Text style={footerStyles.TextContainer}> All rights reserverd by Little Lemon,2023 </Text>
        </View>
    );

}
const footerStyles= StyleSheet.create({
    TextContainer:{
        fontSize: 15,
        color: 'black',
        textAlign: 'center',

    },
    SeconedContainer:{
        backgroundColor: "#EE9972",
         marginBottom:10

    }
});