<template>
    <section class="realizacao">
        <div>
            <h2 class="realizacao__titulo">Realização</h2>
            <img :src="require('../assets/logo lais footer.svg')" alt="Logo LAIS">
            <img :src="require('../assets/logo ufrn footer.svg')" alt="Logo UFRN">
        </div>
    </section>
    <section class="informacoes">
        <div class="lais__nome">
            <img :src="require('../assets/lais mini.svg')" alt="LAIS">
            <p>Laboratório de Inovação Tecnológica em Saúde.</p>
        </div>
        <div class="links__uteis">
            <h2 class="infos__titulo">Links úteis</h2>
            <div class="lista__links">Início</div>
            <div class="lista__links">Sobre Nós</div>
            <div class="lista__links">Módulos</div>
            <div class="lista__links">Parceiros</div>
            <div class="lista__links">Transparência</div>
        </div>
        <div class="redes__sociais">
            <h2 class="infos__titulo">Redes Sociais</h2>
            <a href="https://pt-br.facebook.com/LAIS.HUOL/" target="_blank"><img :src="require('../assets/facebook.svg')" alt="" class="imagens__social"></a>
            <a href="https://twitter.com/laishuol" target="_blank"><img :src="require('../assets/twitter.svg')" alt="" class="imagens__social"></a>
            <a href="https://www.instagram.com/laishuol/" target="_blank"><img :src="require('../assets/instagram.svg')" alt="" class="imagens__social"></a>
        </div>
    </section>
    <footer class="rodape__avasus">
        <div>
            <p class="rodape__texto">2022 © LAIS (HUOL). Todos os direitos reservados</p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer-avasus'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

@media (min-width: 320px) {
    .realizacao {
        display: grid;
        background-color: #D2202C;
        width: auto;
        height: auto;
        padding: 1em;
    }

    .realizacao__titulo {
        text-align: center;
        color: #FFFFFF;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 24px;
        padding: 0.5em;
    }

    .logos__avasus {
        padding: 1em;
    }

    .informacoes {
        display: grid;
        background-color: #323237;
        width: auto;
        padding: 2em;
    }

    .informacoes p {
        text-align: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: -0.204545px;
        color: #FFFFFF;
    }

    .lais__nome {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
    }

    .lais__nome p {
        width: 202px;
        height: 40px;
        text-align: left;
    }

    .infos__titulo {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 26px;
        color: #FFFFFF;
        text-align: left;
    }

    .imagens__social {
        padding: 1em 1em;
    }

    .lista__links {
        list-style-type: none;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 18px;
        text-align: left;
        color: #FFFFFF;
        padding: 0.5em;
    }

    .rodape__avasus {
        display: flex;
        background-color: #424146;
        width: auto;
        left: 0px;
        top: 2818px;
        text-align: center;
        justify-content: space-evenly;
    }

    .rodape__texto {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        padding: 1em;
        color: #FFFFFF;
    }
}

@media (min-width: 480px) {
    .realizacao {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D2202C;
        width: auto;
        height: auto;
        padding: 1em;
    }

    .realizacao__titulo {
        text-align: center;
        color: #FFFFFF;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 24px;
        padding: 1em;
    }

    .informacoes {
        display: flex;
        background-color: #323237;
        width: auto;
        padding: 2em;
        justify-content: space-between;
    }

    .informacoes p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: -0.204545px;
        color: #FFFFFF;
    }

    .lais__nome {
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        padding: 1em;
    }

    .lais__nome p {
        width: 202px;
        height: 40px;
        text-align: left;
    }

    .infos__titulo {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 26px;
        color: #FFFFFF;
        text-align: center;
    }

    .imagens__social {
        align-items: center;
        padding: 1em 1em;
        cursor: pointer;
    }

    .lista__links {
        list-style-type: none;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 18px;
        text-align: left;
        color: #FFFFFF;
        padding: 0.5em;
        cursor: pointer;
    }

    .rodape__avasus {
        display: flex;
        background-color: #424146;
        width: auto;
        text-align: center;
        justify-content: space-evenly;
    }

    .rodape__texto {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        padding: 1em;
        color: #FFFFFF;
    }
}

@media (min-width: 1024px) {
    .realizacao {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D2202C;
        width: auto;
        height: auto;
        padding: 1em;
    }

    .realizacao__titulo {
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 24px;
        color: #FFFFFF;
        padding: 1em;
    }

    .informacoes {
        display: flex;
        background-color: #323237;
        width: auto;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 2em;
    }

    .informacoes p {
        position: absolute;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: -0.204545px;
        color: #FFFFFF;
    }

    .lais__nome {
        text-align: center;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        padding: 1em;
    }

    .lais__nome p {
        width: 202px;
        height: 40px;
        text-align: left;
    }

    .infos__titulo {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 26px;
        color: #FFFFFF;
        text-align: center;
    }

    .imagens__social {
        align-items: center;
        padding: 1em 1em;
    }

    .lista__links {
        list-style-type: none;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 18px;
        text-align: left;
        color: #FFFFFF;
        padding: 0.5em;
    }

    .rodape__avasus {
        display: flex;
        background-color: #424146;
        width: auto;
        left: 0px;
        top: 2818px;
        text-align: center;
        justify-content: space-evenly;
    }

    .rodape__texto {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        padding: 1em;
        color: #FFFFFF;
    }
}
</style>
