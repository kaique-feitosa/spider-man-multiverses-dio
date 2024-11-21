<script lang="js">
  import { defineComponent } from 'vue';
  import { RouterLink } from 'vue-router';

  export default defineComponent({
    name: "Galeria",
    props: {
      rotas: { type: Array, required: true },
      spidermanIcon: { required: true }
    },
    setup(props) {
      const iconeSrc = new URL(
        `../assets/images/icons/${props.spidermanIcon}.png`,
        import.meta.url
      ).href

      return {
        iconeSrc
      }
    }
  })
</script>

<template>
  <nav class="navigator">
    <div class="navigator__icon">
      <RouterLink to="/">
        <img :src="iconeSrc" alt="Spider-Man icon" />
      </RouterLink>
    </div>

    <ul>
      <li v-for="(rota, index) in rotas" :key="index">
        <RouterLink :to="rota" class="s-navigator__item">
          0{{ index + 1 }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navigator {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80vh;
  width: 100%;

  position: relative;
}

.navigator::before {
  content: "";
  background-color: #fff;
  height: 100%;
  width: 2px;
  z-index: 0;

  position: absolute;
  top: 0;
}

.navigator .navigator__icon {
  position: absolute;
  top: -20px;
}

.navigator ul {
  z-index: 1;
}

.navigator ul li {
  margin: 60px 0;
}

.navigator ul li:first-child {
  margin-top: 0;
}

.navigator ul li:last-child {
  margin-bottom: 0;
}

.navigator ul li a {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  height: 45px;
  width: 45px;
}

.navigator ul li .s-navigator__item:hover,
.navigator ul li .s-navigator__item:active {
  background-color: #fff;
  color: var(--primary-color);
}

.navigator ul li .s-navigator__item--active {
  background-color: #fff;
  color: var(--primary-color);
}
</style>