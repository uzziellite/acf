<script>
  import {clickOutside} from "@directives/click_outside.js"

  let mobileMenuActive = false
  const name = import.meta.env.PUBLIC_NAME
</script>

<div class="bg-white shadow-lg border-b-2 border-teal-600">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="flex items-center justify-between border-b-2 border-gray-100 py-1 lg:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="/" class="flex">
          <span class="sr-only">{name}</span>
          <img class="h-12 w-auto sm:h-[75px] mt-2" src="/images/logo.png" alt={name}>
        </a>
      </div>
      <div class="-my-2 -mr-2 lg:hidden">
        <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 hover:bg-gray-100 focus:outline-none" aria-expanded={`${mobileMenuActive ? 'true' : 'false'}`} on:click={() => mobileMenuActive = ! mobileMenuActive }>
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/bars-3 -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <nav class="hidden space-x-10 lg:flex">
        <a href="/" class="text-sm font-bold uppercase hover:border-b-2 hover:border-teal-600 mt-2">Home</a>
        <a href="/about-us" class="text-sm font-bold uppercase hover:border-b-2 hover:border-teal-600 mt-2">About Us</a>
        <a href="/our-projects" class="text-sm font-bold uppercase hover:border-b-2 hover:border-teal-600 mt-2">Our Projects</a>
        <a href="/board-and-partners" class="mt-2 text-sm font-bold uppercase hover:border-b-2 hover:border-teal-600">Board &amp; Partners</a>
        <a href="/news" class="text-sm font-bold uppercase hover:border-b-2 hover:border-teal-600 mt-2">News</a>
        <a href="/contact-us" class="text-sm font-bold uppercase hover:border-b-2 hover:border-teal-600 mt-2">Contact Us</a>
      </nav>
    </div>
  </div>

  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <div class={`z-50 absolute inset-x-0 top-0 origin-top-right transform p-2 transition ${mobileMenuActive ? '' : 'hidden'}`} use:clickOutside on:outclick={() => mobileMenuActive = false}>
    <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div class="px-5 pt-5 pb-6">
        <div class="flex items-center justify-between">
          <div>
            <img class="w-24 h-auto" src="/images/logo.png" alt={name}>
          </div>
          <div class="-mr-2">
            <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 hover:bg-gray-100 focus:outline-none" on:click={() => mobileMenuActive = false}>
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x-mark -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            <a href="/" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <!-- Heroicon name: outline/home -->
              <svg class="w-6 h-6 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span class="ml-3 text-base font-medium text-gray-900">
                Home
              </span>
            </a>

            <a href="/about-us" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <!-- Heroicon name: outline/info -->
              <svg class="w-6 h-6 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="ml-3 text-base font-medium text-gray-900">
                About Us
              </span>
            </a>

            <a href="/our-projects" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <svg class="w-6 h-6 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              <span class="ml-3 text-base font-medium text-gray-900">Our Projects</span>
            </a>

            <a href="/board-and-partners" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <svg class="w-6 h-6 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
              <span class="ml-3 text-base font-medium text-gray-900">
                Board and Partners
              </span>
            </a>
            <a href="/news" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <svg class="w-6 h-6 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              <span class="ml-3 text-base font-medium text-gray-900">
                News
              </span>
            </a>
            <a href="/contact-us" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <!-- Heroicon name: outline/chat -->
              <svg class="w-6 h-6 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              <span class="ml-3 text-base font-medium text-gray-900">
                Contact Us
              </span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
