<template>
  <div id="app">
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success">R&M</span>
          <span class="subtitle">Personajes</span>
        </h1>

        <div class="field has-addons os-pulled-right">
          <div class="control">
            <input 
              type="text" 
              v-model="search" 
              class="input is-rounded" 
              v-on:keyup.enter="searchData"
            >
          </div>
          <div class="control">
            <button class="button is-success is-rounded" v-on:click="searchData">Buscar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <character 
          @showModal="showModal"
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

    <div class="modal"
      :class="{ 'is-active': modal }"
      v-if="modal"
    >
      <div class="modal-background"
        @click="modal = false;"
      >
        
      </div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Acerca de: {{ currentCharacter.name }}</p>
        </header>

        <div class="modal-card-body">
          <p>Género: {{ currentCharacter.gender }}</p>
          <p>Estado: {{ currentCharacter.status }}</p>
          <p>Especie: {{ currentCharacter.species }}</p>
          <p>Tipo: {{ currentCharacter.type }}</p>
        </div>

        <footer class="modal-card-foot">
          <button class="button" @click="modal = false;">Cerrar</button>
        </footer>
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
      characters: [],
      page: 1,
      pages: 1,
      search: '',
      modal: false,
      currentCharacter: {}
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const params = {
        page: this.page,
        name: this.search
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
    },
    searchData() {
      this.page = 1;
      this.fetch();
    },
    showModal(id) {
      this.fetchOne(id);
    },
    async fetchOne(id) {
      try {
        const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

        this.modal = true;
        this.currentCharacter = result.data;
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>
