<template>
  <div>
    <div class="h-screen"  v-if="loading">
      <div class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500">
	    <NuxtImg  src="/svg/rayanik.svg" class="
    md:w-[200px] w-[150px] mx-auto "   placeholder/> 
	</div>
    </div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
