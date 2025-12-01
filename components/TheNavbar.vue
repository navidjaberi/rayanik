<template>
  <v-tabs v-model="currentItem" class="mx-auto" :direction="props.direction" selected-class="">
    <v-tab
      v-for="(item, index) in items"
      :key="item.id"
      :to="index !== 4 ? item.link : null"
      :value="item.title"
      :text="item.title"
      :class="[props.class, 'w-17 text-white']"
      active-class="border border-white"
      :height="height"
      :href="index === 4 ? item.link : null"
    />
    <v-menu
      :location="direction === 'horizontal' ? 'bottom center' : 'left'"
      transition="scale-transition"
      open-on-hover
      open-on-click
    >
      <template #activator="{ props }">
        <v-btn
          class="!text-[15px] !font-bold !dark:text-gray-300 !text-light-primary w-17"
          :class="props.class"
          :height="height"
          variant="text"
          v-bind="props"
        >
          خدمات
          <v-icon :icon="direction === 'horizontal' ? 'mdi-menu-down' : 'mdi-menu-left'" end />
        </v-btn>
      </template>
      <v-list class="!bg-light-primary dark:!bg-dark-secondary dark:text-white text-center rtl">
        <v-list-item v-for="i in services" :key="i.title" link>
          <p>{{ i.title }}</p>

          <template #prepend>
            <v-icon icon="mdi-menu-right" size="x-small" />
          </template>

          <v-menu activator="parent" open-on-hover open-on-click submenu location="end">
            <v-list
              class="!bg-light-primary dark:!bg-dark-secondary dark:text-white text-center rtl"
            >
              <NuxtLink v-for="sub in i.subItems" :key="sub.title" :to="sub.link" target="_blank">
                <v-list-item link>
                  <p>{{ sub.title }}</p>
                </v-list-item>
              </NuxtLink>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-tabs>
</template>

<script setup lang="ts">
import { Link } from "#components";

const props = defineProps<{
  direction: "horizontal" | "vertical";
  height?: string;
  class?: string;
}>();

interface NavItem {
  title: string;
  id: number;
  link: string;
}

const route = useRoute();
const currentItem = ref("خانه");

watch(
  () => route.path,
  (path) => {
    if (path === "/") currentItem.value = "خانه";
    else if (path.startsWith("/design-website")) currentItem.value = "طراحی سایت";
    else if (path.startsWith("/seo-form")) currentItem.value = "مشاوره سئو";
    else if (path.startsWith("/contact-us")) currentItem.value = "تماس با ما";
    else if (path.startsWith("/projects")) currentItem.value = "نمونه کارها";
    else currentItem.value = ""; // برای لینک خارجی / نشودتب وبلاگ → فعال
  },
  { immediate: true }
);
const items = ref<NavItem[]>([
  { title: "خانه", id: 1, link: "/" },
  { title: "طراحی سایت", id: 2, link: "/design-website" },
  { title: "مشاوره سئو", id: 3, link: "/seo-form" },
  { title: "نمونه کارها", id: 4, link: "/projects" },
  { title: "وبلاگ رایانیک", id: 5, link: "https://rayaniyareshkara.ir/" },
  { title: "تماس با ما", id: 6, link: "/contact-us" },
]);
const services = ref([
  {
    title: "طراحی و توسعه وبسایت",
    subItems: [
      { title: "طراحی رابط و تجربه کاربری وبسایت", link: "" },
      { title: "برنامه‌نویسی سمت کاربر و سمت سرور وبسایت", link: "" },
      { title: "سئو و بهینه‌سازی وبسایت", link: "" },
      { title: "خدمات امنیتی برای وبسایت‌ها", link: "" },
      { title: "طراحی و پشتیبانی سایت‌های وردپرسی", link: "" },
      { title: "طراحی وب اپلیکیشن (PWA)", link: "" },
      { title: "طراحی فروشگاه‌های آنلاین", link: "" },
      { title: "درگاه بانکی", link: "" },
      { title: "دریافت ای‌نماد", link: "" },
      { title: "مجوز ساماندهی", link: "" },
    ],
  },

  {
    title: "طراحی و توسعه اپلیکیشن",
    subItems: [
      { title: "طراحی رابط و تجربه کاربری اپلیکیشن (UI & UX)", link: "" },
      { title: "برنامه‌نویسی سمت کاربر و سمت سرور اپلیکیشن", link: "" },
      { title: "طراحی و توسعه اپلیکیشن‌های اندروید و iOS", link: "" },
      { title: "طراحی اپلیکیشن با فریم‌ورک‌های حرفه‌ای", link: "" },
      { title: "پشتیبانی اپلیکیشن‌های موجود", link: "" },
    ],
  },

  {
    title: "خدمات هوش مصنوعی و واقعیت افزوده/مجازی",
    subItems: [
      { title: "طراحی اپلیکیشن‌های مبتنی بر واقعیت افزوده (AR)", link: "" },
      { title: "ساخت تجربه‌های واقعیت مجازی (VR)", link: "" },
      { title: "طراحی چت‌بات برای سایت یا شبکه‌های اجتماعی", link: "" },
      { title: "ایجاد سیستم CRM و اتوماسیون مارکتینگ", link: "" },
    ],
  },

  {
    title: "خدمات بازاریابی",
    subItems: [
      { title: "طراحی خبرنامه‌های ایمیلی جذاب", link: "" },
      { title: "تدوین استراتژی بازاریابی محتوا", link: "" },
      { title: "مدیریت کمپین‌های تبلیغاتی در شبکه‌های اجتماعی", link: "" },
      { title: "تبلیغات کلیکی", link: "" },
      { title: "مدیریت تبلیغات گوگل (Google Ads)", link: "" },
      { title: "ایجاد سیستم CRM و اتوماسیون ایمیل مارکتینگ", link: "" },
      { title: "مشاوره و برنامه‌ریزی استراتژیک افزایش فروش", link: "" },
      { title: "مشاوره کسب‌وکارهای نوپا و قدیمی", link: "" },
    ],
  },

  {
    title: "تبلیغات و تولید محتوا",
    subItems: [
      { title: "ساخت ویدیوهای تبلیغاتی حرفه‌ای", link: "" },
      { title: "طراحی لوگو، بنر و تراکت‌های تبلیغاتی", link: "" },
      { title: "طراحی و نصب بیلبورد تبلیغاتی", link: "" },
      { title: "تولید انواع محتوا در موضوعات مختلف", link: "" },
    ],
  },

  {
    title: "خدمات پشتیبانی و ابزارهای تعامل با مشتری",
    subItems: [
      { title: "ارائه سیستم Help Desk و مدیریت تیکت", link: "" },
      { title: "راه‌اندازی چت آنلاین برای وبسایت", link: "" },
    ],
  },
]);
</script>

<style>
.rtl {
  direction: rtl !important;
}
</style>
