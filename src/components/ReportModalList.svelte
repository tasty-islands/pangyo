<script>
import { GET_REPORT } from "../graphql/queries";
import { query } from "svelte-apollo";

const reports = query(GET_REPORT, {
  variables: {
    //TODO: variables restaurant_id에 따라 변경되게 로직 수정 필요
    id: 1 
  }
});
</script>

<div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
    오류정보 리스트 (데이터 확인용)
  </h3>
  <button type="button" on:click class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Close modal</span>
  </button>
</div>
 <!-- Modal body -->
 <div class="p-4 space-y-6 max-h-[14rem] overflow-y-auto">
  <ul>
    {#if $reports.loading}
      <li>Loading...</li>
    {:else if $reports.error}
      <li>ERROR: {$reports.error.message}</li>
    {:else}
      {#each $reports.data.report as item (item.id)}
        
        <li class="m-2 pt-2 border-gray-300 border-t first:border-t-0 first:pt-0">
          <p class="text-gray-400 text-sm">{item.type}</p>
          <p class="text-md">{item.comment}</p>
          <p>{item.user.substring(0, 2) + '*'.repeat(item.user.length - 2)}</p>        
        </li>
      {/each}
    {/if}
  </ul>
</div>
<!-- Modal footer -->
<div class="flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
  <button type="button" on:click class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
</div>



