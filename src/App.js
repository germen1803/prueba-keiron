import React from "react";
import Navbar from "./components/navbar";
import Pokemons from "./components/pokemonsList";

import { getListPokemons, getPokemon } from "./api/api";
import { useState, useEffect } from 'react';

function App() {

  //Estado lista de pokemones
  const [listPokemons, setListPokemons] = useState([]);

  // llamada a la función getPokemon para hacer la llamada a través de la API
  const listarPokemons = async () => {
    const data = await getListPokemons()
    const promise = data.map( async(pk) => {
      return await getPokemon(pk.url)
    })
    const res = await Promise.all(promise)
    setListPokemons(res)
  }

  useEffect(() => {
    listarPokemons()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Pokemons listPokemons={listPokemons} />
    </div>
  )

}

export default App;