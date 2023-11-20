 
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card';


const FlashcardScreen = () => {
  const flashcards = [
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    { question: "question", answer: "answer" },
    // Add more flashcards here
  ];

  const [flippedState, setFlippedState] = useState(Array(flashcards.length).fill(false));

  const handleCardPress = (index) => {
    setFlippedState((prevState) => {
      const newFlippedState = [...prevState];
      newFlippedState[index] = !newFlippedState[index];
      return newFlippedState;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {flashcards.map((flashcard, index) => (
        <FlipCard
          key={index}
          style={styles.cardContainer}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={flippedState[index]}
          clickable={true}
          onFlipEnd={() => {}}
        >
          {/* Face Side */}
          <View style={[styles.face, styles.card]}>
            <TouchableOpacity onPress={() => handleCardPress(index)}>
              <Text style={styles.cardText}>{flashcard.question}</Text>
            </TouchableOpacity>
          </View>
          {/* Back Side */}
          <View style={[styles.back, styles.card]}>
            <TouchableOpacity onPress={() => handleCardPress(index)}>
              <Text style={styles.cardText}>{flashcard.answer}</Text>
            </TouchableOpacity>
          </View>
        </FlipCard>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  cardContainer: {
    width: 300,
    height: 200,
    margin: 8,
  },
  face: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FlashcardScreen;
