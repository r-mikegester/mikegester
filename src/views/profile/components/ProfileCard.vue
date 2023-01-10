<template>
    <div class="h-screen col-span-12 mb-20 lg:col-span-4 lg:block">
        <div
            class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-gray-800 px-3 rounded-3xl mt-48 md:mt-56 lg:mt-0">
            <!-- profile image -->
            <img src="../../../assets/imgs/profile-pic.jpg"
                class="w-56 md:w-80 h-56 md:h-80 absolute left-[50%] transform -translate-x-[50%]  drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                alt="about avatar" />
            <div class="pt-[100px] pb-8">
                <h1 class="my-2 md:my-2 text-3xl md:text-5xl font-semibold dark:text-white"> Mike Gester </h1>
                <h3 class="mb-4 text-gray-400 inline-block dark:bg-gray-900 px-5 py-1.5 rounded-lg dark:text-gray-400">
                    Front-End Web Developer</h3>


                <div class="bg-white p-6 rounded-2xl mx-2 dark:bg-gray-900">
                    <div class="flex border-b border-gray-200 dark:border-gray-700 pb-2.5">
                        <span class="p-2 bg-white rounded-md shadow-md dark:bg-gray-800 text-emerald-400">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <div class="text-left ml-2.5">
                            <p class="text-xs text-gray-600 dark:text-gray-400"> Handle </p>
                            <p class="dark:text-white">@r.mikegester</p>
                        </div>
                    </div>
                    <div class="flex border-b border-gray-200 dark:border-gray-700 py-2.5">
                        <span class="p-2 bg-white rounded-md shadow-md dark:bg-gray-800 text-emerald-400">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                </path>
                                <path
                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                </path>
                            </svg>
                        </span>
                        <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                            <p class="text-xs text-gray-600 dark:text-gray-400"> Email </p>
                            <p class="dark:text-white">supp.mikegester@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex border-b border-gray-200 dark:border-gray-700 py-2.5">
                        <span class="p-2 bg-white rounded-md shadow-md dark:bg-gray-800 text-emerald-400">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <div class="text-left ml-2.5">
                            <p class="text-xs text-gray-600 dark:text-gray-400"> Location </p>
                            <p class="dark:text-white">Quezon City, PH</p>
                        </div>
                    </div>
                    <div class="flex py-2.5">
                        <span class="p-2 bg-white rounded-md shadow-md dark:bg-gray-800 text-emerald-400">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <div class="text-left ml-2.5">
                            <p class="text-xs text-gray-600 dark:text-gray-400"> Birthday </p>
                            <p class="dark:text-white">February 26, 2002</p>
                        </div>
                    </div>
                </div>

                <!-- dowanload button -->
                <button type="button"
                    class="px-6 pt-2.5 mt-5 pb-2 mx-auto bg-emerald-600 text-white font-medium text-lg leading-normal uppercase rounded-xl shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                    <Icon icon="line-md:download-loop" class="w-7 h-7" />
                    Download CV
                </button>
            </div>

        </div>
        <div class="hidden pb-20 my-12 mb-20 mx-auto xl:block">
            <iframe height='454' width='330' frameborder='0' allowtransparency='true' scrolling='no'
                class="mx-auto my-10 rounded-3xl "
                src='https://www.strava.com/athletes/74278837/latest-rides/2362de40d7f4fe98d3604441f2f28cd5831c3f40'></iframe>
        </div>
    </div>
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
    components: {
        Icon,

    },
};
</script>