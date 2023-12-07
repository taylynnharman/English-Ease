import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
} from "react-native";

import FlashcardScreen from "./Flash_Cards";



// const animal_contanier = ["Bird", "Chicken", "Cow"];
const body_contanier = [
    
	{ question: "1", answer: "One" },
	{ question: "1", answer: "One" },
	{ question: "1", answer: "One" },
	{ question: "1", answer: "One" },
	{ question: "1", answer: "One" },
	{ question: "1", answer: "One" },
	{ question: "1", answer: "One" },
	{ question: "1", answer: "One" },
	{ question: "1", answer: "One" },
	{ question: "1", answer: "One" },
	
    // Add more flashcards here
  ];

  

const Numbers = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<FlashcardScreen dictonary={body_contanier} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	alphabetContainer: {
		flexDirection: "column",
		alignItems: "center",
	},
	letter: {
		fontSize: 24,
		margin: 5,
	},
	selectedLetter: {
		fontSize: 24,
		margin: 5,
		backgroundColor: "lightblue",
		borderRadius: 5,
	},
});

export default Numbers;
