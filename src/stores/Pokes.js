import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import api from '../services/api';
import { CardPoke } from '../components/CardPokemon/styles';

export const PokeContext = createContext();

function pegarPokemons({ children }) {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function pegaPoke() {
      const resp = await api.get('');
      const data = await resp.data.results;
      const results = data.map((pokemon, index) => ({ ...pokemon, number: index + 1 }));
      setFilteredPokemon(results);
    }
    pegaPoke();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <PokeContext.Provider value={{
      filteredPokemon,
      loading,
    }}
    >
      {children}
    </PokeContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokeContext);
  const { filteredPokemon, loading } = context;
  return { filteredPokemon, loading };
}

export function showPokemon(poke, index) {
  const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`;
  return (
    <CardPoke key={index + 1}>
      <h1>{poke.name}</h1>
      <img src={imgURL} alt="img" />
    </CardPoke>
  );
}

export default pegarPokemons;
