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
        class="md:grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-4 gap-10 !h-full max-w-[80%] mx-auto"
      >
        <MotionGroup preset="slideVisibleOnceLeft" :duration="800"> </MotionGroup>
        <BaseSlider
          v-for="i in 14"
          :images="[
            '/img/home/projects/2.png',
            '/img/home/projects/6.png',
            '/img/home/projects/5.png',
          ]"
        />
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

<style lang="scss"></style>
