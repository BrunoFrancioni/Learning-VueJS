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
        <character 
          v-for="character in characters" 
          :key="character.id" 
          v-bind:character="character"
        />
      </div>

      <nav class="pagination" role="navegation" aria-label="pagination">
        <a class="pagination-previous" v-on:click="changePage( page - 1 )">Anterior</a>
        
        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current">{{ page }}</a>
          </li>
        </ul>

        <a class="pagination-next" v-on:click="changePage( page + 1 )">Siguiente</a>
      </nav>
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
      characters: [],
      page: 1,
      pages: 1
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const params = {
        page: this.page
      }

      try {
        const result = await axios.get("https://rickandmortyapi.com/api/character", { params });

        this.characters = result.data.results;
        this.pages = result.data.info.pages;
        console.log(result.data);
      } catch(error) {
        console.log(error);
      }
    },
    changePage(page) {
      this.page = (page <= 0 || page > this.pages) ? this.page : page;
      this.fetch()
    }
  }
}
</script>

<style>

</style>
