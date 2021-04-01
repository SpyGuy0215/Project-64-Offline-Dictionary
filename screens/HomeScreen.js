import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import {Header} from 'react-native-elements';
import dictionary from '../database';

export default class HomeScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			text: ' ',
			isSearchPressed: false,
			word: ' ',
			wordType: ' ',
			examples: [],
			definition: '',
		};
	}

	getWord = (word) => {
		console.log(word + ' is the word');
		var wordInput = word.toLowerCase().trim();

		try {
			var wordText = dictionary[wordInput]['word'];
			var lexicalCategory = dictionary[wordInput]['lexicalCategory'];
			var definition = dictionary[wordInput]['definition'];
			this.setState({
				word: word,
				wordType: lexicalCategory,
				definition: definition,
			});
		} catch (err) {
			alert('This word is not found');
			this.setState({
				text: ' ',
				isSearchPressed: false,
			});
		}
	};

	render() {
		return (
			<View style={styles.containerStyle}>
				<Header alignment={'center'} backgroundColor={'#333333'} centerComponent={{text: 'OnlineDict', style: {color: '#eeeeee', fontSize: 20}}} />
				<TextInput
					style={styles.inputStyle}
					onChangeText={(text) => {
						this.setState({
							text: text,
							isSearchPressed: false,
							word: ' ',
							wordType: ' ',
							examples: [],
							definition: ' ',
						});
					}}
					value={this.state.text}
				/>
				<TouchableOpacity
					onPress={() => {
						this.getWord(this.state.text);
					}}
				>
					<Text style={styles.textStyle}>Search!</Text>
				</TouchableOpacity>
				<Text style={styles.wordStyle}>{this.state.word}</Text>
				<Text style={styles.wordTypeStyle}>{this.state.wordType}</Text>
				<Text style={styles.definitionStyle}>{this.state.definition}</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		backgroundColor: '#121212',
		alignContent: 'center',
		width: Dimensions.get('window').width,
	},
	textStyle: {
		textAlign: 'center',
		color: 'white',
	},
	inputStyle: {
		backgroundColor: '#565656',
		marginTop: 50,
		alignSelf: 'center',
		width: Dimensions.get('window').width / 2,
		height: Dimensions.get('window').height / 25,
	},
	wordStyle: {
		fontSize: 40,
		textAlign: 'center',
		color: 'orange',
		marginTop: 40,
	},
	definitionStyle: {
		textAlign: 'center',
		color: 'white',
		marginTop: 20,
		fontSize: 15,
	},
	wordTypeStyle: {
		textAlign: 'center',
		color: 'orange',
		fontSize: 20,
		marginTop: 10,
	},
});
