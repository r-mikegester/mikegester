<script setup>

</script>

<template>

  <div class="w-7/12 bg-white border rounded-lg shadow-md mr-96 ml-72 my-7 dark:bg-gray-800 dark:border-gray-700">
    <img class="w-full h-64 bg-cover rounded-t-md brightness-75" src="../assets/imgs/sierra.jpg" />
    <div class="absolute mt-5 text-4xl font-black text-white ml-52 top-52 dark:text-white ">Mike Gester
    </div>
    <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-400 bg-white rounded-lg ml-52 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
      id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
      <img class="absolute w-40 border-4 rounded-full border-emerald-500 dark:border-gray-800 top-40 left-80"
        src="../assets/imgs/mikegester-logo.png" />
      <li class="">
        <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about"
          aria-selected="true"
          class="inline-block p-4 border-2 border-t-0 border-l-0 border-r-0 text-emerald-500 dark:bg-emerald-700 border-b-emerald-500 hover:bg-emerald-50 dark:text-white bg-emerald-100 dark:hover:text-white">Timeline</button>
      </li>
      <li class="">
        <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services"
          aria-selected="false"
          class="inline-block p-4 text-gray-400 border-t-0 hover:border-1 hover:border-gray-100 border-x-0 hover:text-emerald-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-gray-800">Projects</button>
      </li>
      <li class="">
        <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics"
          aria-selected="false"
          class="inline-block p-4 border-t-0 border-x-0 hover:text-emerald-500 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-800">Services</button>
      </li>
      <li class="">
        <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics"
          aria-selected="false"
          class="inline-block p-4 border-t-0 border-x-0 hover:text-emerald-500 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-800">About</button>
      </li>
      <li class="">
        <button id="dropdownButton" data-dropdown-toggle="dropdown"
          class="inline-block p-4 bg-white border-t-0 border-x-0 hover:text-emerald-500 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700 dark:bg-transparent dark:border-gray-800"
          type=" button">
          <span class="">More</span>

        </button>
      </li>

    </ul><!-- Dropdown menu -->
    <div id="dropdown"
      class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
      <ul class="py-1" aria-labelledby="dropdownButton">
        <li>
          <a href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Gallery</a>
        </li>
        <li>
          <a href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Videos</a>
        </li>
        <li>
          <a href="#"
            class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
        </li>
        <li>
          <a href="#"
            class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Release
            Notes</a>
        </li>
        <li>
          <a href="#"
            class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Testimonials</a>
        </li>
      </ul>
    </div>
  </div>

  <!-- Dropdown menu -->
  <div id="dropdown"
    class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownButton">
      <li>
        <a href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
      </li>
      <li>
        <a href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
          Data</a>
      </li>
      <li>
        <a href="#"
          class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
      </li>
    </ul>
  </div>


</template>