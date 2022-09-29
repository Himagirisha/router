import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeComp from "./components/HomeComp";
import OfficeComp from "./components/OfficeComp";
import LoginComp from "./components/LoginComp";
import SignupComp from './components/SignupComp'
import FetchProducts from './components/FetchProducts'

let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeComp,
    },
    {
      path: "/office",
      component: OfficeComp,
    },
    {
      path: "/login",
      component: LoginComp,
    },
    {
      path: "/signup",
      component: SignupComp,
    },
    {
      path: "/fetchproducts",
      component: FetchProducts,
    },
  ],
});
let app = createApp(App);
app.use(router);
app.mount("#app");
