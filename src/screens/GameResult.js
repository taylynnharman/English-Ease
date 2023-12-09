


import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GameResult = ({ isWinner, onPlayAgain }) => {
  const resultText = isWinner ? "Tap to Play Again" : "Game over. Try again!";
  return (
    <View style={styles.container}>
        <View style={styles.background}>
      <Text style={styles.resultText}>{resultText}</Text>
      <TouchableOpacity onPress={onPlayAgain} style={styles.playAgainButton}>
        <Text style={styles.playAgainButtonText}>Play Again</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 400,
    left: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    backgroundColor: "yellow",
    padding: 20,
    borderRadius: 10,
    borderWidth: 2, 
    borderColor: "black", 
    alignItems: "center",
  },
  resultText: {
    fontSize: 24,
    marginBottom: 20,
  },
  playAgainButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  playAgainButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default GameResult;
