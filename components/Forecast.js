import React from 'react' ;
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
        <View >
        <Text style = {styles.wbackground}>{props.main}</Text>
        <Text style = {styles.wbackground}>{props.description}</Text>
        <Text style = {styles.wbackground}>{props.temp} °C</Text>
        <Text style={styles.testst}> Feel like: {props.feels_like} °C</Text>
        </View>
        
        );
       }
        const styles = StyleSheet.create({
           /*wbackground : {
     
       backgroundColor : 'blue' ,
       alignItems : 'stretch' ,
       flexDirection : 'row' ,
       textAlign : 'center' ,
       fontSize :35 ,
       color : 'white' ,
       textAlignVertical : 'center' ,
       opacity : 0.75 ,
       
    } , */
            textsize: {
            fontSize : 30,
        }
   });