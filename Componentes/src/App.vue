<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <EjemploPost/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import EjemploPost from './components/Posts'

export default {
  name: 'App',
  components: {
    HelloWorld,
    EjemploPost
  }
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
</style>
