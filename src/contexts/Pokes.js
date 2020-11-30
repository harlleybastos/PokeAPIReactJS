import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import api from '../services/api';

export const PokeContext = createContext();

function pegarPokemons({ children }) {
  const [pokemon, setPokemons] = useState([]);

  useEffect(() => {
    async function pegaPoke() {
      const resp = await api.get('');
      const data = await resp.data;
      setPokemons(data.results);
      return pokemon;
    }
    pegaPoke();
  }, []);

  return (
    <PokeContext.Provider value={{
      pokemon,
      setPokemons,
    }}
    >
      {children}
    </PokeContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokeContext);
  const { pokemon, setPokemons } = context;
  return { pokemon, setPokemons };
}

export default pegarPokemons;
