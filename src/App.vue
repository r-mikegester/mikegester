<template>
    <!-- App -->
    <div class="flex bg-packed font-lexend dark:bg-gradient-to-b overflow-auto from-gray-500 to-gray-900">
        <div id="sidebar-scroll"
            class="fixed z-50 lg:mt-0 hidden h-screen overflow-auto bg-white border-r-2 flex-sidebar lg:flex-auto w-sidebar lg:block dark:bg-gray-800 dark:border-gray-700 lg:z-0 lg:relative">
            <Sidebar />
        </div>



        <div class="flex-auto w-full h-screen overflow-auto">
            <Header class="fixed  top-0 z-40 " />
            <div class="flex-auto w-full h-screen overflow-auto" id="body-scroll">
                <div class="mb-20"></div>
                <router-view />
                <Footer />
            </div>
        </div>
    </div>
    <!-- end app -->
</template>

<script>
// vue Components
import Sidebar from "./components/SideBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// npm-js
import Scrollbar from "smooth-scrollbar";

export default {
    name: "App",

    components: {
        Header,
        Footer,
        Sidebar,
    },
    mounted() {
        Scrollbar.init(document.querySelector("#body-scroll"), {
            thumbMinSize: 0,
        });

        setTimeout(() => {
            var alert_dis = document.querySelectorAll(".alert-dismiss");
            alert_dis.forEach((x) =>
                x.addEventListener("click", function () {
                    x.parentElement.classList.add("hidden");
                })
            );
        }, 100);


    },

};
</script>
