import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/store/app";

const routes = [
  {
    path: "/",
    name: "Chess",
    meta: { showNavbar: true },
    component: () => import("@/views/Chess.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { showNavbar: false },
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const $store = useAppStore();
  $store.showNavbar = !!to.meta.showNavbar;
});

export default router;
