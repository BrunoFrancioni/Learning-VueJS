// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
/*
Vue.component('saludo', {
  template: '<h1>Hola - Introducción a componentes </h1>'
});

Vue.component('titulo', {
  template: '<h3>Listado de Frameworks JS</h3>'
});
*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'  
})
