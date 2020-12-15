<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="white" class="navbar_borde">
        <img src="@/assets/img/Logo.png" alt="" class="logo_minera-barba" />
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link to="/">Inicio</router-link></b-nav-item>
            <b-nav-item><router-link to="/Contacto">Contacto</router-link></b-nav-item>
            <b-nav-item><router-link :to="{name: 'TrabajaConNosotros'}">Trabaja Con Nosotros</router-link></b-nav-item>

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
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
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
</style>


