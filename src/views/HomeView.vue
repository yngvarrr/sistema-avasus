<template>
  <div class="home">
    <Banner/>
    <Pag1/>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Pag1 from '../components/Pag1.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Pag1
  }
}
</script>
