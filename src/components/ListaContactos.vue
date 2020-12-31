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
        <tbody v-for="(item, index) in traerDatos" :key="index">
          <tr>
            <th>{{ item.nombre }}</th>
            <td>{{ item.correo }}</td>
            <td>
              <b-button variant="success" class="mx-2" v-b-modal.modal @click="verMensaje(item.id)">Ver mensaje</b-button>
              <b-button variant="danger" class="mx-2" @click.prevent="eliminarMensaje(item.id)">Eliminar</b-button
              >
            </td>
          </tr>
          <hr />
          <b-modal id="modal" :title="item.nombre">
            <el-card class="box-card">
              <div class="text item">
                {{ item.mensaje }}
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
    };
  },
  methods: {
    verMensaje(id) {
      this.$store.dispatch("traerContacto", id);
    },

    eliminarMensaje(id) {
      console.log(id);
      this.$store.dispatch("eliminarContato", id);
    },
  },
  mounted() {
    this.$store.dispatch("traerContacto");
  },
  computed: {
    traerDatos() {
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
