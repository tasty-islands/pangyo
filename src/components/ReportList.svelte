<script>
import { GET_REPORT } from "../graphql/queries";
import { query } from "svelte-apollo";

const id = 1;
const reportsQuery = query(GET_REPORT, {
  variables: {
    id: 1
  }
});
</script>


<div class="todoListWrapper">
<ul>
  {#if $reportsQuery.loading}
    <li>Loading...</li>
  {:else if $reportsQuery.error}
    <li>ERROR: {$reportsQuery.error.message}</li>
  {:else}
    {#each $reportsQuery.data.report as item (item.id)}
      <li>{item.comment} by {item.type}</li>
    {/each}
  {/if}
</ul>

</div>


