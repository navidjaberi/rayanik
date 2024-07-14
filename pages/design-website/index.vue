<template>
  <div
    class="bg-[url('@/assets/img/project-background.jpg')] bg-cover flex md:flex-row flex-col-reverse align-center md:h-[600px] rtl"
  >
    <div class="md:w-4/6 w-full -mt-14">
      <svgo-WebDesignPackage class="md:text-[30rem] text-[20rem] mx-auto md:mt-30" :filled="true" />
      <svgo-Slogan class="md:text-[20rem] text-[15rem] mx-auto -mt-32" :filled="true" />
    </div>
    <div class="md:w-1/3 w-full flex h-full justify-center align-center mx-15 mt-14">
      <svgo-shape2 class="md:text-[43rem] text-[23rem]" :filled="true" />
    </div>
  </div>
  <div class="rtl md:px-20 mt-10 px-5 text-center md:!text-right">
    <div>
      <h1 class="md:text-2xl text-lg font-bold">تعرفه های طراحی سایت</h1>
      <p class="font-bold md:text-sub text-sm leading-8 mt-5">
        به دنبال یک وبسایت حرفه‌ای و کاربرپسند هستید؟ در رایانیک، ما با تعرفه‌های شفاف و مناسب، به
        شما کمک می‌کنیم تا حضوری آنلاین و قوی داشته باشید. هر بسته شامل طراحی سفارشی ، سئو و
        پشتیبانی کامل است.<br />
        با انتخاب پکیج موردنظر خود و با خیالی راحت رشد کسب‌وکارتان را آغاز کنید.
      </p>
    </div>
    <div class="mt-10">
      <h1 class="md:text-2xl text-lg font-bold">چرا رایانیک؟</h1>
      <div class="mt-9">
        <DesignWebsiteWhyUsCard v-for="i in whyUs" :key="i.id" :content="i.content" :src="i.img" />
      </div>
    </div>
  </div>
  <div class="w-full mt-10 px-6">
    <img src="@/assets/img/contact-us-card.jpg" :width="600"  class="mx-auto " />
  </div>

  <!-- <v-tabs v-model="tab" bg-color="primary" class="mt-20">
      <v-tab value="one"> قیمت سایت های فروشگاهی</v-tab>
      <v-tab value="two"> قیمت سایت های شرکتی </v-tab>
    </v-tabs> -->
  <div class="md:flex rtl px-5 hidden">
    <BaseCard
      v-for="packages in allPackages"
      :key="packages.title"
      :packageItems="packages.items"
      :title="packages.title"
      :subTitle="packages.subTitle"
      :price="packages.price"
      :mode="packages.mode"
    />
  </div>
  <div class="md:hidden ltr ">
    <v-carousel cycle hide-delimiter-background hide-delimiters height="auto" class="flex justify-center ">
      <v-carousel-item v-for="packages in allPackages" :key="packages.title"    >
        <BaseCard
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
</template>

<script setup>
import { companySitePackages } from "@/content/companySitePackages";
import { whyUs } from "~/content/whyUs";
const tab = ref(null);
const allPackages = ref([
  {
    title: "برنزی",
    subTitle: "مناسب کسب و کارهای کوچک",
    mode: "bronze",
    items: companySitePackages,
    price: "۱۱،۰۰۰،۰۰۰",
  },
  {
    title: "نقره ای",
    subTitle: "مناسب کسب و کارهای کوچک",
    mode: "silver",
    items: companySitePackages,
    price: "۱۳،۰۰۰،۰۰۰",
  },
  {
    title: "طلایی",
    subTitle: "مناسب کسب و کارهای کوچک",
    mode: "gold",
    items: companySitePackages,
    price: "۱۵،۰۰۰،۰۰۰",
  },
  {
    title: "VIP",
    subTitle: "مناسب حرفه ای ها ",
    mode: "vip",
    items: companySitePackages,
    price: "۱۸،۰۰۰،۰۰۰",
  },
]);
</script>

<style>
.v-window__controls{
padding: 0px!important;
}
</style>
