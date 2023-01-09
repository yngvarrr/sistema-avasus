<template>
    <p class="transp__inicio">Início / Transparência</p>
    <h1 class="transp__titulo">Transparência</h1>
        <section class="container">
            <div>
                <p>
                    <img :src="require('../assets/icone usuarios 2.svg')" alt="">  Total de usuários registrados
                </p>
                <h2>850.980</h2>
            </div>
            <div>
                <p>
                    <img :src="require('../assets/icone inscrições.svg')" alt=""> Inscrições realizadas</p>
                <h2>2.246.780</h2>
            </div>
            <div>
                <p>
                    <img :src="require('../assets/icone cursos ativos.svg')" alt=""> Cursos ativos</p>
                <h2>1.870.190</h2>
            </div>
            <div>
                <p>
                    <img :src="require('../assets/icone certificado.svg')" alt=""> Direito à Certificação</p>
                <h2>324</h2>
            </div>
            <div>
                <p>
                    <img :src="require('../assets/icone investimento curso.svg')" alt=""> Investimento médio por curso</p>
                <h2>R$ 42,951</h2>
            </div>
            <div>
                <p>
                    <img :src="require('../assets/icone investimento aluno.svg')" alt=""> Investimento médio por aluno</p>
                <h2>R$ 7,25</h2>
            </div>
        </section>

        <section class="container__transp">
            <div class="box">
                <h2>Usuários por curso</h2>
                <img :src="require('../assets/graficotransparencia.svg')" alt="">
                <ul>
                    <li>Curso de prevenção ao suicídio: 43.412</li>
                    <li>A covid-19 e seus sintomas: 120.000</li>
                    <li>Pai presente: Cuidado e Compromisso: 105.301</li>
                    <li>Outro: 1.669.402</li>
                </ul>
            </div>
            <div class="box">
                <h2>Usuários por Estado</h2>
                <img :src="require('../assets/mapa usuarios.svg')" alt="">
                <ul>
                    <li>Curso de prevenção ao suicídio: 43.412</li>
                    <li>A covid-19 e seus sintomas: 120.000</li>
                    <li>Pai presente: Cuidado e Compromisso: 105.301</li>
                    <li>Outro: 1.669.402</li>
                </ul>
            </div>

        </section>
</template>

<script>
export default {
  name: 'Pag-5'
}
</script>

<style scoped>

@media (min-width: 320px) {
    .container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1100px;
        text-align: center;
        margin: 0 auto;
        background: #F5F5F7;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .transp__inicio {
        display: flex;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        font-style: normal;
        margin: 0 auto;
        text-align: center;
        width: 1200px;
        padding: 1em 0;
    }

    .transp__titulo {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 40px;
        font-style: normal;
        color: #D2202C;
        text-align: center;
        padding: 0.5em 0;
    }

    .container p {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        color: #2F2E41;
        margin: 0 auto;
    }

    .container h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 30px;
        font-style: normal;
        color: #D2202C;
        align-items: center;
    }

    .container div {
        padding: 1em;
    }

    .box {
        background: #F5F5F7;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .box h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        font-style: normal;
        color: #F6303F;
    }

    .box p {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        font-style: normal;
        color: #2F2E41;
    }

    .box img {
        width: 375px;
        height: 375px;

    }

    .box li {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        font-style: normal;
        color: #2F2E41;
        margin: 0 auto;
        list-style-position: inside;
        text-align: left;
        align-items: center;
        justify-content: center;
        padding: 0.2em 0;
    }

    .box li:nth-child(1) {
        list-style-image: url(../assets/curso.svg);
    }

    .box li:nth-child(2) {
        list-style-image: url(../assets/covid.svg);
    }

    .box li:nth-child(3) {
        list-style-image: url(../assets/pai.svg);
    }

    .box li:nth-child(4) {
        list-style-image: url(../assets/outros.svg);
    }

    .container__transp {
        display: flex;
        max-width: 1100px;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin: 0 auto;
        flex-wrap: wrap;
        padding: 1em;
    }
}

@media (min-width: 480px) {
    .container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1100px;
        text-align: center;
        margin: 0 auto;
        background: #F5F5F7;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .transp__inicio {
        display: flex;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        font-style: normal;
        margin: 0 auto;
        text-align: center;
        width: 1200px;
        padding: 1em 0;
    }

    .transp__titulo {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 40px;
        font-style: normal;
        color: #D2202C;
        text-align: center;
        padding: 0.5em 0;
    }

    .container p {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        color: #2F2E41;
        margin: 0 auto;
    }

    .container h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 30px;
        font-style: normal;
        color: #D2202C;
        align-items: center;
    }

    .container div {
        padding: 1em;
    }

    .box {
        background: #F5F5F7;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .box h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        font-style: normal;
        color: #F6303F;
    }

    .box p {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        font-style: normal;
        color: #2F2E41;
    }

    .box img {
        width: 375px;
        height: 375px;
    }

    .box li {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        font-style: normal;
        color: #2F2E41;
        margin: 0 auto;
        list-style-type: disc;
        list-style-position: inside;
        text-align: justify;
        align-items: center;
        justify-content: center;
        padding: 0.2em 0;
    }

    .box li:nth-child(1) {
        list-style-image: url(../assets/curso.svg);
    }

    .box li:nth-child(2) {
        list-style-image: url(../assets/covid.svg);
    }

    .box li:nth-child(3) {
        list-style-image: url(../assets/pai.svg);
    }

    .box li:nth-child(4) {
        list-style-image: url(../assets/outros.svg);
    }

    .container__transp {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 0 auto;
    }
}

@media (min-width: 1024px) {
    .container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1100px;
        text-align: center;
        margin: 0 auto;
        background: #F5F5F7;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .transp__inicio {
        display: flex;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        font-style: normal;
        margin: 0 auto;
        text-align: center;
        width: 1200px;
        padding: 1em 0;
    }

    .transp__titulo {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 40px;
        font-style: normal;
        color: #D2202C;
        text-align: center;
        padding: 0.5em 0;
    }

    .container p {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        color: #2F2E41;
        margin: 0 auto;
    }

    .container h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 30px;
        font-style: normal;
        color: #D2202C;
        align-items: center;
    }

    .container div {
        padding: 1em;
    }

    .box {
        background: #F5F5F7;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .box h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 25px;
        font-style: normal;
        color: #F6303F;
    }

    .box p {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        font-style: normal;
        color: #2F2E41;
    }

    .box img {
        width: 375px;
        height: 375px;

    }

    .box li {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        font-style: normal;
        color: #2F2E41;
        margin: 0 auto;
        list-style-type: disc;
        list-style-position: inside;
        text-align: justify;
        align-items: center;
        justify-content: center;
        padding: 0.2em 0;
    }

    .box li:nth-child(1) {
        list-style-image: url(../assets/curso.svg);
    }

    .box li:nth-child(2) {
        list-style-image: url(../assets/covid.svg);
    }

    .box li:nth-child(3) {
        list-style-image: url(../assets/pai.svg);
    }

    .box li:nth-child(4) {
        list-style-image: url(../assets/outros.svg);
    }

    .container__transp {
        display: grid;
        width: 1100px;
        height: 667px;
        grid-gap: 30px;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 196px;
    }
}

</style>
