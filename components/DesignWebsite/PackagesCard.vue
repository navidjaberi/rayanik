<template>
  <div
    :style="{ 'border-color': `${colorMode}`,'color': `${colorMode}`  }"
    class="!min-w-[100px] border-2 rounded-lg shadow sm:px-8 mx-2 mt-9 mb-9 rtl bg-light-secondary dark:!bg-dark-secondary"
    :class="[{ 'vip-box': props.mode === 'vip' },`!bg-[${colorMode}]`]"
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :visible-once="{ opacity: 1, scale: 1 }"
    :hovered="{ scale: 1.03 }"
    :duration="1000"
  >
    <div
    :style="{ 'color': `${colorMode}` }"
      :class="[ { 'vip-text': props.mode === 'vip' }]"
      class="text-center font-black mt-4"
    >
      <h5 class="md:text-2xl text-xl">
        {{ props.title }}
      </h5>
      <p class="mt-2  text-base md:text-sub">{{ props.subTitle }}</p>
    </div>
    <ul role="list" class="space-y-2 my-6">
      <li
        v-for="i in props.packageItems"
        :class="[conditions(i) ? '' : 'line-through', 'flex decoration-gray-500']"
      >
        <VIcon
          size="sm"
          :icon="conditions(i) ? 'mdi-check' : 'mdi-minus'"
          :color="conditions(i) ? 'green' : 'red'"
        ></VIcon>
        <span class=" text-base leading-tight text-gray-400 ms-1">{{ i.item }}</span>
      </li>
    </ul>
    <div class="text-center flex justify-center mt-5">
      <span class="text-2xl font-bold">{{ props.price }}</span>
      <span><NuxtImg src="/svg/toman.png" class="w-[30px]" placeholder /> </span>
    </div>
    <BaseButton mode="primary" btnBlock text="انتخاب پکیج" class="my-4" @click-handler="$router.push('/contact-us')"/>
  </div>
</template>
<script setup lang="ts">
import type CompanySitePackages from "@/types/companySitePackages";
const props = defineProps<{
  packageItems: CompanySitePackages[];
  title: string;
  subTitle: string;
  price: string;
  mode: string;
}>();
const conditions = (i: CompanySitePackages) => {
  if (props.mode === "vip") {
    return true;
  } else if (props.mode === "gold" && i.gold) {
    return true;
  } else if (props.mode === "silver" && i.silver) {
    return true;
  } else if (props.mode === "bronze" && i.bronze) {
    return true;
  }
};
const colorMode = computed(() => {
  if (props.mode === "bronze") {
    return "#B2734E";
  } else if (props.mode === "silver") {
    return "#B0ABA9";
  } else if (props.mode === "gold") {
    return "#CD970C";
  } else if (props.mode === "vip") {
    return "#86DEFE";
  }
});
</script>
<style></style>
