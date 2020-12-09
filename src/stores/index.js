import { createStore } from 'redux';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import api from '../services/api';

const INITIAL_STATE = () => {
  const [pokemon, setPokemon] = useState([]);

  for (let i = 1; i < 151; i += 1) {
    api.get(`/pokemon/${i}`).then((response) => {
      setPokemon([{
        id: response.id,
        name: response.name,
        hp: response.data.stats[5].base_stat,
      }]);
      console.log(pokemon);
      return pokemon;
    });
  }
};

function pokemons(state = INITIAL_STATE) {
  return state;
}

const store = createStore(pokemons);
export default store;
