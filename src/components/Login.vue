<template>
  <div>
    <div class="formulario container my-5" style="text-align: -webkit-center;">
        <h1 class="text-white text-center">Iniciar Sesión</h1>
      <b-form class="container px-5 py-3" @submit.prevent="login">
            <!-- EMAIL -->
        <b-form-group id="input-group-1" label="Correo electrónico:" label-for="input-1" class="text-white">
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
        </b-form-group>
            <!-- CONTRASEÑA -->
        <b-form-group id="input-group-2" label="Ingrese contraseña:" label-for="input-2" class="text-white">
          <b-form-input id="input-2" v-model="form.clave" type="password" required placeholder="Contraseña"></b-form-input>
        </b-form-group>
            <!-- BOTONES -->
        <b-button type="submit" variant="primary">Ingresar</b-button>
        <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";


export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
        clave: ''
      }
    }
  },
  methods: {
    login() {
      if (this.form.email && this.form.clave && this.form.clave.length >= 6) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.clave)
          .then((resp) => {
            console.log(resp.user.email);
          })
          .catch((error) => {
            if (error.code == "auth/wrong-password") {
              this.$notify.error({
                title: 'Error',
                message: `La contraseña ingresada es incorrecta.`
            });
            } else if (error.code == "auth/user-disabled") {
              this.$notify.error({
                title: 'Error',
                message: `El usuario se encuentra inhabilitado.`
            });
            } else if (error.code == "auth/user-not-found") {
              this.$notify.error({
                title: 'Error',
                message: `El usuario no corresponde.`
            });
            } else if (error.code == "auth/invalid-email") {
              this.$notify.error({
                title: 'Error',
                message: `El email ingresado es incorrecto.`
            });
            } else {
              this.$notify.error({
                title: 'Error',
                message: `Estamos presentando un error de sistema.`
            });
            }
          });
      } else {
        console.log("No se puede conectar");
      }
    },
    registrar(){
      this.$router.push('/registro');
    },
  },
};
</script>

<style scoped>
#input-1,
#input-2{
    width: 90%;
};
</style>