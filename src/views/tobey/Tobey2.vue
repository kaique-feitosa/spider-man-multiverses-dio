<script lang="js">
  import Navigator from '@/components/Navigator.vue';
  import Galeria from '@/components/Galeria.vue';
  import { defineComponent } from 'vue';
  import Pills from '@/components/Pills.vue';
  import BotaoTrailer from '@/components/BotaoTrailer.vue';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: "TobeyFilme2",
    components: {
      Navigator,
      Galeria,
      Pills,
      BotaoTrailer
    },
    setup() {
      const store = useStore()

      const ano = store.state.tobey.filme02.anoLancamento
      const diretor = store.state.tobey.diretor
      const trailer = store.state.tobey.filme02.trailer

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

    <div class="s-main-content s-spiderman-01-02">
      <div class="s-main-content__top">
        <div class="s-logo">
          <img src="../../assets/images/spiderman-tobey/movie-02/logo.png" alt="Spider-Man (2004)"
            title="Spider-Man (2004)" />
        </div>

        <div class="s-description">
          <Pills :lancamento="ano" :diretor />

          <p class="s-description__text">
            <strong>Sinopse:</strong>&nbsp;Quando uma falha na experiência de
            fusão nuclear resulta em uma explosão que mata sua esposa, o Dr.
            Otto Octavius é transformado em Dr. Octopus, um ciborgue com
            tentáculos de metal. Doc Ock culpa o Homem-Aranha pelo acidente e
            quer vingança. Enquanto isso, o alter ego do herói, Peter Parker,
            perde seus poderes. Para complicar as coisas, o seu melhor amigo
            odeia o Homem-Aranha e sua amada fica noiva.
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
        <Galeria actor="tobey" movieKey="movie-02" />
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

/* BACKGROUNDS */
.s-spiderman-01-02 {
  background-image: url("@/assets/images/spiderman-tobey/movie-02/background.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>