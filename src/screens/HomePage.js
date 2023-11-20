import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to EnglishEase</Text>
      <Text style={styles.subtitle}>Please pick a module to start</Text>

{/* (Animal Module) */}
      <TouchableOpacity
        onPress={() => { 
          navigation.navigate('Animal');
        }}
      >
        <Image
          source={require('../../assets/images/animal.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>

      {/* Food Module */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Foody');
        }}
      >
        <Image
          source={require('../../assets/images/food.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>

      {/* BodyParts Module */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Body_parts');
        }}
      >
        <Image
          source={require('../../assets/images/bodyparts.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>

            {/* Numbers Module */}
            <TouchableOpacity
        onPress={() => {
          navigation.navigate('Num');
        }}
      >
        <Image
          source={require('../../assets/images/numbers.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
          {/* Hangman Module */}
          <TouchableOpacity
          onPress={() => {
            navigation.navigate('AnotherPage2');
          }}
        >
          <Image
            source={require('../../assets/images/hangman.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        

        </View>

        
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonImage: {
    width: 100, 
    height: 100,
  },
});

export default HomePage;

