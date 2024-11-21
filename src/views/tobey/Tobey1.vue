<script lang="js">
  import Navigator from '@/components/Navigator.vue';
  import Galeria from '@/components/Galeria.vue';
  import { defineComponent } from 'vue';
  import Pills from '@/components/Pills.vue';
  import BotaoTrailer from '@/components/BotaoTrailer.vue';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: "TobeyFilme1",
    components: {
      Navigator,
      Galeria,
      Pills,
      BotaoTrailer
    },
    setup() {
      const store = useStore()

      const ano = store.state.tobey.filme01.anoLancamento
      const diretor = store.state.tobey.diretor
      const trailer = store.state.tobey.filme01.trailer

      const rotas = [
        store.state.tobey.rotas[0],
        store.state.tobey.rotas[1],
        store.state.tobey.rotas[2]
      ]

      return {
        ano,
        trailer,
        diretor,
        rotas
      }
    }
  })
</script>

<template>
  <div class="s-wrapper">
    <div class="s-left-column">
      <Navigator :rotas spidermanIcon="spiderman1" />
    </div>

    <div class="s-main-content s-spiderman-01-01">
      <div class="s-main-content__top">
        <div class="s-logo">
          <img src="../../assets/images/spiderman-tobey/movie-01/logo.png" alt="Spider-Man (2002)"
            title="Spider-Man (2002)" />
        </div>

        <div class="s-description">
          <Pills :lancamento="ano" :diretor />

          <p class="s-description__text">
            <strong>Sinopse:</strong>&nbsp;Depois de ser picado por uma aranha
            geneticamente modificada em uma demonstração científica, o jovem
            nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende
            usá-los para para ganhar dinheiro, adotando o nome de Homem-Aranha
            e se apresentando em lutas de exibição. Porém, ao presenciar o
            assassinando de seu tio Ben e sentir-se culpado, Peter decide não
            mais usar seus poderes para proveito próprio e sim para enfrentar
            o mal, tendo como seu primeiro grande desafio o psicótico Duende
            Verde.
          </p>
        </div>

        <div class="s-links">
          <ul>
            <li>
              <BotaoTrailer :trailer />
            </li>
          </ul>
        </div>
      </div>

      <div class="s-main-content__bottom">
        <Galeria actor="tobey" movieKey="movie-01" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.s-wrapper {
  display: flex;
  flex-flow: row nowrap;

  height: 100vh;
}

.s-wrapper .s-left-column {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-right: 50px;
  height: 100%;
  width: 100px;
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;
}

/* MAIN */

.s-wrapper .s-main-content {
  height: 100%;
  padding-left: 130px;
  width: 100%;
}

.s-wrapper .s-main-content__top {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 80vh;
}

.s-wrapper .s-main-content .s-logo img {
  margin: 50px 0 30px 0;
}

.s-wrapper .s-main-content__top .s-description {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 20px;
  max-width: 50%;
}

.s-wrapper .s-main-content__top .s-description .s-description__text p {
  color: #fff;
  line-height: 170%;
}

.s-wrapper .s-main-content__top .s-description .pills {
  margin-bottom: 20px;
}

.s-wrapper .s-main-content__bottom {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 20vh;
}

.s-wrapper .s-main-content .s-links {
  padding: 9px 20px 20px 0;
}

.s-wrapper .s-main-content .s-links ul {
  display: flex;
}

.link-button:active .label {
  color: var(--primary-color);
}

.link-button:active .icon {
  transform: scale(0.9);
}

/* BACKGROUNDS */
.s-spiderman-01-01 {
  background-image: url("@/assets/images/spiderman-tobey/movie-01/background.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>