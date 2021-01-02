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
              <b-button class="mx-2 my-2 btn" id="show-btn" @click="$bvModal.show('bv-modal-example'), verMensaje(item)">Ver mensaje</b-button>
              <b-button class="mx-2 my-2 reset" @click.prevent="eliminarMensaje(item.id)">Eliminar</b-button>
            </td>
          </tr>

          <b-modal id="bv-modal-example" hide-footer>
          <template #modal-title>
            <h5>Mensaje</h5>
          </template>
          <div class="d-block text-center">
            <h5>El usuario: "{{this.nombreModal}}", dejó el siguiente mensaje:</h5>
            <p>{{this.mensajeModal}}</p>
          </div>
          <b-button variant="info" class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Cerrar</b-button>
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
      this.$confirm('¿Seguro que deseas eliminar', {
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        type: 'warning',
        center: true
      }).then(() => {
        this.$store.dispatch("eliminarContacto", id);
        this.$message({
          message: 'Mensaje eliminado',
          type: 'success'
        });
      }).catch(() => {
        this.$message.error('Cancelado');
        console.log('No se elimino')
      })
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
  height: 100vh;
  margin-bottom: 50px;
}
.btn {
  background-color: #583d72;
  border-color: #ff9d72;
}
.btn:hover {
  background-color:#ff9d72;
  border-color: #9f5f80;
}
.reset {
  background-color: #ffba93;
  border-color: #ff9d72;

}
.reset:hover {
  background-color:#ff9d72;
  border-color: #9f5f80;
}
.registro {
  background-color: #ffba93;
}
</style>
