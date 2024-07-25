<template>
  <div>
    <div class="text-center text-black dark:!text-white">
      <p class="md:text-3xl text-xl font-bold mt-16 mb-10 md:!mt-1">نمونه کار</p>
    </div>
    <div class="md:h-[69rem] h-auto mt-2 md:mt-20">
      <div
        class="md:grid md:grid-cols-6 md:grid-rows-9 grid-cols-1 grid-rows-9 gap-6 h-full w-4/5 mx-auto"
      >
        <MotionGroup preset="slideVisibleOnceLeft" :duration="800">
          <div
            class="row-span-4 md:row-span-3 md:col-span-3 rounded-2xl md:rounded-bl-none md:!my-0 my-5"
          >
            <img src="/img/home/projects/3.png" />
          </div>
          <div
            class="row-span-3 col-span-1 md:row-span-3 md:col-span-3 rounded-2xl md:rounded-br-none md:!my-0 my-5"
          >
            <img src="/img/home/projects/2.png" />
          </div>
          <div
            class="grid-cols-subgrid gap-4 col-span-1 row-span-3 md:col-span-2 md:grid md:!my-0 my-5"
          >
            <div class="col-start-2 rounded-2xl">
              <img src="/img/home/projects/8.png" class="md:h-[312px] h-[400px] mx-auto" />
            </div>
          </div>
          <div class="row-span-4 md:row-span-3 rounded-2xl md:!my-0 my-5">
            <img src="/img/home/projects/7.png" class="md:h-[312px] h-[400px] mx-auto" />
          </div>
          <div class="row-span-1 md:row-span-3 rounded-2xl md:!my-0 my-5">
            <img src="/img/home/projects/6.png" class="md:h-[312px] h-[400px] mx-auto" />
          </div>
          <div class="grid grid-cols-subgrid gap-4 col-span-2 row-span-3 md:!my-0 my-5">
            <div class="md:col-start-1 rounded-2xl">
              <img src="/img/home/projects/5.png" class="md:h-[312px] h-[400px] mx-auto" />
            </div>
          </div>
          <div
            class="row-span-1 md:row-span-3 md:col-span-3 rounded-2xl md:rounded-tl-none md:!my-0 my-5"
          >
            <img src="/img/home/projects/4.png" />
          </div>
          <div
            class="row-span-1 md:row-span-3 md:col-span-3 rounded-2xl md:rounded-tr-none md:!my-0 my-5"
          >
            <img src="/img/home/projects/1.png" />
          </div>
        </MotionGroup>
      </div>
    </div>
  </div>
  <!--  -->
</template>

<script setup></script>

<style scoped></style>
