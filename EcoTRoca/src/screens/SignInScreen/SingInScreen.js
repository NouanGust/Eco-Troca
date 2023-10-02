import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React, {useState} from 'react'

import Logo from '../../../assets/logoEcoTrocaTrasparente.png'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

import { useNavigation } from '@react-navigation/native'

import {useForm, Controller} from "react-hook-form"
import { auth } from '../../../firebase'

const SingInScreen = () => {
    const {height} = useWindowDimensions();

    const {control, handleSubmit, formState: {errors}} = useForm()

    console.log(errors)

    const navigation = useNavigation();

    const onLoginPress = (data) =>{
      console.log(data)
      // verificação
      

      // Redirecionamento
      navigation.navigate('Home')
      
    }

    const onEsqueceuPress = () => {
      console.warn('Esqueceu')

      // Redirecionamento
      navigation.navigate('ForgotPassword')
    }

    const onCriarContaPress = () => {
      console.warn('Criar Conta')

      // Redirecionamento
      navigation.navigate('Cadastro')
    }

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Nome de usuário é obrigatório',
            
          }}
        />

        <CustomInput
          name="senha"
          placeholder="Senha"
          control={control}
          SecureTextEntry={true}
          rules={{
            required: 'Senha é obrigatório',
            minLength: {value: 5, message: 'A senha deve ter 5 caracteres ou mais'},
          }}
        />

        <CustomButton
          onPress={handleSubmit(onLoginPress)}
          text={"Login"}
        />
        <CustomButton
          onPress={onEsqueceuPress}
          text={"Esqueceu a senha?"}
          type={"links"}
        />
        <CustomButton
          onPress={onCriarContaPress}
          text={"Não tem uma conta? Crie uma agora"}
          type={"links"}
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
    logo:{
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default SingInScreen