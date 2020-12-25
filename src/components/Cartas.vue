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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam ad quisquam eos numquam. Nesciunt recusandae quod nam doloribus totam!
            </p>
            <b-button v-b-modal.modal-1 class="btn btn-success" @click.prevent="click">Ver más</b-button>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, animi. Quam tenetur nihil quaerat fugiat, quae similique ex ipsam voluptatibus.
            </p>
            <b-button v-b-modal.modal-2 class="btn btn-success" @click.prevent="click">Ver más</b-button>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam iure cum id, modi aliquid iusto ex nam. Nisi, reprehenderit!
            </p>
            <b-button v-b-modal.modal-3 class="btn btn-success" @click.prevent="click">Ver más</b-button>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Este es la modal 1</p>
      </b-modal>
    </div>
    <div>
      <b-modal id="modal-2" title="BootstrapVue">
        <p class="my-4">Este es la modal 2</p>
      </b-modal>
    </div><div>
      <b-modal id="modal-3" title="BootstrapVue">
        <p class="my-4">Este es la modal 3</p>
      </b-modal>
    </div>

  </div>
</template>

<script>
export default {
  name: "Cartas",
  data() {
    return {
      indicador: ''
    }
  },
  methods: {
    obtenerDolar() {
      fetch(`https://mindicador.cl/api/dolar/`)
      .then(result => {
        console.log(result);
        this.inicador = result.url
      })
    }
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
</style>
