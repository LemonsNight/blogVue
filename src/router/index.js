import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "@/router/router.config";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
