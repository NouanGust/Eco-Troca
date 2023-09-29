import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'

import Logo from '../../../assets/logoEcoTrocaTrasparente.png'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

import { useNavigation } from '@react-navigation/native'

const SingInScreen = () => {
    const {height} = useWindowDimensions();

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const onLoginPress = () =>{
      console.warn('Login')
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