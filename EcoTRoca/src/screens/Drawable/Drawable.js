import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import SingInScreen from '../SignInScreen/SingInScreen'
import Home from '../HomeScreen'
import navigation from '../../navigation'

const Drawer = createDrawerNavigator()

const Drawable = () => {
  return (
      <SafeAreaView>
            <Pressable onPress={() => navigation.openDrawer}>
                <Text>
                    Menu
                </Text>
            </Pressable>
          <NavigationContainer>
          
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="SingIn" component={SingInScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
      </SafeAreaView>
  )
}

export default Drawable