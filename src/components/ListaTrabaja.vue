<template>
  <div>
    <div class="lista container text-center">
      <h1 class="text-center my-5">LISTA TRABAJA</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Profesion</th>
            <th scope="col">Telefono (+56)</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in traerTrabajaConNosotros" :key="index" >
            <td><h5 class="my-3">{{ item.nombre }}</h5></td>
            <td><p class="my-3">{{ item.correo }}</p></td>
            <td><p class="my-3">{{ item.profesion }}</p></td>
            <td><p class="my-3">{{ item.telefono }}</p></td>
            <td>
              <b-button class="mx-2 my-2 reset" @click.prevent="eliminarMensaje(item.id)">Eliminar</b-button>
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
    eliminarMensaje(id){
      this.$confirm('¿Seguro que deseas eliminar contacto', {
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        type: 'warning',
        center: true
      }).then(() => {
        this.$store.dispatch("eliminarTrabaja", id);
        this.$message({
          message: 'Contacto eliminado',
          type: 'success'
        });
      }).catch(() => {
        this.$message.error('Cancelado');
        console.log('No se elimino')
      })
      
    },
  },
  mounted() {
      this.$store.dispatch("TraigoTrabajo");
  },
  computed: {
    traerTrabajaConNosotros(){
      return this.$store.getters.enviandoTrabajaConNosotros;
    }
  },
};
</script>

<style scoped>
.lista {
  background-color: #fff;
}
.reset {
  background-color: #ffba93;
  border-color: #ff9d72;

}
.reset:hover {
  background-color:#ff9d72;
  border-color: #9f5f80;
}
</style>
