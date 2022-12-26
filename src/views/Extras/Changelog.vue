<template>
  <!-- Search component Accordion with name of type,  press Ctrl + F -->

  <div class="accordion h-auto p-4 mx-6">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg class="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
              </path>
            </svg>
            Home
          </router-link>
        </li>

        <li>
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <router-link to="/releasenotes"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Changelog</router-link>
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Changelog
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Version History of the Portfolio
      </p>
    </div>

    <div class="grid lg:grid-cols-1 grid-col-1 gap-4 mt-5">
      <!-- default alert  -->

      <div class="card row-span-1 grid grid-cols-1 gap-5 bg-white dark:bg-gray-800 w-full rounded-xl p-5 shadow">

        <div class="accordion-packed">
          <h2 class="font-semibold dark:text-gray-200">
            Version
          </h2>

          <div class="wrapper mt-5">
            <!-- copy this component  -->
            <menu-accordion>
              <template v-slot:icon>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                  </path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </template>
              <template v-slot:title><span class=" text-emerald-500"> v.0.2.0 <span
                    class="inline-flex items-center justify-center px-2  ml-3 text-sm font-medium rounded-full text-emerald-500 bg-emerald-100 dark:bg-emerald-700 dark:text-gray-300">Current</span></span>
              </template>
              <template v-slot:content>
                <p class="text-gray-400 p-5">
                  Changes in v.0.2.0 <br />
                  - Mobile Friendly UI <br />
                  - Single Page Routing <br />
                  - Responsiveness <br />
                  - Usability <br />
                </p>
              </template>
            </menu-accordion>
            <menu-accordion>
              <template v-slot:icon>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                  </path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </template>
              <template v-slot:title><span class=" text-emerald-500"> v.0.1.0 </span> </template>
              <template v-slot:content>
                <p class="text-gray-400 p-5">
                  Changes in v.0.1.0 <br />
                  - Initial Commit <br />
                  - Social Media Inspired <br />
                  - Modern Website Design <br />
                  - Theme Selection <br />
                </p>
              </template>
            </menu-accordion>
            <!-- end copy -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import AppAccordion from "../../components/AppAccordion.vue";
import MenuAccordion from "../../components/MenuAccordion.vue";
export default {
  components: {
    Icon,
    AppAccordion,
    MenuAccordion,
  },
  mounted() { },
};
</script>
