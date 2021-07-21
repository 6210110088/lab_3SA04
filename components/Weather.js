import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d0d341a77821f1550471828674d13ba1`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])       

    const [forecastInfo, setForecastInfo] = useState({
      main: 'main',
      description: 'description',
      temp: 0
    })

    return(
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.textBackground}>
                <Text style={styles.headerText}>{props.place} {props.zipCode}</Text>
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
        width: '100%',
        height: '30%'
    },
    headerText: {
        margin: 20,
        textAlign: 'center',
        fontSize: 30
    }
})