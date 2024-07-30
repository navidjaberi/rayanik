<template>
  <div
    class="w-full border-2 border-main rounded-2xl flex align-center mt-4 bg-light-secondary dark:!bg-dark-secondary !text-white"
    v-motion
    :initial="{ x: 100, opacity: 0 }"
    :visible-once="{ x: 0, opacity: 1 }"
    :duration="2000"
  >
    <div class="md:w-1/12 w-2/12">
      <v-img :src="'/img/design-website/' + props.src" :width="250" :height="100" placeholder>
        <template #placeholder>
          <BaseLoadingSpinner />
        </template>
      </v-img>
    </div>
    <div class="md:w-11/12 px-10 my-5 w-10/12">
      <p class="md:text-lg text-md leading-8">
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
