import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props){
    return (
        <View style={styles.textInfo}>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <View style={styles.rowText}>
                <Text style={styles.tempSize}>{props.temp}</Text>
                <Text style={styles.tempUnitSize}>°C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowText: {
        flexDirection: 'row',
    },
    tempUnitSize: {
        fontSize: 10,
        textAlignVertical: 'center'
    },
    tempSize: {
        fontSize: 18
    },
    textInfo: {
        textAlign: 'center',
        alignItems: 'center'
    }
})