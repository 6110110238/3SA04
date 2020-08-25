import Weather from "../components/Weather";
import React from 'react' ;
import {  View } from 'react-native' ;

export default function WeatherScreen({route}) {
    return (
    <View>
        <Weather zipCode={route.params.zipCode} />
    </View>
    );
}   