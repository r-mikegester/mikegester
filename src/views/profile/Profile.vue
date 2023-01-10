<template>
  <div class="h-auto p-2 mx-3 accordion">
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
            <router-link to="/profile"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-emerald-400 dark:hover:text-white">About</router-link>
          </div>
        </li>
      </ol>
    </nav>

    <!-- end nav -->


    <!--<section class="p-4 mt-64 mb-3 dark:text-gray-100">
      <div class="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div
          class="w-full px-6 py-16 shadow-md rounded-3xl sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-800 dark:shadow-emerald-600">
          <img src="../assets/imgs/profile-pic.jpg" class="-mt-64 rounded-3xl" />

          <h1 class="mt-5 text-5xl font-bold text-gray-600 dark:text-gray-50">Mike Gester</h1>
          <span
            class="block py-5 mt-5 mb-2 bg-emerald-100 dark:bg-gray-900 rounded-xl text-emerald-600 dark:text-emerald-400">Front-End
            Web Developer
            Daw</span>

          <div class="justify-center w-full p-5 mt-5 text-lg bg-emerald-100 dark:bg-gray-900 rounded-xl ">
            <span class="flex justify-start px-2 pb-2 text-lg text-gray-500 dark:text-gray-400"><svg class="w-6 h-6"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z">
                </path>
              </svg><span class="ml-3 "></span>Studied at<span class="text-emerald-600 hover:underline">&nbsp; Quezon
                City University</span> </span>
            <span class="flex justify-start px-2 pb-2 text-lg text-gray-500 dark:text-gray-400"><svg class="w-6 h-6"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z">
                </path>
              </svg><span class="ml-3 "></span>Went
              to<span class="text-emerald-600 hover:underline">&nbsp; North Fairview High School</span> </span>
            <span class="flex justify-start px-2 pb-2 text-lg text-gray-500 dark:text-gray-400"><svg class="w-6 h-6"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
                <path
                  d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z">
                </path>
              </svg><span class="ml-3 "></span>Followed
              by
              <span class="text-emerald-600 hover:underline">&nbsp; 69,420 people </span> </span>

          </div>
        </div>


      </div>
    </section>
-->
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
                          About
                        </h2>
                        <div class="inline-flex shrink-0">
                          <router-link to="/profile">
                            <div
                              class="flex items-center justify-center w-20 h-20 p-4 mx-2 border-2 shadow-md bg-transparent text-emerald-600 dark:hover:bg-transparent dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:border-emerald-600 rounded-xl">
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
                    About
                  </h2>



                  <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                    <h3 class="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>
                    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                      <div class="about-box bg-gray-100 dark:bg-transparent">
                        <svg class="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <div class="space-y-2">
                          <h3 class="dark:text-white text-[22px] font-semibold"> Ui/Ux Design </h3>
                          <p class="leading-8 text-gray-lite dark:text-gray-400"> Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                        </div>
                      </div>

                      <div class="about-box bg-gray-100 dark:bg-transparent">
                        <svg class="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <div class="space-y-2">
                          <h3 class="dark:text-white text-[22px] font-semibold"> App Development </h3>
                          <p class="leading-8 text-gray-lite dark:text-gray-400"> Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                        </div>
                      </div>

                      <div class="about-box bg-gray-100 dark:bg-transparent">
                        <svg class="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <div class="space-y-2">
                          <h3 class="dark:text-white text-[22px] font-semibold"> Photography </h3>
                          <p class="leading-8 text-gray-lite dark:text-gray-400"> Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                        </div>
                      </div>

                      <div class="about-box bg-gray-100 dark:bg-transparent">
                        <svg class="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <div class="space-y-2">
                          <h3 class="dark:text-white text-[22px] font-semibold"> Project Development </h3>
                          <p class="leading-8 text-gray-lite dark:text-gray-400"> Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                        </div>
                      </div>

                      <div class="about-box bg-gray-100 dark:bg-transparent">
                        <svg class="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                          <path
                            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                          </path>
                        </svg>
                        <div class="space-y-2">
                          <h3 class="dark:text-white text-[22px] font-semibold"> Managment </h3>
                          <p class="leading-8 text-gray-lite dark:text-gray-400"> Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                        </div>
                      </div>

                      <div class="about-box bg-gray-100 dark:bg-transparent">
                        <svg class="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <div class="space-y-2">
                          <h3 class="dark:text-white text-[22px] font-semibold"> Web Development </h3>
                          <p class="leading-8 text-gray-lite dark:text-gray-400"> Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- what i do section start -->

                  <div class="bg-gray-100 dark:bg-gray-900 max-w-full h-auto py-10 rounded-3xl mx-auto content-center">

                    <!-- slider and slider items -->

                    <div class="mx-6">
                      <div class="lg:grid grid-cols-12 md:gap-10 pt-4  items-center hidden mx-auto">
                        <div class="col-span-12 space-y-2.5">
                          <div class="lg:mx-auto">
                            <p class="text-gray-400 dark:text-color-910 leading-7"> I'm Freelancer
                              and UI/UX Designer from Quezon City, Philippines. Specialized in Web Development and
                              Softwares. I enjoy turning Complex Ideas into Modern, Responsive and
                              intuitive designs. </p>
                            <p class="text-gray-400 leading-7 mt-2.5 dark:text-color-910"> My aim is to
                              bring across your message and identity in the most creative way. I created
                              web design for many famous brand companies. </p>
                          </div>

                        </div>
                      </div>

                    </div>
                    <!-- slider and slider items end -->
                  </div>

                </div>
              </div>

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
