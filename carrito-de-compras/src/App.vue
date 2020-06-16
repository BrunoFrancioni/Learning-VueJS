<template>
  <div id="app">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="prod in productos" :key="prod.id">
            <producto :producto="prod"></producto>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productos from './productos.json'
import Producto from './components/Producto'

export default {
  name: 'App',
  components: {
    Producto
  },
  data() {
    return {
      productos
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
