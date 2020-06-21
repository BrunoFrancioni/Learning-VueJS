<template>
    <div class="container">
        <form action="">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <h1>Formulario de Contacto</h1>
                    <hr>
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" class="form-control" v-model="datosPersona.nombre">
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="text" id="email" class="form-control" v-model="datosPersona.email">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <label for="mensaje">Mensaje</label><br>
                    <textarea id="mensaje" cols="35" rows=5 v-model="mensaje"></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <h4>Seleccione una opcion</h4>
                    <div class="form-group">
                        <label for="enviarmail">
                            <input type="checkbox" id="enviarmail" value="enviarmail" v-model="opcionMail">Enviar Email
                        </label> &nbsp;&nbsp;
                        <label for="enviarmecopia">
                            <input type="checkbox" id="enviarcopia" value="enviarcopia" v-model="opcionMail">Enviar una Copia
                        </label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <h4>Seleccione su género</h4>
                    <div class="form-group">
                        <label for="masculino">
                            <input type="radio" id="masculino" value="masculino" v-model="genero">Masculino
                        </label> &nbsp;&nbsp;
                        <label for="femenino">
                            <input type="radio" id="femenino" value="femenino" v-model="genero">Femenino
                        </label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <label for="horario">Horario</label>
                    <select id="horario" class="form-control" v-model="horario">
                        <option value="manana">Mañana</option>
                        <option value="tarde">Tarde</option>
                        <option value="noche">Noche</option>
                    </select>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <button class="btn btn-primary" @click.prevent="enviar()">Enviar datos</button>
                </div>
            </div>
        </form>
        <br>
        <div class="row" v-if="enviado">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3>Datos Ingresados</h3>
                    </div>
                    <div class="panel-body">
                        <p>Nombre: {{ datosPersona.nombre }}</p>
                        <p>Email: {{ datosPersona.email }}</p>
                        <p style="white-space:pre">Mensaje: <br>{{ mensaje }}</p>
                        <p>Opción de envío:
                            <ul>
                                <li v-for="(item, index) in opcionMail" :key="index">{{ item }}</li>
                            </ul>
                        </p>
                        <p>Género: {{ genero }}</p>
                        <p>Horario: {{ horario }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Formulario',
    data() {
        return {
            datosPersona: {
                nombre: '',
                email: ''
            },
            mensaje: '',
            opcionMail: [],
            genero: '',
            horario: '',
            enviado: false
        }
    },
    methods: {
        enviar() {
            this.enviado = true;
        }
    }
}
</script>

<style>

</style>