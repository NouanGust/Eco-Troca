import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native'
import React from 'react'

import CustomButton from '../../components/CustomButtons/CustomButton'
import Header from '../../components/Header'
import MenuInferior from '../../components/MenuInferior/MenuInferior'
import Itens from '../../components/Item/Item'

import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    const Sair = () => {
        navigation.navigate('Login')
    }

  return (
    <SafeAreaView>

      <Header></Header>
      <Text style={styles.titulo}>Aprenda a descartar de forma correta!</Text>

      <Itens />

      <MenuInferior />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 32,
        alignSelf: 'center',
        textAlign: 'center',
        padding: 14,
        marginVertical: 15,

    },
})

export default Home