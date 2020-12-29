<template>
  <div>
    <Carrusel/>
    <Cartas/>
  </div>
</template>

<script>
import Carrusel from '@/components/Carrusel.vue';
import Cartas from '@/components/Cartas.vue';


export default {
  name: 'Home',
  components: {
    Carrusel,
    Cartas
  }
}
</script>
