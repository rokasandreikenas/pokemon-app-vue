<template>
  <h1 class="title">Pokedex</h1>
  <PokemonList :pokemons="pokemons" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import PokemonList from "./components/PokemonList.vue";
import { getPokemons } from "./api/pokemon";

const pokemons = ref([]);

onMounted(async () => {
  try {
    const response = await getPokemons();
    pokemons.value = response.results;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
body {
  padding: 20px;
  margin: 0;
  font-family: "Heebo", Helvetica, Arial, sans-serif;
  background-color: #1f2223;
}

h2 {
  margin: 0;
}

a {
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
}

.title {
  text-align: center;
  color: #fff;
  font-weight: 300;
  font-size: 58px;
}
</style>
