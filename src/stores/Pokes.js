import React, {
  useState, useEffect, createContext, useContext,
} from 'react';
import api from '../services/api';

const pokeContext = createContext();

// eslint-disable-next-line react/prop-types
export default function PegarPokemons({ children }) {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const pokeRes = [];
    async function loadPokemon() {
      for (let i = 1; i < 151; i += 1) {
        const url = api.get(`pokemon/${i}`);
        pokeRes.push(url.then((response) => response));
      }
      await Promise.all(pokeRes).then((resp) => {
        const pokemon = resp.map((response) => response.data);
        setFilteredPokemon(pokemon);
      });
    }
    setTimeout(() => {
      setLoading(true);
      loadPokemon();
    });
  }, []);

  return (
    <pokeContext.Provider value={{
      filteredPokemon,
      loading,
    }}
    >
      {children}
    </pokeContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(pokeContext);
  const { filteredPokemon, loading } = context;
  return { filteredPokemon, loading };
}
