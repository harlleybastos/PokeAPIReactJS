import React from 'react';
import { usePokemons } from '../../contexts/Pokes';

// eslint-disable-next-line import/no-unresolved
import './styles.css';

function Main() {
  const { pokemon } = usePokemons();

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
        {pokemon.map(pokeURL)}
      </ul>
    </div>

  );
}

export default Main;
