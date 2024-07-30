<template>
  <div>
    <div class="flex align-center h-screen ltr md:flex-row flex-col text-black dark:!text-white">
      <div class="md:w-1/3 w-full">
        <v-img
          :src="colorMode.preference === 'light' ? '/svg/contact.png' : '/svg/contactDark.svg'"
          class="md:w-[300px] w-[200px] my-10 md:mr-28 mx-auto"
          placeHolder
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :hovered="{ scale: 1.2 }"
          :duration="2000"
           
        />
      </div>
      <div class="md:w-2/3 w-full text-center -mt-14 md:my-0">
        <div class="p-10">
          <h1 class="md:text-3xl text-lg font-black">تماس با ما</h1>
          <p class="md:text-lg  text-lg font-bold mt-4 rtl">
            جهت راه اندازی کسب و کار خود یا مشاوره درباره پیشرفت کسب وکار خود با ما تماس بگیرید
          </p>
          <p class="mt-8 md:text-lg  text-base text-gray rtl">
            ما در شرکت رایانیک راه های ارتباطی بسیار زیادی را برای شما عزیزان قرار داده ایم ، اما
            بهترین روش برقراری ارتباط با تیم مشاوره و پشتیبانی ما تماس با شماره های زیر از شنبه تا
            پنجشنبه ، ساعت ( 9 تا 18 ) است.
          </p>
        </div>
        <!-- <div>
          <p class="text-2xl text-main">09306018434 - 02632548122</p>
        </div> -->
        <div class="mt-7">
          <BaseButton text="تماس با واحد پشتیبانی" class="mx-3" mode="primary"></BaseButton>
          <BaseButton text="تماس با واحد فروش" class="mx-3" mode="primary"></BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style></style>
