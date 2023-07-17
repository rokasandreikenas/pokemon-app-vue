<template>
  <div class="list">
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      :pokemon="pokemon"
      :isFavorite="pokemon.name === favoritePokemon"
      @click="handleSelectFavorite(pokemon.name)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import PokemonCard from "./PokemonCard.vue";

const props = defineProps({
  pokemons: Array,
});

const favoritePokemon = ref(localStorage.getItem("favorite"));

const handleSelectFavorite = (name) => {
  if (name === favoritePokemon.value) {
    favoritePokemon.value = "";
    localStorage.removeItem("favorite");
  } else {
    favoritePokemon.value = name;
    localStorage.setItem("favorite", name);
  }
};
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 20px;
  justify-items: stretch;
  max-width: 800px;
  margin: 0 auto;
}
</style>
