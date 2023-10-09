import React, {useState} from 'react'
import { View, StyleSheet, Image, Text, Pressable} from "react-native"

import { useNavigation } from '@react-navigation/native'

const Item = props => {

    const [texto, setTexto] = useState("")

    const navigation = useNavigation()
    const onItemPress = () => {
        navigation.navigate('AddItem')
    }

    const onBtnPress = () => {
        navigation.navigate('Chat')
    }



    return(
        <View style={styles.itensContainer}>

            <View style={styles.imageContainer}>
                <Image
                    source={props.src}
                    style={styles.imagemItem}

                />

            </View>



            <View style={styles.infoContainer}>
                <Text style={styles.itemText}>
                    {props.name}
                </Text>
                <Text>
                    {props.descricao}
                </Text>
                <Pressable style={styles.btn} onPress={onBtnPress(produtos.name)}>
                    <Text style={styles.btnText}>
                        Eu quero!
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const produtos = [
    {id: 1, name: "Sofá usado", src: "sofa.jpg", texto: "A forma correta de descartar esse tipo de material é...", descricao: " Sofá de dois lugares usado e em bom estado.",},
    {id: 2, name: "Kit pilhas", src: "pilhas-troca.jpg", texto: "A forma correta de descartar esse tipo de material é...", descricao: "Kit de pilhas usadas, apenas para descarte.",},
    {id: 3, name: "Kit de panelas", src: "panelas.jpg", texto: "A forma correta de descartar esse tipo de material é...", descricao: "Kit de panelas usadas em bom estado.",},
    
]

const Itens = () => {

    return(

        
        <View>
            {produtos.map((produtos) => <Item name={produtos.name} src={require(`../../../assets/${produtos.src}`)} texto={produtos.texto} descricao={produtos.descricao} />)}
            {/* <Item name={produtos[0].name} src={require(`../../../assets/${produtos[0].src}`)} texto={produtos[0].texto} descricao={produtos[0].descricao} />
            <Item name={produtos[1].name} src={require(`../../../assets/${produtos[1].src}`)} texto={produtos[1].texto} descricao={produtos[1].descricao} />
            <Item name={produtos[2].name} src={require(`../../../assets/${produtos[2].src}`)} texto={produtos[2].texto} descricao={produtos[2].descricao} /> */}
        </View>

    )

}

export default Itens

const styles = StyleSheet.create({

    itensContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderColor: "#ccc",
        borderWidth: 1,
        marginVertical: 15,
    },

    imageContainer:{
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: "50%",
        shadowColor: "#171717",
        shadowOffset: {width: -2,  height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,

  
    },

    infoConatiner:{
        flexDirection: 'column',

    },

    imagemItem:{
        width: 140,
        height: 140,
        
    },

    itemText:{
        textAlignVertical: "center",
        fontSize: 18,
    },

    btn:{
        width: "60%",
        marginTop: 30,
        backgroundColor: "#10735A",
        padding: 15,
        borderRadius: 15,
    },
    
    btnText:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})