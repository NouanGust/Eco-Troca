import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

import {useForm} from 'react-hook-form'

const ConfirmEmailScreen = () => {
  const {control, handleSubmit, formState: {errors}} = useForm

  const onConfirmarPress = () => {
    console.warn('confirmar')
  }

  const onJaTemContaPress = () => {
    console.warn('Já tem conta')
  }

  const onResendPress = () => {
    console.warn('reenviar')
  }

  return (
    <ScrollView>
      <View style={styles.root}>

        <Text style={styles.titulo}>
          Confirme seu Email
        </Text>

        <CustomInput
          name='Codigo'
          placeholder="Insira o código"
          control={control}
          rules={{
            required: 'O código de verificação é obrigatório'
          }}
        />

        <CustomButton
          onPress={handleSubmit(onConfirmarPress)}
          text={"Confirmar"}
        />
        

        <CustomButton
          onPress={onResendPress}
          text={"Reenviar código"}
          type={"secondary"}
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

export default ConfirmEmailScreen