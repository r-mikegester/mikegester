<template>
  <div class=" p-4 mx-3">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="#"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
              </path>
            </svg>
            Home
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Homepage
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        showcasing latest projects, news, blog, feature etc.
      </p>
    </div>



  </div>

  <div class="container px-3 mt-5 mx-auto">

    <!-- Section: Design Block -->
    <section class="mb-10 ">

      <router-link to="/projects">
        <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-3xl mx-3 md:shadow-md"
          style="background-position: 50%; background-image: url('../assets/imgs/preview/lfidentalclinicpreview.jpg'); height: 500px;">
          <img src="../assets/imgs/preview/lfidentalclinicpreview.jpg" class="rounded-3xl" />
        </div>
      </router-link>
      <div class="container mx-auto px-3 md:px-12 xl:px-32 -mt-64 pt-16 md:-mt-0 md:pt-0">
        <div class="text-center text-gray-800">
          <div class="block rounded-3xl shadow-lg px-6 py-6 md:py-16 md:px-12 bg-teal-400/40"
            style="margin-top: -170px; backdrop-filter: blur(30px);">
            <h1 class="text-2xl md:text-6xl xl:text-7xl font-bold tracking-tight">Latest Project I've Built:
              <br /><span class="text-teal-400 drop-shadow-md text-xl md:text-7xl xl:text-sky-700">Clinic Management
                System</span>
            </h1>



          </div>
        </div>
      </div>
    </section>
    <div class="container  px-3 mx-auto">

      <!-- Section: Design Block -->
      <!--<section class="mb-10 -mt-16 md:-mt-0 text-gray-800 bg-emerald-400/40 rounded-3xl shadow-md">


        <div class="px-6 py-12 md:px-12 text-center lg:text-left">
          <div class="container mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class=" lg:mt-0">
                <h1 class="text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight md:mb-5 text-white">
                  Famous Logo's <br /><span class="text-emerald-400">using html and css</span>
                </h1>
                <p class=" text-sm px-6 md:text-lg text-white">
                  some of the "FLUHACSS" Series you might not want to miss.
                </p>
              </div>
              <div class=" lg:mb-0">
                <div
                  class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-3xl shadow-lg"
                  style="padding-top: 56.25%">
                  <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/J1eGdTans30" allowfullscreen=""
                    data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                </div>
              </div>

              <div class=" lg:mb-0">
                <div
                  class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-3xl shadow-lg"
                  style="padding-top: 56.25%">
                  <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/QC6DJUpTUoQ" allowfullscreen=""
                    data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                </div>
              </div>

              <div class=" lg:mb-0">
                <div
                  class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-3xl shadow-lg"
                  style="padding-top: 56.25%">
                  <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/iCVhWVb4n5c" allowfullscreen=""
                    data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>-->

      <div class="relative overflow-hidden rounded-3xl mb-10 bg-white dark:bg-gray-800 shadow-md">
        <section class="overflow-hidden py-10 px-6 md:px-20 mx-auto lg:py-10">
          <div class="container mx-auto">
            <!-- Card Blog -->
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <!-- Title -->
              <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Latest Blog</h2>
                <p class="mt-1 text-gray-600 dark:text-gray-400">See how lifes going with people behind code, bars, and
                  a cup of coffee.</p>
              </div>
              <!-- End Title -->

              <!-- Grid -->
              <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card -->
                <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
                  href="#">
                  <div class="aspect-w-16 aspect-h-11">
                    <img class="w-full object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Image Description">
                  </div>
                  <div class="my-6">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                      Announcing a free plan for small teams
                    </h3>
                    <p class="mt-5 text-gray-600 dark:text-gray-400">
                      At Wake, our mission has always been focused on bringing openness.
                    </p>
                  </div>
                  <div class="mt-auto flex items-center gap-x-3">
                    <img class="w-8 h-8 rounded-full" src="../assets/imgs/profile-pic.jpg" alt="Image Description">
                    <div>
                      <h5 class="text-sm text-gray-800 dark:text-gray-200">Mike Gester</h5>
                    </div>
                  </div>
                </a>
                <!-- End Card -->

                <!-- Card -->
                <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
                  href="#">
                  <div class="aspect-w-16 aspect-h-11">
                    <img class="w-full object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
                      alt="Image Description">
                  </div>
                  <div class="my-6">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                      How Google Assistant now helps you record stories for kids
                    </h3>
                    <p class="mt-5 text-gray-600 dark:text-gray-400">
                      Google is constantly updating its consumer AI, Google Assistant, with new features.
                    </p>
                  </div>
                  <div class="mt-auto flex items-center gap-x-3">
                    <img class="w-8 h-8 rounded-full" src="../assets/imgs/profile-pic.jpg" alt="Image Description">
                    <div>
                      <h5 class="text-sm text-gray-800 dark:text-gray-200">Mike Gester</h5>
                    </div>
                  </div>
                </a>
                <!-- End Card -->

                <!-- Card -->
                <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
                  href="#">
                  <div class="aspect-w-16 aspect-h-11">
                    <img class="w-full object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
                      alt="Image Description">
                  </div>
                  <div class="my-6">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                      Front accounts - let's work together
                    </h3>
                    <p class="mt-5 text-gray-600 dark:text-gray-400">
                      Are you an accountant? Are you a company formation advisor?
                    </p>
                  </div>
                  <div class="mt-auto flex items-center gap-x-3">
                    <img class="w-8 h-8 rounded-full" src="../assets/imgs/profile-pic.jpg" alt="Image Description">
                    <div>
                      <h5 class="text-sm text-gray-800 dark:text-gray-200">Mike Gester</h5>
                    </div>
                  </div>
                </a>
                <!-- End Card -->
              </div>
              <!-- End Grid -->

              <!-- Card -->
              <div class="mt-12 text-center">
                <a class="inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-blue-600 hover:text-blue-700 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-slate-900 dark:border-gray-700 dark:hover:border-gray-600 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:shadow-slate-700/[.7] dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                  href="#">
                  Read more
                  <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </a>
              </div>
              <!-- End Card -->
            </div>
            <!-- End Card Blog -->
          </div>
        </section>
      </div>

      <!-- Section: Design Block -->
      <div class="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-md">
        <section class="overflow-hidden py-10 px-6 md:px-20 mx-auto lg:py-10">
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap items-center justify-between">
              <div class="w-full px-4 lg:w-6/12">
                <div class=" flex items-center">
                  <div class="w-full px-3 md:px-4 xl:w-1/2">
                    <div class="py-3 md:py-4">
                      <img src="../assets/imgs/supp/jofeth.jpg" alt="" class="w-full rounded-3xl" />
                    </div>
                    <div class="py-3 sm:py-4">
                      <img src="../assets/imgs/supp/denver.png" alt="" class="w-full rounded-3xl" />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:px-4 xl:w-1/2">
                    <div class="relative z-10 my-4">
                      <img src="../assets/imgs/supp/dyo.png" alt="" class="w-full rounded-3xl" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div class="mt-10 lg:mt-0">
                  <span class="text-emerald-400 mb-2 block text-lg font-semibold">
                    Be a Supporter
                  </span>
                  <h2 class="text-gray-400 mb-8 text-3xl font-bold sm:text-4xl">
                    By supporting my content and projects it will help me boost my production rate.
                  </h2>

                  <a href="javascript:void(0)"
                    class="bg-emerald-500 inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                    Support Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- ====== About Section Start -->

    <!-- ====== About Section End -->
    <!--<div class="flex items-center justify-center px-4 lg:px-0 py-12">
      <div id="alert"
        class="transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4 dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded">
        <div class="sm:flex sm:items-start lg:items-center">
          <div class="flex items-end">
            <div class="mr-2 text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path class="heroicon-ui"
                  d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </div>
            <p class="mr-2 text-base font-bold text-gray-800 dark:text-gray-100">Warning</p>
          </div>
          <div class="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block"></div>
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0">Hurricane warning
            in this area. Please check local media and authorities-NWS</p>
        </div>
        <div class="flex items-center justify-end sm:mt-4 md:mt-0 ml-4">
          <button
            class="focus:outline-none mr-8 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">View</button>
          <div @click="closeAlert()" class="cursor-pointer text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>-->
    <!---->
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
  //  name: "SimpleWithActionButtonWarning",
  //  mounted: function () {
  //    this.onLoad();
  //  },
  //  methods: {
  //   onLoad() {
  //    var Alert = document.getElementById("alert");
  //   Alert.style.transform = "translateY(-200%)";
  //  setTimeout(function () {
  //     Alert.style.transform = "translateY(0%)";
  //  }, 1000);
  // },
  //closeAlert() {
  // var Alert = document.getElementById("alert");
  // Alert.style.display = "none";
  // this.onLoad();
  // },
  // },
};
</script>

