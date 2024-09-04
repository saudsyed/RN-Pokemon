/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, SafeAreaView, Platform, ScrollView} from 'react-native';
import PokemonCard from './src/screens/PokemonCard';

function App() {
  const charmanderData = {
    name: 'Charmander',
    type: 'Fire',
    image: require('../PokemonCard/src/assets/images/charmander.png'),
    hp: 39,
    moves: ['Scratches', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  };

  const squirtleData = {
    name: 'Squirtle',
    type: 'Water',
    image: require('../PokemonCard/src/assets/images/squirtle.png'),
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  };

  const bulbasaurData = {
    name: 'Bulbasaur',
    type: 'Grass',
    image: require('../PokemonCard/src/assets/images/bulbasaur.png'),
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  };

  const pikachuData = {
    name: 'Pikachu',
    type: 'Electric',
    image: require('../PokemonCard/src/assets/images/pikachu.png'),
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Growl', 'Tail Whip'],
    weaknesses: ['Ground'],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;
