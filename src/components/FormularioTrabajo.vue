<template>
  <div class="container my-5">
    <div class="image-fondo mt-5">
      <h1 class="text-white text-center text-titulo">TRABAJA CON NOSOTROS</h1>
    </div>
    <b-form @submit.prevent="enviatrabajo" @reset.prevent="reset" class="text-white text-center mt-5">
      <!-- obtener email -->
      <b-form-group id="input-group-1" label="Tu Correo:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.correo" type="email" placeholder="Ingresa tu correo" required></b-form-input>
      </b-form-group>
      <!-- obtener nombre -->
      <b-form-group id="input-group-2" label="Tu Nombre:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.nombre" placeholder="Ingresa tu nombre" required></b-form-input>
      </b-form-group>

      <!-- obtener Numero de Teléfono -->
      <b-form-group id="input-group-3" label="Numero de telefono:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.telefono" placeholder="9 XXXXXXXX" required></b-form-input>
      </b-form-group>

      <!-- obtener profesion -->
      <b-form-group id="input-group-4" label="Profesión:" label-for="input-4">
        <b-form-input id="input-4" v-model="form.profesion" placeholder="Contador" required></b-form-input>
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
          profesion: '',
        },
      }
    },
    methods: {
      reset() {
        this.form.correo = '';
        this.form.nombre = '';
        this.form.telefono = '';
        this.form.profesion = '';
      },
      enviatrabajo() {
        this.$store.dispatch('enviandoTrabajo', this.form);
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