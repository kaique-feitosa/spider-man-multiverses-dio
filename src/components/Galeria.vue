<script lang="js">
  import { defineComponent, ref, onMounted } from "vue";
  import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.esm.js";
  import galeriaData from '@/assets/data/galeria.json';

  export default defineComponent({
    name: "Galeria",
    props: {
      actor: { type: String, required: true },
      movieKey: { type: String, required: true }
    },
    setup(props) {
      const { actor, movieKey } = props
      const images = ref({ normal: [], full: [] });

      const loadImages = () => {
        const actorData = galeriaData[props.actor];

        if (!actorData || !actorData[props.movieKey]) return;

        const movieData = actorData[props.movieKey];

        images.value.normal = movieData.images.normal.map(
          (fileName) => new URL(
            `../assets/images/spiderman-${props.actor}/${props.movieKey}/gallery/${fileName}`,
            import.meta.url
          ).href
        );

        images.value.full = movieData.images.full.map(
          (fileName) =>
            new URL(
              `../assets/images/spiderman-${props.actor}/${props.movieKey}/gallery/${fileName}`,
              import.meta.url
            ).href
        );
      };

      onMounted(() => {
        loadImages();

        Fancybox.bind('[data-fancybox="gallery"]', {
          // Configurações adicionais do Fancybox
        });
      })

      return {
        images,
        actor,
        movieKey
      }
    }
  });
</script>

<template>
  <div class="gallery">
    <ul>
      <li v-for="(normalImage, index) in images.normal" :key="index">
        <a v-if="images.full[index]" data-fancybox="gallery" :href="images.full[index]">
          <img v-if="normalImage" :src="normalImage" alt="Imagem de allguma cena do filme" :class="{
              'tobey-02': actor === 'tobey' && movieKey === 'movie-02',
              'tobey-03': actor === 'tobey' && movieKey === 'movie-03',
              'tom-gallery': actor === 'tom',
              'andrew-gallery': actor === 'andrew'
            }" />
        </a>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.gallery {
  padding: 20px 20px 20px 0;
  height: 220px;
}

.gallery ul {
  display: flex;
  align-items: center;
}

.gallery ul li {
  margin-left: 25px;
}

.gallery ul li:first-child {
  margin-left: 0;
}

.gallery ul li a img {
  border: 6px solid #fff;
  border-radius: 15px;
}

.gallery ul li a .tobey-02,
.gallery ul li a .andrew-gallery {
  width: 80%;
}

.gallery ul li a .tobey-03 {
  width: 89%;
}

.gallery ul li a .tom-gallery {
  width: 75%;
}
</style>