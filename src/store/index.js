import { createStore, useStore as baseUseStore } from "vuex";

export const store = createStore({
  state: {
    tobey: {
      rotas: [
        "/tobey-maguire/filme-01",
        "/tobey-maguire/filme-02",
        "/tobey-maguire/filme-03",
      ],
      diretor: "Sam Raimi",
      filme01: {
        anoLancamento: "2002",
        trailer: "https://www.youtube.com/watch?v=t06RUxPbp_c",
      },
      filme02: {
        anoLancamento: "2004",
        trailer: "https://www.youtube.com/watch?v=3jBFwltrxJw",
      },
      filme03: {
        anoLancamento: "2007",
        trailer: "https://www.youtube.com/watch?v=e5wUilOeOmg",
      },
    },
    tom: {
      rotas: [
        "/tom-holland/filme-01",
        "/tom-holland/filme-02",
        "/tom-holland/filme-03",
      ],
      diretor: "Jon Watts",
      filme01: {
        anoLancamento: "2017",
        trailer: "https://www.youtube.com/watch?v=2x-2iYxgMFU",
      },
      filme02: {
        anoLancamento: "2019",
        trailer: "https://www.youtube.com/watch?v=Nt9L1jCKGnE",
      },
      filme03: {
        anoLancamento: "2021",
        trailer: "https://www.youtube.com/watch?v=bHzGeci_8wc",
      },
    },
    andrew: {
      rotas: ["/andrew-garfield/filme-01", "/andrew-garfield/filme-02"],
      diretor: "Mark Web",
      filme01: {
        anoLancamento: "2012",
        trailer: "https://www.youtube.com/watch?v=6nzNdpJ3qMo",
      },
      filme02: {
        anoLancamento: "2014",
        trailer: "https://www.youtube.com/watch?v=PfUDLzyC1cM",
      },
    },
  },
  getters: {
    getMovieImages: (state) => (actor, movieKey) => {
      const actorState = state[actor];
      if (!actorState || !actorState[movieKey]) return { normal: [], full: [] };

      const movie = actorState[movieKey];
      if (!movie.images) return { normal: [], full: [] };

      const normalImages = {
        tobey: {
          filme01: import.meta.glob(
            "../assets/images/spiderman-tobey/movie-01/gallery/*.png",
            { eager: true }
          ),
          filme02: import.meta.glob(
            "../assets/images/spiderman-tobey/movie-02/gallery/*.png",
            { eager: true }
          ),
        },
      };

      const fullImages = {
        tobey: {
          filme01: import.meta.glob(
            "../assets/images/spiderman-tobey/movie-01/gallery/*.jpg",
            { eager: true }
          ),
          filme02: import.meta.glob(
            "../assets/images/spiderman-tobey/movie-02/gallery/*.png",
            { eager: true }
          ),
        },
      };

      return {
        normal: movie.images.normal.map(
          (name) =>
            normalGlob[
              `../assets/images/spiderman-${actor}/${movieKey}/gallery/${name}`
            ]?.default
        ),
        full: movie.images.full.map(
          (name) =>
            fullGlob[
              `../assets/images/spiderman-${actor}/${movieKey}/gallery/${name}`
            ]?.default
        ),
      };
    },
  },
});
