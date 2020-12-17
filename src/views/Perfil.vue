<template>
    <div class="container my-5">
        <div class="image-fondo mt-5">
        <h1 class="text-white text-center text-titulo">Ingresa</h1>
        </div>
        <b-form @submit="onSubmit" @reset="onReset" class="text-white text-center mt-5">
        <!-- obtener email -->
        <b-form-group
            id="input-group-1"
            label="Tu Correo:"
            label-for="input-1"
        >
            <b-form-input
            id="input-1"
            v-model="form.correo"
            type="email"
            placeholder="Ingersa tu correo"
            required
            ></b-form-input>
        </b-form-group>
        <!-- obtener nombre -->
        <b-form-group id="input-group-2" label="Tu Conraseña:" label-for="input-2">
            <b-form-input
            id="input-2"
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
export default {
    name: 'FormularioTrabajo',
    data() {
        return {
            form: {
                corre:'',
                password: null,
            },
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
        }
    }
}
</script>

<style>

</style>