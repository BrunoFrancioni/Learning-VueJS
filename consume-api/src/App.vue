<template>
  <div id="app">
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success">R&M</span>
          <span class="subtitle">Personajes</span>
        </h1>

        <button class="button is-success is-rounded" v-on:click="fetch">Consultar</button>
      </div>
    </div>

    <div class="container">
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <character v-for="character in characters" :key="character.id" v-bind:character="character"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Character from './components/Character'

export default {
  name: 'App',
  components: {
    Character
  },
  data: () => {
    return {
      characters: []
    }
  },
  created() {
    this.fetch();
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
