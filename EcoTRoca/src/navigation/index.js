import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SingInScreen from '../screens/SignInScreen';
import SingUpScreen from '../screens/SingUpScreen/SingUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen'
import HomeScreen from '../screens/HomeScreen';
import Mapa from '../screens/MapScreen/MapScreen';
import TrocaScreen from '../screens/TrocaScreen/TrocaScreen';


const Stack = createNativeStackNavigator() 


const Navigation = () => {
  return (
    <NavigationContainer style={styles.root}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Troca" component={TrocaScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name = "Login" component={SingInScreen} />
        <Stack.Screen name = "Cadastro" component={SingUpScreen} />
        <Stack.Screen name = "ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name = "ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name = "NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name = "Mapa" component={Mapa} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root:{
    backgroundColor: "#19B38C",
  },
})

export default Navigation