import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('')

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
          placeholder="Isira o código"
          value={code}
          setValue={setCode}
        />

        <CustomButton
          onPress={onConfirmarPress}
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