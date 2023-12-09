import React, { useState } from "react";
import {
	View,
	StyleSheet,
} from "react-native";


import FlashcardScreen from "./Flash_Cards";

const body_contanier = [
    { question: "https://thumbs.dreamstime.com/b/taco-vector-illustration-72950754.jpg", answer: "Taco" },
    { question: "https://static.vecteezy.com/system/resources/previews/019/606/501/non_2x/grape-graphic-clipart-design-free-png.png", answer: "Grape" },
    { question: "https://static.vecteezy.com/system/resources/previews/019/613/288/non_2x/pizza-graphic-clipart-design-free-png.png", answer: "Pizza" },
    { question: "https://cdn-icons-png.flaticon.com/256/1206/1206237.png", answer: "Chicken" },
	{ question: "https://png.pngtree.com/png-vector/20191103/ourmid/pngtree-hot-dog-icon-cartoon-style-png-image_1922782.jpg", answer: "Hot Dog" },
    { question: "https://images.freeimages.com/fic/images/icons/1187/pickin_time/256/lettuce.png", answer: "Lettuce" },
	{ question: "https://media.istockphoto.com/id/1141529240/vector/simple-apple-in-flat-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=BTUl_6mGduAMWaGT9Tcr4X6n2IfK4M3HH-KCsr-Hrgs=", answer: "Apple" },
    { question: "https://svg-files.pixelied.com/acdae0bf-b301-4d45-bc4a-13d8f186cf1b/thumb-256px.png", answer: "Steak" },
    { question: "https://static.vecteezy.com/system/resources/previews/024/734/278/original/cartoon-illustration-one-fried-egg-symbol-of-healthy-food-for-breakfast-graphic-design-with-contour-clip-art-print-for-menu-and-showcase-isolated-on-white-background-vector.jpg", answer: "Eggs" },
    { question: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3157507/cake-clipart-md.png", answer: "Cake" },
	{ question: "https://i.pinimg.com/originals/f7/34/2b/f7342b25fbb3c006ba1573514c76c1cf.png", answer: "Pancakes" },
    { question: "https://media.istockphoto.com/id/685689158/vector/french-cheese-icon-flat-style.jpg?s=612x612&w=0&k=20&c=TIh57ju4f0UmpnboLk6sM6f0O4Vtl2O71mXjDd9ZAQo=", answer: "Cheese" },
    { question: "https://images.rawpixel.com/image_transparent_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xMl9oYW5kLWRyYXduX3dhdGVyY29sb3JfaWxsdXN0cmF0aW9uX2FfY2hvY29sYV83ZTY2MTkwYy0wNWY3LTQxNjEtOTZmYS1iYjZkMWQxNWU5OTNfMS5wbmc.png", answer: "Cookie" },
	{ question: "https://4vector.com/i/free-vector-banana-clip-art_120260_banana-clip-art/Banana_clip_art_hight.png", answer: "Banana" },
    { question: "https://freepngimg.com/thumb/corn/20790-2-corn-on-cob-clip-art.png", answer: "Corn" },

    // Add more flashcards here
  ];

<<<<<<< HEAD
const  Food = ({ navigation }) => {
=======
  

const Food = ({ navigation }) => {
>>>>>>> c808e39204cce7eacd397d84ac0c926d717429c8

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

export default Food;
