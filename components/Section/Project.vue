<template>
  <div>
    <div class="text-center text-black dark:!text-white mt-32">
      <p class="md:text-3xl text-xl font-bold mb-10 md:!mt-1">نمونه کار</p>
    </div>
    <div class="flex mx-auto px-10">
      <MotionGroup preset="popVisible" :duration="800"> </MotionGroup>
      <BaseSlider v-for="i in mockups" :images="i.images" :title="i.title" />
    </div>
    <div class="mx-auto mt-10 text-center">
      <BaseButton
        text="مشاهده همه نمونه کارها"
        class="mx-auto"
        mode="primary"
        @click-handler="$router.push('/projects')"
      ></BaseButton>
    </div>
  </div>
  <!--  -->
</template>

<script setup>
const mockups = ref([
  {
    title: "لنت نوید",
    images: [
      "/img/mockups/navid/Desktop-Mobile.webp",
      "/img/mockups/navid/Desktop.webp",
      "/img/mockups/navid/Mobile.webp",
    ],
  },
  {
    title: "کلینیک زیبایی الیمو",
    images: [
      "/img/mockups/elimo/Desktop-Mobile.webp",
      "/img/mockups/elimo/Desktop.webp",
      "/img/mockups/elimo/Mobile.webp",
    ],
  },
  {
    title: "رامندسازه ماندگار",
    images: [
      "/img/mockups/ramand/Desktop-Mobile.webp",
      "/img/mockups/ramand/Desktop.webp",
      "/img/mockups/ramand/Mobile.webp",
    ],
  },
  {
    title: "یونا",
    images: [
      "/img/mockups/yona/Desktop-Mobile.webp",
      "/img/mockups/yona/Desktop.webp",
      "/img/mockups/yona/Mobile.webp",
    ],
  },
]);
</script>

<style scoped></style>
