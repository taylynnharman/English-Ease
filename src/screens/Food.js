import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
} from "react-native";

const animal_contanier = "";

const Food = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<Text>Food</Text>
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
