<script>
let val = 3

function add() {
  val += 1
}

const testPrompt = async () => {
    let answer = await prompt("prompt?");
    if (answer) alert(answer);
  };
</script>

<p>
  <button on:click={testPrompt}>
    prompt()
  </button>
</p>
<input bind:value={val} type="number" class="border p-2" />
<button class="bg-light p-2" on:click={add}>Plus</button>
