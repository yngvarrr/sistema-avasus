<template>
    <section class="parceiros__nome">
        <div>
            <p>Início / Parceiros</p>
            <h1>Nossos Parceiros</h1>
            <p class="resultados">6 de 108 resultados</p>
        </div>
    </section>

    <section class="parceiros__flex">
        <div v-for="curso in cursos" :key="curso.id">
            <img :src="curso.capa" alt="">
            <hr>
            <p>{{curso.id}}.{{curso.titulo}}</p>
        </div>
        
    </section>

    <section>
        <div class="paginas">
        <button class="paginas__botao">1</button>
        <button class="paginas__botao">2</button>
        <button class="paginas__botao">3</button>
        <button class="paginas__botao">4</button>
        <button class="paginas__botao">5</button>
        <button class="paginas__botao">...</button>
        <button class="paginas__botao">Próximo></button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Pag-4',
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
                axios.get('http://localhost:3004/parceiros?_page=1&_limit=6')
                    .then((response) => {
                        console.log(response.data)
                        this.cursos = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            loadCursos() {
                
            },
        },
    }
</script>

<style scoped>

@media (min-width: 320px) {
    .parceiros__nome {
        display: flex;
        align-items: center;
        margin: 0 auto;
        max-width: 1200px;
    }

    .parceiros__nome p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        margin: 0 auto;
        padding: 1.5em 0;
    }

    .parceiros__nome h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 40px;
        color: #D2202C;
        margin: 0 auto;
    }

    .resultados {
        margin-left: 405px;
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        color: #2F2E41;
    }

    .parceiros__flex {
        display: flex;
        flex-wrap: wrap;
        max-width: 1300px;
        margin: 0 auto;
        font-family: 'Montserrat';
        font-style: normal;
        align-items: center;
        justify-content: center;
    }
    
    .parceiros__flex img {
        width: 350px;
        height: 200px;
    }

    .parceiros__flex div {
        padding: 29px;
    }

    .parceiros__flex hr {
        width: 347px;
        height: 0px;
        justify-content: center;
        border: 1px solid #D2202C;
    }

    .parceiros__flex p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        font-style: normal;
        color: #2F2E41;
        text-align: center;
        width: 344px;
        height: 90px;
    }

    .paginas {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3em;
        margin-bottom: 10em;
    }

    .paginas__botao {
        background-color: #FAFAFA;
        border-width: thin;
        border-color: #707070;
        width: 40px;
        height: 40px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        color: #545454;
    }

    .paginas__botao:nth-child(1) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .paginas__botao:nth-child(7) {
        width: 109px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .paginas__botao:hover {
        background-color: #D2202C;
        color: #FFFFFF;
    }
}

@media (min-width: 480px) {
    .parceiros__nome {
        display: flex;
        align-items: center;
        margin: 0 auto;
        max-width: 1200px;
    }

    .parceiros__nome p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        margin: 0 auto;
        padding: 1.5em 0;
    }

    .parceiros__nome h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 40px;
        color: #D2202C;
        margin: 0 auto;
    }

    .resultados {
        margin-left: 405px;
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        color: #2F2E41;
    }

    .parceiros__flex {
        display: flex;
        flex-wrap: wrap;
        max-width: 1300px;
        margin: 0 auto;
        font-family: 'Montserrat';
        font-style: normal;
        align-items: center;
        justify-content: center;
    }
    
    .parceiros__flex img {
        width: 350px;
        height: 200px;
    }

    .parceiros__flex div {
        padding: 29px;
    }

    .parceiros__flex hr {
        width: 347px;
        height: 0px;
        justify-content: center;
        border: 1px solid #D2202C;
    }

    .parceiros__flex p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        font-style: normal;
        color: #2F2E41;
        text-align: center;
        width: 344px;
        height: 90px;
    }

    .paginas {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3em;
        margin-bottom: 10em;
    }

    .paginas__botao {
        background-color: #FAFAFA;
        border-width: thin;
        border-color: #707070;
        width: 40px;
        height: 40px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        color: #545454;
    }

    .paginas__botao:nth-child(1) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .paginas__botao:nth-child(7) {
        width: 109px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .paginas__botao:hover {
        background-color: #D2202C;
        color: #FFFFFF;
    }
}

@media (min-width: 1024px) {
    .parceiros__nome {
        display: flex;
        align-items: center;
        margin: 0 auto;
        max-width: 1200px;
    }

    .parceiros__nome p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        margin: 0 auto;
        padding: 1.5em 0;
    }

    .parceiros__nome h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 40px;
        color: #D2202C;
        margin: 0 auto;
    }

    .resultados {
        margin-left: 405px;
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        color: #2F2E41;
    }

    .parceiros__flex {
        display: flex;
        flex-wrap: wrap;
        max-width: 1300px;
        margin: 0 auto;
        font-family: 'Montserrat';
        font-style: normal;
        align-items: center;
        justify-content: center;
    }

    .parceiros__flex img {
        width: 350px;
        height: 200px;
    }

    .parceiros__flex div {
        padding: 29px;
    }

    .parceiros__flex hr {
        width: 347px;
        height: 0px;
        justify-content: center;
        border: 1px solid #D2202C;
    }

    .parceiros__flex p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        font-style: normal;
        color: #2F2E41;
        text-align: center;
        width: 344px;
        height: 90px;
    }

    .paginas {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3em;
        margin-bottom: 10em;
    }

    .paginas__botao {
        background-color: #FAFAFA;
        border-width: thin;
        border-color: #707070;
        width: 40px;
        height: 40px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        color: #545454;
    }

    .paginas__botao:nth-child(1) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .paginas__botao:nth-child(7) {
        width: 109px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .paginas__botao:hover {
        background-color: #D2202C;
        color: #FFFFFF;
    }
}

</style>
