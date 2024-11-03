<template>
  <div>
    <div
      class="dark:!bg-[url('/img/main-darkBackground.jpg')] bg-[url('/img/main-background.jpg')] bg-cover flex md:flex-row flex-col-reverse align-center md:h-[600px] rtl"
    >
      <div class="md:w-4/6 w-full -mt-20 md:!mt-0">
        <v-img
          class="md:w-[400px] w-[300px] mx-auto md:mt-30 mt-7"
          :src="colorMode.preference === 'light' ? '/svg/portfolioDark.svg' : '/svg/portfolio.svg'"
        >
          <template #placeholder>
            <BaseLoadingSpinner />
          </template>
        </v-img>

        <div>
          <h1
            class="text-center md:text-2xl text-lg mb-10 typography font-black text-light-secondary"
          >
            <span class="blinking-cursor">|</span>
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h1>
        </div>
      </div>
      <div
        class="md:w-1/3 w-full flex h-full justify-center align-center mx-15 mt-14 md:p-10 p-24"
        v-motion
        :initial="{ x: 1700, y: -150 }"
        :enter="{ x: 0, y: 0, scale: 1 }"
        :duration="1500"
      >
        <v-img
          :src="
            colorMode.preference === 'light'
              ? '/img/home/services/sphere2Dark.png'
              : '/img/home/services/sphere2.png'
          "
          placeHolder
          class="md:w-[300px] w-[150px]"
          lazy-src="/img/DarkPlaceholder.png"
        />
      </div>
    </div>
    <div class="md:h-[90rem] h-auto mt-10">
      <div
        class="md:grid grid-cols-1 md:grid-cols-3 grid-rows-8 md:grid-rows-8 gap-4 !h-full md:w-[78%] px-4 md:px-0 mx-auto"
      >
        <MotionGroup preset="slideVisibleOnceLeft" :duration="800">
          <div class="row-span-1 md:row-span-2 md:col-span-2 my-4 md:!my-0">
            <v-img
              src="/img/projects/project2.jpg"
              lazy-src="/img/img-placeholder.jpg"
              class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
            >
              <template #placeholder>
                <BaseLoadingSpinner />
              </template>
            </v-img>
          </div>
          <div class="row-span-2 md:row-span-4 my-4 md:!my-0">
            <v-img
              src="/img/projects/project1.jpg"
              lazy-src="/img/img-placeholder.jpg"
              class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
            >
              <template #placeholder>
                <BaseLoadingSpinner />
              </template>
            </v-img>
          </div>
          <div class="row-span-1 md:row-span-2 my-4 md:!my-0">
            <v-img
              src="/img/projects/project3.jpg"
              lazy-src="/img/img-placeholder.jpg"
              class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
            >
              <template #placeholder>
                <BaseLoadingSpinner />
              </template>
            </v-img>
          </div>
          <div class="row-span-1 md:row-span-2 my-4 md:!my-0">
            <v-img
              src="/img/projects/project4.jpg"
              lazy-src="/img/img-placeholder.jpg"
              class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
            >
              <template #placeholder>
                <BaseLoadingSpinner />
              </template>
            </v-img>
          </div>
          <div class="row-span-1 md:row-span-4 my-4 md:!my-0 flex">
            <v-img
              src="/img/projects/project7.jpg"
              lazy-src="/img/img-placeholder.jpg"
              class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
              cover
            >
              <template #placeholder>
                <BaseLoadingSpinner />
              </template>
            </v-img>
          </div>
          <div class="row-span-1 md:row-span-2 relative my-4 md:!my-0 !z-10">
            <v-img
              src="/img/projects/project6.jpg"
              lazy-src="/img/img-placeholder.jpg"
              class="img-rotate md:absolute md:bottom-[51px] md:right-[68px] mx-auto neon-box rounded-xl md:!rounded-none md:hover:rotate-0 md:hover:bottom-0 md:hover:right-0 duration-1000 ease-in"
            >
              <template #placeholder>
                <BaseLoadingSpinner />
              </template>
            </v-img>
          </div>
          <div class="row-span-1 md:row-span-2 my-4 md:!my-0">
            <v-img
              src="/img/projects/project5.jpg"
              lazy-src="/img/img-placeholder.jpg"
              class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
            >
              <template #placeholder>
                <BaseLoadingSpinner />
              </template>
            </v-img>
          </div>

          <div class="row-span-1 md:row-span-2 md:col-span-2 my-4 md:!my-0">
            <v-img
              src="/img/projects/project8.jpg"
              lazy-src="/img/img-placeholder.jpg"
              class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
            >
              <template #placeholder>
                <BaseLoadingSpinner />
              </template>
            </v-img>
          </div>
        </MotionGroup>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();
const typeValue = ref<string>("");
const typeStatus = ref<boolean>(false);
const displayTextArray = ref<string[]>([
  "طراحی سایت",
  "سئو سایت",
  "خدمات اینستاگرام",
  "طراحی اپلیکیشن",
]);
const typingSpeed = ref<number>(100);
const erasingSpeed = ref<number>(100);
const newTextDelay = ref<number>(2000);
const displayTextArrayIndex = ref<number>(0);
const charIndex = ref<number>(0);
const typeText = (): void => {
  if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value += displayTextArray.value[displayTextArrayIndex.value].charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(typeText, typingSpeed.value);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay.value);
  }
};
const eraseText = (): void => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = displayTextArray.value[displayTextArrayIndex.value].substring(
      0,
      charIndex.value - 1
    );
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed.value);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex.value += 1;
    if (displayTextArrayIndex.value >= displayTextArray.value.length)
      displayTextArrayIndex.value = 0;
    setTimeout(typeText, typingSpeed.value + 1000);
  }
};

onBeforeMount(() => {
  setTimeout(typeText, newTextDelay.value + 200);
});
</script>

<style lang="scss">
@media screen and (min-width: 767px) {
  .img-rotate {
    transform: rotate(15deg);
  }
}
</style>
