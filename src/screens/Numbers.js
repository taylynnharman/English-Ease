import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
} from "react-native";

import FlashcardScreen from "./Flash_Cards";

	

const Numbers_container = [
    
	{ question: "https://th.bing.com/th/id/R.e16d19e020c2f8fd9c137feaa9c46711?rik=ZtTVTXhjYdmMVA&pid=ImgRaw&r=0", answer: "One"},
	{ question: "https://th.bing.com/th/id/OIP.ng4UE-v-HMCqH1QunPXkuwHaKr?w=178&h=257&c=7&r=0&o=5&pid=1.7", answer: "Two"},
	{ question: "https://th.bing.com/th/id/OIP.RJ1jsWlB_DqzpGklMS58LwHaE_?rs=1&pid=ImgDetMain", answer: "Three"},
	{ question: "https://th.bing.com/th/id/OIP.Jihuq1oBZyckj92SLniMAgHaHa?rs=1&pid=ImgDetMain", answer: "Four"},
	{ question: "https://th.bing.com/th/id/OIP.tiAJ5xwchXvdTgDNJa7eMQAAAA?rs=1&pid=ImgDetMain", answer: "Five"},
	{ question: "https://th.bing.com/th/id/OIP.Ka3UVw7Dt4psdRHFjzAo3gHaHa?rs=1&pid=ImgDetMain", answer: "Six"},
	{ question: "https://th.bing.com/th/id/OIP.jGIz1M_sIu07ouBmjB2xcAHaHa?rs=1&pid=ImgDetMain", answer: "Seven"},
	{ question: "https://th.bing.com/th/id/OIP.lD3GXgTloeSYKuzJ4F-DKgHaH_?rs=1&pid=ImgDetMain", answer: "Eight"},
	{ question: "https://th.bing.com/th/id/OIP.Nx_Vx5kugC1VUvlOQWd-ugHaF7?rs=1&pid=ImgDetMain", answer: "Nine"},
	{ question: "https://th.bing.com/th/id/OIP.Oc-Yg2PF5JXlAO3SZ7ESqAAAAA?rs=1&pid=ImgDetMain", answer: "Ten"},
	
	
	
	
    // Add more flashcards here
];

  

const Numbers = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<FlashcardScreen dictonary={Numbers_container} />
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
