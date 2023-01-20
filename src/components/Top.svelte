<script>
  const scrollToTop = () => {
    if(typeof window != "undefined"){
      window.scrollTo(0,0)
    }
  }  
</script>

<div on:click={() => scrollToTop()} class="cursor-pointer fixed bottom-12 right-4 z-40 bg-teal-600 text-white p-2 rounded-md">
  <svg class="h-12 w-12 transition animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path clip-rule="evenodd" fill-rule="evenodd" d="M5.23 15.79a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 11.832 6.29 15.77a.75.75 0 01-1.06.02zm0-6a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 5.832 6.29 9.77a.75.75 0 01-1.06.02z"></path>
  </svg>
</div>
