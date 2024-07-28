<template>
  <div>
    <div class="flex align-center h-screen relative z-0 text-black dark:!text-white">
      <NuxtImg
        :src="colorMode.preference === 'light' ? '/svg/shape1.svg' : '/svg/shapeDark1.svg'"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1.2 }"
        :delay="200"
        :duration="1200"
        placeholder
        class="absolute bottom-32 md:!bottom-0 mb-0 md:right-1/2 right-4 md:w-[200px] w-[100px]"
      />
      <NuxtImg
        :src="colorMode.preference === 'light' ? '/svg/shape2.svg' : '/svg/shapeDark2.svg'"
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, scale: 1 }"
        :hovered="{ scale: 1.2 }"
        :delay="200"
        :duration="1200"
        placeholder
        class="absolute bottom-32 md:!top-32 mb-0 md:right-10 right-3 top-14 md:w-[220px] w-[120px]"
      />
      <NuxtImg
        :src="colorMode.preference === 'light' ? '/svg/shape3.svg' : '/svg/shapeDark3.svg'"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :duration="3000"
        placeholder
        class="absolute -left-[10px] top-8 md:!top-0 md:w-[200px] w-[100px]"
      />

      <div class="w-screen text-center z-10">
        <div class="md:p-10 p-5">
          <h1 class="md:text-4xl text-2xl font-black md:mb-10 mb-4 md:mt-0 -mt-14">
            رایا نیارش کارا
          </h1>
          <h2 class="md:text-xl text-sm font-bold md:font-normal mt-4">
            شرکت ارائه خدمات طراحی سایت و دیجیتال مارکتینگ
          </h2>
          <p class="mt-12 md:text-base text-sm z-40">
            هدف شرکت ما کمک به کسب و کار های بزرگ و کوچک در حوزه دیجیتال مارکتینگ می‌باشد. باعث
            افتخارمان است که شما را در میان همراهان خود ببینیم.
          </p>
        </div>
        <div class="mt-5">
          <NuxtLink to="/">
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
</script>

<style></style>
