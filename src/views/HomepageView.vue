<script lang="js">
  import Carrossel from '@/components/Carrossel.vue';
  import ControllerPrincipal from '@/components/ControllerPrincipal.vue';
  import MenuPrincipal from '@/components/MenuPrincipal.vue';
  import { defineComponent, onMounted, ref } from 'vue';

  export default defineComponent({
    name: "HomepageView",
    components: {
      MenuPrincipal,
      Carrossel,
      ControllerPrincipal
    },
    setup() {
      const mainElement = ref(null);

      onMounted(() => {
        if (!mainElement.value) {
          console.error("A referência ao elemento <main> não foi encontrada.")
        }
      })

      return {
        mainElement
      }
    }
  })
</script>

<template>
  <main ref="mainElement" class="homepage">
    <MenuPrincipal />
    <Carrossel :mainElement />
    <ControllerPrincipal />
  </main>
</template>

<style scoped>
.homepage {
  background-color: var(--primary-color);
  height: 100vh;
  width: 100%;
}

.homepage::before {
  content: "";
  background-image: url("@/assets/images/spider-man-background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  opacity: 0.2;
  transition: background-image 1s ease-in-out, opacity 1s ease-in-out;
  width: 100%;

  position: absolute;
}

.homepage#spider-man-01-hovered::before {
  background-image: url("@/assets/images/pic-sm-bg-01.jpg");
}

.homepage#spider-man-02-hovered::before {
  background-image: url("@/assets/images/pic-sm-bg-02.jpg");
}

.homepage#spider-man-03-hovered::before {
  background-image: url("@/assets/images/pic-sm-bg-03.jpg");
}

.homepage[id^="spider-man-"]::before {
  opacity: 1;
}

.homepage[id^="spider-man-"] .s-card:not(.s-card--hovered) {
  filter: grayscale(100%);
}
</style>
