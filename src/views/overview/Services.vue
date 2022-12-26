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
            <router-link to="/projects"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Services</router-link>
          </div>
        </li>
      </ol>
    </nav>

    <!-- end nav -->


    <div class="container my-6 mx-auto">

      <!-- Section: Design Block -->
      <section class="dark:bg-gray-800 dark:text-gray-100  rounded-3xl shadow-md">
        <div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Services
            </h2>

          </div>
          <section class=" text-emerald-400 text-center md:text-left">



            <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
              <div class="mb-6 md:mb-0">
                <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-3xl"
                  data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img src="../../assets/imgs/custom-website-design.jpg" class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style="background-color: rgba(251, 251, 251, 0.2)"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 md:mb-0">
                <h3 class="text-4xl font-bold mb-3">Customized Website Design</h3>
                <div
                  class="mb-3 text-emerald-700 font-medium text-xl flex items-center justify-center md:justify-start">
                  <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                      clip-rule="evenodd"></path>
                  </svg> Modern Website Design
                </div>

                <p class="text-gray-500">
                  A Personalized Website for you or your company, work, friend, projects, thesis and etc. gives your
                  business or freelancing makes more personal.
                </p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
              <div class="mb-6 md:mb-0 md:order-2">
                <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-3xl"
                  data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img src="../../assets/imgs/pasabike.jpg" class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style="background-color: rgba(251, 251, 251, 0.2)"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 md:mb-0 md:order-1">
                <h3 class="text-4xl font-bold mb-3">Pasabike</h3>
                <div
                  class="mb-3 text-emerald-600 font-medium text-xl flex items-center justify-center md:justify-start">
                  <svg class="w-10 h-10 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                  </svg>Bike Delivery Service
                </div>

                <p class="text-gray-500">
                  A delivery service that is right, on the go, and supports a lot of freelancing bodies and students who
                  do side hustle like pasabike delivery. Pasabuy, pabili, pasuyo, pasabike!
                </p>
              </div>
            </div>



          </section>
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
