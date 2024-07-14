<template>
  <div
    :style="{ 'border-color': `${colorMode}` }"
    class="!min-w-[100px] border-2 rounded-lg shadow sm:px-8 mx-2 mt-9 rtl"
    :class="{ 'vip-box': props.mode === 'vip' }"
  >
    <div
      :class="[`text-[${colorMode}]`, { 'vip-text': props.mode === 'vip' }]"
      class="text-center font-black mt-4"
    >
      <h5 class="md:text-2xl text-xl">
        {{ props.title }}
      </h5>
      <p class="mt-2 text-sm md:text-sub">{{ props.subTitle }}</p>
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
        <span class="text-sm leading-tight text-gray-400 ms-1">{{ i.item }}</span>
      </li>
    </ul>
    <div class="text-center flex justify-center mt-5">
      <span class="text-2xl font-bold">{{ props.price }}</span>
      <span><SvgoToman class="text-[4rem]" /> </span>
    </div>
    <BaseButton mode="primary" btnBlock text="انتخاب پکیج" class="my-4" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  packageItems: null;
  title: string;
  subTitle: string;
  price: string;
  mode: string;
}>();
const conditions = (i) => {
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

<style>
.vip-text {
  color: transparent;
  -webkit-text-stroke: 0.1px white;
  font-weight: bolder;
  text-shadow: 0 0 0px #86defe, 0 0 0px #fff, 0 0 2px #fff, 0 0 0px #86defe, 0 0 0px #86defe,
    0 0 0px #86defe, 0 0 2px #86defe, 0 0 12px #86defe;
}
.vip-box {
  box-shadow: 0 0 4px #86defe, 0 0 0px #fff, 0 0 4px #fff, 0 0 0px #86defe, 0 0 0px #86defe,
    0 0 0px #86defe, 0 0 2px #86defe, 0 0 12px #86defe;
}
</style>
