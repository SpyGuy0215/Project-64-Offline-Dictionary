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
                }}></TextInput>
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