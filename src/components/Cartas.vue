<template>
  <!-- CONTAINER CARTAS -->
  <div class="container">
    <div class="row seccion_cartas">
      <!-- CARTA N°1 -->
      <div class="col-12 col-lg-3 col-md-4 m-3">
        <div class="card" style="width: 15rem">
          <img class="card-img-top" src="https://picsum.photos/1024/480/?image=10" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Titulo Carta</h5>
            <p class="card-text">
              Texto Carta para escribir blablablablablablablabla
            </p>
            <a href="#" class="btn btn-success">Ver más</a>
          </div>
        </div>
      </div>
      <!-- CARTA N°2 -->
      <div class="col-12 col-lg-3 col-md-4 m-3">
        <div class="card" style="width: 15rem">
          <img class="card-img-top" src="https://picsum.photos/1024/480/?image=10" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Titulo Carta</h5>
            <p class="card-text">
              Texto Carta para escribir blablablablablablablabla
            </p>
            <a href="#" class="btn btn-success">Ver más</a>
          </div>
        </div>
      </div>
      <!-- CARTA N°3 -->
      <div class="col-12 col-lg-3 col-md-4 m-3">
        <div class="card" style="width: 15rem">
          <img class="card-img-top" src="https://picsum.photos/1024/480/?image=10" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Titulo Carta</h5>
            <p class="card-text">
              Texto Carta para escribir blablablablablablablabla
            </p>
            <a href="#" class="btn btn-success">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cartas",
};
</script>

<style scoped>
.seccion_cartas {
  text-align: -webkit-center;
  justify-content: center;
}
.card {
  text-align: center;
  background-color: #ffd66b;
}
</style>
