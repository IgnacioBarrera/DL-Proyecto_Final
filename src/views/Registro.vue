<template>
    <section class="container text-center">
        <h1 class="title is-1">Registrar</h1>
        <b-form>

            <b-form-group
                id="input-group-1"
                label="Tu nombre:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.nombre"
                type="text"
                placeholder="Ingersa tu nombre"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Tu Correo:"
                label-for="input-2"
            >
                <b-form-input
                id="input-2"
                v-model="form.correo"
                type="email"
                placeholder="Ingersa tu correo"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-3"
                label="Tu contraseña:"
                label-for="input-3"
            >
                <b-form-input
                id="input-3"
                v-model="form.password"
                type="password"
                placeholder="Ingersa tu contraseña"
                required
                ></b-form-input>
            </b-form-group>

            <b-button @submit.prevent="registrar">Registrar</b-button>

        </b-form>

    </section>
    
</template>
<script>
export default {
    name: 'Registro',
    data() {
        return {
            form:{
                nombre: '',
                correo: '',
                password: null,
            }
        }
    },
    registrar() {
        if(this.form.nombre && this.form.correo && this.form.password){
            console.log('Ingreso correctamente')

        } else {
            this.$router.push('/registro')
        }
    } 

}
</script>

<style>

</style>