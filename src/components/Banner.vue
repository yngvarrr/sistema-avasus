<template>
    <section class="banner__avasus">
        <div>
            <img :src="require('../assets/logo avasus branco.svg')" alt="Logo AVASUS branco" class="banner_titulo1">
            <img :src="require('../assets/subtitulo avasus branco.svg')" alt="Conhecimento aberto em saúde" class="banner_titulo2">
        </div>
    </section>
</template>

<script>
export default {
  name: 'Banner-avasus'
}
</script>

<style scoped>
@media (min-width: 320px) {
    .banner__avasus {
        width: 100%;
        background-image: url("../assets/background\ avasus.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin: 1em 0;
    }

    .banner_titulo1 {
        background-color: transparent;
        max-width: 320px;
        max-height: 844px;
        width: auto;
        height: auto;
        margin: 0 auto;
    }

    .banner_titulo2 {
        background-color: transparent;
        max-width: 320px;
        max-height: 844px;
        width: auto;
        height: auto;
        margin: 0 auto;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

}

@media (min-width: 480px) {
    .banner__avasus {
        width: 100%;
        background-image: url("../assets/background\ avasus.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin: 1em 0;
        text-align: center;
        padding: 1em 0;
    }

    .banner_titulo1 {
        background-color: transparent;
        max-width: 820px;
        width: auto;
        height: auto;
        margin: 0 auto;
    }

    .banner_titulo2 {
        background-color: transparent;
        max-width: 820px;
        width: auto;
        height: auto;
        margin: 0 auto;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

}
@media (min-width: 1024px) {
    .banner__avasus {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 760px;
        left: 0px;
        background-image: url("../assets/background\ avasus.png");
    }

    .banner__avasus div {
        width: 496px;
        height: 105.81px;
        left: 718px;
        top: 275px;
    }

    /*.banner_titulo1 {
        background-color: transparent;
        width: 496px;
        left: 718px;
        top: 275px;
        margin: 0 auto;
    }

    .banner_titulo2 {
        background-color: transparent;
        width: 634.67px;
        height: 36px;
        top: 425px;
        margin: 0 auto;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }*/
}
</style>
