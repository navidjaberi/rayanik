<template>
  <div class="w-full border-2 border-light-primary rounded-2xl flex align-center   mt-4">
    <div class="md:w-1/12 w-2/12">
      <NuxtImg :src="'/' + props.src" :width="250" :height="300" />
    </div>
    <div class="md:w-11/12 px-10 my-5 w-10/12">
      <p class="font-bold md:text-sub text-sm  leading-8">
        {{ props.content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  content: string;
}>();
</script>

<style></style>
