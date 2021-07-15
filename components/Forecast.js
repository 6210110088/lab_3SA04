import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props){
    return (
        <View style={styles.textInfo}>
            <Text style={styles.textMainInfoSize}>{props.main}</Text>
            <Text style={styles.infoMargin}>{props.description}</Text>
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
    infoMargin: {
        margin: 40
    },
    textMainInfoSize: {
        fontSize: 30
    }
})