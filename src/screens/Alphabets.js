import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
} from "react-native";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Alphabet = ({ navigation }) => {
	const [selectedLetter, setSelectedLetter] = useState(null);

	const handleLetterPress = (letter) => {
		setSelectedLetter(letter);
	};

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.alphabetContainer}>
				{alphabet.split("").map((letter, index) => (
					<TouchableHighlight
						key={index}
						onPress={() => handleLetterPress(letter)}
						underlayColor="lightgray"
						style={
							selectedLetter === letter ? styles.selectedLetter : styles.letter
						}
					>
						<Text>{letter}</Text>
					</TouchableHighlight>
				))}
			</ScrollView>
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

export default Alphabet;
