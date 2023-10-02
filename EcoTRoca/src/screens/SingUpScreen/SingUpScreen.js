import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

// Importar o hook de navegação
import { useNavigation } from '@react-navigation/native'

// Importar hook form
import {useForm, Controller} from 'react-hook-form'

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const SingUpScreen = () => {

  const {control, handleSubmit, formState: {errors}, watch} = useForm()
  const senha = watch('Senha')
  // Definindo meu 'navegador'
  const navigation = useNavigation()

  const onCriarContaPress = () =>{
    console.warn('Criar Conta')
    // Verificação
    // // auth.createUserWithEmailAndPassword(control._fields['Email'], control._fields['Senha']).then(userCredencials => {
    // //   const user = userCredencials.user
    // //   console.log(user)
    // }).cath(error => alert(error.message))

    // Redirecionamento
    navigation.navigate('Login')
  }

  const onJaTemContaPress = () => {
    console.warn('Já tem conta')

    // Redirecionamento
    navigation.navigate('Login')
  }

  return (
    <ScrollView>
      <View style={styles.root}>

        <Text style={styles.titulo}>
          Crie sua Conta
        </Text>

        <CustomInput
          name='Usuário'
          placeholder="Username"
          control={control}
          rules={{
            required: 'Usuário é obrigatório'
          }}
        />

        <CustomInput
          name='Email'
          placeholder="Email"
          control={control}
          rules={{
            required: 'Email é obrigatório',
            patter: EMAIL_REGEX,
          }}
        />

        <CustomInput
          name='Senha'
          placeholder="Senha"
          control={control}
          SecureTextEntry
          rules={{ 
            required:'A senha é obrigatória',
            minLength: {value: 5, message: 'A senha deve ter 5 ou mais caracteres'},
          }}
        />

        <CustomInput
          name='Confrima-senha'
          placeholder="Confirme sua senha"
          control={control}
          SecureTextEntry
          rules={{
            required: 'Confirmar a senha é obrigatório',
            validate: value => value === senha || 'A senha não confirma',
          }}
        />

        <CustomButton
          onPress={handleSubmit(onCriarContaPress)}
          text={"Criar Conta"}
        />


        <CustomButton
          onPress={onJaTemContaPress}
          text={"Já tem uma conta? Faça Login"}
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

    titulo:{
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,

    },
    logo:{
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default SingUpScreen