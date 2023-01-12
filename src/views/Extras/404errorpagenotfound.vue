<template>
  <!-- Search component Accordion with name of type,  press Ctrl + F -->

  <div class="accordion h-auto p-4 mx-3">
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
            <router-link to="/404errorpagenotfound"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Page
              not Found</router-link>
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        PAGE NOT FOUND
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Error Code: 404
      </p>
    </div>

    <div class="grid lg:grid-cols-1 grid-col-1 gap-4 mt-10">
      <!-- default alert  -->

      <div class="card row-span-1 grid grid-cols-1 gap-5 bg-white dark:bg-gray-800 w-full rounded-3xl p-5 shadow">

        <section class="flex items-center h-full p-10 dark:bg-gray-900 dark:text-gray-100 rounded-3xl ">
          <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div class="max-w-md text-center">
              <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                <span class="sr-only">Error</span>404
              </h2>
              <p class="text-2xl font-semibold md:text-3xl">Its not you, Its us.</p>
              <p class="mt-4 mb-8 dark:text-gray-400">Sorry for Inconvenience. But dont worry, you can find plenty of
                other things on my website</p>
              <router-link rel="noopener noreferrer" to="/"
                class="px-8 py-3 font-semibold rounded-xl dark:bg-emerald-400 dark:text-gray-900">Back to
                Home</router-link>
            </div>
          </div>
        </section>


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
