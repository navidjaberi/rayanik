<template>
  <div class="d-flex justify-center align-center text-center p-5 h-screen dark:bg-dark-secondary bg-light-primary">
    <div>
      <h2 class="text-main  text-3xl font-bold">{{ error?.statusCode }}</h2>
      <p class="text-main  text-xl">صفحه مورد نظر یافت نشد</p>

      <button class="text-black dark:text-white bg-main w-full p-1 rounded-xl mt-6" @click="handleError" block>
        بازگشت
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { NuxtError } from "#app";
const props = defineProps({
  error: Object as () => NuxtError,
});
const handleError = () => clearError({ redirect: '/' });</script>
