<template>
    <div class="container my-5">
        <div class="image-fondo mt-5">
        <h1 class="text-white text-center text-titulo">Registrar Usuario</h1>
        </div>
        <b-form @submit.prevent="agregar" @reset.prevent="onReset" class="text-white text-center mt-5">
        <!-- obtener nombre -->
        <b-form-group
            id="input-group-1"
            label="Tu Nombre:"
            label-for="input-1"
        >
            <b-form-input
            id="input-1"
            v-model="form.nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            required
            ></b-form-input>
        </b-form-group>
        <!-- obtener correo -->
        <b-form-group
            id="input-group-2"
            label="Tu Correo:"
            label-for="input-2"
        >
            <b-form-input
            id="input-2"
            v-model="form.correo"
            type="email"
            placeholder="Ingresa tu correo"
            required
            ></b-form-input>
        </b-form-group>
        <!-- obtener nombre -->
        <b-form-group id="input-group-3" label="Tu Conraseña:" label-for="input-3">
            <b-form-input
            id="input-3"
            v-model="form.password"
            type="password"
            placeholder="Ingresa tu contraseña"
            required
            ></b-form-input>
        </b-form-group>

        <div class="mt-5">
            <b-button class= 'mr-3' type="submit" variant="primary">Ingresar</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </div>
        </b-form>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'FormularioTrabajo',
    data() {
        return {
            form: {
                nombre: '',
                correo:'',
                password: null,
            },
        }
    },
    methods: {
        agregar(){
            if (this.form.nombre && this.form.correo && this.form.password) {
                firebase.auth().createUserWithEmailAndPassword(this.form.correo, this.form.password)
                .then(() => {
                    
                }).catch((error) => console.error(error))
            }
        },
        onReset(event) {
            event.preventDefault()
            // Reseteo de las casillas
            this.form.email = ''
            this.form.name = ''
            this.form.password = ''
        }
    }
}
</script>

<style>

</style>