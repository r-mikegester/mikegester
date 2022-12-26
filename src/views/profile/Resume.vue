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
            <router-link to="/profile"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Profile</router-link>
          </div>
        </li>
      </ol>
    </nav>

    <!-- end nav -->


    <!--<section class="p-4 mt-64 dark:text-gray-100 mb-3">
      <div class="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div
          class="w-full px-6 py-16 rounded-3xl sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-800 shadow-md dark:shadow-emerald-600">
          <img src="../assets/imgs/profile-pic.jpg" class="rounded-3xl -mt-64" />

          <h1 class="text-5xl font-bold dark:text-gray-50 text-gray-600 mt-5">Mike Gester</h1>
          <span
            class="block mb-2 mt-5 bg-emerald-100 dark:bg-gray-900 py-5 rounded-xl text-emerald-600 dark:text-emerald-400">Front-End
            Web Developer
            Daw</span>

          <div class="bg-emerald-100 dark:bg-gray-900 mt-5 w-full justify-center rounded-xl p-5  text-lg ">
            <span class=" flex text-lg justify-start  text-gray-500 dark:text-gray-400 px-2 pb-2"><svg class="w-6 h-6"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z">
                </path>
              </svg><span class="ml-3  "></span>Studied at<span class="text-emerald-600 hover:underline">&nbsp; Quezon
                City University</span> </span>
            <span class="text-lg justify-start flex text-gray-500 dark:text-gray-400 px-2 pb-2"><svg class="w-6 h-6"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z">
                </path>
              </svg><span class="ml-3  "></span>Went
              to<span class="text-emerald-600 hover:underline">&nbsp; North Fairview High School</span> </span>
            <span class="text-lg flex justify-start text-gray-500 dark:text-gray-400 px-2 pb-2"><svg class="w-6 h-6"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
                <path
                  d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z">
                </path>
              </svg><span class="ml-3  "></span>Followed
              by
              <span class="text-emerald-600 hover:underline">&nbsp; 69,420 people </span> </span>

          </div>
        </div>


      </div>
    </section>
