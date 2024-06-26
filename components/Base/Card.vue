<template>
  <div
    class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{{ props.name }}</h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
      <span class="text-5xl font-extrabold tracking-tight">{{ props.price }}</span>
      <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/تومان</span>
    </div>
    <ul role="list" class="space-y-5 my-7">
      <li
        v-for="i in props.packageItems"
        :class="[conditions(i) ? '' : 'line-through', 'flex decoration-gray-500']"
      >
        <VIcon :icon="conditions(i) ? 'mdi-checkbox-marked-circle' : 'mdi-minus-circle'"></VIcon>
        <span class="text-base font-normal leading-tight text-gray-500 ms-3">{{ i.item }}</span>
      </li>
    </ul>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    >
      Choose plan
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  packageItems: null,
  name: String,
  price: String,
  mode: String,
});
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
</script>

<style></style>
