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
            <router-link to="/gallery"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-emerald-400 dark:hover:text-white">Gallery</router-link>
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
                          Gallery
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
                              class="flex items-center justify-center w-20 h-20 p-4 mx-2 border-2 shadow-md bg-emerald-600 text-emerald-900 dark:hover:bg-transparent dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:border-emerald-600 rounded-xl">
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
                              class="flex items-center justify-center w-20 h-20 p-4 mx-2 border-2 shadow-md bg-transparent text-emerald-600 dark:hover:bg-transparent dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:border-emerald-600 rounded-xl">
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
                    Gallery
                  </h2>
                  <section class="py-6 dark:bg-gray-800 dark:text-gray-50">
                    <div class="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                      <img src="https://source.unsplash.com/random/301x301/" alt=""
                        class="w-full h-full col-span-2 row-span-2 rounded-3xl shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square">
                      <img alt="" class="w-full h-full rounded-3xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?0">
                      <img alt="" class="w-full h-full rounded-3xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?1">
                      <img alt="" class="w-full h-full rounded-3xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?2">
                      <img alt="" class="w-full h-full rounded-3xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?3">
                      <img alt="" class="w-full h-full rounded-3xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?4">
                      <img alt="" class="w-full h-full rounded-3xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?5">
                      <img alt="" class="w-full h-full rounded-3xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?6">
                      <img alt="" class="w-full h-full rounded-3xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?7">
                      <img src="https://source.unsplash.com/random/302x302/" alt=""
                        class="w-full h-full col-span-2 row-span-2 rounded-3xl shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square">
                    </div>
                  </section>
                </div>
              </div>


              <!-- working section start -->

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
import ProfileCard from './components/ProfileCard.vue';
</script>
