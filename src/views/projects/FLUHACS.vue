<template>
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
            <router-link to="/fluhacs"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">FLUHACS</router-link>
          </div>
        </li>
      </ol>
    </nav>

    <!-- end nav -->

    <div class="container px-6 mx-auto">

      <!-- Section: Design Block -->
      <section class="my-10 text-gray-800 text-center md:text-left dark:text-gray-300 rounded-3xl">

        <div class="block rounded-3xl shadow-lg bg-white dark:bg-gray-900/40">
          <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-7/12">
              <img src="../../assets/imgs/preview/lfidentalclinicpreview.jpg" alt="Trendy Pants and Shoes"
                class="w-full rounded-t-3xl md:rounded-tr-none md:rounded-bl-3xl" />
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full md:w-5/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="text-3xl font-bold mb-6">
                  <span class="text-sky-700">Clinic Management System</span> for <span class="text-emerald-400">LFI
                    Dental Clinic</span>
                </h2>
                <p class="text-gray-500 text-xl mb-2 pb-2">
                  Aids Patients and Clinic Staff in: <br />

                <ul class="list-disc mb-6 px-6 text-left">
                  <li>Scheduling and managing appointments</li>
                  <li>Collecting and managing patient health records</li>
                  <li>Introducing the clinic, its services, and its staff</li>
                  <li>Answering commonly asked questions</li>
                  <li>Providing a means to contact clinic staff</li>
                </ul>
                </p>
                <button type="button"
                  class="inline-block px-7 py-3 bg-sky-700 text-white font-medium text-sm leading-snug uppercase rounded-xl shadow-md hover:bg-emerald-500 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true" data-mdb-ripple-color="light">Learn more</button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section class="my-10 text-gray-800 text-center md:text-left dark:text-gray-300 rounded-3xl">

        <div class="block rounded-3xl shadow-lg bg-white dark:bg-gray-900/40">
          <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-7/12">
              <img src="../../assets/imgs/preview/FLUHACS-preview.png" alt="Trendy Pants and Shoes"
                class="w-full rounded-t-3xl md:rounded-tr-none md:rounded-bl-3xl" />
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full md:w-5/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="text-3xl font-bold mb-6">
                  <span class="text-gray-400">Famous Logo Using Html and Css</span>
                </h2>
                <p class="text-gray-500 text-xl mb-2 pb-2">
                  Recreating Famous Logos in the Internet: <br />

                <ul class="list-disc mb-6 px-6 text-left">
                  <li>Pure Html and Css</li>
                  <li>Open Source</li>
                  <li>Basic Vanilla Css Styling</li>
                  <li>Can be use for Code Practices</li>
                  <li>Easy to Learn</li>
                </ul>
                </p>
                <button type="button"
                  class="inline-block px-7 py-3 bg-sky-700 text-white font-medium text-sm leading-snug uppercase rounded-xl shadow-md hover:bg-emerald-500 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true" data-mdb-ripple-color="light">Learn more</button>
              </div>
            </div>
          </div>
        </div>

      </section>

      <!-- Section: Design Block -->

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";

export default {
  name: "Home",
  components: {
    Icon,
  },
  mounted() { },
};
</script>
