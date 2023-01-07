<template>
  <div class="h-auto p-4 mx-6 accordion">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
            <router-link to="/profile"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Profile</router-link>
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <router-link to="/blog"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-emerald-400 dark:hover:text-white">Blog</router-link>
          </div>
        </li>
      </ol>
    </nav>

    <!-- end nav -->



    <div class="w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-homeBg dark:bg-homeTwoBg-dark md:pb-16">

      <div class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <!-- sidber personal info -->
        <ProfileCard />


        <!-- sidber info end -->

        <div class="col-span-12 lg:col-span-8">
          <header class="p-2 mb-10 ml-auto bg-white lg:block lg:-mt-44 rounded-3xl dark:bg-gray-800">
            <nav class="lg:block">
              <nav class=" lg:block">

                <ul class="flex justify-center list-none lg:justify-end">
                  <div class="flex flex-wrap">
                    <div class="w-full px-2 m-2 grow-0 shrink-0 basis-auto lg:w-6/12 lg:px-6">
                      <div class="flex items-start">
                        <h2
                          class="hidden pr-20 my-auto text-5xl text-left text-white justify-left md:pr-72 px-auto lg:block">
                          Blog
                        </h2>
                        <div class="inline-flex shrink-0">
                          <router-link to="/profile">
                            <div
                              class="flex items-center justify-center w-20 h-20 p-4 mx-2 border-2 shadow-md bg-emerald-600 text-emerald-900 dark:hover:bg-transparent dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:border-emerald-600 rounded-xl">
                              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clip-rule="evenodd"></path>
                              </svg>
                            </div>
                          </router-link>
                          <router-link to="/resume">
                            <div
                              class="flex items-center justify-center w-20 h-20 p-4 mx-2 border-2 shadow-md bg-emerald-600 text-emerald-900 dark:hover:bg-transparent dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:border-emerald-600 rounded-xl">
                              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                  clip-rule="evenodd"></path>
                              </svg>
                            </div>
                          </router-link>
                          <router-link to="/blog">
                            <div
                              class="flex items-center justify-center w-20 h-20 p-4 mx-2 border-2 shadow-md bg-transparent text-emerald-600 dark:hover:bg-transparent dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:border-emerald-600 rounded-xl">
                              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                  clip-rule="evenodd"></path>
                                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                              </svg>
                            </div>
                          </router-link>
                          <router-link to="/gallery">
                            <div
                              class="flex items-center justify-center w-20 h-20 p-4 mx-2 border-2 shadow-md bg-emerald-600 text-emerald-900 dark:hover:bg-transparent dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:border-emerald-600 rounded-xl">
                              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                  clip-rule="evenodd"></path>
                              </svg>
                            </div>
                          </router-link>

                        </div>

                      </div>
                    </div>
                  </div>
                </ul>
              </nav>
            </nav>
          </header>

          <div>
            <!-- resume section start -->
            <div class="bg-white rounded-3xl dark:bg-gray-800">
              <div class="container sm:px-5 md:px-10 lg:px-14">
                <div class="px-6 py-12 md:px-0">
                  <!-- resume page title -->
                  <h2 class="my-auto mb-10 text-5xl text-center text-white md:pr-72 px-auto lg:pr-20 lg:hidden">
                    Blog
                  </h2>
                  <div class="dark:bg-gray-800 dark:text-gray-50">
                    <div class="container grid grid-cols-12 mx-auto">
                      <div
                        class="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto rounded-3xl"
                        style="background-image: url('../../assets/imgs/preview/burnhampark.jpg'); background-position: center center; background-blend-mode: multiply; background-size: cover;">
                        <div class="flex flex-col items-center p-8 py-12 text-center">
                          <span>31 December 2022</span>
                          <h1 class="py-4 text-5xl font-bold">Year End Dream Epic Long Ride!</h1>
                          <p class="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="w-7 h-7">
                            <path fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
                        <div class="pt-6 pb-4 space-y-2">
                          <span>12 June</span>
                          <h1 class="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                          <a rel="noopener noreferrer" href="#"
                            class="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                              class="w-4 h-4">
                              <path fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </a>
                        </div>
                        <div class="pt-6 pb-4 space-y-2">
                          <span>12 June</span>
                          <h1 class="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                          <a rel="noopener noreferrer" href="#"
                            class="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                              class="w-4 h-4">
                              <path fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </a>
                        </div>
                        <div class="pt-6 pb-4 space-y-2">
                          <span>12 June</span>
                          <h1 class="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                          <a rel="noopener noreferrer" href="#"
                            class="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                              class="w-4 h-4">
                              <path fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <!-- working section start -->
              <div class="container px-6 py-12 bg-white dark:bg-gray-900 md:px-10 lg:px-20 rounded-b-3xl">
                <div class="dark:bg-gray-800 dark:text-gray-100">
                  <div class="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div class="flex items-center justify-between">
                      <span class="text-sm dark:text-gray-400">January 7, 2023</span>
                      <a rel="noopener noreferrer" href="#"
                        class="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Qoutes</a>
                    </div>
                    <div class="mt-3">
                      <a rel="noopener noreferrer" href="#" class="text-2xl font-bold hover:underline">what consumes
                        your mind,
                        controls your life.</a>
                      <p class="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo
                        aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim
                        etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                      <a rel="noopener noreferrer" href="#" class="hover:underline dark:text-violet-400">Read more</a>
                      <div>
                        <a rel="noopener noreferrer" href="#" class="flex items-center">
                          <img src="../../assets/imgs/profile-pic.jpg" alt="avatar"
                            class="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500">
                          <span class="hover:underline dark:text-gray-400">Mike Gester</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- working section end -->

              <!-- footer start -->

              <!-- footer end -->
            </div>
            <!-- resume section start -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// @ is an alias to /src
import ProfileCard from "./components/ProfileCard.vue";
//import the about you.vue
//import the resume.vue
//import the blog.vue
//import the gallery

</script>
