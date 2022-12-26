import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
// import "flowbite";
import "./assets/tailwind.css";
import "./assets/animate.css";
import "./assets/sass/css/hover.css";
import "./assets/sass/css/scrollbar.css";

const app = createApp(App);
app.use(router, Icon);
app.use(PerfectScrollbar);
app.mount("#app");

router.beforeEach((to, from, next) => {
    document.querySelector(".flex-sidebar").classList.add("hidden");
    next();
});

const { verify } = require('hcaptcha');

const secret = 'my hcaptcha secret from hcaptcha.com';
const token = 'token from widget';

verify(secret, token)
    .then((data) => {
        if (data.success === true) {
            console.log('success!', data);
        } else {
            console.log('verification failed');
        }
    })
    .catch(console.error);