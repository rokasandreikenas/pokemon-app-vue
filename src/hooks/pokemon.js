import { useQuery } from "vue-query";
import { getPokemons } from "../api/pokemon";

const POKEMONS = "POKEMONS";

export const useFetchPokemons = () => {
  return useQuery(POKEMONS, getPokemons);
};
