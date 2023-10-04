import React, {useState} from 'react'
import { View, StyleSheet, Image, Text, Pressable} from "react-native"

const Item = props => {

    const [texto, setTexto] = useState("")
    return(
        <View style={styles.itensContainer}>

            <View style={styles.imageContainer}>

                <Pressable onPress={ () => setTexto(props.texto) }>
                    <Image
                        source={props.src}
                        style={styles.imagemItem}

                    />
                </Pressable>



            </View>



            <Text style={styles.itemText}>
                {props.name}
            </Text>


            <View>
                <Text>
                    {texto}
                </Text>

            </View>
        </View>
    )
}

const produtos = [
    {id: 1, name: "Oléo", src: "oleo.png", texto: "A forma correta de descartar esse tipo de material é..."},
    {id: 2, name: "Garrafa Pet", src: "pet.png", texto: "A forma correta de descartar esse tipo de material é..."},
    {id: 3, name: "Pilhas", src: "pilhas.png", texto: "A forma correta de descartar esse tipo de material é..."}
]

const Itens = () => {
    return(
        <View>
            <Item name={produtos[0].name} src={require(`../../../assets/${produtos[0].src}`)} texto={produtos[0].texto} />
            <Item name={produtos[1].name} src={require(`../../../assets/${produtos[1].src}`)} texto={produtos[1].texto} />
            <Item name={produtos[2].name} src={require(`../../../assets/${produtos[2].src}`)} texto={produtos[2].texto} />
        </View>
    )
}

export default Itens

const styles = StyleSheet.create({

    itensContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
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

    imagemItem:{
        width: 140,
        height: 140,
        
    },

    itemText:{
        textAlignVertical: "center",
        fontSize: 18,
    },
})