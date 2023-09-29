import { View, Text, StyleSheet, Pressable  } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type="primary"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`] ]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        borderRadius: 5,
        width: '100%',
        marginVertical: 10,
        alignItems: 'center'

    },

    container_primary:{
        backgroundColor: "#10735A",
    },

    container_secondary:{
        borderColor: "#24FFC8",
        borderWidth: 2,

    },

    container_links:{

    },


    text:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'

    },

    text_secondary:{
        color: "#fff",
    },

    text_links:{
        color: "#5C2BB3",
    },
})

export default CustomButton