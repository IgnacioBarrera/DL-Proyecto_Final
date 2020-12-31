<template>
  <div>
    <div class="lista container text-center">
      <h1 class="text-center my-5">LISTA CONTACTOS</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Editar o Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in traerContactos" :key="index">
            <td><h5 class="my-3">{{ item.nombre }}</h5></td>
            <td><p class="my-3">{{ item.correo }}</p></td>
            <td>
              <b-button variant="success" class="mx-2 my-2" v-b-modal.modal @click="verMensaje(item)">Ver mensaje</b-button>
              <b-button variant="danger" class="mx-2 my-2" @click.prevent="eliminarMensaje(item.id)">Eliminar</b-button>
            </td>
          </tr>
          <hr />
          <b-modal id="modal" :title="this.nombreModal">
            <el-card class="box-card">
              <div class="text item">
                <h5>El usuario con id; "{{this.idModal}}", dejó el siguiente mensaje:</h5>
                <p>{{this.mensajeModal}}</p>
              </div>
            </el-card>
          </b-modal>
        </tbody>
      </table>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaContactos",
  data() {
    return {
      nombreModal: '',
      correoModal: '',
      mensajeModal: '',
      idModal: '',
    };
  },
  methods: {
    verMensaje(usuario) {
      this.nombreModal = usuario.nombre;
      this.correomodal = usuario.correo;
      this.mensajeModal = usuario.mensaje;
      this.idModal = usuario.id;

    },

    eliminarMensaje(id) {
      this.$store.dispatch("eliminarContacto", id);
    },
  },
  mounted() {
    this.$store.dispatch("TraigoContacto");
  },
  computed: {
    traerContactos() {
      return this.$store.getters.enviarContacto;
    },
  },
};
</script>

<style scoped>
  .lista {
    background-color: #fff;
  }
</style>
