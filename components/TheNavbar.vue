<template>
  <v-tabs v-model="currentItem" class="mx-auto" :direction="props.direction" selected-class="">
    <NuxtLink
      :to="item.link"
      :target="index === 4 ? '_blank' : '_self'"
      v-for="(item, index) in items"
      :key="item.id"
      class="dark:text-gray-300 text-light-primary"
      active-class=""
    >
      <v-tab
        :value="item.title"
        :text="item.title"
        :class="[props.class, 'w-17 ']"
        :height="height"
      >
      </v-tab>
    </NuxtLink>
  </v-tabs>
</template>
<script setup lang="ts">
const props = defineProps<{
  direction: "horizontal" | "vertical";
  height?: string;
  class?: string;
}>();
interface Items {
  title: string;
  id: number;
  link: string;
}
const route: any = useRoute();
const currentItem = computed(() => {
  if (route.href === "/") {
    return "خانه";
  } else if (route.href === "/design-website") {
    return "طراحی سایت";
  } else if (route.href === "/seo-form") {
    return "مشاوره سئو";
  } else if (route.href === "/contact-us") {
    return "تماس با ما";
  } else if (route.href === "/projects") {
    return "نمونه کارها";
  } else {
    return "وبلاگ رایانیک";
  }
});
const items = ref<Items[]>([
  { title: "خانه", id: 1, link: "/" },
  { title: "طراحی سایت", id: 2, link: "/design-website" },
  { title: "مشاوره سئو", id: 3, link: "/seo-form" },
  { title: "نمونه کارها", id: 8, link: "/projects" },
  { title: "وبلاگ رایانیک", id: 7, link: "https://rayaniyareshkara.ir/" },
  { title: "تماس با ما", id: 5, link: "/contact-us" },
]);
</script>

<style></style>
