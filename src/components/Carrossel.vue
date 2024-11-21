<script lang="js">
  import { defineComponent, onBeforeUnmount, onMounted } from 'vue';
  import { RouterLink } from 'vue-router';

  export default defineComponent({
    name: "Carrossel",
    props: {
      mainElement: { type: HTMLElement, required: true }
    },
    setup(props) {
      function handleMouseEnter(event) {
        const card = event.currentTarget;
        card.classList.add("s-card--hovered");
        props.mainElement.id = `${card.id}-hovered`;
      }

      function handleMouseLeave(event) {
        const card = event.currentTarget;
        card.classList.remove("s-card--hovered");
        props.mainElement.id = "";
      }

      function addEventListenersToCards() {
        const cardElements = document.getElementsByClassName("s-card");

        for (let index = 0; index < cardElements.length; index++) {
          const card = cardElements[index];
          card.addEventListener("mouseenter", handleMouseEnter);
          card.addEventListener("mouseleave", handleMouseLeave);
        }
      }

      function removeEventListenersFromCards() {
        const cardElements = document.getElementsByClassName("s-card");

        for (let index = 0; index < cardElements.length; index++) {
          const card = cardElements[index];
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        }
      }

      onMounted(() => {
        addEventListenersToCards()
      })

      onBeforeUnmount(() => {
        removeEventListenersFromCards()
      })
    }
  })
</script>

<template>
  <div class="s-container">
    <div class="s-cards-carousel" style="transform: translateZ(-40vw) rotateY(0)">
      <RouterLink to="tobey-maguire/filme-01" class="s-card" id="spider-man-01">
        <img src="@/assets/images/pic-sm-bg-01.jpg" class="s-card__background" />
        <img src="@/assets/images/spider-man-01.png" alt="Tobey Maguire" class="s-card__image" />
        <h2 class="s-card__title">Tobey Maguire</h2>
      </RouterLink>
      <RouterLink to="tom-holland/filme-01" class="s-card" id="spider-man-02">
        <img src="@/assets/images/pic-sm-bg-02.jpg" class="s-card__background" />
        <img src="@/assets/images/spider-man-02.png" alt="Tom Holland" class="s-card__image" />
        <h2 class="s-card__title">Tom Holland</h2>
      </RouterLink>

      <RouterLink to="andrew-garfield/filme-01" class="s-card" id="spider-man-03">
        <img src="@/assets/images/pic-sm-bg-03.jpg" class="s-card__background" />
        <img src="@/assets/images/spider-man-03.png" alt="Andrew Garfield" class="s-card__image" />
        <h2 class="s-card__title">Andrew Garfield</h2>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.s-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  perspective: 3000px;

  position: relative;
}

.s-cards-carousel {
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  transition: transform 0.4s ease-in;

  width: calc((100vw / 3) - 10%);
}

.s-card {
  border: 0.5rem solid #fff;
  height: 70vh;
  transition: filter 0.5s ease-in-out;
  width: 100%;

  position: absolute;
}

.s-card:nth-child(1) {
  transform: rotateY(0) translateZ(50vw);
}

.s-card:nth-child(2) {
  transform: rotateY(120deg) translateZ(50vw);
}

.s-card:nth-child(3) {
  transform: rotateY(240deg) translateZ(50vw);
}

.s-card__background {
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 1s ease-in-out;
  width: 100%;

  position: absolute;
}

.s-card__image {
  height: 100%;
  object-fit: contain;
  transition: 1s ease-in-out;
  width: 100%;

  position: relative;
}

.s-card__title {
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: bottom 1s ease-in-out;
  width: 100%;

  position: absolute;
  bottom: 0;
}

/* HOVER ANIMATION */

.s-card--hovered .s-card__background {
  cursor: pointer;
  opacity: 0;
}

.s-card--hovered .s-card__image {
  transform: scale(1.4);
  filter: drop-shadow(30px 10px 4px rgba(0, 0, 0, 0.5));
}

.s-card--hovered .s-card__title {
  bottom: 46%;
}
</style>