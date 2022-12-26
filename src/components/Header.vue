<template>
  <!-- this header -->
  <header class="bg-white  dark:bg-gray-800 p-2 border-b-2 dark:border-gray-700">
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

      <div class="mr-5 flex">
        <button id="theme-toggle" type="button" title="Change Theme"
          class="text-gray-500   hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 rounded-md p-5">
          <svg id="theme-toggle-dark-icon" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg id="theme-toggle-light-icon" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </button>
        <button @click="menuToggle" type="button" @blur="menuToggleBlur" title="Notifications">
          <div
            class="inline-flex absolute mt-4 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900 ">
          </div>
          <div class="user-avatar flex hover:bg-gray-100 group dark:hover:bg-gray-700  p-5 cursor-pointer rounded-md">

            <span class="text-md text-gray-300">
              <svg class="w-6 h-6 group-hover:text-emerald-500" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
                </path>
              </svg>
            </span>

          </div>
        </button>


        <router-link to="/profile" title="profile">
          <div class="user-avatar flex mx-2  cursor-pointer rounded-xl focus:ring-emerald-500 focus:ring-offset-2">
            <img src="../assets/imgs/profile-pic.jpg"
              class="rounded-full mr-4 w-14 h-14 mt-1 p-1 ring-1  ring-transparent ease-in-out dark:hover:ring-1 dark:hover:ring-emerald-500 hover:scale-110"
              alt="" />

          </div>
        </router-link>


        <transition name="fade">
          <div id="dropdownSmall" v-show="menu"
            class="block absolute right-8 mt-20 z-50 w-96 border dark:border-gray-700 bg-white dark:bg-gray-800  rounded-xl divide-y dark:divide-gray-700 divide-gray-100 shadow">
            <div class="flex py-3 px-4 text-sm text-gray-900 dark:text-gray-200">
              <div class="text-xl">Notifications</div>
            </div>
            <ul class=" text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownSmallButton">


              <section class="mb-0 .notif-toggle">
                <div
                  class="bg-red-500 alert alert-dismiss fade show  py-4 px-6 text-white md:flex justify-between items-center text-center md:text-left">
                  <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-4 h-4 mr-2">
                      <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                      <path fill="currentColor"
                        d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
                    </svg>
                    <strong class="mr-1">Limited Offer!</strong> Get it now before it's to late
                  </div>
                  <div class="flex items-center justify-center">

                    <button class="lg: block float-right  text-white dark:hover:text-emerald-500" @click="NotifToggle">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25px" height="25px"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                        <path fill="currentColor"
                          d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z" />
                      </svg>
                    </button>

                  </div>
                </div>
              </section>
              <section class="mb-0 ">
                <div
                  class="bg-gray-900 alert alert-dismiss fade show px-6 text-white md:flex justify-between items-center text-center md:text-left">
                  <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start">
                    <div id="dropdown-cta" class="p-2  bg-emerald-100 dark:bg-gray-900" role="alert">
                      <div class="flex items-center mb-3">


                      </div>
                      <p class="mb-3 text-sm text-emerald-500 dark:text-gray-100">
                        The Portfolio you are viewing is currently under <span
                          class="dark:text-emerald-500">Development</span> by
                        Mike
                        Gester. If you want to
                        have
                        you own website design like this kindly message me by clicking in the link below.
                      </p>
                      <a class="text-sm text-blue-900 underline hover:text-red-500 dark:text-blue-400 dark:hover:text-blue-300"
                        href="#">Click Here!</a>
                    </div>

                  </div>
                  <div class="flex items-center justify-center">

                    <button class="lg: block mx-auto md:float-right  text-white dark:hover:text-emerald-500"
                      @click="NotifToggle" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25px" height="25px"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                        <path fill="currentColor"
                          d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z" />
                      </svg><span class="text-center">Dismiss</span>
                    </button>


                  </div>
                </div>
              </section>

            </ul>
            <div class="pt-1">
              <div id="alert-3" class="flex p-4  bg-emerald-100 rounded-b-3xl dark:bg-gray-800" role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 w-10 h-10 text-green-500 dark:text-gray-400"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Info</span>
                <div class="ml-3 text-sm font-medium text-green-500 dark:text-gray-400">
                  You can Support me by <span class="dark:text-emerald-500">Buying me a Coffee!</span> thankyouuu in
                  advanced,
                  well appreciated!
                </div>

              </div>
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
