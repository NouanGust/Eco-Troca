import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import Header from '../../components/Header/Header'
import MenuTroca from '../../components/MenuTroca/MenuTroca'


const ChatScreen = () => {
  const [chat, setChat] = useState()
  return (
    <View>
        <Header />    

        <Text style={styles.titulo}>
          Chats
        </Text>

        <View>
          <Text style={{textAlign: 'center'}}>
            Ainda nenhum chat
          </Text>
        </View>

        <MenuTroca />
    </View>
  )
}

const styles=StyleSheet.create({
  titulo:{
    fontSize: 32,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 14,
    marginVertical: 15,
  },
})

export default ChatScreen