<template>
  <div id="app">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="prod in productos" :key="prod.id">
            <producto :producto="prod" v-on:agregar-carro="agregarProdCarr" :estaEnCarrito="estaEnCarrito(prod)"></producto>
          </div>
        </div>
      </div>

      <div class="col-md-5 my-5">
        <carrito :items="carrito" v-on:remover-item="removerProducto" v-on:pagar="pagar"></carrito>
      </div>
    </div>
  </div>
</template>

<script>
import productos from './productos.json'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

export default {
  name: 'App',
  components: {
    Producto,
    Carrito
  },
  data() {
    return {
      productos,
      carrito: []
    }
  },
  methods: {
    agregarProdCarr(producto) {
      this.carrito.push(producto);
    },
    estaEnCarrito(producto) {
      const item = this.carrito.find(item => item.id === producto.id);
      if(item) {
        return true;
      }
      return false;
    },
    removerProducto(producto) {
      this.carrito = this.carrito.filter(item => item.id !== producto.id);
    },
    pagar() {
      this.carrito = [];
      alert('Venta completada');
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
