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
    <v-menu
      :location="direction === 'horizontal' ? 'bottom center' : 'left'"
      transition="scale-transition"
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          class="!text-[15px] !font-bold !w-17 !dark:text-gray-300 !text-light-primary"

          :class="[props.class, 'w-17 ']"
          :height="height"
          variant="text"
          v-bind="props"
        >
          خدمات

          <v-icon
            :icon="direction === 'horizontal' ? 'mdi-menu-down' : 'mdi-menu-left'"
            end
          ></v-icon>
        </v-btn>
      </template>

      <v-list class="!bg-light-primary dark:!bg-dark-secondary dark:text-white  text-center">
        <v-list-item v-for="i in services" :key="i">
          <NuxtLink :to="i.link"> <v-tab :value="i.title" :text="i.title" width="100%"></v-tab> </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>
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
  link?: string;
  subItem?: any;
}
const route: any = useRoute();
const currentItem = computed(() => {
  if (route.href === "/") {
    return "خانه";
  } else if (route.href === "/design-website" || route.href === "/design-website/") {
    return "طراحی سایت";
  } else if (route.href === "/seo-form" || route.href === "/seo-form/") {
    return "مشاوره سئو";
  } else if (route.href === "/contact-us" || route.href === "/contact-us/") {
    return "تماس با ما";
  } else if (route.href === "/projects" || route.href === "/projects/") {
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
const services = ref([
  { title: "طراحی و توسعه", link: "" },
  { title: "خدمات چاپ و تبلیغات محیطی", link: "" },
  { title: "مدیریت و تبلیغات سوشال مدیا", link: "" },
  { title: "سئو و بهینه سازی", link: "" },
  { title: "مشاوره کسب وکار", link: "" },
  { title: "پشتیبانی و توسعه اپلیکیشن", link: "" },
  { title: "خدمات توسعه و برنامه نویسی", link: "" },
  { title: "خدمات ویدئویی و گرافیکی", link: "" },
  { title: "خدمات آموزشی", link: "" },
  { title: "تحلیل و استراتژی داده ها", link: "" },
]);
</script>

<style></style>
