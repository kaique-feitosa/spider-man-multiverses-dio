<script lang="js">
  import { defineComponent } from 'vue';
  import { RouterLink } from 'vue-router';

  export default defineComponent({
    name: "MenuPrincipal"
  })
</script>

<template>
  <nav class="s-menu">
    <ul>
      <li class="s-menu__item">
        <RouterLink to="/">Página inicial</RouterLink>
      </li>
      <li class="s-menu__item">
        <RouterLink to="tobey-maguire/filme-01">Tobey Maguire</RouterLink>
      </li>
      <li class="s-menu__item s-menu__icon">
        <img src="@/assets/images/icons/spider.svg" alt="Spider-Man Multiverse" />
      </li>
      <li class="s-menu__item">
        <RouterLink to="tom-holland/filme-01">Tom Holland</RouterLink>
      </li>
      <li class="s-menu__item">
        <RouterLink to="andrew-garfield/filme-01">Andrew Garfield</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.s-menu {
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  position: relative;
}

.s-menu__item {
  display: inline-block;
  margin: 0 1.25rem;
  text-transform: uppercase;
}

.s-menu__icon {
  margin: 0 1.25rem;
  vertical-align: middle;
  width: 2.5rem;
}
</style>