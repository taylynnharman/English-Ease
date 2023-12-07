import React, { useState } from "react";
import {
	View,
	StyleSheet,
} from "react-native";


import FlashcardScreen from "./Flash_Cards";

// const animal_contanier = ["Bird", "Chicken", "Cow"];
const body_contanier = [
    { question: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Fort_Ross_Elena_wearing_Traditional_Russian_Costume_%28cropped%29.jpg/240px-Fort_Ross_Elena_wearing_Traditional_Russian_Costume_%28cropped%29.jpg", answer: "nose" },
    { question: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Human_eye_with_blood_vessels.jpg", answer: "eye" },
    { question: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/732x549_THUMBNAIL_Ear_Infection_in_Adults.jpg", answer: "ear" },
    { question: "https://www.carrollbutlerdds.com/blog/wp-content/uploads/2021/09/AdobeStock_95489929__1632323164_49698-1-300x186.jpg", answer: "mouth" },
    { question: "https://uploads-ssl.webflow.com/577065f4e06b550b0c190c5c/577065f4e06b550b0c191120_shutterstock_367067165%20copy.jpg", answer: "arm" },
    { question: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYk4VjuYSWuIBxRGotUtOjG_Ii1uVSPu_dbA&usqp=CAU", answer: "hand" },
    { question: "https://d1pra95f92lrn3.cloudfront.net/media/thumb/8542_fit512.jpg", answer: "leg" },
    { question: "https://www.topdoctors.co.uk/files/Image/large/41a6012f94507733ad8ef49d4dccb0ae.jpg", answer: "foot" },
    { question: "https://www.abingtonfamilydentalcare.com/blog/wp-content/uploads/2022/09/Womans-healthy-tongue-after-visit-to-dentist-in-Abington.jpg", answer: "tongue" },
    { question: "https://i2.wp.com/www.hadviser.com/wp-content/uploads/2020/01/18-chocolate-hairstyle-with-caramel-balayage-B5ZYpXiB_o_.jpg?resize=1080%2C1350&ssl=1", answer: "hair" },
   
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
