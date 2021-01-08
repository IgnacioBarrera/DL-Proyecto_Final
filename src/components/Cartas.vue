<template>
  <!-- CONTAINER CARTAS -->
  <div class="container">
    <div class="row seccion_cartas">
      <!-- CARTA N°1 -->
      <div class="col-12 col-lg-3 col-md-4 m-3">
        <div class="card" style="width: 15rem;">
          <img class="card-img-top" style="width: 235px; height: 150px" src="https://e00-us-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/11/10/16050186706737.jpg" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Indicadores</h5>
            <p class="card-text" style="height: 150px">
              Aquí podrás ver los indicadores con los que trabajamos actualizados. Ya sea el valor del dolar y sus derivados.
            </p>
            <b-button v-b-modal.modal-1 class="btn btn-success">Ver más</b-button>
          </div>
        </div>
      </div>
      <!-- CARTA N°2 -->
      <div class="col-12 col-lg-3 col-md-4 m-3">
        <div class="card" style="width: 15rem;">
          <img class="card-img-top" style="width: 235px; height: 150px" src="https://image.cotecno.cl/2020/04/2-1.gif" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Molino de Bolas</h5>
            <p class="card-text" style="height: 150px">
              El molino de bolas presente en la planta "Don Julio" de minera Barba tiene como caracteristica principal que se encuentra sostenido sobre rodillos.
            </p>
            <b-button v-b-modal.modal-2 class="btn btn-success">Ver más</b-button>
          </div>
        </div>
      </div>
      <!-- CARTA N°3 -->
      <div class="col-12 col-lg-3 col-md-4 m-3">
        <div class="card" style="width: 15rem;">
          <img class="card-img-top" style="width: 235px; height: 150px" src="https://911metallurgist.com/blog/wp-content/uploads/2015/07/Celdas-de-Flotación.png" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Flotación</h5>
            <p class="card-text" style="height: 150px">
              Proceso metalúrgico que se realiza en la planta "Don Julio". Consiste en la extraccion de material mediante la flotación de este.
            </p>
            <b-button v-b-modal.modal-3 class="btn btn-success">Ver más</b-button>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <b-modal id="modal-1" title="Indicadores">
        <p class="my-4 text-center
        ">El valor del dolar</p>
        <h5 class="text-center">$ {{indicador.dolar.valor}}</h5>
        <p class="my-4 text-center
        ">El valor de la UF</p>
        <h5 class="text-center">$ {{indicador.uf.valor}}</h5>
        <p class="my-4 text-center
        ">El valor del cobre en dolares</p>
        <h5 class="text-center">$ {{indicador.libra_cobre.valor}}</h5>
      </b-modal>
    </div>
    <div>
      <b-modal id="modal-2" title="Molino de Bolas">
        <p class="my-4"><iframe class="container" height="315" src="https://www.youtube.com/embed/9Wywt3pwza8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
      </b-modal>
    </div><div>
      <b-modal id="modal-3" title="Flotación" class="container">
        <p class="my-4"><iframe class="container" height="250" src="https://www.youtube.com/embed/mNiMZ-kWqmY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
      </b-modal>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Cartas",
  data() {
    return {
      indicador: null
    }
  },
  mounted() {
    axios
      .get('https://mindicador.cl/api')
      .then(response => (this.indicador = response.data))
  },
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

.btn-success {
  background-color: #ff9d72;
  border-color: #654062;
}
.btn-success:hover {
  background-color: #654062;
  border-color: #ff9d72;
}
.btn-success:focus {
  background-color: #ff9d72;
  border-color: #654062;
  box-shadow: none;
}
</style>
