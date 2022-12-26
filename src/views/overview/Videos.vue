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
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</router-link>
          </div>
        </li>
      </ol>
    </nav>

    <!-- end nav -->


    <div class="container my-24 px-6 mx-auto">

      <!-- Section: Design Block -->
      <section class="mb-32 text-gray-800 background-radial-gradient">


        <div class="px-6 py-12 md:px-12 text-center lg:text-left">
          <div class="container mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 flex items-center">
              <div class="mt-12 lg:mt-0">
                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                  style="color: hsl(218, 81%, 95%)">
                  Are you ready <br /><span style="color: hsl(218, 81%, 75%)">for an adventure?</span>
                </h1>
                <p class="text-lg" style="color: hsl(218, 81%, 95%)">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                  adipisci tenetur repudiandae rerum quos.
                </p>
              </div>
              <div class="mb-12 lg:mb-0">
                <div
                  class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  style="padding-top: 56.25%">
                  <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                    allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                </div>
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

<style>
.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%);
}
</style>

