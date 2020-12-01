import React from 'react';
import { usePokemons, urlTratada } from '../../stores/Pokes';
import Header from '../../components/Header';
import './styles.css';

function Main() {
  const { filteredPokemon } = usePokemons();

  return (
    <>
      <Header />
      <div className="pokedex">
        <ul>{filteredPokemon.map(urlTratada)}</ul>
      </div>
    </>
  );
}

export default Main;
