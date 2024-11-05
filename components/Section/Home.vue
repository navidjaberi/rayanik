<template>
  <div>
    <div class="flex align-center h-screen z-0 text-black dark:!text-white relative">
      <v-img
        :src="
          colorMode.preference === 'light' ? '/img/shapes/shapeDark1.png' : '/img/shapes/shape1.png'
        "
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1.2 }"
        :delay="200"
        :duration="1200"
        placeholder
        class="!absolute bottom-24 md:!bottom-0 mb-0 md:right-1/2 right-14 md:w-[180px] w-[100px]"
        lazy-src="/img/DarkPlaceholder.png"
      ></v-img>
      <v-img
        :src="
          colorMode.preference === 'light' ? '/img/shapes/shape2.png' : '/img/shapes/shapeDark2.png'
        "
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, scale: 1 }"
        :hovered="{ scale: 1.2 }"
        :delay="200"
        :duration="1200"
        class="!absolute md:bottom-32 md:!top-12 mb-0 md:right-10 right-3 top-11 md:w-[180px] w-[150px]"
        lazy-src="/img/DarkPlaceholder.png"
      >
      </v-img>
      <v-img
        :src="
          colorMode.preference === 'light' ? '/img/shapes/shape3.png' : '/img/shapes/shapeDark3.png'
        "
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :duration="3000"
        class="!absolute -left-[10px] top-8 md:!top-0 md:w-[200px] w-[100px]"
        lazy-src="/img/DarkPlaceholder.png"
      />

      <div class="w-screen text-center z-10">
        <div class="md:p-10 p-5">
          <h1 class="md:text-5xl text-3xl font-black md:mb-10 mb-4 md:mt-0 -mt-14">رایانیک</h1>
          <h2 class="md:text-xl text-lg font-bold md:font-normal mt-4">
            شرکت ارائه خدمات طراحی سایت و دیجیتال مارکتینگ
          </h2>
          <p class="mt-12 md:text-lg text-base z-40">
            هدف شرکت ما کمک به کسب و کار های بزرگ و کوچک در حوزه دیجیتال مارکتینگ می‌باشد. باعث
            افتخارمان است که شما را در میان همراهان خود ببینیم.
          </p>
        </div>
        <div class="mt-5">
          <NuxtLink to="https://rayaniyareshkara.ir/" target="_blank">
            <BaseButton text="دنیای دیجیتال مارکتینگ" class="z-4" mode="primary" />
          </NuxtLink>
          <NuxtLink to="/design-website">
            <BaseButton text="تعرفه های طراحی سایت" class="md:mx-6 z-40 mx-1" mode="primary" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
</template>

<script setup>
const colorMode = useColorMode();
const img = useImage();
const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  // This is how progress is calculated by default
  estimatedProgress: (duration, elapsed) =>
    (2 / Math.PI) * 100 * Math.atan(((elapsed / duration) * 100) / 50),
});

start(() => {
  isLoading.value = false;
  progress.value = 0;
});
finish(() => {
  isLoading.value = true;
  progress.value = 100;
});
</script>

<style></style>
