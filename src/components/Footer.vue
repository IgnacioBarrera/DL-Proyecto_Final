<template>
  <div class="fondo-footer">
    <div class="text-center row" style="margin-top: 1rem;">
      <div class="col-6">
        <h3>CORREO: minera@barba.cl</h3>
        <h3>TELÉFONO: (+56) 9XXXXXXXX</h3>
        <h3>DIRECCIÓN: HIJUELA S/N SECTOR PAMA, COMBARBALÁ</h3>
      </div>
      <div class="col-6">
        <img src="@/assets/img/Logo.png" width="150px" height="75px" alt="logo" class="m-3">
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'Footer'
}
</script>

<style scoped>
.fondo-footer{
    background-color: #fff;
    border-top: 2px solid orange;
    height: 100px;
    border-bottom: 0px transparent white;
}
h1 {
  margin-bottom: 100px;
}
</style>