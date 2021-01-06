<template>
  <div class="text-center text-white">
    <h1>Perfil usuario</h1>
    <el-card class="bodyCard">
      <b-avatar class="avatar" :src="datosUsuario.photoURL" size="200px"></b-avatar>
      <div style="padding: 14px;">
        <h1>{{datosUsuario.displayName}}</h1>
        <p>Correo: {{datosUsuario.email}}</p>
        <div class="bottom clearfix">
          <p class="time">Usuario creado: {{datosUsuario.metadata.creationTime}}</p>
          <p class="time">Última conexion: {{datosUsuario.metadata.lastSignInTime}}</p>
        </div>
        <el-button type="text" class="button" @click="editar">EDITAR</el-button>
        <el-button type="text" class="button" @click="eliminar">ELIMINAR</el-button>
      </div>
      <b-button class="registro" @click="registrar">Registrar usuario</b-button>

    </el-card>

<!-- FORMULARIO -->
    <b-form class="container" v-if="mostrar" @submit="guardar" @reset.prevent="reset">
      <b-card bg-variant="dark">
        <b-form-group
          label-cols-lg="3"
          label="Editar Usuario"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label="Nombre:"
            label-for="nombre"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="nombre" v-model="displayName" required></b-form-input>
          </b-form-group>

          <b-form-group
            label="Foto:"
            label-for="foto"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="foto" v-model="photoURL" required></b-form-input>
          </b-form-group>
          <b-button class="mr-3 btn" type="submit" variant="primary">Guardar</b-button>
          <b-button class="reset" type="reset" variant="danger">Reset</b-button>          
        </b-form-group>
      </b-card>
    </b-form>
  </div>
  

  
</template>

<script>
import firebase from 'firebase'

export default {
  name:'PerfilUsuario',
  data() {
    return {
      mostrar: false,
      displayName: '',
      photoURL: ''
    };
  },
  methods: {
    editar() {
      this.mostrar = !this.mostrar;
    },
    guardar() {
      firebase.auth().currentUser.updateProfile({
        displayName: this.displayName,
        photoURL: this.photoURL,
        phoneNumber: this.phoneNumber,
      }).then(function() {
        console.log('Actualizado');
      }).catch(function(error) {
        console.error(error);
      });
    },
    reset() {
      this.displayName = '';
      this.photoURL = '';
    },
    eliminar() {
      firebase.auth().currentUser.delete().then(() => {
  // User deleted.
      console.log('Usuario eliminado');
      }).catch(function(error) {
  // An error happened.
      console.error(error);
      });
    },
    registrar(){
      this.$router.push('../registro');
    },
  },
  computed: {
    datosUsuario() {
      return this.$store.getters.enviarUsuario;
    }
  }
}

</script>

<style scope>
.avatar {
  background-color: orange;
}

.time {
  font-size: 13px;
  color: #999;
}
  
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
  
.clearfix:after {
  clear: both
}

.bodyCard {
  padding: 20px;
  margin: 20px;
}

.btn {
  background-color: #9f5f80;
  border-color: #ff9d72;
}
.btn:hover, .btn:focus {
  background-color:#ff9d72;
  border-color: #9f5f80;
}
.reset {
  background-color: #ffba93;
  border-color: #ff9d72;

}
.reset:hover, .reset:focus-within {
  background-color:#ff9d72;
  border-color: #9f5f80;
}

</style>
