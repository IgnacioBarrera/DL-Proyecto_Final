<template>
  <div class="container">
    <div class="image-fondo mt-5">
      <h1 class="text-white text-center text-titulo">CONTÁCTENOS</h1>
    </div>
    <div class="row my-5">
      <div class="col-md-6 FC-info  my-2">
        <div class="container text-white">
          <h2 class="text-white">MINERA BARBA S.C.M</h2>
          <p class="casa-matriz">Casa Matriz</p>
          <p>Aqui va la direccion XXXXXXXXXXXX</p>
          <p>Fono: +569 XXXXXXXX / +569 XXXXXXXX</p>
          <p>E-mail: minera@barba.cl</p>
        </div>
      </div>
      <div class="col-md-6 my-2">
        <form class="text-white" @submit.prevent="enviatrabajo" data-cy="formularioEnviar">
          <div class="form-group">
            <label for="exampleFormControlInput1">Correo Electrónico</label>
            <input v-model="form.correo" data-cy="inputCorreo" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su correo electrónico" required/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput2">Nombre</label>
            <input v-model="form.nombre" data-cy="inputNombre" type="text" class="form-control" id="exampleFormControlInput2" placeholder="Nombre" required/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Mensaje</label>
            <textarea v-model="form.mensaje" data-cy="inputMensaje" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje" required></textarea>
          </div>
          <button type="submit" class="btn btn-info">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioContacto",
  data() {
    return {
      form: {
        correo: '',
        nombre: '',
        mensaje: '',
      }
    }
  },
  methods: {
    enviatrabajo(){
      if (this.form.nombre.length < 3) {
        this.$message.error('Oops, debe ingresar un nombre valido.');
        return;
      }
      if (this.form.mensaje.length <6) {
        this.$message.error('Oops, debe ingresar un mensaje');
      }
      else{
        this.$store.dispatch('enviandoContacto', this.form)
        this.$message({
          message: 'Felicidades, tu mensaje ha sido enviado.',
          type: 'success'
        });
      }
    }
  },
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
.btn-info {
  background-color: #ff9d72;
  border-color: #654062;
}
.btn-info:hover {
  background-color: #ffba93;
  border-color: #ff9d72;
}
.btn-info:focus {
  background-color: #ff9d72;
  border-color: #654062;
}
</style>
