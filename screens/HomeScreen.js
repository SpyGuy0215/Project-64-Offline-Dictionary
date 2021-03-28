import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.component{
    render() {
        return(
            <View>
                <Text>Dictionary</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle:{
        color: "white"
    }
})