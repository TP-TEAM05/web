import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TranscriptsView from "../views/TranscriptsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/transcripts",
    name: "transcripts",
    component: TranscriptsView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
