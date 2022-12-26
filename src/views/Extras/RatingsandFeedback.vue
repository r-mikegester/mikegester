<template>
  <!-- Search component Accordion with name of type,  press Ctrl + F -->

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
            <router-link to="/ratingsandfeedback"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Ratings
              & Feedback</router-link>
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->


    <div class="grid lg:grid-cols-1 grid-col-1 gap-4 mt-5">
      <!-- default alert  -->
      <div class="card row-span-1 grid grid-cols-1 gap-5 bg-white dark:bg-gray-800 w-full rounded-3xl p-5 shadow">

        <section class="dark:bg-gray-800 dark:text-gray-100">
          <div class="container px-6 py-12 mx-auto">
            <div class="grid items-center gap-4 xl:grid-cols-5">
              <div class="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 class="text-4xl font-bold">Currently no people give testimonies...</h2>
                <p class="dark:text-gray-400">come back again later</p>
              </div>
              <div class="p-6 xl:col-span-3">
                <div class="grid gap-4 md:grid-cols-2">
                  <div class="grid content-center gap-4">
                    <!--<div class="p-6 rounded shadow-md dark:bg-gray-900">
              <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in,
                nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani,
                an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus
                reprehendunt.</p>
              <div class="flex items-center mt-4 space-x-4">
                <img src="https://source.unsplash.com/50x50/?portrait?1" alt=""
                  class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
                <div>
                  <p class="text-lg font-semibold">Joanne Claudine</p>
                  <p class="text-sm dark:text-gray-400">Girlfriend</p>
                </div>
              </div>
            </div>
            <div class="p-6 rounded shadow-md dark:bg-gray-900">
              <p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore
                minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy
                ne, eam putent iudicabit consulatu cu.</p>
              <div class="flex items-center mt-4 space-x-4">
                <img src="https://source.unsplash.com/50x50/?portrait?2" alt=""
                  class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
                <div>
                  <p class="text-lg font-semibold">Eddie Jay Castuera</p>
                  <p class="text-sm dark:text-gray-400">College Classmate</p>
                </div>
              </div>
            </div>-->
                  </div>
                  <div class="grid content-center gap-4">
                    <!--<div class="p-6 rounded shadow-md dark:bg-gray-900">
              <p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret.
                Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri
                omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est,
                sed tota vocent appetere ea.</p>
              <div class="flex items-center mt-4 space-x-4">
                <img src="https://source.unsplash.com/50x50/?portrait?3" alt=""
                  class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
                <div>
                  <p class="text-lg font-semibold">Jofeth Gatil</p>
                  <p class="text-sm dark:text-gray-400">Bestfriend</p>
                </div>
              </div>
            </div>
            <div class="p-6 rounded shadow-md dark:bg-gray-900">
              <p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu
                cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea
                illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda
                intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae
                patrioque qui, probo bonorum vivendum ex vim.</p>
              <div class="flex items-center mt-4 space-x-4">
                <img src="https://source.unsplash.com/50x50/?portrait?4" alt=""
                  class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
                <div>
                  <p class="text-lg font-semibold">Leroy Jenkins</p>
                  <p class="text-sm dark:text-gray-400">CTO of Company Co.</p>
                </div>
              </div>
            </div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>

      <div class="card row-span-1 grid grid-cols-1 gap-5 bg-white dark:bg-gray-800 w-full rounded-2xl p-5 shadow">


        <div class="flex items-center ">
          <p
            class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
            0.0</p>
          <p class="ml-2 font-medium text-gray-900 dark:text-white">Unranked</p>
          <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">0 reviews</p>
          <a href="#" class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all
            reviews</a>
        </div>
        <!--<div class="gap-8 sm:grid sm:grid-cols-2">
          <div>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Responsiveness</dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 88%"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Mobile Friendly</dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 89%"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Free WiFi</dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 88%"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Facilities</dt>
              <dd class="flex items-center">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 54%"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">5.4</span>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Modern Design</dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 89%"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Cleanliness</dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 70%"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">7.0</span>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400"></dt>
              <dd class="flex items-center">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 89%"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
              </dd>
            </dl>
          </div>
        </div>-->
      </div>

    </div>
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 ">
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow">
        <article>
          <div class="flex items-center mb-4 space-x-4">
            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
            <div class="space-y-1 font-medium dark:text-white">
              <p>Jese Leos <time datetime="2014-08-16 19:00"
                  class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
            </div>
          </div>
          <div class="flex items-center mb-1">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
          </div>
          <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p>
          </footer>
          <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just
            fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on
            an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No
            problems.</p>
          <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as
            those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under
            £100! An absolute bargain.</p>
          <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read
            more</a>
          <aside>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
            <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
              <a href="#"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
              <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report
                abuse</a>
            </div>
          </aside>
        </article>


      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow">
        <article>
          <div class="flex items-center mb-4 space-x-4">
            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
            <div class="space-y-1 font-medium dark:text-white">
              <p>Jese Leos <time datetime="2014-08-16 19:00"
                  class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
            </div>
          </div>
          <div class="flex items-center mb-1">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
          </div>
          <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p>
          </footer>
          <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just
            fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on
            an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No
            problems.</p>
          <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as
            those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under
            £100! An absolute bargain.</p>
          <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read
            more</a>
          <aside>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
            <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
              <a href="#"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
              <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report
                abuse</a>
            </div>
          </aside>
        </article>


      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow">
        <article>
          <div class="flex items-center mb-4 space-x-4">
            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
            <div class="space-y-1 font-medium dark:text-white">
              <p>Jese Leos <time datetime="2014-08-16 19:00"
                  class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
            </div>
          </div>
          <div class="flex items-center mb-1">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
          </div>
          <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p>
          </footer>
          <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just
            fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on
            an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No
            problems.</p>
          <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as
            those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under
            £100! An absolute bargain.</p>
          <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read
            more</a>
          <aside>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
            <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
              <a href="#"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
              <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report
                abuse</a>
            </div>
          </aside>
        </article>


      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow">
        <article>
          <div class="flex items-center mb-4 space-x-4">
            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
            <div class="space-y-1 font-medium dark:text-white">
              <p>Jese Leos <time datetime="2014-08-16 19:00"
                  class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
            </div>
          </div>
          <div class="flex items-center mb-1">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
          </div>
          <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p>
          </footer>
          <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just
            fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on
            an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No
            problems.</p>
          <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as
            those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under
            £100! An absolute bargain.</p>
          <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read
            more</a>
          <aside>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
            <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
              <a href="#"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
              <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report
                abuse</a>
            </div>
          </aside>
        </article>


      </div>

    </div>-->
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import AppAccordion from "../../components/AppAccordion.vue";
import MenuAccordion from "../../components/MenuAccordion.vue";
export default {
  components: {
    Icon,
    AppAccordion,
    MenuAccordion,
  },
  mounted() { },
};
</script>
