<script lang="js">
  import Navigator from '@/components/Navigator.vue';
  import Galeria from '@/components/Galeria.vue';
  import { defineComponent } from 'vue';
  import Pills from '@/components/Pills.vue';
  import BotaoTrailer from '@/components/BotaoTrailer.vue';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: "AndrewFilme02",
    components: {
      Navigator,
      Galeria,
      Pills,
      BotaoTrailer
    },
    setup() {
      const store = useStore()

      const ano = store.state.andrew.filme01.anoLancamento
      const diretor = store.state.andrew.diretor
      const trailer = store.state.andrew.filme01.trailer

      const rotas = [
        store.state.andrew.rotas[0],
        store.state.andrew.rotas[1],
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
      <Navigator :rotas spidermanIcon="spiderman1-andrew" />
    </div>

    <div class="s-main-content s-spiderman-03-02">
      <div class="s-main-content__top">
        <div class="s-logo">
          <img src="../../assets/images/spiderman-andrew/movie-02/logo.png" alt="The Amazing Spider-Man 2 (2014)"
            title="The Amazing Spider-Man 2 (2014)" />
        </div>

        <div class="s-description">
          <Pills :lancamento="ano" :diretor />

          <p class="s-description__text">
            <strong>Sinopse:</strong>&nbsp;O jovem Peter Parker está fascinado
            com as habilidades que adquiriu como Homem-Aranha. Agora, ele
            precisa lidar com dois problemas: o retorno de um velho amigo,
            Harry Osborn, e a chegada de um vilão mais forte e poderoso,
            Electro.
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
        <Galeria actor="andrew" movieKey="movie-02" />
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
.s-spiderman-03-02 {
  background-image: url("@/assets/images/spiderman-andrew/movie-02/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>