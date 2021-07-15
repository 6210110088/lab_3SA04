import React from 'react'
import { View, Text } from 'react-native'

export default function Forecast(props){
    return (
        <View>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <View style={styles.rowText}>
                <Text>{props.temp}</Text>
                <Text>°C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowText: {
        flexDirection: 'row'
    }
})