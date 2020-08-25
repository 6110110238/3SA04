import React from 'react' ;
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Button,
  } from "react-native";

export default function Forecast(props) {
    let img = "";
    if (props.name == "Hat Yai") {
        img = require("../image/hatyai.jpg");
    }
    if (props.name == "Trang") {
        img = require("../image/trang.jpg");
    }
    if (props.name == "Chiang Mai") {
        img = require("../image/chiangmai.jpg");
    }
    if (props.name == "Khon Kaen") {
        img = require("../image/khonkaen.jpg");
    }
    if (props.name == "Chaophraya Surasak") {
        img = require("../image/chonburi.jpg");
    } 
    return (
        <View>
            <Text style = {styles.mainText}>{props.name}</Text>
            <View>
                <Image source={img} style={styles.img}></Image>
            </View>
            <Text style = {styles.mainText}>{"\n"}</Text>
            <Text style = {styles.wbackground}>{props.main}</Text>
            <Text style = {styles.wbackground}>{props.description}</Text>
            <Text style = {styles.wbackground}>Tempurature : {props.temp} °C</Text>
            <Text style={styles.wbackground}> Feel like: {props.feels_like} °C</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        top: 15,
        width: 320,
        height: 150,
    },

    wbackground : {     
       backgroundColor : 'blue' ,
       alignItems : 'stretch' ,
       flexDirection : 'row' ,
       textAlign : 'center' ,
       fontSize :25 ,
       color : 'white' ,
       textAlignVertical : 'center' ,
       opacity : 0.75 , 
    }, 

    mainText: {
        fontSize: 30,
        color: "black",
        paddingTop: 25,
        textAlign: "center",
        opacity: 0.75,
    },
    
});