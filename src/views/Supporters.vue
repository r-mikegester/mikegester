<template>
  <div class="dashboard p-4 mx-3">
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
        Supporters
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        People who support me from the start
      </p>
    </div>


    <div class="container mt-10 px-3 mx-auto">

      <!-- Section: Design Block -->
      <section class="mb-32 text-gray-800 text-center">
        <h2 class="text-5xl font-bold mb-12 text-gray-600 dark:text-white">Meet my <span
            class="text-emerald-400">Supporters</span></h2>

        <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          <div class="mb-6 lg:mb-0">
            <div class="bg-emerald-400 dark:bg-emerald-400 block rounded-3xl shadow-lg">
              <div class="relative overflow-hidden bg-no-repeat bg-cover">
                <img src="../assets/imgs/supp/dyo.png" class="w-full rounded-t-3xl" />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                  style="left: 0; bottom: 0">
                  <path fill="#34d399"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div class="p-6">
                <h5 class="text-2xl font-bold mb-4">Dyowaaan</h5>
                <p class="text-gray-500 mb-4">Cabin Crew</p>

              </div>
            </div>
          </div>

          <div class="mb-6 lg:mb-0">
            <div class="bg-emerald-400 dark:bg-emerald-400 block rounded-3xl shadow-lg">
              <div class="relative overflow-hidden bg-no-repeat bg-cover">
                <img src="../assets/imgs/supp/eddie-jay.jpg" class="w-full rounded-t-3xl" />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                  style="left: 0; bottom: 0">
                  <path fill="#34d399"
                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div class="p-6">
                <h5 class="text-2xl font-bold mb-4">Eddie Jay</h5>
                <p class="text-gray-500 mb-4">Programmer / Cyclist</p>

              </div>
            </div>
          </div>

          <div class="">
            <div class="bg-emerald-400 dark:bg-emerald-400 block rounded-3xl shadow-lg">
              <div class="relative overflow-hidden bg-no-repeat bg-cover">
                <img src="../assets/imgs/supp/jofeth.jpg" class="w-full rounded-t-3xl" />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                  style="left: 0; bottom: 0">
                  <path fill="#34d399"
                    d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div class="p-6">
                <h5 class="text-2xl font-bold mb-4">Jofeth</h5>
                <p class="text-gray-500 mb-4">Customer Service Representative</p>

              </div>
            </div>
          </div>

        </div>
        <div class="grid md:grid-cols-3 gap-x-6 my-12 lg:gap-x-12">
          <div class="mb-6 lg:mb-0">
            <div class="bg-emerald-400 dark:bg-emerald-400 block rounded-3xl shadow-lg">
              <div class="relative overflow-hidden bg-no-repeat bg-cover">
                <img src="../assets/imgs/supp/denver.png" class="w-full rounded-t-3xl" />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                  style="left: 0; bottom: 0">
                  <path fill="#34d399"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div class="p-6">
                <h5 class="text-2xl font-bold mb-4">Denver</h5>
                <p class="text-gray-500 mb-4">3D Modeler</p>

              </div>
            </div>
          </div>

          <div class="mb-6 lg:mb-0">
            <div class="bg-emerald-400 dark:bg-emerald-400 block rounded-3xl shadow-lg">
              <div class="relative overflow-hidden bg-no-repeat bg-cover">
                <img src="../assets/imgs/supp/bibo.jpg" class="w-full rounded-t-3xl" />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                  style="left: 0; bottom: 0">
                  <path fill="#34d399"
                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div class="p-6">
                <h5 class="text-2xl font-bold mb-4">John Christopher</h5>
                <p class="text-gray-500 mb-4">Basketball Player</p>

              </div>
            </div>
          </div>

          <div class="">
            <div class="bg-emerald-400 dark:bg-emerald-400 block rounded-3xl shadow-lg">
              <div class="relative overflow-hidden bg-no-repeat bg-cover">
                <img src="../assets/imgs/supp/condes.jpg" class="w-full rounded-t-3xl" />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                  style="left: 0; bottom: 0">
                  <path fill="#34d399"
                    d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div class="p-6">
                <h5 class="text-2xl font-bold mb-4">Gerald </h5>
                <p class="text-gray-500 mb-4">Programmer</p>

              </div>
            </div>
          </div>

        </div>
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
