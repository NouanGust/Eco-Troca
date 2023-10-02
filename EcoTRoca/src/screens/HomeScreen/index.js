import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

import CustomButton from '../../components/CustomButtons/CustomButton'
import Header from '../../components/Header'

import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    const Sair = () => {
        navigation.navigate('Login')
    }

  return (
    <View>

      <Header></Header>
      <Text style={styles.titulo}>HomePage EcoTroca</Text>

      <View style={styles.itemContainer}>
    
      </View>

      <CustomButton onPress={Sair} text="Sair"  />
    </View>
  )
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 32,
        alignSelf: 'center',

    },
})

export default Home