import React from 'react';
import { usePokemons, showPokemon } from '../../stores/Pokes';
import Header from '../../components/Header';
import { PokeballLoading } from '../../components/Pokeball/PokeballLoading/styles';
import { PokeList } from '../../components/Pokedex/styles';

function Main() {
  const { filteredPokemon, loading } = usePokemons();

  const renderShowPokemon = () => (
    <PokeList>
      <ul>{filteredPokemon.map(showPokemon)}</ul>
    </PokeList>
  );

  return (
    <>
      <Header />
      {loading ? renderShowPokemon() : <PokeballLoading />}
    </>
  );
}

export default Main;
