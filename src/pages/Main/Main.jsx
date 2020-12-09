import React from 'react';
import { CardPoke, PokeType } from '../../components/CardPokemon/styles';
import { usePokemons } from '../../stores/Pokes';
import Header from '../../components/Header';
import { PokeballLoading } from '../../components/Pokeball/PokeballLoading/styles';
import { PokeList } from '../../components/Pokedex/styles';
import { CenterComponent } from '../../components/CenterComponent/styles';
import { Input } from '../../components/Input/styles';

function Main() {
  const { filteredPokemon, loading } = usePokemons();

  function showPokemon(poke) {
    // eslint-disable-next-line no-undef
    const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`;
    const pokeTypes = poke.types.map((types) => types.type.name).join(' | ');
    console.log(pokeTypes);
    return (
      <CardPoke key={poke.id}>
        <h1>{poke.name}</h1>
        <img src={imgURL} alt="img" />
        <PokeType>{pokeTypes}</PokeType>
      </CardPoke>
    );
  }

  const renderShowPokemon = () => (
    <PokeList>
      <ul>{filteredPokemon.map(showPokemon)}</ul>
    </PokeList>
  );

  return (
    <>
      <Header />
      <CenterComponent>
        <Input placeholder="Digite o nome ou numero do pokemon" />
      </CenterComponent>
      {loading ? renderShowPokemon() : <PokeballLoading /> }
    </>
  );
}

export default Main;
