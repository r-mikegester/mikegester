import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
// import "flowbite";
import "./assets/css/tailwind.css";
import "./assets/css/animate.css";
import "./assets/css/hover.css";
import "./assets/css/scrollbar.css";

const app = createApp(App);
app.use(router, Icon);
app.use(PerfectScrollbar);

app.mount("#app");

router.beforeEach((to, from, next) => {
    document.querySelector(".flex-sidebar").classList.add("hidden");
    next();
});

