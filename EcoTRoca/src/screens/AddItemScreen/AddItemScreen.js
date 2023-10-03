import { View, Text, Input} from 'react-native'
import React from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

const AddItemScreen = () => {
  return (
    <View>
      <Text>Adicionar Item</Text>
      <Text>Nome</Text>
      <Text>Tipo</Text>
      <Text>Troca ou descarte</Text>
      <Text>btn add</Text>
    </View>
  )
}

export default AddItemScreen