<template>
    <header>
        <section class="barra_superior">
            <div class="header__avasus"><router-link to="/"><img :src="require('../assets/logo avasus header.svg')" alt="Logo AVASUS" class="logo__avasus"></router-link></div>
            <div class="header__inicio"><router-link to="/">Início</router-link></div>
            <div class="header__titulos">Sobre Nós</div>
            <div class="header__titulos"><router-link to="/modulos">Cursos</router-link></div>
            <div class="header__titulos"><router-link to="/parceiros">Parceiros</router-link></div>
            <div class="header__titulos"><router-link to="/transparencia">Transparência</router-link></div>
            <div class="header__titulos">Contato</div>
            <div><i class="fa-regular fa-magnifying-glass"></i><input type="search" class="busca" placeholder="Busca por um assunto..."></div>
            <div><button class="botao__entrar">Entrar</button></div>
            <div><button class="botao__cadastrar">Cadastrar</button></div>
        </section>
    </header>
</template>

<script>
export default {
  name: 'Header-avasus'
}
</script>

<style scoped>

a {
    text-decoration: none;
    color: #2F2E41;
}

@media (min-width: 320px) {
    .header__titulos {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #2F2E41;
        padding-bottom: 0.5em;
    }

    .header__inicio {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #707070;
        padding-bottom: 0.5em;
    }

    .botao__entrar {
        width: 130px;
        height: 40px;
        border: 1px solid #707070;
        border-radius: 20px;
        background-color: white;
        color: #707070;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 600;
        margin: 1em 0;
    }

    .botao__cadastrar {
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

    .busca {
        background-color: transparent;
        border: 2px solid rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        color: #000000;
        padding: 1em;
        width: 353px;
        height: 40px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        background-position: 1em;
    }

    .busca::placeholder {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: #545454;
        background: url("../assets/lupa.svg") no-repeat;
        background-position: 1em;
    }

    .logo__avasus {
        display: flex;
        width: 199.5px;
        height: 43.08px;
        padding-bottom: 1em;
    }
}

@media (min-width: 480px) {
    .barra_superior {
        display: flex;
        flex-wrap: wrap;
        padding: 1em;
        justify-content: space-between;
        align-items: center;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .header__avasus {
        width: 199.5px;
        height: 43.08px;
        left: 122px;
        top: 28px;
    }

    .header__titulos {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #2F2E41;
    }

    .header__inicio {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #707070;
    }

    .botao__entrar {
        width: 130px;
        height: 40px;
        left: 1534px;
        top: 30px;
        border: 1px solid #707070;
        border-radius: 20px;
        background-color: white;
        color: #707070;
        cursor: pointer;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: 600;
    }

    .botao__cadastrar {
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

    .busca {
        background-color: transparent;
        border: 2px solid rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        color: #000000;
        padding: 1em;
        width: 353px;
        height: 40px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        background-position: 1em;
    }

    .busca::placeholder {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: #545454;
        background: url("../assets/lupa.svg") no-repeat;
        background-position: 1em;
    }

    .logo__avasus {
        display: flex;
        width: 199.5px;
        height: 43.08px;
        left: 122px;
        top: 28px;
    }
}

@media (min-width: 1024px) {
    .barra_superior {
        display: flex;
        position: fixed;
        top: -1em;
        left: 0;
        right: 0;
        height: 55px;
        width: auto;
        justify-content: space-evenly;
        align-items: center;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .header__avasus {
        width: 199.5px;
        height: 43.08px;
        left: 122px;
        top: 28px;
    }

    .header__titulos {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #2F2E41;
    }

    .header__inicio {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #707070;
    }

    .botao__entrar {
        width: 130px;
        height: 40px;
        left: 1534px;
        top: 30px;
        border: 1px solid #707070;
        border-radius: 20px;
        background-color: white;
        color: #707070;
        cursor: pointer;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: 600;
    }

    .botao__cadastrar {
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

    .busca {
        background-color: transparent;
        border: 2px solid rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        color: #000000;
        padding: 1em;
        width: 353px;
        height: 40px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        background-position: 1em;
    }

    .busca::placeholder {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: #545454;
        background: url("../assets/lupa.svg") no-repeat;
        background-position: 1em;
    }

    .logo__avasus {
        display: flex;
        width: 199.5px;
        height: 43.08px;
        left: 122px;
        top: 28px;
    }
}
</style>
