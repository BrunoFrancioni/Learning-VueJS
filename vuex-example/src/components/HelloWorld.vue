<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <h2>{{ $store.getters.nombreCompleto }}</h2>

    <h3>Amigos</h3>
    <input type="text" v-model="amigo">
    <button @click="addAmigo">Agregar Amigo</button>
    <ul>
      <li v-for="(amigo, index) in $store.state.amigos" :key="index">{{ amigo }}
        <button @click="delAmigo(index)">Eliminar amigo</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      amigo: ''
    }
  },
  methods: {
    addAmigo() {
      this.$store.dispatch('addAmigoAction', this.amigo);
      this.amigo = '';
    },
    delAmigo(index) {
      this.$store.dispatch('delAmigoAction', index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
