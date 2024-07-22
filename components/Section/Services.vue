<template>
  <div class="h-screen flex align-center -mt-14 md:mt-2">
    <div class="flex md:flex-row flex-col align-center px-8">
      <div class="relative flex md:flex-row-reverse flex-col justify-center align-center md:w-[60%] w-full ">
        <div class="relative flex justify-center mx-5">
          <div id="centerSphere">
            <NuxtImg :src="'/img/home/services/' + activeItem.img" />
          </div>
          <div class="loader-ring">
            <div class="loader-ring-light"></div>
            <div class="loader-ring-track"></div>
          </div>
          <div class="loader-ring2">
            <div class="loader-ring-light"></div>
            <div class="loader-ring-track"></div>
          </div>
        </div>
        <div class="w-[110px] flex justify-center align-center -mt-10 md:!mt-0">
          <NuxtImg
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="3000"
            :delay="50"
            v-for="(i, index) in servicesArray"
            :key="i.id"
            :src="'/img/home/services/' + i.img"
            class="md:my-5 mx-3 md:!mx-0  md:ml-6 cursor-pointer bg-black rounded-full p-[10px] shadow-md shadow-gray-700 hover:!scale-110 hover:!transition-all"
            :class="{ 'md:mr-10 mb-14 md:!mb-0': index === 0 || index === 3 }"
            @mouseover="sectionActive(i.id)"
            @click="sectionActive(i.id)"
          />
        </div>
      </div>
      <div class="md:w-[40%] w-full ">
        <div
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="2000"
          class="border-2 border-light-primary p-8 rounded-xl align-center justify-center text-center md:h-[400px] flex-col flex"
        >
          <h1 class="md:text-2xl text-base font-bold">
            {{ activeItem.title }}
          </h1>
          <p class="md:text-sub text-sm  mt-10 leading-6">
            {{ activeItem.text }}
          </p>
          <NuxtLink :to="activeItem.link"
            ><BaseButton class="mt-12" mode="primary" :text="`سفارش خدمات ${activeItem.title}`" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const servicesArray = ref([
  {
    id: 1,
    title: "طراحی سایت",
    text: `
            طراحی سایت برای هر کسب و کاری حکم یک شعبه در کل دنیا را دارد تا مخاطبین بتوانند دربازار
            رقابتی امروزی بین رقبا بیشتر با آن کسب و کار آشنا شوند.استفاده قرار گیرد.`,
    img: "sphere1.png",
    link: "/design-website",
  },
  {
    id: 2,
    title: "طراحی اپلیکیشن",
    text: `
            طراحی اپلیکیشن ، امروزه که بیشتر کاربران اینترنت ، با گوشی موبایل های هوشمند هستند واگر
            شما به دنبال یک پلی بین کاربران و کسب وکار منحصربه‌فردخود میگردید که بتوانید با آن ها
            ارتباط برقرار کنید بهترین گزینه طراحی اپلیکیشن موبایل است.`,
    img: "sphere2.png",
    link: "/design-website",
  },
  {
    id: 3,
    title: "سئو",
    text: `
            سئو، کلیدی برای بیشتر دیده شدن و بهبود رتبه وبسایت شما در نتایج جستجوی اینترنتی است،
            اجازه دهید تخصص و استراتژی ما، شما را به قله‌ی نمایانی در صفحه‌ی نتایج گوگل
            برسانداستفاده قرار گیرد.`,
    img: "sphere3.png",
    link: "/seo-form",
  },
  {
    id: 4,
    title: "اینستاگرام",
    text: `     با اینستاگرام ، دنیای خلاقیت، زیبایی و ارتباط بی‌ انتها در دستان شماست. بگذارید با
            استفاده از استراتژی‌ و تخصص های منحصر به فردمان، شما را به جامعه‌ای پراز انگیزه و افزایش
            دسترسی به مخاطبان هدف برسانیم.استفاده قرار گیرد.`,
    img: "sphere4.png",
    link: "/contact-us",
  },
]);
const activeItem = ref({});
const sectionActive = (id) => {
  const findActiveItem = servicesArray.value.find((item) => {
    return item.id === id;
  });
  activeItem.value = { ...findActiveItem };
};
onMounted(() => {
  activeItem.value = { ...servicesArray.value[0] };
});
</script>

<style></style>
