<template>
    <div class="">
        <h1>Informactión del Usuario</h1>
        <router-link :to="{ name: 'Users', params: {id: item} }" v-for="(item, index) in ArregloUsuarios" :key="index">
            <button>{{ item }}</button>
        </router-link>
        <Usuario></Usuario>
    </div>
</template>

<script>
import Usuario from '../components/Usuario.vue'

export default {
    name: 'Usuarios',
    components: {
        Usuario
    },
    data() {
        return {
            ArregloUsuarios: ['grover', 'carlos', 'luisa', 'carla']
        }
    }
}
</script>

<style>

</style>