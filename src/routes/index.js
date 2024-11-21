import { createRouter, createWebHistory } from "vue-router";
import HomepageView from "@/views/HomepageView.vue";
import Tobey1 from "@/views/tobey/Tobey1.vue";
import Tobey2 from "@/views/tobey/Tobey2.vue";
import Tobey3 from "@/views/tobey/Tobey3.vue";
import Tom1 from "../views/tom/Tom1.vue";
import Tom2 from "../views/tom/Tom2.vue";
import Tom3 from "../views/tom/Tom3.vue";
import Andrew1 from "../views/andrew/Andrew1.vue";
import Andrew2 from "../views/andrew/Andrew2.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: HomepageView,
  },
  {
    path: "/tobey-maguire/filme-01",
    name: "TobeyFilme01",
    component: Tobey1,
  },
  {
    path: "/tobey-maguire/filme-02",
    name: "TobeyFilme02",
    component: Tobey2,
  },
  {
    path: "/tobey-maguire/filme-03",
    name: "TobeyFilme03",
    component: Tobey3,
  },
  {
    path: "/tom-holland/filme-01",
    name: "TomFilme01",
    component: Tom1,
  },
  {
    path: "/tom-holland/filme-02",
    name: "TomFilme02",
    component: Tom2,
  },
  {
    path: "/tom-holland/filme-03",
    name: "TomFilme03",
    component: Tom3,
  },
  {
    path: "/andrew-garfield/filme-01",
    name: "AndrewFilme01",
    component: Andrew1,
  },
  {
    path: "/andrew-garfield/filme-02",
    name: "AndrewFilme02",
    component: Andrew2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "s-navigator__item--active",
});

export default router;
