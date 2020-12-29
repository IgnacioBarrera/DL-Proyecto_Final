<template >
  <div id="app" style="background-color: #734046;">
    <!-- NAVBAR -->
    <div>
      <b-navbar toggleable="lg" type="light" variant="white" class="navbar_borde">
        
        <b-navbar-brand><router-link to="/"><img src="@/assets/img/Logo.png" alt="" class="logo_minera-barba" /></router-link></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-brand><router-link style="text-decoration: none"  to="/Contacto">Contacto</router-link></b-navbar-brand>
        <b-navbar-brand><router-link style="text-decoration: none" :to="{name: 'TrabajaConNosotros'}">Trabaja Con Nosotros</router-link></b-navbar-brand>
            <!-- <b-nav-item class="iniciar-sesion">Iniciar Sesión</b-nav-item> -->
            <b-button variant="success" v-if="!this.uid" @click="iniciar">Iniciar Sesión</b-button>
            <b-nav-item-dropdown right v-else>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Usuario</em>
              </template>
              <b-dropdown-item><router-link style="text-decoration: none" to="/perfil">Perfil</router-link></b-dropdown-item>
              <b-dropdown-item><router-link style="text-decoration: none" to="/informes">Informes</router-link></b-dropdown-item>

              <b-dropdown-item v-if="this.uid" @click.prevent="salir">Salir</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <!-- FOOTER -->
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import firebase from 'firebase';


export default {
  name: 'App',
  components : {
    Footer,
  },
    data() {
    return {
      uid: '',
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.uid = user.uid;
        console.log('Hay usuario activo.');
        this.$router.push('/informes')
      } else {
        console.log('No hay usuarios registrados')
      }
    });
  },
  methods: {
    salir(){
      firebase.auth().signOut().then(() => {
        console.log('Se cerró la sesión correctamente');
        this.$router.push("/login");
        }).catch((error) => {
        console.log(error);
      });
    },
    iniciar(){
        this.$router.push("/login");
    }
  },
}
</script>

<style scoped>
  html {
    background-color: #654062;
  }
  .logo_minera-barba {
    width: 150px;
    height: 75px;
  }
  .navbar_borde {
    border-bottom: 2px solid orange
  }
  a,em{
    color: orange;
  }
  .linke {
    text-decoration-color: none;
  }
</style>


