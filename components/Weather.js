import React, { useState } from 'react'
import { ImageBackground, Text } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
      main: '-',
      description: '-',
      temp: 0
    })

    return(
        <ImageBackground source={require('')}>
        <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}