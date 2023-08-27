import { createRouter, createWebHistory } from "vue-router";
import TheFirstPage from "../views/TheFirstPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: TheFirstPage,
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/TheSecondPage"),
  },
  {
    path: "/about-product",
    name: "about",
    component: () => import("../views/TheAboutProduct"),
  },
  {
    path: "/ui-page",
    name: "ui-page",
    component: () => import("../views/TheUiPage"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
