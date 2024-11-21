<script lang="js">
  import { defineComponent, onMounted } from 'vue';

  export default defineComponent({
    name: "ControllerPrincipal",
    setup() {
      function selectCarouselItem(event) {
        // Obter o botão clicado
        const selectedButtonElement = event.currentTarget;
        const selectedItem = selectedButtonElement.id;

        // Rotacionar carrossel
        const carousel = document.querySelector(".s-cards-carousel");
        const transform = carousel.style.transform || "rotateY(0deg)";
        const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i) || ["rotateY(0deg)"];
        const rotateYDeg = -120 * (Number(selectedItem) - 1);

        const newTransform = transform.replace(
          rotateY[0],
          `rotateY(${rotateYDeg}deg)`
        );

        carousel.style.transform = newTransform;

        // Atualiza o botão ativo
        const activeButtonElement = document.querySelector(
          ".s-controller__button--active"
        );

        activeButtonElement.classList.remove("s-controller__button--active");
        selectedButtonElement.classList.add("s-controller__button--active");
      }

      onMounted(() => {
        const firstButton = document.querySelector(".s-controller__button")

        if (firstButton) {
          firstButton.click()
        }
      })

      return {
        selectCarouselItem
      }
    }
  })
</script>

<template>
  <div class="s-controller">
    <div id="1" class="s-controller__button s-controller__button--active" @click="selectCarouselItem">
      01
    </div>
    <div id="2" class="s-controller__button" @click="selectCarouselItem">
      02
    </div>
    <div id="3" class="s-controller__button" @click="selectCarouselItem">
      03
    </div>
    <div class="s-controller__line"></div>
  </div>
</template>

<style scoped>
.s-controller {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3rem;
  width: 100%;

  position: absolute;
  bottom: 1.5rem;
}

.s-controller__button {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary-color);
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  height: 2.5rem;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  width: 2.5rem;
  z-index: 1;
}

.s-controller__button:hover {
  transform: scale(1.1);
}

.s-controller__button:nth-child(2) {
  margin: 0 3.75rem;
}

.s-controller__button--active {
  background-color: #fff;
  border: 0.1875rem solid var(--primary-color);
  color: var(--primary-color);
  outline: 0.125rem solid #fff;
}

.s-controller__line {
  background-color: #fff;
  height: 2px;
  width: 50%;

  position: absolute;
}
</style>