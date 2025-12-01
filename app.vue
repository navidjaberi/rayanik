<template>
  <div>
    <NuxtLoadingIndicator> </NuxtLoadingIndicator>
    <NuxtLayout>
      <NuxtPage page-transition="page"  />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
