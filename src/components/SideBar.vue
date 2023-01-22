<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white text-gray-400 dark:bg-gray-800 overflow-y-scroll mb-32">
    <!-- sidebar head -->
    <div class="sidebar-head p-4 mt-2">
      <router-link to="/" exact>
        <div class="flex items-center "><img src="../assets/imgs/my-logo.png" class="w-10 h-10 md:w-14 md:h-14 mr-3" />
          <span class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-500" translate="no">
            Mike Gester

          </span>
        </div>
      </router-link>
      <button class="lg:hidden  block float-right -mt-9 text-gray-400 dark:hover:text-emerald-500"
        @click="sidebarToggle">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z">
          </path>
        </svg>
      </button>
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list p-4 text-xl">
      <p class="font-medium text-gray-400 dark:text-gray-600">Menu</p>
      <div class="wrap-item my-3 dark:text-gray-500">
        <div class="item my-3">
          <router-link to="/" exact
            class="w-full flex text-left rounded-xl box-border p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <Icon icon="heroicons-solid:home" class="w-7 h-7" />
            </span>
            <span class="w-full"> Home</span>
          </router-link>
        </div>
        <div class="item my-3">
          <router-link to="/profile"
            class="w-full flex text-left rounded-xl box-border p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <Icon icon="fa6-solid:user" class="w-7 h-7" />
            </span>
            <span class="w-full"> Profile</span>
          </router-link>
        </div>
        <div class="item my-3">
          <router-link to="/projects"
            class="w-full flex text-left rounded-xl box-border p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <Icon icon="eos-icons:application" class="w-7 h-7" />
            </span>
            <span class="w-full"> Projects</span>
          </router-link>
        </div>
        <div class="item my-3">
          <router-link to="/services"
            class="w-full flex text-left rounded-xl box-border p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <Icon icon="ion:pricetags" class="w-7 h-7" />
            </span>
            <span class="w-full"> Services</span>
          </router-link>
        </div>
      </div>


      <div class="item my-1 text-gray-400">


        <div class="item my-3">
          <button @click="jsuscrisp" to="/contact"
            class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                <path
                  d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z">
                </path>
              </svg>
            </span>
            <span class="w-full"> Chat</span>
          </button>
        </div>

        <div class="my-3">

          <menu-accordion>
            <template v-slot:icon>
              <Icon icon="jam:newsletter-f" class="w-7 h-7" />
            </template>
            <template v-slot:title> Blogs </template>
            <template v-slot:content>
              <div class="ml-5">

                <div class="item my-3">
                  <router-link to="/themepicker"
                    class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="mr-3 text-xl">
                      <Icon icon="mdi:bike-fast" class="w-7 h-7" />
                    </span>
                    <span class="w-full"> Cycling</span>
                  </router-link>
                </div>
                <div class="item my-3">
                  <router-link to="/settings"
                    class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="mr-3 text-xl">
                      <Icon icon="line-md:document-code" class="w-7 h-7" />
                    </span>
                    <span class="w-full"> Programming</span>
                  </router-link>
                </div>

                <div class="item mt-1">
                  <router-link to="/toast"
                    class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="mr-3 text-xl">
                      <Icon icon="mdi:aquarium" class="w-7 h-7" />
                    </span>
                    <span class="w-full"> Aquascaping</span>
                  </router-link>
                </div>
              </div>
            </template>
          </menu-accordion>

        </div>

        <div class="item my-1 rounded-xl">
          <menu-accordion>
            <template v-slot:icon>
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z">
                </path>
              </svg>
            </template>
            <template v-slot:title> More </template>
            <template v-slot:content>


              <div class=" ml-5">
                <div class="item my-3">
                  <router-link to="/testimonials"
                    class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="mr-3 text-xl">
                      <Icon icon="ic:baseline-workspace-premium" class="w-7 h-7" />
                    </span>
                    <span class="w-full"> Testimonials</span>
                  </router-link>
                </div>

                <div class="item my-3">
                  <router-link to="/supporters"
                    class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="mr-3 text-xl">
                      <Icon icon="ic:baseline-diversity-1" class="w-7 h-7" />
                    </span>
                    <span class="w-full">Supporters</span>
                  </router-link>
                </div>



                <div class="my-1">

                  <menu-accordion>
                    <template v-slot:icon>
                      <Icon icon="eos-icons:rotating-gear" class="w-7 h-7" />
                    </template>
                    <template v-slot:title> Settings</template>
                    <template v-slot:content>
                      <div class="ml-5">

                        <div class="item my-3">
                          <router-link to="/settings"
                            class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="mr-3 text-xl">
                              <Icon icon="eos-icons:rotating-gear" class="w-7 h-7" />
                            </span>
                            <span class="w-full"> Settings and Privacy</span>
                          </router-link>
                        </div>
                        <div class="item my-1">
                          <button @click="jsuscrisp"
                            class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="mr-3 text-xl">
                              <Icon icon="line-md:question-circle" class="w-7 h-7" />
                            </span>
                            <span class="w-full">Help and Support</span>
                          </button>
                        </div>

                        <div class="item my-3">
                          <router-link to="/about"
                            class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="mr-3 text-xl">
                              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z">
                                </path>
                              </svg>
                            </span>
                            <span class="w-full">Resources</span>
                          </router-link>

                          <div class="item my-3">
                            <router-link to="/documentation"
                              class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                              <span class="mr-3 text-xl">
                                <svg class=" w-7 h-7" fill="currentColor" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z">
                                  </path>
                                  <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z">
                                  </path>
                                </svg>
                              </span>
                              <span class="w-full"> Documentation</span>
                            </router-link>
                          </div>

                          <div class="my-3">

                            <menu-accordion>
                              <template v-slot:icon>
                                <Icon icon="line-md:calendar" class="w-7 h-7" />
                              </template>
                              <template v-slot:title> Coming Soon! </template>
                              <template v-slot:content>
                                <div class="ml-5">

                                  <div class="item my-3" disabled>
                                    <router-link to="/themepicker"
                                      class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <span class="mr-3 text-xl">
                                        <Icon icon="line-md:list-3-filled" class="w-7 h-7" />
                                      </span>
                                      <span class="w-full"> Accent Picker</span>
                                    </router-link>
                                  </div>
                                  <div class="item my-3">
                                    <router-link to="/settings"
                                      class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <span class="mr-3 text-xl">
                                        <Icon icon="eos-icons:rotating-gear" class="w-7 h-7" />
                                      </span>
                                      <span class="w-full"> Settings Page</span>
                                    </router-link>
                                  </div>

                                  <div class="item mt-1">
                                    <router-link to="/toast"
                                      class="w-full flex text-left rounded-xl box-border p-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <span class="mr-3 text-xl">
                                        <Icon icon="mdi:cellphone-message" class="w-7 h-7" />
                                      </span>
                                      <span class="w-full"> Toast</span>
                                    </router-link>
                                  </div>
                                </div>
                              </template>
                            </menu-accordion>

                          </div>
                        </div>
                      </div>
                    </template>
                  </menu-accordion>

                </div>

              </div>



            </template>
          </menu-accordion>
        </div>


      </div>
      <div
        class="flex flex-col mt-10 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Reminder
          </h3>
          <p class="mt-2 text-gray-800 dark:text-gray-400">
            This website is still on development and currently being maintained
          </p>
          <button @click="jsuscrisp"
            class="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700" href="">
            Chat with me!
            <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>

import { Icon } from "@iconify/vue";
import MenuAccordion from "./MenuAccordion.vue";
export default {
  components: {
    Icon,
    MenuAccordion,

  },
  methods: {
    sidebarToggle: function () {
      document.querySelector(".flex-sidebar").classList.add("hidden");
    },
    jsuscrisp: function () {
      $crisp.push(['do', 'chat:open'])
    }
  },
  mounted() { },

};


</script>
