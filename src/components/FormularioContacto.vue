<template>
  <div class="container">
    <div class="image-fondo mt-5">
      <h1 class="text-white text-center text-titulo">CONTÁCTENOS</h1>
    </div>
    <div class="row">
      <div class="col-md-6 FC-info">
        <div class="container">
          <h2 class="text-white">MINERA BARBA S.C.M</h2>
          <p class="casa-matriz text-white">Casa Matriz</p>
          <p class="text-white">Aqui va la direccion XXXXXXXXXXXX</p>
          <p class="text-white">Fono: +569 XXXXXXXX / +569 XXXXXXXX</p>
          <p class="text-white">E-mail: minera@barba.cl</p>
        </div>
      </div>
      <div class="col-md-6 my-5">
        <form>
          <div class="form-group text-white">
            <label for="exampleFormControlInput1">Correo Electrónico</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su correo Electrónico"/>
          </div>
          <div class="form-group text-white">
            <label for="exampleFormControlInput2">Nombre</label>
            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Nombre"/>
          </div>
          <div class="form-group text-white">
            <label for="exampleFormControlTextarea1">Mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje"></textarea>
          </div>
          <button type="button" class="btn btn-info">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioContacto",
};
</script>

<style scoped>
.FC-info {
  align-self: center;
}
.casa-matriz {
  font-weight: bold;
}
.image-fondo {
  background-image: url("https://picsum.photos/1024/480/?image=10");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
}
.text-titulo {
  padding-top: 175px;
}
</style>
