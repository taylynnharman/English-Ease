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
const animal_contanier = [
    { question: 'https://th.bing.com/th/id/OIP.UCY5_cmXOyAALQJNC9indwHaGW?rs=1&pid=ImgDetMain', answer: "Bird" },
    { question: "https://media.istockphoto.com/id/115962508/photo/zebra.webp?b=1&s=170667a&w=0&k=20&c=SKz_AoanGjCdZg1r-zBS8QZrpz-AxYK22lo5YqUSL-g=", answer: "zebra" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
	{ question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    // Add more flashcards here
  ];

  

const Animals = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<FlashcardScreen dictonary={animal_contanier} />
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

export default Animals;
