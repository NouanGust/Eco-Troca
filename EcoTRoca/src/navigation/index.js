import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SingInScreen from '../screens/SignInScreen';
import SingUpScreen from '../screens/SingUpScreen/SingUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen'
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator() 

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Login" component={SingInScreen} />
        <Stack.Screen name = "Cadastro" component={SingUpScreen} />
        <Stack.Screen name = "ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name = "ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name = "NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation