<template >
  <div id="app" style="background-color: #734046;">
    <div>
      <b-navbar toggleable="lg" type="light" variant="white" class="navbar_borde">
        
        <b-navbar-brand><router-link to="/"><img src="@/assets/img/Logo.png" alt="" class="logo_minera-barba" /></router-link></b-navbar-brand>
        <b-navbar-brand><router-link style="text-decoration: none"  to="/Contacto">Contacto</router-link></b-navbar-brand>
        <b-navbar-brand><router-link style="text-decoration: none" :to="{name: 'TrabajaConNosotros'}">Trabaja Con Nosotros</router-link></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Usuario</em>
              </template>
              <b-dropdown-item>Perfil</b-dropdown-item>
              <b-dropdown-item>Salir</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <footer class="text-center">Este seria el footer</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  footer {
    
    background-color: #fff;
    border-top: 2px solid orange;
    height: 100px;
    padding: 50px 0;
  }
  .linke {
    text-decoration-color: none;
  }
</style>


