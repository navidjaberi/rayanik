<template>
  <div class="bg-black">
    <div class="align-center h-screen">
      <div class="text-center">
        <h1 class="text-2xl">نمونه کارها</h1>
      </div>
      <div class="flex mt-36">
        <div class="w-1/2">
          <img
            :src="selectedImgSrc"
            :width="500"
            class="mx-auto rounded-xl border-[0.5px] border-light-primary border-solid"
          />
        </div>
        <div class="w-1/2 flex projects-skew ml-40 align-center">
          <img
            v-for="(img, idx) in images"
            :key="img.id"
            :src="img.source"
            :width="300"
            :class="[idx === img.length ? '' : '-ml-40', 'cursor-pointer']"
            @mouseover="selectedImg(img.source)"
          />
        </div>
      </div>
    </div>
  </div>
  <!--  -->
</template>

<script setup>
const selectedImgSrc = ref("");
const images = ref([
  {
    source: "/_nuxt/assets/img/project1.jpg",
    id: 1,
  },
  {
    source: "/_nuxt/assets/img/project2.jpg",
    id: 2,
  },
  {
    source: "/_nuxt/assets/img/project3.jpg",
    id: 3,
  },
  {
    source: "/_nuxt/assets/img/project4.jpg",
    id: 4,
  },
]);
const selectedImg = (src) => {
  selectedImgSrc.value = src;
};
onMounted(() => {
  selectedImgSrc.value = images.value[0].source;
});
</script>

<style scoped>
.projects-skew img {
  transform: skew(2deg, 16deg);
  border: 1px solid #bb8971;
  border-radius: 5px;
}
</style>
