import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'

import Logo from '../../../assets/logoEcoTrocaTrasparente.png'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

const SingInScreen = () => {
    const {height} = useWindowDimensions();

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    const onLoginPress = () =>{
      console.warn('Login')
    }

    const onEsqueceuPress = () => {
      console.warn('Esqueceu')
    }

    const onCriarContaPress = () => {
      console.warn('Criar Conta')
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Senha"
          value={senha}
          setValue={setSenha}
          SecureTextEntry={true}
        />
        <CustomButton
          onPress={onLoginPress}
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