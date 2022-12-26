<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white text-gray-400 dark:bg-gray-800">
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <router-link to="/" exact>
        <div class="flex items-center mb-5 "><img src="../assets/imgs/my-logo.png" class="w-14 h-14 mr-3" />
          <span class="text-2xl font-normal text-gray-800 dark:text-gray-500" translate="no">
            Mike Gester
            <span class="bg-gray-700 absolute mt-2 dark:block hidden rounded-md py-1 px-2 text-xs text-gray-200"
              title="Theme Indicator">Dark
              mode</span>
          </span>
        </div>
      </router-link>
      <button class="lg:hidden block float-right -mt-16 text-gray-400 dark:hover:text-emerald-500"
        @click="sidebarToggle">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25px" height="25px"
          preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
          <path fill="currentColor"
            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z" />
        </svg>
      </button>
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list p-4 mt-4">
      <p class="font-medium text-gray-400 dark:text-gray-600">Menu</p>
      <div class="wrap-item mt-4 dark:text-gray-500">
        <div class="item">
          <router-link to="/" exact
            class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                </path>
              </svg>
            </span>
            <span class="w-full"> Home</span>
          </router-link>
        </div>
        <div class="item mt-1">
          <router-link to="/profile"
            class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                </path>
              </svg>
            </span>
            <span class="w-full"> Profile</span>
          </router-link>
        </div>
        <div class="item mt-1">
          <router-link to="/projects"
            class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
                </path>
              </svg>
            </span>
            <span class="w-full"> Projects</span>
          </router-link>
        </div>
        <div class="item mt-1">
          <router-link to="/services"
            class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
                <path
                  d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                </path>
              </svg>
            </span>
            <span class="w-full"> Services</span>
          </router-link>
        </div>





      </div>
      <p class="font-medium text-gray-600 mt-4 pt-5 border-t border-gray-200 dark:border-gray-700">
        More
      </p>

      <div class="item my-3 text-gray-400">
        <menu-accordion>
          <template v-slot:icon>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z">
              </path>
            </svg>
          </template>
          <template v-slot:title> Extras </template>
          <template v-slot:content>

            <router-link to="/ratingsandfeedback"
              class="w-full text-left block rounded-md p-3 my-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
              Ratings and Feedback
            </router-link>
            <router-link to="/releasenotes"
              class="w-full text-left block rounded-md p-3 my-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
              Changelog
            </router-link>
            <router-link to="/faq" aria-disabled="true"
              class="w-full text-left block rounded-md p-3 my-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
              Frequently Asked Questions
            </router-link>
            <router-link to="/supporters"
              class="w-full text-left block rounded-md p-3 my-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
              Supporters
            </router-link>
            <router-link to="/help"
              class="w-full text-left block rounded-md p-3 my-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
              Help
            </router-link>
          </template>
        </menu-accordion>
        <div class="item mt-1">
          <router-link to="/contact"
            class="w-full flex text-left rounded-md box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                <path
                  d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z">
                </path>
              </svg>
            </span>
            <span class="w-full"> Contact</span>
          </router-link>
        </div>
        <div class="item mt-1">
          <router-link to="/about"
            class="w-full flex text-left rounded-md box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="w-full"> About</span>
          </router-link>
        </div>
      </div>

      <p class="font-medium text-gray-400 mt-4 pt-5 dark:text-gray-600 border-t border-gray-200 dark:border-gray-700">
        Experimental
      </p>

      <div class="item mt-1">
        <a href="" onclick="LoginWithReplit()" class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-100 text-gray-500
          dark:hover:bg-gray-700">
          <span class="mr-3 text-xl">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
          <span class="w-full"> Login</span>
        </a>

      </div>

      <div class="item mt-1">
        <router-link to="/comingsoon"
          class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-700">
          <span class="mr-3 text-xl">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
          <span class="w-full"> Coming Soon!</span>
        </router-link>

      </div>

    </div>

  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
import MenuAccordion from "./MenuAccordion.vue";
export default {
  components: {
    Icon,
    MenuAccordion,
  },
  methods: {
    sidebarToggle: function () {
      document.querySelector(".flex-sidebar").classList.add("hidden");
    },
  },
  mounted() { },

};

</script>
