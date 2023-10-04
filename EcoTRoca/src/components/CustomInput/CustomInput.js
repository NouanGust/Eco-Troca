import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

import { Controller } from 'react-hook-form'

const CustomInput = ({control, name, rules={},  placeholder, SecureTextEntry, multiline=false, NumberOfLines=1}) => {
  return (
        <Controller 
          control={control}
          name={name}
          rules={rules}
          render={({
            field: {value, onChange, onBlur}, 
            fieldState: {error},
          }) => (
            <>
              <View style={[styles.container, {borderBlockColor: error ? 'red' : '#e8e8e8'}]}>
                <TextInput 
                  value={value} 
                  placeholder={placeholder} 
                  onChangeText={onChange} 
                  onBlur={onBlur}
                  multiline={multiline}
                  NumberOfLines={NumberOfLines}
                  style={[styles.input, {borderBlockColor: error ? 'red' : '#e8e8e8'}]}
                  secureTextEntry={SecureTextEntry}
                />
              </View>
              {error && (
              
                <Text style={{color: 'red', alignSelf: 'stretch'}} >{error.message || 'erro'}</Text>
              )}
          </>
          )}
        />
  )
}

const styles = StyleSheet.create({
    container:{
      width: '100%',
      borderStyle: 'none',


    },
    input:{
      backgroundColor: "white",
      width: '100%',

      borderColor: "#e7e7e7",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
    },



})

export default CustomInput