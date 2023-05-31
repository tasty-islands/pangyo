<script>
  let val = 3

  function add() {
    val += 1
  }
</script>

<input bind:value={val} type="number" class="border p-2" />
<button class="bg-light p-2" on:click={add}>Plus</button>
