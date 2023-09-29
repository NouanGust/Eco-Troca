import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('')

  const onEnviarPress = () => {
    console.warn('Enviar')
  }

  const onJaTemContaPress = () => {
    console.warn('Volta pro login')
  }

  return (
    <ScrollView>
      <View style={styles.root}>

        <Text style={styles.titulo}>
          Resetar senha
        </Text>

        <CustomInput
          placeholder="Isira seu usuário"
          value={username}
          setValue={setUsername}
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

export default ForgotPasswordScreen