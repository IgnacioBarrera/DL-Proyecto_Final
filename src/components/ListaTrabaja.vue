<template>
  <div>
    <div class="lista container text-center">
      <h1 class="text-center my-5">LISTA TRABAJA</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Editar o Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Nombre</th>
            <td>CORREO</td>
            <td>
              <b-button variant="success" class="mx-2" v-b-modal.modal @click="verMensaje">Ver mensaje</b-button>
              <b-button variant="danger" class="mx-2" @click.prevent="eliminarMensaje">Eliminar</b-button
              >
            </td>
          </tr>
          <hr />
          <b-modal id="modal" title="item">
            <el-card class="box-card">
              <div class="text item">
                MENSAJE
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
  name: "ListaTrabaja",
  data() {
    return {
    };
  },
  methods: {
    eliminarMensaje(){
      console.log('sirve eliminar')
    },
    verMensaje(){
      console.log('sirve ver mensaje')
    }
  },
  mounted() {
  },
  computed: {
  },
};
</script>

<style scoped>
  .lista {
    background-color: #fff;
  }
</style>
