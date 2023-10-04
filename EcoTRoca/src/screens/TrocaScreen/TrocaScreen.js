import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

import Header from '../../components/Header/Header'

import { FontAwesome } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

import ItensTroca from '../../components/ItensTroca';
import MenuTroca from '../../components/MenuTroca/MenuTroca';
import MenuInferior from '../../components/MenuInferior/MenuInferior';



const TrocaScreen = () => {
    const navigation = useNavigation()

  return (
    <View>
        <Header />

        <View>
            <Text style={styles.titulo}>Itens Disponiveis</Text>
            <ItensTroca />
        </View>

        <MenuTroca />


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