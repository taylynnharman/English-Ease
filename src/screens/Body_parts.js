import React, { useState } from "react";
import {
	View,
	StyleSheet,
} from "react-native";


import FlashcardScreen from "./Flash_Cards";

// const animal_contanier = ["Bird", "Chicken", "Cow"];
const body_contanier = [
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

  

const Body = ({ navigation }) => {

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

export default Body;
