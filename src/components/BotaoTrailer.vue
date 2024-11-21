<script lang="js">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: "BotaoTrailer",
    props: {
      trailer: { type: String, required: true }
    },
    setup(props) {
      const trailer = props.trailer

      return {
        trailer
      }
    }
  })
</script>

<template>
  <a :href="trailer" class="link-button" target="_blank">
    <span class="icon">
      <div class="play-icon">&nbsp;</div>
    </span>
    <span class="label">Assistir ao trailer</span>
  </a>
</template>

<style scoped>
a.link-button {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
  border: 2px solid #ffefef;
  border-radius: 66px;
  color: #fff;
  padding: 0.3rem 1rem;
}

a.link-button .icon {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary-color);
  background-clip: content-box;
  border-radius: 50%;
  height: 32px;
  padding: 3px;
  transition: .4s ease;
  width: 32px;

  position: relative;
}

a.link-button .icon .play-icon {
  border: 7px solid #fff;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  height: 0;
  margin-right: -7px;
  transition: .4s ease;
  width: 0;
}

a.link-button .label {
  margin-left: 10px;
}

a.link-button:hover {
  filter: brightness(1.2);
}

a.link-button:hover .icon,
a.link-button:hover .icon .play-icon {
  transform: scale(0.9);
}
</style>