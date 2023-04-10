<script setup lang="ts">
import { ref } from 'vue'

const val = ref(3)

function add() {
  val.value += 1
}
</script>

<template>
  <input v-model="val" type="number" class="border p-2" />
  <button class="bg-light p-2" @click="add">Plus</button>
</template>
