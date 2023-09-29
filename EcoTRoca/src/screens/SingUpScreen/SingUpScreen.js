import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

// Importar o hook de navegação
import { useNavigation } from '@react-navigation/native'

const SingUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('');
    const [senhaConfirm, setSenhaConfirm] = useState('');

    // Definindo meu 'navegador'
    const navigation = useNavigation()

    const onCriarContaPress = () =>{
      console.warn('Criar Conta')
      // Verificação

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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

        <CustomInput
          placeholder="Senha"
          value={senha}
          setValue={setSenha}
          SecureTextEntry={true}
        />

        <CustomInput
          placeholder="Confirme sua senha"
          value={senhaConfirm}
          setValue={setSenhaConfirm}
          SecureTextEntry={true}
        />

        <CustomButton
          onPress={onCriarContaPress}
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