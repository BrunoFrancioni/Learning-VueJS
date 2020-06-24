<template>
  <div id="app">
    <h1 class="title">Consultar Datos</h1>
    <button v-on:click="fetch">Consultar</button>

    <div v-for="character in characters" :key="character.id">
      {{ character }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data: () => {
    return {
      characters: []
    }
  },
  methods: {
    async fetch() {
      try {
        const result = await axios.get("https://rickandmortyapi.com/api/character")

        this.characters = result.data.results;
        console.log(result.data);
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>
