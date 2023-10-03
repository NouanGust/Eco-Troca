import { View, Text, StyleSheet, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'


import Logo from '../../../assets/logoEcoTrocaTrasparente.png'



const Header = () => {
    const {height} = useWindowDimensions()

    

    return (
        <View style={styles.headerContainer}>
            <Image
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: '#0C5946',
    }
})

export default Header