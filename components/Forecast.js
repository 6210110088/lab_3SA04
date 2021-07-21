import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Forecast(props){
    return (
        <View style={styles.textInfo}>
            <Text style={styles.textMainInfoSize}>{props.main}</Text>
            <Text style={styles.describMargin}>{props.description}</Text>
            <View style={styles.rowText}>
                <Text style={styles.tempSize}>{props.temp}</Text>
                <Text style={styles.tempUnitSize}>°C</Text>
            </View>
            <View style={styles.rowText}>
                <Text style={styles.subTempSize}>Feels like: {props.feelTemp}</Text>
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
        fontSize: 14,
        textAlignVertical: 'center'
    },
    tempSize: {
        fontSize: 30
    },
    textInfo: {
        textAlign: 'center',
        alignItems: 'center'
    },
    describMargin: {
        margin: 30
    },
    textMainInfoSize: {
        fontSize: 30
    },
    icon: {
        width: '100%',
        height: '100%'
    },
    supTempSize: {
        fontSize: 30
    },
})