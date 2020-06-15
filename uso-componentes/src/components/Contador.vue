<template>
    <div>
        <button @click='contar'>{{ contador }}</button>
    </div>
</template>

<script>
export default {
    name: 'Contador',
    data(){
        return  {
            contador: 0
        }
    },
    methods: {
        contar: function() {
            this.contador++;
        }
    }
}
</script>

<style>

</style>