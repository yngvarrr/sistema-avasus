<template>
    <section class="modulo__nome">
        <div>
            <p>Início / Cursos / Módulos / Sífilis: Aspectos Clínicos e Diagnóstico Diferencial</p>
            <h1>Sífilis: Aspectos Clínicos e Diagnóstico Diferencial</h1>
            <h2>UFRN / LAIS / SEDIS / HUOL / EBSERH / UC / MS</h2>
        </div>
    </section>
    <section class="modulo__pagina">
        <div>
        <h2 class="modulo__titulo">Informações Gerais do Curso</h2>
        <div class="modulo__estats">
            <img :src="require('../assets/icone tempo.svg')" alt="">6 horas
            <img :src="require('../assets/icone data.svg')" alt=""> Desde 20/03/2021
            <img :src="require('../assets/icone acessos.svg')" alt=""> 89.654 alunos matriculados
            <img :src="require('../assets/5 estrelas.svg')" alt=""> 4,9 (52.000 avaliações)
        </div>
        <h3 class="modulo__subtitulos">Sobre o curso</h3>
        <p>O curso de Especialização em Saúde da Família possui duração de 48 semanas, com carga horária total de 360h (trezentos e sessenta horas), sendo 345h (trezentos e quarenta e cinco horas) a distância, via Ambiente Virtual de Aprendizagem.  A especialização está organizada em três eixos: Eixo I – Investigação em Atenção Primária à Saúde; Eixo II – Itinerários Formativos na Atenção à Saúde; Eixo III – Gestão em Atenção Primária à Saúde. Além disso, o curso possui módulos obrigatórios e módulos optativos, que produzem um itinerário formativo. O tempo de dedicação a distância obrigatório é de, no mínimo, 8h (oito horas) semanais, e 15h (quinze horas) presenciais a serem cumpridas no seminário de apresentação do trabalho de conclusão de curso. A proposta pedagógica da especialização sustenta-se em uma base clínica e de saúde coletiva e, transversalmente ao curso: promoção da saúde e vigilância à saúde, atenção à demanda espontânea e programada, educação em saúde, gestão do cuidado e controle social, planejamento, monitoramento e avaliação com foco nos indicadores do SUS. Saiba mais sobre o PEPSUS em www.pepsus.lais.ufrn.br.</p>
        <h3 class="modulo__subtitulos">Objetivos</h3>
        <h4>Objetivo Geral</h4>
        <p class="modulo__textos">Promover a atualização dos profissionais de saúde acerca dos conceitos essenciais para o reconhecimento e tratamento precoce da sífilis, aspectos fundamentais ao controle da doença.</p>
        <h4>Objetivos Específicos</h4>
        <ul class="lista__obj">
            <li>Conceituar a sífilis e descrever a sua classificação.
            </li>
            <li>Distinguir as principais formas de apresentação da sífilis e seus diagnósticos diferenciais.
            </li>
            <li>Reforçar aspectos anatomopatológicos das formas clínicas para melhor compreensão da doença.
            </li>
            <li>Apresentar formas clínicas incomuns da sífilis que podem ser confundidas com outras patologias.</li>
        </ul>
        <h3 class="modulo__subtitulos">Recursos Educacionais</h3>
        <p class="modulo__textoc">Serão utilizados textos no formato de PDF, vídeos, ilustrações, infográficos, dentre outros recursos.</p>
        <h3 class="modulo__subtitulos">Créditos</h3>
        <div class="modulo__creditos">
            <img :src="require('../assets/lais creditos.svg')" alt="">
            <img :src="require('../assets/sedis creditos.svg')" alt="">
            <img :src="require('../assets/UFRN creditos.svg')" alt="">
            <img :src="require('../assets/EBSERH creditos.svg')" alt="">
        </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Pag-3',
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
                axios.get('http://localhost:3004/cursos/')
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
@media (min-width: 320px) {
    .modulo__nome {
        padding: 0.5em;
        background-image: url(../assets/sifilis\ 2\ modulos.svg);
        background-repeat: no-repeat;
        width: auto;
        height: 270px;
        align-items: center;
    }

    .modulo__nome p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        color: #3f3e3e;
    }

    .modulo__nome h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 25px;
        color: #3f3e3e;
    }

    .modulo__nome h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 13px;
        color: #3f3e3e;
    }

    .modulo__pagina {
        padding: 1em;
        font-family: 'Montserrat';
    }

    .modulo__pagina p {
        align-items: center;
        text-align: justify;
        width: auto;
        margin: 0 auto;
    }

    .modulo__textoc {
        font-weight: 400;
        font-size: 16px;
        color: #000000;
    }

    .modulo__pagina h4 {
        font-weight: 700;
        font-size: 16px;
        color: #2F2E41;
        margin: 0 auto;
        padding: 1em 0;
    }

    .lista__obj {
        margin: 0 auto;
    }

    .modulo__titulo {
        text-align: center;
        color: #D2202C;
        font-weight: 600;
        font-size: 40px;
        padding: 2px;
    }

    .modulo__estats {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 19.56px;
        font-style: normal;
    }

    .modulo__estats img {
        padding: 8px;
    }

    .modulo__subtitulos {
        text-align: center;
        color: #D2202C;
        font-weight: 600;
        font-size: 25px;
        padding: 5px;
    }

    .modulo__creditos {
        display: grid;
        justify-items: center;
        grid-template-rows: repeat(4, 1fr);
        margin-bottom: 50px;
    }
}

@media (min-width: 480px) {
    .modulo__nome {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em;
        background-image: url(../assets/fundo\ pagina\ 3.svg);
        background-repeat: no-repeat;
        width: auto;
        height: 270px;
    }

    .modulo__nome p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        color: #3f3e3e;
    }

    .modulo__nome h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 40px;
        color: #3f3e3e;
    }

    .modulo__nome h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        color: #3f3e3e;
    }

    .modulo__creditos {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    }
}

@media (min-width: 1024px) {
    .modulo__nome {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em;
        background-image: url(../assets/fundo\ pagina\ 3.svg);
        background-repeat: no-repeat;
        width: auto;
        height: 270px;
    }

    .modulo__nome p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        color: #3f3e3e;
    }

    .modulo__nome h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 40px;
        color: #3f3e3e;
    }

    .modulo__nome h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        color: #3f3e3e;
    }

    .modulo__pagina {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        font-family: 'Montserrat';
    }

    .modulo__pagina p {
        align-items: center;
        text-align: justify;
        width: 1110px;
        margin: 0 auto;
    }

    .modulo__textoc {
        display: flex;
        font-weight: 400;
        font-size: 16px;
        text-align: justify;
        justify-content: center;
        align-items: center;
        color: #000000;
    }

    .modulo__pagina h4 {
        font-weight: 700;
        font-size: 16px;
        color: #2F2E41;
        margin: 0 auto;
        padding: 1em 0;
    }

    .lista__obj {
        margin: 0 auto;
    }

    .modulo__titulo {
        text-align: center;
        color: #D2202C;
        font-weight: 600;
        font-size: 40px;
        padding: 2px;
    }

    .modulo__estats {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 19.56px;
        font-style: normal;
    }

    .modulo__estats img {
        padding: 8px;
    }

    .modulo__subtitulos {
        text-align: center;
        color: #D2202C;
        font-weight: 600;
        font-size: 25px;
        padding: 5px;
    }

    .modulo__creditos {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 50px;
    }
}
</style>
