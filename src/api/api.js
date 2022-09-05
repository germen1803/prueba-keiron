import axios from 'axios';

export const getListPokemons = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=25");
    if (res.status === 200) {
      return res.data.results;
    }
  } catch (error) {
    console.log(error)
  }
}

export const getPokemon = async (url) => {
  try {
    const res = await axios.get(url)
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error)
  }
}

export const getEvolution = async (id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error)
  }
}