import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

import { useNavigation } from '@react-navigation/native'

import {useForm} from 'react-hook-form' 

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm()

  const navigation = useNavigation();

  const onEnviarPress = () => {
    console.warn('Enviar')

    // Redirecionamento
    navigation.navigate('NewPassword')
  }

  const onJaTemContaPress = () => {
    console.warn('Volta pro login')

    navigation.navigate('Login')
  }

  return (
    <ScrollView>
      <View style={styles.root}>

        <Text style={styles.titulo}>
          Confirme seu usuário
        </Text>

        <CustomInput
          name='Usuario'
          placeholder="Isira seu usuário"
          control={control}
          rules={{
            required: 'O nome de usuário é obrigatório'
          }}
        />

        <CustomButton
          onPress={handleSubmit(onEnviarPress)}
          text={"Enviar"}
        />
        

        <CustomButton
          onPress={onJaTemContaPress}
          text={"Voltar para Login"}
          type={"secondary"}
        />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

    },

    titulo:{
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
      textAlign: 'center',

    },
    logo:{
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default ForgotPasswordScreen