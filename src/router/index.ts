import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

//Login
import Login from "@/views/Auth/Login/Main.vue";
import Home from "@/views/Home/Main.vue";
import Users from "@/views/Users/Main.vue";
import UserProfile from "@/views/User-Profile/Main.vue";
import Shopping from "@/views/Shopping/Main.vue";
import Levels from "@/views/Levels/Main.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/signin",
    name: "Login",
    component: Login,
    meta: { title: "Sign In", parent: "Login" },
  }, 
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "الصفحه الشخصيه", parent: "Home" },
  },
  {
    path: "/users",
    children: [
      {
        path: "",
        name: "Users",
        component: Users,
        meta: { title: "المستخدمين", parent: "Users" },
        
      },
      {
        path: "/user-profile/:id",
        name: "UserProfile",
        component: UserProfile,
        meta: { title: " الصفحه الشحصيه", parent: "UserProfile" },
      },],
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: Shopping,
    meta: { title: "المتجر", parent: "Shopping" },
  },
  {
    path: "/levels",
    name: "Levels",
    component: Levels,
    meta: { title: "المستويات", parent: "Levels" },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title && r.meta.parent);
  if (nearestWithTitle)
    document.title = nearestWithTitle.meta.title ;
  next();
});


export default router;
