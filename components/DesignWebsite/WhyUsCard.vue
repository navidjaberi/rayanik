<template>
  <div
    class="w-full border-2 border-light-primary rounded-2xl flex align-center mt-4"
    v-motion
    :initial="{ x: -1000, opacity: 0 }"
    :visible-once="{ x: 0, opacity: 1 }"
    :duration="2000"
  >
    <div class="md:w-1/12 w-2/12">
      <NuxtImg :src="'/img/design-website/' + props.src" :width="250" :height="300" />
    </div>
    <div class="md:w-11/12 px-10 my-5 w-10/12">
      <p class="font-bold md:text-sub text-sm leading-8">
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
