import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

import Header from '../../components/Header/Header'

import { FontAwesome } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

import Itens from '../../components/Item/Item'


const TrocaScreen = () => {
  return (
    <View>
        <Header />

        <View>
            <Text style={styles.titulo}>Itens Disponiveis</Text>
            <Itens />
        </View>

        <View style={styles.menuTroca}>
            <Pressable>
                <AntDesign name='addfile' size={35} color='white' />
            </Pressable>

            <Pressable>
                <Ionicons name='md-chatbubble-outline' size={35} color='white' />
            </Pressable>

            <Pressable>
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

    titulo:{
        fontSize: 32,
        alignSelf: 'center',
        textAlign: 'center',
        padding: 14,
        marginVertical: 15,
    },
})

export default TrocaScreen