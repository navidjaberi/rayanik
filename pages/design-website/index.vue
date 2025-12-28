<template>
  <div class="text-black dark:!text-white">
    <div
      class="dark:!bg-[url('/img/main-darkBackground.webp')] bg-[url('/img/main-background.webp')] bg-[#272038] bg-cover flex md:flex-row flex-col-reverse align-center md:h-[600px] rtl"
    >
      <div class="md:w-4/6 w-full flex align-center flex-col -mt-20 md:!mt-0">
        <v-img
          :src="
            colorMode.preference === 'light'
              ? '/svg/WebDesignPackagesDark.svg'
              : '/svg/WebDesignPackage.svg'
          "
          class="md:w-[400px] w-[300px] mx-auto md:mt-30 mt-10"
        >
          <template #placeholder>
            <BaseLoadingSpinner />
          </template>
        </v-img>

        <v-img
          class="md:w-[300px] w-[200px] mx-auto dark:!pb-5 pb-8 dark:!mt-1 mt-6"
          :src="colorMode.preference === 'light' ? '/svg/SloganDark.svg' : '/svg/Slogan.svg'"
        >
          <template #placeholder>
            <BaseLoadingSpinner />
          </template>
        </v-img>
      </div>
      <div class="md:w-1/3 w-full flex h-full justify-center align-center mx-16 md:p-10 p-24 mt-14">
        <v-img
          :src="
            colorMode.preference === 'light'
              ? '/img/shapes/shape2.webp'
              : '/img/shapes/shapeDark2.webp'
          "
          placeholder
          class="md:!w-[300px] !w-[150px]"
          v-motion
          :initial="{ x: 1100, y: -150 }"
          :enter="{ x: 0, y: 0 }"
          :duration="1500"
          lazy-src="/img/DarkPlaceholder.png"
        >
        </v-img>
      </div>
    </div>
    <div class="rtl md:!px-20 mt-10 px-5 text-center md:!text-right">
      <div>
        <h1 class="md:text-3xl text-xl font-bold">تعرفه های طراحی سایت</h1>
        <p class="font-bold md:text-lg text-md leading-8 mt-5">
          طراحی سایت برای هر کسب و کاری حکم یک شعبه درکل دنیا را دارد و زمانی که مخاطبین بتوانند در
          بازار رقابتی امروزی هرچه بیشتر با یک کسب و کار آشنا شوند، آن مجموعه را بیشتر مورد استفاده
          قرار می دهند.
        </p>
      </div>
      <div class="mt-10">
        <h1 class="md:text-3xl text-xl font-bold">چرا رایانیک؟</h1>
        <div class="mt-9">
          <DesignWebsiteWhyUsCard
            v-for="(i, index) in whyUs"
            :key="i.id"
            :content="i.content"
            :src="i.img"
          />
        </div>
      </div>
    </div>
    <div class="w-full mt-10 px-6">
      <div
        class="md:!w-2/5 w-full  bg-purple-200 border-4 border-dark-primary border-solid rounded-md p-7 mx-auto"
      >
        <p class="text-dark-primary text-lg font-bold text-center">
          برای دریافت اطلاعات کامل، انتخابی بهتر و راحت تر از مشاوره رایگان رایانیک بهره مند شوید.
        </p>
        <div class="flex mt-4">
          <div class="basis-1/2 flex flex-col justify-center align-center gap-5">
            <v-btn variant="tonal" class="pa-2 !text-xl !w-44 !text-dark-primary">
              <a href="tel:02634990595">02634990595</a></v-btn
            >

            <v-btn variant="tonal" size="xl" class="pa-2 !text-xl !w-44 !text-dark-primary">
              <a href="tel:09306018434">09306018434</a></v-btn
            >
          </div>

          <div class="basis-1/2">
            <v-img src="/img/support.png" min-width="120" />
          </div>
        </div>
      </div>
    </div>
    <!-- <v-tabs v-model="tab" bg-color="primary" class="mt-20">
      <v-tab value="one"> قیمت سایت های فروشگاهی</v-tab>
      <v-tab value="two"> قیمت سایت های شرکتی </v-tab>
    </v-tabs> -->
    <div class="md:flex rtl px-5 hidden justify-center">
      <DesignWebsitePackagesCard
        v-for="packages in allPackages"
        :key="packages.title"
        :packageItems="packages.items"
        :title="packages.title"
        :subTitle="packages.subTitle"
        :price="packages.price"
        :mode="packages.mode"
      />
    </div>
    <div class="md:hidden ltr">
      <v-carousel
        cycle
        hide-delimiter-background
        hide-delimiters
        height="auto"
        class="flex justify-center"
      >
        <v-carousel-item v-for="packages in allPackages" :key="packages.title">
          <DesignWebsitePackagesCard
            class="px-10"
            :packageItems="packages.items"
            :title="packages.title"
            :subTitle="packages.subTitle"
            :price="packages.price"
            :mode="packages.mode"
          />
        </v-carousel-item>
      </v-carousel>
    </div>
    <div>
      <TheFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
const tab = ref<null>(null);
const colorMode = useColorMode();
const allPackages = ref([
  {
    title: "برنزی",
    subTitle: "مناسب کسب و کارهای کوچک",
    mode: "bronze",
    items: companySitePackages,
    price: "۱۵،۰۰۰،۰۰۰",
  },
  {
    title: "نقره ای",
    subTitle: "مناسب کسب و کارهای کوچک",
    mode: "silver",
    items: companySitePackages,
    price: "۱۸،۰۰۰،۰۰۰",
  },
  {
    title: "طلایی",
    subTitle: "مناسب کسب و کارهای کوچک",
    mode: "gold",
    items: companySitePackages,
    price: "۲۰،۰۰۰،۰۰۰",
  },
  {
    title: "VIP",
    subTitle: "مناسب حرفه ای ها ",
    mode: "vip",
    items: companySitePackages,
    price: "۲۵،۰۰۰،۰۰۰",
  },
]);
</script>

<style></style>
