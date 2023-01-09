<template>
    <div>
        <button @click="getCursos">Cursos</button> 
        <div v-for="curso in cursos" :key="curso.id">
            <h3>{{curso.id}}. {{curso.titulo}}</h3>
            <a href="">
                <img :src="curso.capa" alt="">
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'CursosList',
        created () {
            this.getCursos()
        },
        data() {
            return{
                cursos: [],
            }
        },
        methods: {
            getCursos(){
                axios.get('http://localhost:3004/parceiros')
                    .then((response) => {
                        console.log(response.data)
                        this.cursos = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
        },
    }
</script>

<style scoped>

</style>