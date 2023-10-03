import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons'
import {FontAwesome} from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'



const MenuInferior = () => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions()

    const onPerfilPress = () =>{
        navigation.navigate('Login')
    }

    const onMapaPress = () => {
        navigation.navigate('Mapa')
    }

    const onTrocaPress = () => {
        navigation.navigate('Login')
    }

    const onHomePress = () => {
        navigation.navigate('Home')
    }

  return (
    <View style={styles.menuContainer}>
        <Pressable onPress={onPerfilPress}>
            <FontAwesome name='user' size={35} color={'#f5f5f5'} style={styles.iconSombra} />
        </Pressable>

        <Pressable onPress={onMapaPress}>
            <FontAwesome name='map' size={35} color={'#f5f5f5'} style={styles.iconSombra}/>
        </Pressable>

        <Pressable onPress={onTrocaPress}>
            <FontAwesome name='exchange' size={35} color={'#f5f5f5'} style={styles.iconSombra} />
        </Pressable>

        <Pressable onPress={onHomePress}>
            <FontAwesome name='home' size={35} color={'#f5f5f5'} style={styles.iconSombra} />
        </Pressable>
    </View>
  )
}

const styles= StyleSheet.create({
    menuContainer:{
        width: '100%',
        padding: 15,
        backgroundColor: '#0C5946',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',


    },

    iconSombra:{

        textShadowColor:"#10735A",
        textShadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,

        elevation: 6,
    },
})
export default MenuInferior