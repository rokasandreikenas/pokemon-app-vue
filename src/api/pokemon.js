import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

export const getPokemons = async () => {
  const resp = await axios.get(URL);
  return resp.data;
};
