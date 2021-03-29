import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'; 

export default class HomeScreen extends React.component{
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

    getWord = async (word) => {
        var searchKeyword = word.toLowerCase(); 
        var url = "https://rupinwhitehatjr.github.io.dictionary/" + searchKeyword + ".json"

        const data = await fetch(url);
        if (data.status === 200) {
            return data.json();
        }
        else {
            return "Error Getting Word";
        }
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                <Header>Dictionary</Header>
                <TextInput onChangeText={text => {
                    this.setState({
                        text: text,
                        isSearchPressed: false, 
                        word: " ", 
                        lexicalCategory: " ", 
                        examples: [], 
                        definition: ""
                    })
                }}
                value={this.state.text}
                ></TextInput>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor: "#121212",
        alignContent: "center"
    },
    textStyle:{
        textAlign: "center",
        color: "white",
    }
})