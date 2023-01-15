<template>
  <!-- this header -->
  <header class="w-full bg-white  dark:bg-gray-800 p-2 border-b-2 dark:border-gray-700">
    <div class="wrap-header flex items-center justify-between flex-wrap">
      <div class="flex flex-no-shrink items-center">
        <button class="text-gray-500 lg:hidden ml-7 block" @click="sidebarToggle">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em"
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
          </svg>
        </button>

      </div>

      <div class="lg:mr-96 flex">
        <button id="theme-toggle" type="button" title="Change Theme"
          class="text-gray-500   hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 rounded-md px-3">
          <svg id="theme-toggle-dark-icon" class="hidden w-8 h-8 " xmlns="http://www.w3.org/2000/svg" width="1em"
            height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="currentColor" fill-opacity="0">
              <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate id="lineMdMoonRisingFilledLoop0" fill="freeze" attributeName="fill-opacity"
                  begin="0.7s;lineMdMoonRisingFilledLoop0.begin+6s" dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+2.2s"
                  dur="0.4s" values="1;0" />
              </path>
              <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+3s"
                  dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+5.2s"
                  dur="0.4s" values="1;0" />
              </path>
              <path
                d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+0.4s"
                  dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+2.8s"
                  dur="0.4s" values="1;0" />
              </path>
              <path
                d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+3.4s"
                  dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+5.6s"
                  dur="0.4s" values="1;0" />
              </path>
            </g>
            <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2"
              d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
              transform="translate(0 22)">
              <animateMotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22" />
            </path>
          </svg>
          <svg id="theme-toggle-light-icon" class="hidden w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="1em"
            height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <circle cx="12" cy="32" r="6" fill="currentColor">
              <animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12" />
            </circle>
            <g fill="none" stroke="currentColor" stroke-dasharray="2" stroke-dashoffset="2" stroke-linecap="round"
              stroke-width="2">
              <path d="M0 0">
                <animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s"
                  values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" />
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0" />
              </path>
              <path d="M0 0">
                <animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s"
                  values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" />
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0" />
              </path>
              <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate"
                values="0 12 12;360 12 12" />
            </g>
          </svg>
        </button>
        <button @click="menuToggle" type="button" @blur="menuToggleBlur" title="Notifications">
          <div
            class="theme-first inline-flex absolute mt-4 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-red-500 animate-ping opacity-75  rounded-full border-2 border-white dark:border-red-900 ">
          </div>
          <div
            class="inline-flex absolute mt-4 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-red-500   rounded-full border-2 border-white dark:border-red-900 ">
          </div>
          <div class="user-avatar flex hover:bg-gray-100 group dark:hover:bg-gray-700  p-5 cursor-pointer rounded-md">

            <span class="text-md text-gray-300">
              <Icon icon="entypo:bell" class="w-7 h-7 group-hover:text-emerald-500" />
            </span>

          </div>
        </button>


        <button @click="profToggle" type="button" @blur="profToggleBlur">
          <div
            class="user-avatar flex mx-2  cursor-pointer rounded-xl focus:ring-emerald-500 focus:outline-none focus:ring focus:ring-offset-2 active:ring-emerald-400">
            <img src="../assets/imgs/profile-pic.jpg"
              class="rounded-full mr-4 w-14 h-14 mt-1 p-1 ring-1  ring-transparent ease-in-out dark:hover:ring-1 dark:hover:ring-emerald-500 hover:scale-110"
              alt="" />

          </div>
        </button>


        <transition name="fade">
          <div id="dropdownSmall" v-show="menu"
            class="block absolute right-2 md:right-96  mt-16 z-50  w-96 md:w-96 border dark:border-gray-700 bg-white dark:bg-gray-800  rounded-xl divide-y dark:divide-gray-700 divide-gray-100 shadow">
            <div class="flex py-3 px-4 text-sm text-gray-900 dark:text-gray-200">
              <div class="text-xl">Notifications</div>
            </div>
            <ul class=" text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownSmallButton">



              <div class="pt-1">
                <div id="alert-3"
                  class="flex p-4 items-center alert-dismiss fade show bg-emerald-200  dark:bg-emerald-600"
                  role="alert">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-6 h-6">
                    <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                    <path fill="currentColor"
                      d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <div class="mx-3 text-sm font-medium text-gray-800 dark:text-white">

                    <strong class="mx-1">BETA</strong><span class="mx-auto"> This Portfolio is still on
                      development!</span>
                  </div>
                  <div class="my-1">
                    <button type="button" title="Hide" @click="NotifToggle"
                      class=" w-full flex text-center rounded-xl box-border p-3 text-white  bg-emerald-500  hover:bg-red-300 mx-auto dark:hover:bg-red-500">
                      <span class=" text-xl">
                        <Icon icon="octicon:eye-closed-16" class="w-7 h-7" />
                      </span>

                    </button>
                  </div>
                </div>
              </div>
              <a href="#">
                <div class="pt-1">
                  <div id="alert-3"
                    class="flex p-4 items-center alert-dismiss fade show bg-emerald-100 dark:bg-gray-900" role="alert">

                    <span class="sr-only">Info</span>
                    <div class="mx-3 text-sm font-medium text-green-500 dark:text-gray-400">
                      The Portfolio you are viewing is currently under <span
                        class="dark:text-emerald-500">Development</span> by
                      Mike
                      Gester. If you want to
                      have
                      you own website design like this kindly message me by clicking in this notification.
                    </div>
                    <div class="my-1">
                      <button type="button" @click="NotifToggle" class=" w-full flex text-center rounded-xl box-border p-3 text-white  bg-emerald-500  hover:bg-red-300 mx-auto
    dark:hover:bg-red-500">
                        <span class=" text-xl">
                          <Icon icon="octicon:eye-closed-16" class="w-7 h-7" />
                        </span>

                      </button>

                    </div>
                  </div>
                </div>

              </a>
            </ul>

            <div class="pt-1">
              <div id="alert-3" class="flex p-4 items-center bg-emerald-100 rounded-b-3xl dark:bg-gray-800"
                role="alert">

                <span class="sr-only">Info</span>
                <div class="mx-3 text-sm font-medium text-green-500 dark:text-gray-400">
                  You can Support me by <span class="dark:text-emerald-500">Buying me a Coffee!</span> thankyouuu in
                  advanced!
                </div>
                <div class="my-1">
                  <a href="https://ko-fi.com/mikegester" target="_blank"
                    class=" w-full flex text-center rounded-xl box-border p-3 text-white  bg-emerald-500  hover:bg-gray-100 mx-auto dark:hover:bg-gray-700">
                    <span class=" text-xl">
                      <Icon icon="line-md:coffee-half-empty-twotone-loop" class="w-7 h-7 " />
                    </span>

                  </a>
                </div>
              </div>
            </div>

          </div>
        </transition>

        <transition name="prof">
          <div id="dropdownProf" v-show="prof"
            class="block absolute right-2 md:right-96 mt-16 z-10 w-64 border  dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl divide-y dark:divide-gray-700 divide-gray-100 shadow">
            <div class="py-1 mt-4 px-4 text-sm text-gray-900 dark:text-gray-200">
              <span class="my-2 text-md text-semibold">Accent Color: <span
                  class="inline-flex items-center justify-center px-2  ml-3 text-sm font-medium rounded-full text-emerald-500 bg-emerald-100 dark:bg-emerald-600 dark:text-white">COMING
                  SOON</span>
              </span>
              <span class="bg-transparent block  rounded-xl py-1 px-2 text-xs text-gray-200">
                <div class="flex space-x-2 mx-auto p-2">
                  <span id="theme-toggle-light-icon" @click="document.body.classList.add('theme-first')"
                    class="bg-purple-400 text-gray-200 rounded  ease-in-out duration-200 w-10 h-10 cursor-pointer hover:border-2 outline-offset-2 border-gray-400 "
                    title="White"></span>
                  <span id="second"
                    class="bg-red-500 text-gray-200 rounded  ease-in-out duration-200 w-10 h-10 cursor-pointer hover:border-2 outline-offset-2 border-gray-400"
                    title="Scarlet"></span>
                  <span id="third"
                    class="bg-emerald-400 text-gray-200 rounded  ease-in-out duration-200 w-10 h-10 cursor-pointer hover:border-2 outline-offset-2 border-gray-400"
                    title="Default"></span>
                  <span id="theme-toggle-dark-icon"
                    class="bg-blue-400 text-gray-200 rounded  ease-in-out duration-200 w-10 h-10 cursor-pointer hover:border-2 outline-offset-2 border-gray-400"
                    title="Blue"></span>
                </div>

              </span>
            </div>
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownProfButton">
              <li>
                <router-link to="/adminlogin"
                  class="flex py-4 px-4 ease-in-out duration-300 hover:bg-emerald-500 hover:dark:bg-gray-700 hover:text-white"><span
                    class="mr-3 text-xl">
                    <Icon icon="mdi:user-lock" class="w-6 h-6" />
                  </span>
                  <span class="w-full"> Admin Login</span></router-link>
              </li>
              <li>
                <router-link to="/profile"
                  class="flex py-4 px-4 ease-in-out duration-300 hover:bg-emerald-500 hover:dark:bg-gray-700 hover:text-white"><span
                    class="mr-3 text-xl">
                    <Icon icon="fa6-solid:user" class="w-6 h-6" />
                  </span>
                  <span class="w-full">Profile</span></router-link>
              </li>
              <li>
                <router-link to="/settings"
                  class="flex py-4 px-4 ease-in-out duration-300 hover:bg-emerald-500 hover:dark:bg-gray-700 hover:text-white"><span
                    class="mr-3 text-xl">
                    <Icon icon="eos-icons:rotating-gear" class="w-6 h-6" />
                  </span>
                  <span class="w-full">Settings</span></router-link>
              </li>
            </ul>
            <div class="py-1">
              <a href="/https://mikegester.crisp.help/en/"
                class="flex py-4 px-4 ease-in-out duration-300 hover:bg-emerald-500 hover:dark:bg-gray-700 hover:text-white dark:text-gray-400 text-gray-700">
                <span class="mr-3 text-xl">
                  <Icon icon="line-md:question-circle" class="w-6 h-6" />
                </span>
                <span>Help</span></a>
            </div>
          </div>
        </transition>

      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  data() {
    return {
      menu: false,
      prof: false,
    };
  },
  components: {
    Icon,
  },
  methods: {
    menuToggle: function () {
      this.menu = !this.menu;
    },
    menuToggleBlur: function () {
      this.menu = false;
    },
    profToggle: function () {
      this.prof = !this.prof;
    },
    profToggleBlur: function () {
      this.prof = false;
    },

    closeWindow: function () {
      document.getElementById(".closeWindow").addEventListener("click", function () {
        window.close();
      });
    },

    sidebarToggle: function () {
      document.querySelector(".flex-sidebar").classList.remove("hidden");
    },
    NotifToggle: function () {
      document.querySelector(".notif-toggle").classList.remove("hidden");
    },
  },
  mounted() {
    var themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem("color-theme") === "dark" ||
      !("color-theme" in localStorage)
    ) {
      document.documentElement.classList.add("dark");
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      themeToggleDarkIcon.classList.remove("hidden");
    }



    var themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  },



};
</script>
