<template>
  <div>
    <NuxtLoadingIndicator>
      <template v-slot:default>
        <BaseLoading />
      </template>
    </NuxtLoadingIndicator>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts"></script>
