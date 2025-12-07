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
      <div class="flex md:max-2xl:max-w-[78%] px-2 mx-auto  my-10">
        <v-item-group v-model="categoryToggle">
          <v-item v-slot="{ isSelected, toggle }" value="all">
            <v-btn
              text="همه دسته بندی ها"
              class="mx-2 md:max-2xl:w-32 !text-[10px] md:max-2xl:!text-[13px]"
              :class="isSelected ? '!bg-[#6E45E9] dark:!bg-[#6E45E9] !text-white' : 'dark:!bg-[#1E1E21] !bg-[#C4BAD1] !text-black dark:!text-white'"
              @click="toggle"
            ></v-btn>
          </v-item>
          <v-item v-slot="{ isSelected, toggle }" value="shop"
            ><v-btn
              text="سایت های فروشگاهی"
              class="mx-2 md:max-2xl:w-32 !text-[10px] md:max-2xl:!text-[13px]"
              :class="isSelected ? '!bg-[#6E45E9] dark:!bg-[#6E45E9] !text-white' : 'dark:!bg-[#1E1E21] !bg-[#C4BAD1] !text-black dark:!text-white'"
              @click="toggle"
            ></v-btn
          ></v-item>
          <v-item v-slot="{ isSelected, toggle }" value="business"
            ><v-btn
              text="سایت های شرکتی"
              class="mx-2 md:max-2xl:w-32 !text-[10px] md:max-2xl:!text-[13px]"
              :class="isSelected ? '!bg-[#6E45E9] dark:!bg-[#6E45E9] !text-white' : 'dark:!bg-[#1E1E21] !bg-[#C4BAD1] !text-black dark:!text-white'"
              @click="toggle"
            ></v-btn
          ></v-item>
        </v-item-group>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-4 gap-10 !h-full max-w-[80%] mx-auto"
      >
        <MotionGroup
          tag="div"
          class="grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-4 gap-10 !h-full max-w-[80%] mx-auto"
          :stagger="{ each: 80 }"
        >
          <BaseSlider v-for="i in filteredMockups" :images="i.images" :title="i.title" />
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
const categoryToggle = ref<string>("all");
const displayTextArrayIndex = ref<number>(0);
const charIndex = ref<number>(0);
const mockups = ref([
  {
    title: "لنت نوید",
    type: "فروشگاهی",
    images: [
      "/img/mockups/navid/Desktop-Mobile.webp",
      "/img/mockups/navid/Desktop.webp",
      "/img/mockups/navid/Mobile.webp",
    ],
  },
  {
    title: "کلینیک زیبایی الیمو",
    type: "شرکتی",
    images: [
      "/img/mockups/elimo/Desktop-Mobile.webp",
      "/img/mockups/elimo/Desktop.webp",
      "/img/mockups/elimo/Mobile.webp",
    ],
  },
  {
    title: "رامندسازه ماندگار",
    type: "شرکتی",
    images: [
      "/img/mockups/ramand/Desktop-Mobile.webp",
      "/img/mockups/ramand/Desktop.webp",
      "/img/mockups/ramand/Mobile.webp",
    ],
  },
  {
    title: "یونا",
    type: "فروشگاهی",
    images: [
      "/img/mockups/yona/Desktop-Mobile.webp",
      "/img/mockups/yona/Desktop.webp",
      "/img/mockups/yona/Mobile.webp",
    ],
  },
  {
    title: "ایرالند",
    type: "فروشگاهی",
    images: [
      "/img/mockups/iraland/Desktop-Mobile.webp",
      "/img/mockups/iraland/Desktop.webp",
      "/img/mockups/iraland/Mobile.webp",
    ],
  },
  {
    title: "TBP.Co",
    type: "شرکتی",
    images: [
      "/img/mockups/tbp/Desktop-Mobile.webp",
      "/img/mockups/tbp/Desktop.webp",
      "/img/mockups/tbp/Mobile.webp",
    ],
  },
  {
    title: "کیش ترموس",
    type: "فروشگاهی",
    images: [
      "/img/mockups/kish/Desktop-Mobile.webp",
      "/img/mockups/kish/Desktop.webp",
      "/img/mockups/kish/Mobile.webp",
    ],
  },
  {
    title: "ترند استور",
    type: "فروشگاهی",

    images: [
      "/img/mockups/trend/Desktop-Mobile.webp",
      "/img/mockups/trend/Desktop.webp",
      "/img/mockups/trend/Mobile.webp",
    ],
  },
  {
    title: "msco",
    type: "فروشگاهی",

    images: [
      "/img/mockups/msco/Desktop-Mobile.webp",
      "/img/mockups/msco/Desktop.webp",
      "/img/mockups/msco/Mobile.webp",
    ],
  },
  {
    title: "رویال کالا",
    type: "فروشگاهی",

    images: [
      "/img/mockups/royal/Desktop-Mobile.webp",
      "/img/mockups/royal/Desktop.webp",
      "/img/mockups/royal/Mobile.webp",
    ],
  },
  {
    title: "ریگساز تهران",
    type: "فروشگاهی",

    images: [
      "/img/mockups/rigsaz/Desktop-Mobile.webp",
      "/img/mockups/rigsaz/Desktop.webp",
      "/img/mockups/rigsaz/Mobile.webp",
    ],
  },
  {
    title: "دنو تجهیز",
    type: "فروشگاهی",

    images: [
      "/img/mockups/deno/Desktop-Mobile.webp",
      "/img/mockups/deno/Desktop.webp",
      "/img/mockups/deno/Mobile.webp",
    ],
  },
  {
    title: "پرارین",
    type: "فروشگاهی",

    images: [
      "/img/mockups/perarin/Desktop-Mobile.webp",
      "/img/mockups/perarin/Desktop.webp",
      "/img/mockups/perarin/Mobile.webp",
    ],
  },
  {
    title: "عدالت خواهان دادگر",
    type: "شرکتی",

    images: [
      "/img/mockups/edalat/Desktop-Mobile.webp",
      "/img/mockups/edalat/Desktop.webp",
      "/img/mockups/edalat/Mobile.webp",
    ],
  },
  {
    title: "شیکنس",
    type: "فروشگاهی",

    images: [
      "/img/mockups/shikans/Desktop-Mobile.webp",
      "/img/mockups/shikans/Desktop.webp",
      "/img/mockups/shikans/Mobile.webp",
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
const filteredMockups = computed(() => {
  const cat = categoryToggle.value;
  if (cat === "all") return mockups.value;
  if (cat === "shop") return mockups.value.filter((m) => m.type === "فروشگاهی");
  if (cat === "business") return mockups.value.filter((m) => m.type === "شرکتی");
  return mockups.value;
});
onBeforeMount(() => {
  setTimeout(typeText, newTextDelay.value + 200);
});
</script>

<style lang="scss"></style>
