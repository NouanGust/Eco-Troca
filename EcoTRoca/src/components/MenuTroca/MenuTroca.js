import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { FontAwesome } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'

const MenuTroca = () => {
    const navigation = useNavigation()

    const onAddPress = () => {
        navigation.navigate('AddItem')
    }

    const onHomePress = () => {
        navigation.navigate('Home')
    }

    const onChatPress = () => {
        navigation.navigate('Chat')
    }

    const onTrocaPress = () => {
        navigation.navigate('HomeTroca')
    }

  return (
    <View>
        <View style={styles.menuTroca}>
        
            <Pressable onPress={onChatPress}>
                <Ionicons name='md-chatbubble-outline' size={35} color='white' />
            </Pressable>

            <Pressable onPress={onTrocaPress}>
                <FontAwesome name='exchange' size={35} color='white' />
            </Pressable>

            <Pressable onPress={onAddPress}>
                <AntDesign name='addfile' size={35} color='white' />
            </Pressable>

            <Pressable onPress={onHomePress}>
                <FontAwesome name='home' size={35} color='white' />
            </Pressable>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    menuTroca:{
        width: '100%',
        padding: 15,
        backgroundColor: '#0C5946',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default MenuTroca