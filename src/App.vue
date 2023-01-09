<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CursosLista from './components/CursosLista.vue'

import api from './services/api.js'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    CursosLista,
  },
  mounted(){
    api.get('/cursos').then(response => {
      console.log(response)
    })
  }
}
</script>
