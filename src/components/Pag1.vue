<template>
    <h2 class="modulos__head">Módulos Educacionais</h2>

        <section class="container__titulo">
            <div>
                <ul class="modulos__categorias">
                    <li>Mais Populares <hr></li>
                    <li>Mais bem avaliados</li>
                    <li>Mais recentes</li>
                </ul>
            </div>
        </section>

        <section class="modulo__container">
            <img :src="require('../assets/img sifilis1.svg')" alt="" class="modulos__imagem">
            <div>
                <h2 class="modulos__titulo1">Sífilis: Aspectos Clínicos e Diagnóstico Diferencial</h2>
                <h3 class="modulos__credito">LAIS / EBSERH</h3>
            </div>
            <div>
                <img :src="require('../assets/icone acessos.svg')" alt="" class="modulos__estat">27.645
                <img :src="require('../assets/icone tempo.svg')" alt="" class="modulos__estat">4h30min
                <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
                <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
                <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
                <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
                <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">5,0
            </div>
                <button @click="infos" class="modulos__botao">Ver módulo</button>
      </section>

      <section class="modulo__container">
            <img :src="require('../assets/img sifilis2.svg')" alt="">
            <div>
                <h2 class="modulos__titulo1">Sífilis: Aspectos Clínicos e Diagnóstico Diferencial</h2>
                <h3 class="modulos__credito">UFRN / SEDIS/ LAIS / EBSERH</h3>
            </div>
            <div>
                <img :src="require('../assets/icone acessos.svg')" alt="" class="modulos__estat">12.645
                <img :src="require('../assets/icone tempo.svg')" alt="" class="modulos__estat">4h30min
                <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
                <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
                <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
                <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
                <img :src="require('../assets/estrela vazia.svg')" alt="" class="modulos_classif">4,0
            </div>
                <button class="modulos__botao">Ver módulo</button>
      </section>
      <section class="modulo__container">
        <img :src="require('../assets/img politicas.svg')" alt="">
        <div>
            <h2 class="modulos__titulo1">Políticas de atenção à saúde no sistema prisional</h2>
            <h3 class="modulos__credito">UFRN / LAIS / SEDIS / HUOL / EBSERH / UC/ MS</h3>
        </div>
        <div>
            <img :src="require('../assets/icone acessos.svg')" alt="" class="modulos__estat">9.654
            <img :src="require('../assets/icone tempo.svg')" alt="" class="modulos__estat">5h30min
            <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
            <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
            <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
            <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">
            <img :src="require('../assets/icone estrela.svg')" alt="" class="modulos_classif">4,5
        </div>
            <button class="modulos__botao">Ver módulo</button>
      </section>

        <div class="ver__mais">
            <button @click="modulos">Ver mais</button>
        </div>
        <h2 class="parceiros">Parceiros</h2>
        <section class="parceiros__container">
            <div class="box">
                <h2>Governo do RN</h2>
                <p>Governo do Estado do Rio Grande do Norte.</p>
            </div>
            <div class="box">
                <h2>SESAP</h2>
                <p>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
            </div>
            <div class="box">
                <h2>UFRN</h2>
                <p>Universidade Federal do Rio Grande do Norte.</p>
            </div>
            <div class="box">
                <h2>HUOL</h2>
                <p>Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). </p>
            </div>
        </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Pagina-1',
    name: 'CursosList',
        data() {
            return{
                cursos: [],
            }
        },
        methods: {
            getCursos(){
                axios.get('http://localhost:3004/cursos')
                    .then((response) => {
                        console.log(response.data)
                        this.cursos = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            modulos: function() {
                this.$router.replace("modulos");
            },
            infos: function() {
                this.$router.replace("infos");
            }
        },
    }
</script>

<style scoped>

@media (min-width: 320px) {
    .modulos__head {
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 600;
        font-style: normal;
        font-size: 30px;
        color: #D2202C;
    }

    .modulos__categorias {
        list-style-type: none;
        text-align: center;
    }

    .modulos__categorias hr {
        border: 2px solid #707070;
    }

    .modulo__container {
        display: grid;
        align-items: center;
        padding: 1em;
        margin: 30px auto;
        border-radius: 20px;
        background: #f5f5f7;
        font-family: 'Montserrat';
    }

    .modulo__container div {
        padding: 1em 1em;
    }

    .modulos__botao {
        cursor: pointer;
        width: 160px;
        height: 40px;
        left: 1679px;
        top: 30px;
        border-radius: 20px;
        border: 1px solid #707070;
        background-color: #707070;
        color: white;
        cursor: pointer;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: 600;
    }

    .modulos__titulo1 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 20px;
        color: #2F2E41;
        text-align: left;
    }

    .modulos__credito {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 13px;
        color: #F6303F;
    }

    .modulos__estat {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16.75px;
        color: #2F2E41;
    }

    .ver__mais {
        display: flex;
        justify-content: center;
        padding-bottom: 4em;
        padding-top: 3em;
    }

    .ver__mais button {
        width: 350px;
        height: 50px;
        background:#707070;
        align-items: center;
        border-radius: 20px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }

    .parceiros {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 30px;
        color: #D2202C;
        text-align: center;
    }

    .parceiros__container {
        display: grid;
        align-items: center;
        padding: 0 1em;
        margin: 0 auto;
        border-radius: 20px;
        background: #f5f5f7;
        font-family: 'Montserrat';
        margin-bottom: 5em;
    }

    .box h2 {
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        font-style: normal;
        color: #000000;
    }

    .box p {
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 18px;
        color: #707070;
    }

    .container__titulo {
        display: flex;
        justify-content: center;
    }

    .container__titulo div {
        margin: 0 5px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 20px;
        color: #2F2E41;
    }

    .container__titulo div hr {
        border: 2px solid #707070;
    }
}

@media (min-width: 480px) {
    .modulos__categorias {
        display: flex;
        list-style-type: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #2F2E41;
        margin: 0 auto;
    }

    .modulos__categorias li {
        padding: 0 15px;
    }

    .modulos__categorias hr {
        border: 2px solid #707070;
    }

    .modulo__container {
        display: flex;
        padding: 1em;
    }

    .modulos__botao {
        font-size: 15px;
    }
}
@media (min-width: 1024px) {
    .modulos__head {
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 600;
        font-style: normal;
        font-size: 30px;
        color: #D2202C;
        padding: 114px 0 30px 0;
    }

    .modulos__categorias {
        display: flex;
        list-style-type: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #2F2E41;
        width: 1200px;
        margin: 0 auto;
    }

    .modulos__categorias li {
        padding: 0 15px;
    }

    .modulos__categorias hr {
        border: 2px solid #707070;
    }

    .modulo__container {
        display: flex;
        align-items: center;
        padding: 1em;
        margin: 30px auto;
        border-radius: 20px;
        background: #f5f5f7;
        font-family: 'Montserrat';
        width: 1110px;
        height: auto;
    }

    .modulo__container div {
        padding: 0 1em;
    }

    .modulos__botao {
        cursor: pointer;
        width: 160px;
        height: 40px;
        left: 1679px;
        top: 30px;
        border-radius: 20px;
        border: 1px solid #707070;
        background-color: #707070;
        color: white;
        cursor: pointer;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: 600;
    }

    .modulos__titulo1 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 20px;
        color: #2F2E41;
        text-align: left;
    }

    .modulos__credito {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 13px;
        color: #F6303F;
    }

    .modulos__estat {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16.75px;
        color: #2F2E41;
    }

    .ver__mais {
        display: flex;
        justify-content: center;
        padding-bottom: 4em;
        padding-top: 3em;
    }

    .ver__mais button {
        width: 350px;
        height: 50px;
        background:#707070;
        align-items: center;
        border-radius: 20px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }

    .parceiros {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 30px;
        color: #D2202C;
        text-align: center;
    }

    .parceiros__container {
        display: flex;
        align-items: center;
        padding: 0 1em;
        margin: 0 auto;
        border-radius: 20px;
        background: #f5f5f7;
        font-family: 'Montserrat';
        width: 1110px;
        height: 210px;
        margin-bottom: 132px;
    }

    .box h2 {
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        font-style: normal;
        color: #000000;
    }

    .box p {
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 18px;
        color: #707070;
    }

    .container__titulo {
        display: flex;
        justify-content: center;
    }

    .container__titulo div {
        margin: 0 5px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 20px;
        color: #2F2E41;
    }

    .container__titulo div hr {
        border: 2px solid #707070;
    }
}
</style>
