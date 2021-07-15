import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
      main: 'main',
      description: 'description',
      temp: 0
    })

    return(
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.textBackground}>
                <Text style={styles.rowText}>Zip Code is {props.zipCode}.</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'space-between',
        width: '100%',
        height: '100%'
    },
    rowText: {
        margin: 20,
        textAlign: 'center'
    },
    textBackground: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '30%'
    }
})