-->
    <div class="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <div class="section-bg">
        <div class="w-full flex justify-between px-4">

          <div class="flex items-center">
            <!-- dark and light mode toggle -->
            <button id="theme-toggle" type="button" class="dark-light-btn">
              <i id="theme-toggle-dark-icon" class="fa-solid text-xl fa-moon hidden"></i>
              <i id="theme-toggle-light-icon" class="fa-solid fa-sun text-xl hidden"></i>
            </button>
            <!-- mobile toggle button -->
            <button id="menu-toggle" type="button" class="menu-toggle-btn">
              <i id="menu-toggle-open-icon" class="fa-solid fa-bars text-xl "></i>
              <i id="menu-toggle-close-icon" class="fa-solid fa-xmark text-xl hidden  "></i>
            </button>
          </div>
        </div>
      </div>
      <!-- end section-bg -->


      <!-- end navbar -->

      <div class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <!-- sidber personal info -->
        <div class="col-span-12 lg:col-span-4  lg:block h-screen  mb-20">
          <div
            class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-gray-800 px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
            <!-- profile image -->
            <img src="../assets/imgs/profile-pic.jpg"
              class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
              alt="about avatar" />
            <div class="pt-[100px] pb-8">
              <h1 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Mike Gester </h1>
              <h3 class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                Front-End Web Developer</h3>
              <div class="flex justify-center space-x-3">
                <!-- facebook icon and link -->
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <span class="socialbtn text-[#1773EA]">
                    <i class="fa-brands fa-facebook-f"></i>
                  </span>
                </a>
                <!-- twitter icon and link -->
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <span class="socialbtn text-[#1C9CEA]">
                    <i class="fa-brands fa-twitter"></i>
                  </span>
                </a>
                <!-- dribbble icon and link -->
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                  <span class="socialbtn text-[#e14a84]">
                    <i class="fa-brands fa-dribbble"></i>
                  </span>
                </a>
                <!-- linkedin icon and link -->
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <span class="socialbtn text-[#0072b1]">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </span>
                </a>
              </div>

              <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                  <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                  </span>
                  <div class="text-left ml-2.5">
                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Handle </p>
                    <p class="dark:text-white">@r.mikegester</p>
                  </div>
                </div>
                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                  <span class="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                    <i class="fa-solid fa-envelope-open-text"></i>
                  </span>
                  <div class="text-left ml-2.5">
                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                    <p class="dark:text-white">support.mikegester@gmail.com</p>
                  </div>
                </div>
                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                  <span class="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <div class="text-left ml-2.5">
                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                    <p class="dark:text-white">Quezon City, Philippines</p>
                  </div>
                </div>
                <div class="flex py-2.5">
                  <span class="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                    <i class="fa-solid fa-calendar-days"></i>
                  </span>
                  <div class="text-left ml-2.5">
                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                    <p class="dark:text-white">February 26, 2002</p>
                  </div>
                </div>
              </div>

              <!-- dowanload button -->
              <button type="button"
                class="px-6 pt-2.5 mt-5 pb-2 mx-auto bg-emerald-600 text-white font-medium text-lg leading-normal uppercase rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
                Download CV
              </button>
            </div>

          </div>
          <div class="mb-20 pb-20 my-20 hidden xl:block">
            <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no'
              class="mx-auto rounded-3xl my-10 "
              src='https://www.strava.com/athletes/74278837/latest-rides/2362de40d7f4fe98d3604441f2f28cd5831c3f40'></iframe>
          </div>
        </div>


        <!-- sidber info end -->

        <div class="col-span-12 lg:col-span-8">
          <header class="lg:block p-2 ml-auto mb-10 lg:-mt-44 rounded-3xl bg-white dark:bg-gray-800">
            <nav class="lg:block">
              <nav class=" lg:block">

                <ul class="flex justify-center lg:justify-end list-none">
                  <div class="flex flex-wrap">
                    <div class="m-2 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-2 lg:px-6">
                      <div class="flex items-start">
                        <h2
                          class=" text-white justify-left text-5xl text-left my-auto md:pr-72 px-auto pr-20 hidden lg:block ">
                          Resume
                        </h2>
                        <div class="inline-flex   shrink-0">
                          <div
                            class="p-4 bg-emerald-600 text-emerald-900 dark:hover:bg-transparent dark:hover:border-emerald-400 border-2 dark:hover:text-emerald-400 dark:border-emerald-600  rounded-xl shadow-md w-20 h-20 mx-2 flex items-center justify-center">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </div>
                          <div
                            class="p-4 bg-emerald-600 text-emerald-900 dark:hover:bg-transparent dark:hover:border-emerald-400 border-2 dark:hover:text-emerald-400 dark:border-emerald-600  rounded-xl shadow-md w-20 h-20 mx-2 flex items-center justify-center">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd"
                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </div>
                          <div
                            class="p-4 bg-emerald-600 text-emerald-900 dark:hover:bg-transparent dark:hover:border-emerald-400 border-2 dark:hover:text-emerald-400 dark:border-emerald-600  rounded-xl shadow-md w-20 h-20 mx-2 flex items-center justify-center">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd"
                                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                clip-rule="evenodd"></path>
                              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                            </svg>
                          </div>
                          <div
                            class="p-4 bg-emerald-600 text-emerald-900 dark:hover:bg-transparent dark:hover:border-emerald-400 border-2 dark:hover:text-emerald-400 dark:border-emerald-600 rounded-xl shadow-md w-20 h-20 mx-2 flex items-center justify-center">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </div>

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
                <div class="py-12 px-6 md:px-0">
                  <!-- resume page title -->
                  <h2 class=" text-white  text-5xl text-center my-auto md:pr-72 px-auto lg:pr-20 mb-10 lg:hidden ">
                    Resume
                  </h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 ">
                    <!-- eductation start -->
                    <div>
                      <div class="flex items-center space-x-2 mb-4  text-emerald-400">
                        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z">
                          </path>
                        </svg>
                        <h4 class="text-3xl dark:text-white font-medium"> Education </h4>
                      </div>
                      <div
                        class="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-emerald-400 dark:border-2">
                        <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]">2020 - Present</span>
                        <h3 class="text-xl dark:text-white"> Bachelor of Science in Information Technology </h3>
                        <p class="dark:text-[#b7b7b7]"> Quezon City University, Novaliches, QC </p>
                      </div>
                      <div
                        class="bg-[#fff1fb] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-emerald-400 dark:border-2">
                        <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]">2018 -
                          2020</span>
                        <h3 class="text-xl dark:text-white"> Computer Programming </h3>
                        <p class="dark:text-[#b7b7b7]">North Fairview Senior High School, Fairview, QC</p>
                      </div>
                      <div
                        class="py-4 pl-5 bg-[#fff4f4] dark:bg-transparent pr-3 space-y-2 rounded-lg dark:border-emerald-400 dark:border-2">
                        <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]">2014 - 2018</span>
                        <h3 class="text-xl dark:text-white">Information Communication Technology</h3>
                        <p class="dark:text-[#b7b7b7]"> North Fairview High School, Fairview, QC </p>
                      </div>
                    </div>
                    <!-- eductation end -->

                    <!-- experiment start -->
                    <div>
                      <div class="flex items-center space-x-2 mb-4 text-emerald-400">
                        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                          <path
                            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                          </path>
                        </svg>
                        <h4 class="text-3xl dark:text-white font-medium"> Experience </h4>
                      </div>
                      <div
                        class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-emerald-400 dark:border-2">
                        <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]">Dec. 2020 - March. 2021</span>
                        <h3 class="text-xl dark:text-white"> Crew </h3>
                        <p class="dark:text-[#b7b7b7]"> Pares ni Erap </p>
                      </div>
                      <div
                        class="bg-[#f2f4ff] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-emerald-400 dark:border-2">
                        <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]">2020 - Present</span>
                        <h3 class="text-xl dark:text-white"> Front-End Web Developer</h3>
                        <p class="dark:text-[#b7b7b7]">Freelance</p>
                      </div>
                      <div
                        class="py-4 bg-[#eef5fa] dark:bg-transparent pl-5 pr-3 space-y-2 rounded-lg dark:border-emerald-400 dark:border-2">
                        <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]">2019</span>
                        <h3 class="text-xl dark:text-white">Web Developer / Assistant</h3>
                        <p class="dark:text-[#b7b7b7]"> OWTO</p>
                      </div>
                    </div>
                    <!-- experiment start -->
                  </div>
                </div>
              </div>


              <!-- working section start -->
              <div class="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-6 md:px-10 lg:px-20">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="col-span-1">
                    <h4 class="text-5xl dark:text-white font-medium mb-6"> Working Skills </h4>
                    <div class="mb-5">
                      <div class="flex justify-between mb-1">
                        <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Web
                          Design</span>
                        <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">90%</span>
                      </div>
                      <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                        <div class="bg-[#FF6464] h-1 rounded-full" style="width: 90%"></div>
                      </div>
                    </div>

                    <div class="mb-5">
                      <div class="flex justify-between mb-1">
                        <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Mobile
                          App</span>
                        <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">85%</span>
                      </div>
                      <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                        <div class="bg-[#9272d4] h-1 rounded-full" style="width: 85%"></div>
                      </div>
                    </div>

                    <div class="mb-5">
                      <div class="flex justify-between mb-1">
                        <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Responsiveness</span>
                        <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">75%</span>
                      </div>
                      <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                        <div class="bg-[#5185d4] h-1 rounded-full" style="width: 75%"></div>
                      </div>
                    </div>

                    <div class="mb-5">
                      <div class="flex justify-between mb-1">
                        <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Photoshope</span>
                        <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">65%</span>
                      </div>
                      <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                        <div class="bg-[#ca56f2] h-1 rounded-full" style="width: 65%"></div>
                      </div>
                    </div>

                  </div>

                  <div class="col-span-1 p-6">
                    <div class="flex">
                      <h4 class="flex text-4xl dark:text-white font-medium mb-8 mr-16"> Experience </h4>
                      <span class="inline-flex">
                        <svg class="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <svg class="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <svg class="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                    <div class="flex gap-y-5 gap-x-2.5 flex-wrap">
                      <button class="p-2 bg-emerald-400 rounded-lg shadow-md">Html5</button>
                      <button class="p-2 bg-emerald-400 rounded-lg shadow-md">Css3</button>
                      <button class="p-2 bg-red-400 rounded-lg shadow-md">Javascript</button>
                      <button class="p-2 bg-yellow-400 rounded-lg shadow-md">Php and mySQL</button>
                      <button class="p-2 bg-yellow-400 rounded-lg shadow-md">Object Oriented Programming</button>
                      <button class="p-2 bg-yellow-400 rounded-lg shadow-md">Java</button>
                      <button class="p-2 bg-yellow-400 rounded-lg shadow-md">C++</button>
                      <button class="p-2 bg-emerald-400 rounded-lg shadow-md">ASP.NET</button>
                      <button class="p-2 bg-yellow-400 rounded-lg shadow-md">VB.NET</button>
                      <button class="p-2 bg-emerald-400 rounded-lg shadow-md">Node.js</button>
                      <button class="p-2 bg-yellow-400 rounded-lg shadow-md">Bootstrap</button>
                      <button class="p-2 bg-emerald-400 rounded-lg shadow-md">JQuery</button>
                      <button class="p-2 bg-emerald-400 rounded-lg shadow-md">Vue and Tailwindcss</button>
                      <button class="p-2 bg-yellow-400 rounded-lg shadow-md">Kotlin</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- working section end -->

              <!-- footer start -->
              <footer class="overflow-hidden rounded-b-2xl" style="background: transparent;">
                <p class="text-center py-6 text-gray-lite dark:text-emerald-400"> © 2022 All Rights Reserved, Mike
                  Gester</p>
              </footer>
              <!-- footer end -->
            </div>
            <!-- resume section start -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
//import the about you.vue
//import the resume.vue
//import the blog.vue
//import the gallery
export default {
  name: "Timeline",
  components: {
    Icon,
  },
  mounted() { },
};
</script>
