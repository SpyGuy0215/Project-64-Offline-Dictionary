import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import {Header} from 'react-native-elements'; 

export default class HomeScreen extends React.Component{
    constructor() {
        super(); 
        this.state={
            text: " ",
            isSearchPressed: false, 
            word: " ", 
            lexicalCategory: " ", 
            examples: [], 
            definition: "" 
        }
    }

    getWord = (word) => {
        var searchKeyword = word.toLowerCase(); 
        var url = "https://rupinwhitehatjr.github.io.dictionary/" + searchKeyword + ".json"

       return fetch (url).
       then((data) =>{
        if (data.status === 200) {
            return data.json();
        }
        else {
            return "Error Getting Word";
        }
    })
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                <Header
                    alignment={"center"} 
                    backgroundColor={"#333333"}
                    centerComponent={{text:"OnlineDict", style:{color: "#eeeeee", fontSize: 20}}}
                />
                <TextInput style={styles.inputStyle} onChangeText={text => {
                    this.setState({
                        text: text,
                        isSearchPressed: false, 
                        word: " ", 
                        lexicalCategory: " ", 
                        examples: [], 
                        definition: " "
                    })
                }}
                value={this.state.text}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor: "#121212",
        alignContent: "center", 
        width: Dimensions.get('window').width
    },
    textStyle:{
        textAlign: "center",
        color: "white",
    }, 
    inputStyle:{
        backgroundColor: "gray", 
        marginTop: 50, 
        alignSelf: "center", 
        width: Dimensions.get('window').width/2, 
        height: Dimensions.get('window').height/25
    }
})