import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const navigation = useNavigation();

  const onEnviarPress = () => {
    console.warn('Enviar')
    // Verificação e troca de senha

    // Redirecionamento
    navigation.navigate('Login')

  }

  const onJaTemContaPress = () => {
    console.warn('Volta pro login')

    navigation.navigate('Login')
  }

  return (
    <ScrollView>
      <View style={styles.root}>

        <Text style={styles.titulo}>
          Resetar senha
        </Text>

        <CustomInput
          placeholder="Insira o código"
          value={code}
          setValue={setCode}
        />

        <CustomInput
          placeholder="Insira sua nova Senha"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton
          onPress={onEnviarPress}
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

export default NewPasswordScreen