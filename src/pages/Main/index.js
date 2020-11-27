import React, { useState, useEffect } from 'react';
import api from '../../services/api';
// eslint-disable-next-line import/no-unresolved
import './styles.css';

function Main() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function pegarPokes() {
      const response = await api.get('');
      const data = await response.data;
      setPokemons(data.results);
    }
    pegarPokes();
  }, []);

  const pokeURL = (poke) => {
    const pokeNum = poke.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${pokeNum}.png`;
    return (
      <li className="pokeLI" key={pokeNum}>
        <h1>{poke.name}</h1>
        <img src={imgURL} alt="img" />
      </li>
    );
  };

  return (
    <div className="pokedex">
      <ul>
        {pokemons.map(pokeURL)}
      </ul>
    </div>

  );
}

export default Main;
