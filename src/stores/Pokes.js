import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import api from '../services/api';

export const PokeContext = createContext();

function pegarPokemons({ children }) {
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    async function pegaPoke() {
      const resp = await api.get('');
      const data = await resp.data.results;
      const results = data.map((pokemon, index) => ({ ...pokemon, number: index + 1 }));
      setFilteredPokemon(results);
    }
    pegaPoke();
  }, []);

  return (
    <PokeContext.Provider value={{
      filteredPokemon,
    }}
    >
      {children}
    </PokeContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokeContext);
  const { filteredPokemon } = context;
  return { filteredPokemon };
}

export function urlTratada(poke, index) {
  const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`;
  return (
    <li className="pokeLI" key={index + 1}>
      <h1>{poke.name}</h1>
      <img src={imgURL} alt="img" />
    </li>
  );
}

export default pegarPokemons;
