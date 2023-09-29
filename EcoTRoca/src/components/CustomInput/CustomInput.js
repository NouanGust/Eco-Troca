import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, SecureTextEntry }) => {
  return (
    <View style={styles.container}>
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={SecureTextEntry}
            style={styles.input}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ccc",
        width: '100%',

        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,



    },
    input:{},



})

export default CustomInput