import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native'
import React from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButtons/CustomButton'

import Header from '../../components/Header/Header'
import MenuTroca from '../../components/MenuTroca/MenuTroca'

import {useForm, Controller} from "react-hook-form"

import * as ImagePicker from 'expo-image-picker'

import { FontAwesome } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'


const AddItemScreen = () => {

  const {control, handleSubmit, formState: {errors}} = useForm()

  const onAddItemPress = () => {
    //adicona o item na home
  }

  const onImagemPress = () => {
    // upload da imagem
  }

  return (
    <View>

      <Header />

      <Text style={styles.titulo}>Adicionar Item</Text>

      <CustomInput 
        name="Nome" 
        placeholder="Nome do item" 
        control={control} 
        rules={{
          required: 'Nome do item é necessário'
        }}  
      />

      <Pressable onPress={onImagemPress}>
        <Ionicons name="add" size={35} color="black" />
      </Pressable>

      <CustomInput 
        name="descricao" 
        placeholder="Descrição" 
        control={control}
        multiline = {true}
        numberOfLines = {6} 
        rules={{
          required: 'Informe uma descrição'
        }}  
      />

      
      <CustomButton
        onPress={handleSubmit(onAddItemPress)}
        text={"Adicionar"}
      />

      <MenuTroca />
    </View>
  )
}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 32,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 14,
    marginVertical: 15,
  },
})

export default AddItemScreen