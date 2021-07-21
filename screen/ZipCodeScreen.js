import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableHighlight, View, ImageBackground } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]   

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight underlayColor= "rgba(102,102,255,0.5)" onPress={() => {
        navigation.navigate('Weather', {zipCode: code,place: place})
    }}>
        <View style = {styles.zipItem}>
            <Text style = {styles.zipPlace}>{place}</Text>
            <Text style = {styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        margin: 15,
    },
    zipPlace: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    zipCode: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    backdrop: {
        width: '100%',
        height: '100%'
    },
})