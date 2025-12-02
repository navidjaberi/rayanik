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
    <div class="md:h-[90rem] h-auto my-10">
      <div
        class="grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-4 gap-10 !h-full max-w-[80%] mx-auto"
      >
        <MotionGroup preset="slideVisibleOnceLeft" :duration="800"> </MotionGroup>
        <BaseSlider v-for="i in mockups" :images="i.images" :title="i.title" />
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
const mockups = ref([
  {
    title: "لنت نوید",
    images: [
      "/img/mockups/navid/Desktop-Mobile.png",
      "/img/mockups/navid/Desktop.png",
      "/img/mockups/navid/Mobile.png",
    ],
  },
  {
    title: "کلینیک زیبایی الیمو",
    images: [
      "/img/mockups/elimo/Desktop-Mobile.png",
      "/img/mockups/elimo/Desktop.png",
      "/img/mockups/elimo/Mobile.png",
    ],
  },
  {
    title: "رامندسازه ماندگار",
    images: [
      "/img/mockups/ramand/Desktop-Mobile.png",
      "/img/mockups/ramand/Desktop.png",
      "/img/mockups/ramand/Mobile.png",
    ],
  },
  {
    title: "یونا",
    images: [
      "/img/mockups/yona/Desktop-Mobile.png",
      "/img/mockups/yona/Desktop.png",
      "/img/mockups/yona/Mobile.png",
    ],
  },
  {
    title: "ایرالند",
    images: [
      "/img/mockups/iraland/Desktop-Mobile.png",
      "/img/mockups/iraland/Desktop.png",
      "/img/mockups/iraland/Mobile.png",
    ],
  },
  {
    title: "TBP.Co",
    images: [
      "/img/mockups/tbp/Desktop-Mobile.png",
      "/img/mockups/tbp/Desktop.png",
      "/img/mockups/tbp/Mobile.png",
    ],
  },
  {
    title: "کیش ترموس",
    images: [
      "/img/mockups/kish/Desktop-Mobile.png",
      "/img/mockups/kish/Desktop.png",
      "/img/mockups/kish/Mobile.png",
    ],
  },
  {
    title: "ترند استور",
    images: [
      "/img/mockups/trend/Desktop-Mobile.png",
      "/img/mockups/trend/Desktop.png",
      "/img/mockups/trend/Mobile.png",
    ],
  },
  {
    title: "msco",
    images: [
      "/img/mockups/msco/Desktop-Mobile.png",
      "/img/mockups/msco/Desktop.png",
      "/img/mockups/msco/Mobile.png",
    ],
  },
  {
    title: "رویال کالا",
    images: [
      "/img/mockups/royal/Desktop-Mobile.png",
      "/img/mockups/royal/Desktop.png",
      "/img/mockups/royal/Mobile.png",
    ],
  },
  {
    title: "ریگساز تهران",
    images: [
      "/img/mockups/rigsaz/Desktop-Mobile.png",
      "/img/mockups/rigsaz/Desktop.png",
      "/img/mockups/rigsaz/Mobile.png",
    ],
  },
  {
    title: "دنو تجهیز",
    images: [
      "/img/mockups/deno/Desktop-Mobile.png",
      "/img/mockups/deno/Desktop.png",
      "/img/mockups/deno/Mobile.png",
    ],
  },
  {
    title: "پرارین",
    images: [
      "/img/mockups/perarin/Desktop-Mobile.png",
      "/img/mockups/perarin/Desktop.png",
      "/img/mockups/perarin/Mobile.png",
    ],
  },
  {
    title: "عدالت خواهان دادگر",
    images: [
      "/img/mockups/edalat/Desktop-Mobile.png",
      "/img/mockups/edalat/Desktop.png",
      "/img/mockups/edalat/Mobile.png",
    ],
  },
  {
    title: "شیکنس",
    images: [
      "/img/mockups/shikans/Desktop-Mobile.png",
      "/img/mockups/shikans/Desktop.png",
      "/img/mockups/shikans/Mobile.png",
    ],
  },
]);
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
