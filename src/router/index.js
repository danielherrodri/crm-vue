import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/ClientesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "listado-clientes",
      component: Inicio,
    },
    {
      path: "/agregar-cliente",
      name: "agregar-cliente",
      component: () => import("../views/NuevoClienteView.vue"),
    },
    {
      path: "/editar-cliente/:id",
      name: "editar-cliente",
      component: () => import("../views/EditarClienteView.vue"),
    },
  ],
});

export default router;
