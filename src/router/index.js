import { createRouter, createWebHistory } from "vue-router";

// Default Pages
import Home from "../views/Home.vue";
// Component Pages
import Projects from "../views/overview/Projects.vue";
import Services from "../views/overview/Services.vue";
//Extra Pages
import Contact from "../views/components/Contact.vue";
import Help from "../views/Help.vue";
import Supporters from "../views/Supporters.vue";
import About from "../views/AboutView.vue";
import ReleaseNotes from "../views/Extras/Changelog.vue";
import RatingsandFeedback from "../views/Extras/RatingsandFeedback.vue";
import NotFound from "../views/Extras/404errorpagenotfound.vue";
import FAQ from "../views/Extras/FAQ.vue";
import LFI from "../views/projects/LFIDentalClinic.vue";
import FLUHACS from "../views/projects/FLUHACS.vue";
import Blog from "../views/profile/Blog.vue";
import Gallery from "../views/profile/Gallery.vue";
import Resume from "../views/profile/Resume.vue";
import Profile from "../views/profile/Profile.vue";
var appname = " | Mike Gester";

const routes = [
    // Routes
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: "Home " + appname },
    },

    // Components based Routes
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
        meta: { title: "Projects" + appname },
    },
    {
        path: "/services",
        name: "Services",
        component: Services,
        meta: { title: "Services" + appname },
    },


    {
        path: "/welp",
        name: "Help",
        component: Help,
        meta: { title: "Help" + appname },
    },
    {
        path: "/supporters",
        name: "Supporters",
        component: Supporters,
        meta: { title: "Supporters" + appname },
    },

    // Dropdown Component Routes
    {
        path: "/about",
        name: "About",
        component: About,
        meta: { title: "About" + appname },
    },

    // Extras Component Routes
    {
        path: "/releasenotes",
        name: "ReleaseNotes",
        component: ReleaseNotes,
        meta: { title: "ReleaseNotes" + appname },
    },

    {
        path: "/:pathMatch(.*)*",
        name: "Pagenotfound",
        component: NotFound,
        meta: { title: "Page not Found" + appname },
    },

    {
        path: "/ratingsandfeedback",
        name: "Ratings and Feedback",
        component: RatingsandFeedback,
        meta: { title: "Ratings and Feedback" + appname },
    },

    {
        path: "/faq",
        name: "FAQ",
        component: FAQ,
        meta: { title: "FAQ" + appname },
    },

    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: { title: "Profile" + appname },
    },

    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: { title: "Contact" + appname },
    },

    {
        path: "/fluhacs",
        name: "FLUHACS",
        component: FLUHACS,
        meta: { title: "FLUHACS" + appname },
    },

    {
        path: "/lfidentalclinic",
        name: "LFI",
        component: LFI,
        meta: { title: "LFI" + appname },
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery,
        meta: { title: "Gallery" + appname },
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
        meta: { title: "Blog" + appname },
    },
    {
        path: "/resume",
        name: "Resume",
        component: Resume,
        meta: { title: "Resume" + appname },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass: "exact-active",

});



router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
