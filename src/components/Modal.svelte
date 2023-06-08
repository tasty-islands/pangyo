<script>
  export let modalContent
</script>

<div
  on:click|self
  on:keydown
  class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full bg-black/[.4] justify-center items-center flex"
>
  <div class="relative w-full max-w-2xl max-h-full">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <svelte:component this={modalContent} on:click />
    </div>
  </div>
</div>
