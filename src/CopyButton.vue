<template>
  <button @click="$emit('copyButtonClick')" class="button-2">
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" :style="{fill: copyButtonColor}">
      <path
        d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z"/>
    </svg>
  </button>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
const mode = ref(colorScheme.matches ? 'dark' : 'light')

colorScheme.addEventListener('change', event => {
  mode.value = event.matches ? 'dark' : 'light';
});

const copyButtonColor = computed(() => {
  return mode.value === 'dark' ? '#8866ff' : '#6343f4';
})
</script>
<style>
.button-2:active{

}
</style>
