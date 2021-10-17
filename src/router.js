import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/restonotes",
    name: "restonotes",
    component: () => import("./components/HomeResto")
  },
  {
    path: "/edit",
    name: "/edit",
    component: () => import("./components/EditResto")
  },
  {
    path: "/listing",
    name: "/listing",
    component: () => import("./components/ListingResto")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddResto")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;