<template>
  <div class="container my-5">
    <div class="image-fondo mt-5">
      <h1 class="text-white text-center text-titulo">TRABAJA CON NOSOTROS</h1>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" class="text-white text-center">
      <!-- obtener email -->
      <b-form-group
        id="input-group-1"
        label="Tu Correo:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Ingersa tu correo"
          required
        ></b-form-input>
      </b-form-group>
      <!-- obtener nombre -->
      <b-form-group id="input-group-2" label="Tu Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nombre"
          placeholder="Ingresa tu nombre"
          required
        ></b-form-input>
      </b-form-group>

      <!-- obtener mensaje -->
      <b-form-group id="input-group-3" label="Numero de telefono:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.telefono"
          placeholder="+56 XXXXX XXXX"
          required
        ></b-form-input>
      </b-form-group>
      <div class="mt-5">
        <b-button class= 'mr-3' type="submit" variant="primary">Enviar</b-button>
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
          email: '',
          nombre: '',
          telefono: null,
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

<style scoped>
.image-fondo {
  background-image: url("https://picsum.photos/1024/480/?image=10");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
}
.text-titulo {
  padding-top: 175px;
}
</style>