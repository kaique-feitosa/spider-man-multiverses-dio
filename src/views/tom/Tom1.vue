<script lang="js">
  import Navigator from '@/components/Navigator.vue';
  import Galeria from '@/components/Galeria.vue';
  import { defineComponent } from 'vue';
  import Pills from '@/components/Pills.vue';
  import BotaoTrailer from '@/components/BotaoTrailer.vue';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: "TomFilme1",
    components: {
      Navigator,
      Galeria,
      Pills,
      BotaoTrailer
    },
    setup() {
      const store = useStore()

      const ano = store.state.tom.filme01.anoLancamento
      const diretor = store.state.tom.diretor
      const trailer = store.state.tom.filme01.trailer

      const rotas = [
        store.state.tom.rotas[0],
        store.state.tom.rotas[1],
        store.state.tom.rotas[2]
      ];

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
      <Navigator :rotas spidermanIcon="spiderman1-tom" />
    </div>

    <div class="s-main-content s-spiderman-02-01">
      <div class="s-main-content__top">
        <div class="s-logo">
          <img src="../../assets/images/spiderman-tom/movie-01/logo.png" alt="Spider-Man: Homecoming (2017)"
            title="Spider-Man: Homecoming (2017)" class="tom" />
        </div>

        <div class="s-description">
          <Pills :lancamento="ano" :diretor />

          <p class="s-description__text">
            <strong>Sinopse:</strong>&nbsp;Depois de lutar ao lado dos
            Vingadores, chegou a hora do jovem Peter Parker voltar para casa
            em Nova York ao lado de sua tia May. Sob o olhar atento do mentor
            Tony Stark, Peter começa a abraçar sua nova identidade como
            Homem-Aranha e combate diariamente pequenos crimes nas redondezas.
            Ele acredita que encontrou a missão de sua vida quando o terrível
            vilão Abutre surge ameaçando a cidade. O problema é que a tarefa
            não será tão fácil como ele imaginava.
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
        <Galeria actor="tom" movieKey="movie-01" />
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

.s-wrapper .s-main-content .s-logo .tom {
  width: 40%;
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
.s-spiderman-02-01 {
  background-image: url("@/assets/images/spiderman-tom/movie-01/background.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>