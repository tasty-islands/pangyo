<script setup lang="ts">
import { ref } from 'vue'

const val = ref(3)

function add() {
  val.value += 1
}
</script>

<template>
  <div>
    <input type="number" v-model="val" class="border p-2" />
    <button @click="add" class="bg-light p-2">Plus</button>
  </div>
</template>
