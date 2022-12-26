<template>
  <div class="p-6 mx-6 md:mt-64">
    <div
      class="container flex flex-col p-6 mx-auto md:py-2 lg:flex-row divide-gray-400 dark:bg-gray-800 font-lexend shadow-md dark:shadow-emerald-600 rounded-3xl mt-5 ">
      <img src="../assets/imgs/my-logo.png"
        class=" self-center w-20 h-20 md:w-10 md:h-10 mr-3 justify-center items-center" alt="">
      <ul
        class="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start dark:text-gray-400 text-emerald-600 ">

        <li><router-link to="/termsandconditions" class="dark:hover:text-emerald-400">Terms and Conditions</router-link>
        </li>
        <li><router-link to="/privacypolicy" class="dark:hover:text-emerald-400">Privacy Policy</router-link></li>
        <li><router-link to="/licensing" class="dark:hover:text-emerald-400">Licensing</router-link></li>
        <li><router-link to="/contact" class="dark:hover:text-emerald-400">Contact</router-link></li>
      </ul>
      <div class="flex flex-col justify-center md:py-6 lg:py-0 lg:pt-0">
        <div class="flex justify-center space-x-4">
          <a rel="noopener noreferrer" href="https://www.gmail.com/support.mikegester@gmail.com" target="_blank"
            title="Email"
            class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 text-emerald-700 bg-emerald-100 dark:hover:border-emerald-400 dark:hover:border-2 dark:hover:bg-transparent dark:hover:text-emerald-400 dark:bg-emerald-400 dark:text-gray-900">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clip-rule="evenodd"></path>
            </svg>


          </a>
          <a rel="noopener noreferrer" href="https://fb.gg/mkgstr" target="_blank" title="Facebook"
            class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 text-emerald-700 bg-emerald-100 dark:hover:border-emerald-400 dark:hover:border-2 dark:hover:bg-transparent dark:hover:text-emerald-400 dark:bg-emerald-400 dark:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
              class="w-5 h-5"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>


          </a>
          <a rel="noopener noreferrer" href="https://m.me/r.mikegester" target="_blank" title="Messenger"
            class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 text-emerald-700 bg-emerald-100 dark:hover:border-emerald-400 dark:hover:border-2 dark:hover:bg-transparent dark:hover:text-emerald-400 dark:bg-emerald-400 dark:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
              class="w-5 h-5"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path fill="currentColor"
                d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
            </svg>


          </a>
          <a rel="noopener noreferrer" href="https://www.instagram.com/r.mikegester" target="_blank" title="Instagram"
            class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  text-emerald-700 bg-emerald-100  dark:hover:border-emerald-400 dark:hover:border-2 dark:hover:bg-transparent dark:hover:text-emerald-400 dark:bg-emerald-400 dark:text-gray-900 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5">
              <path
                d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z">
              </path>
            </svg>
          </a>
          <a rel="noopener noreferrer" href="https://discord.com/channels/Raikuuu#0039" target="_blank" title="Discord"
            class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 text-emerald-700 bg-emerald-100 dark:hover:border-emerald-400 dark:hover:border-2 dark:hover:bg-transparent dark:hover:text-emerald-400 dark:bg-emerald-400 dark:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
              class="w-5 h-5"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path fill="currentColor"
                d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
            </svg>

          </a>
          <a rel="noopener noreferrer" href="https://www.tiktok.com/@r.mikegester" target="_blank" title="Tiktok"
            class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 text-emerald-700 bg-emerald-100 dark:hover:border-emerald-400 dark:hover:border-2 dark:hover:bg-transparent dark:hover:text-emerald-400 dark:bg-emerald-400 dark:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              class="w-5 h-5"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path fill="currentColor"
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </svg>


          </a>
        </div>
      </div>
    </div>
    <footer class="w-full box-border p-5 mt-3 text-center">
      <p class="text-sm text-emerald-600 dark:text-gray-400">
        Mike Gester 2022
      </p>
    </footer>
  </div>
</template>
