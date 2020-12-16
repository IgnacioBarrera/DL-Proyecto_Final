<template>
  <div class="container my-3">
    <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
      <!-- CARRUSEL N°1 -->
      <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
      <!-- CARRUSEL N°2 -->
      <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
      <!-- CARRUSEL N°3 -->
      <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carrusel',
}
</script>

<style scoped>

</style>
