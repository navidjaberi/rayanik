<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-btn
        v-bind="props"
        variant="flat"
        :color="colorsConditions(isHovering)"
        :block="btnBlock"
        :type="type"
        :class="[externalProps.class, isHovering ? 'dark:!text-violet-900 !text-light-primary' : '']"
        :size="size"
        class="cursor-pointer !text-sm md:!text-base"
        @click="btnHandler()"
      >
        {{ text }}
      </v-btn>
    </template>
  </v-hover>
</template>
<script setup lang="ts">
const externalProps = defineProps<{
  text?: string;
  btnBlock?: boolean;
  type?: string;
  class?: string;
  mode: "primary" | "secondary";
  size?: string | number;
}>();
const emit = defineEmits(["clickHandler"]);
const btnHandler = () => {
  emit("clickHandler");
};
const colorsConditions = (isHover?: boolean)  => {
  if (externalProps.mode === "primary") {
    if (isHover) {
      return "#AA91F2";
    }
    return "#6E45E9";
  } else if (externalProps.mode === "secondary") {
    if (isHover) {
      return "#AEE9FE";
    }
    return "#36C7FC";
  }
};
</script>
