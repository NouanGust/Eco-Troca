import { View, Text, StyleSheet, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'

import {createDrawerNavigator} from '@react-navigation/drawer'

import Logo from '../../../assets/logoEcoTrocaTrasparente.png'

import Drawable from '../../screens/Drawable/Drawable'

const Header = () => {
    const {height} = useWindowDimensions()

    

    return (
        <View style={styles.headerContainer}>
            <Image
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
            />

            <Drawable></Drawable>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: '#10735A',
    }
})

export default Header