import React, { useState } from 'react';
import Pokemon from './pokemon';

const Pokemons = (props) => {

  const { listPokemons } = props;
  const [search, setSearch] = useState('')


  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  /* Si el estado de search es 0 se listarán todos los pokemones, en caso contrario se listará
  el pokemon que incluya las palabras incluídas en search */
  const filterPokemon = () => {
    if (search.length === 0) {
      return listPokemons
    }

    const filtered = listPokemons.filter(pk => pk.name.includes(search))
    return filtered
  }

  return (
    <div className="grid">
        <input
          className="input"
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={onChangeSearch}
        />


        {
          filterPokemon().map((pokemon) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />
          })
        }

    </div>
  );
}

export default Pokemons;