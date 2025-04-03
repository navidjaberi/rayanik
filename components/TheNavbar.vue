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
      open-on-click
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
      <v-list class="!bg-light-primary dark:!bg-dark-secondary dark:text-white text-center rtl">
        <v-list-item v-for="i in services" :key="i" link>
          <p>{{ i.title }}</p>
          <template v-slot:prepend>
            <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
          </template>
          <v-menu
            open-on-focus
            activator="parent"
            open-on-hover
            submenu
            location="end"
            open-on-click
          >
            <v-list
              class="!bg-light-primary dark:!bg-dark-secondary dark:text-white text-center rtl"
            >
              <template v-for="item in i.subItems" :key="i">
                <NuxtLink :to="item.link" target="_blank">
                  <v-list-item link>
                    <p>{{ item.title }}</p>
                  </v-list-item>
                </NuxtLink>
              </template>
            </v-list>
          </v-menu>
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
  {
    title: "پشتیبانی و توسعه اپلیکیشن ها",
    subItems: [
      {
        title: "ارائه سیستم های Desk Help و مدیریت تیکت",
        link: "https://rayaniyareshkara.ir/خدمات/ارائه-سیستم-های-…lp-و-مدیریت-تیکت/1761/",
      },
    ],
  },
  {
    title: "خدمات پشتیبانی مشتریان",
    subItems: [
      {
        title: "طراحی و راه اندازی چت آنالین برای وب سایت",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-و-راه-اندا…الین-برای-وب-سای/1763/",
      },
    ],
  },
  {
    title: " خدمات (VR/AR واقعیت افزوده ومجازی)",
    subItems: [
      {
        title: "ساخت تجربه های واقعیت مجازی  VR (برای تبلیغات خالقانه)",
        link: "https://rayaniyareshkara.ir/خدمات/ساخت-تجربه-های-و…ازی-vr-برای-تبلی/1759/",
      },
      {
        title: "طراحی اپلیکیشن های مبتنی بر واقعیت افزوده (AR)",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-اپلیکیشن-ه…نی-بر-واقعیت-افز/1757/",
      },
    ],
  },
  {
    title: "بازاریابی و ایمیل مارکتینگ",
    subItems: [
      {
        title: "طراحی خبرنامه های ایمیلی جذاب برای جذب مشتری ها",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-خبرنامه-ها…لی-جذاب-برای-جذب/1755/",
      },
      {
        title: "تدوین استراتژی بازاریابی محتوا (Marketing Content)",
        link: "https://rayaniyareshkara.ir/خدمات/تدوین-استراتژی-ب…arketing-content/1753/",
      },
    ],
  },
  {
    title: "خدمات تخصصی حوزه (UI/UX)",
    subItems: [
      {
        title: "طراحی تجربه کاربری (UX حرفه ای برای سایت ها و اپلیکیشن ها)",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-تجربه-کارب…ه-ای-برای-سایت-ه/1749/",
      },
    ],
  },
  {
    title: " خدمات امنیتی برای وبسایت ها",
    subItems: [
      {
        title: "بکاپ گیری دوره ای از سایت و سرور",
        link: "https://rayaniyareshkara.ir/خدمات/بکاپ-گیری-دوره-ای-از-سایت-و-سرور/1746/",
      },
      {
        title: "تقویت امنیت وب سایت در برابر هکرها و بدافزارها",
        link: "https://rayaniyareshkara.ir/خدمات/تقویت-امنیت-وب-س…رابر-هکرها-و-بدا/1745/",
      },
      {
        title: "نصب گواهی SSL",
        link: "https://rayaniyareshkara.ir/خدمات/نصب-گواهی-ssl/1743/",
      },
    ],
  },
  {
    title: "تبلیغات آنلاین و کمپین ها",
    subItems: [
      {
        title: "مدیریت کمپین های تبلیغاتی در شبکه های اجتماعی (فیسبوک، اینستاگرام، لینکدین،یوتیوب)",
        link: "https://rayaniyareshkara.ir/خدمات/مدیریت-کمپین-های…تی-در-شبکه-های-ا/1741/",
      },
      {
        title: "تبلیغات کلیکی (PPC)",
        link: "https://rayaniyareshkara.ir/خدمات/تبلیغات-کلیکی-ppc/1739/",
      },
      {
        title: "مدیریت تبلیغات گوگل (Ads Google)",
        link: "https://rayaniyareshkara.ir/خدمات/مدیریت-تبلیغات-گوگل-ads-google/1737/",
      },
    ],
  },
  {
    title: "خدمات هوش مصنوعی و اتوماسیون",
    subItems: [
      {
        title: "ایجاد سیستم های اتوماسیون برای ایمیل مارکتینگ و CRM",
        link: "https://rayaniyareshkara.ir/خدمات/ایجاد-سیستم-های-…یون-برای-ایمیل-م/1735/",
      },
      {
        title: "طراحی چت بات برای سایت یا شبکه های اجتماعی",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-چت-بات-برا…ا-شبکه-های-اجتما/1733/",
      },
    ],
  },
  {
    title: "راه اندازی فروشگاه آنلاین",
    subItems: [
      {
        title:
          "راه اندازی فروشگاه آنالین در پلتفرم هایی مثل Shopifyو Magento و ترب و باسالم و ایمالز و دیجیکالا",
        link: "https://rayaniyareshkara.ir/خدمات/راه-اندازی-فروشگ…لین-در-پلتفرم-ها/1731/",
      },
      {
        title: "ادغام سیستم های پرداخت آنالین و درگاه های بانکی",
        link: "https://rayaniyareshkara.ir/خدمات/ادغام-سیستم-های-…آنالین-و-درگاه-ه/1729/",
      },
    ],
  },
  {
    title: "خدمات آموزشی",
    subItems: [
      {
        title: " آموزش در حوزه های دیگر کامپیوتر از قبیل انواع سخت افزار و نرم افزار",
        link: "https://rayaniyareshkara.ir/خدمات/و-آموزش-در-حوزه-…-کامپیوتر-از-قبی/1727/",
      },
      {
        title: "دوره های تخصصی برای یادگیری CMSوردپرس یا زبان های برنامه نویسی",
        link: "https://rayaniyareshkara.ir/خدمات/دوره-های-تخصصی-ب…یری-cmsوردپرس-یا/1725/",
      },
      {
        title: "آموزش استفاده از ابزارهای مدیریت شبکه های اجتماعی مثل(Buffer وHootsuite)",
        link: "https://rayaniyareshkara.ir/خدمات/آموزش-استفاده-از…رهای-مدیریت-شبکه/1723/",
      },
      {
        title: "برگزاری دوره های آموزشی دیجیتال مارکتینگ، طراحی وب، و سئو",
        link: "https://rayaniyareshkara.ir/خدمات/برگزاری-دوره-های…شی-دیجیتال-مارکت/1721/",
      },
    ],
  },
  {
    title: "خدمات ویدیویی گرافیکی",
    subItems: [
      {
        title: "تدوین ویدئو با نرم افزارهای تخصصی",
        link: "https://rayaniyareshkara.ir/خدمات/تدوین-ویدئو-با-نرم-افزارهای-تخصصی/1719/",
      },
      {
        title: "ساخت ویدئوهای تبلیغاتی حرفه ای",
        link: "https://rayaniyareshkara.ir/خدمات/ساخت-ویدئوهای-تبلیغاتی-حرفه-ای/1717/",
      },
      {
        title: "طراحی لوگو و بنرهای تبلیغاتی",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-لوگو-و-بنرهای-تبلیغاتی-2/1699/",
      },
    ],
  },
  {
    title: "خدمات چاپ و تبلیغات محیطی",
    subItems: [
      {
        title: "طراحی و چاپ کارت ویزیت، تراکت و بیلبورد",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-و-چاپ-کارت…-تراکت-و-بیلبورد/1715/",
      },
      {
        title: "برنامه ریزی و اجرای تبلیغات محیطی",
        link: "https://rayaniyareshkara.ir/خدمات/برنامه-ریزی-و-اجرای-تبلیغات-محیطی/1701/",
      },
    ],
  },
  {
    title: "پشتیبانی و توسعه اپلیکیشن ها",
    subItems: [
      {
        title: "طراحی و توسعه اپلیکیشن با استفاده از فریم ورک های حرفه ای",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-و-توسعه-اپ…با-استفاده-از-فر/1713/",
      },
      {
        title: "پشتیبانی انواع اپلیکیشن های داخل بازار",
        link: "https://rayaniyareshkara.ir/خدمات/پشتیبانی-انواع-ا…شن-های-داخل-بازا/1711/",
      },
    ],
  },
  {
    title: "مشاوره و کسب و کار",
    subItems: [
      {
        title: "برنامه ریزی استراتژیک و افزایش فروش",
        link: "https://rayaniyareshkara.ir/خدمات/برنامه-ریزی-استر…یک-و-افزایش-فروش/1709/",
      },
      {
        title: "مشاوره برای کسب وکارهای نوپا و قدیمی",
        link: "https://rayaniyareshkara.ir/خدمات/مشاوره-برای-کسب-…های-نوپا-و-قدیمی/1707/",
      },
    ],
  },
  {
    title: "سئو و بهینه سازی",
    subItems: [
      {
        title: "آنالیز و بهبود محتوا بر اساس کلمات کلیدی",
        link: "https://rayaniyareshkara.ir/خدمات/آنالیز-و-بهبود-م…-اساس-کلمات-کلید/1705/",
      },
      {
        title: "خدمات SEOبرای افزایش رتبه سایت در موتورهای جستجو",
        link: "https://rayaniyareshkara.ir/خدمات/خدمات-seoبرای-اف…ه-سایت-در-موتوره/1703/",
      },
    ],
  },
  {
    title: "مدیریت تبلیغات سوشال مدیا",
    subItems: [
      {
        title: "طراحی بنرها و تراکت های تبلیغاتی",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-بنرها-و-تراکت-های-تبلیغاتی/1697/",
      },
      {
        title: "ساخت تیزر، فیلم برداری و عکس برداری حرفه ای از کالا و خدمات",
        link: "https://rayaniyareshkara.ir/خدمات/ساخت-تیزر،-فیلم-…و-عکس-برداری-حرف/1695/",
      },
      {
        title: "تولید محتوا در زمینه های مختلف",
        link: "https://rayaniyareshkara.ir/خدمات/تولید-محتوا-در-زمینه-های-مختلف/1693/",
      },
      {
        title: "مدیریت و ادمینی پیج اینستاگرام و سایر شبکه های اجتماعی",
        link: "https://rayaniyareshkara.ir/خدمات/مدیریت-و-ادمینی-…ستاگرام-و-سایر-ش/1691/",
      },
    ],
  },
  {
    title: "طراحی و توسعه",
    subItems: [
      {
        title: "طراحی و پشتیبانی سایت های وردپرسی  (wordpress CMS)",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-و-پشتیبانی…سی-wordpress-cms/1689/",
      },
      {
        title: "طراحی وب اپلیکیشن(PWA)",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-وب-اپلیکیشنpwa/1687/",
      },
      {
        title: "طراحی اپلیکیشن موبایل (اندروید و iOS)",
        link: "https://rayaniyareshkara.ir/خدمات/طراحی-اپلیکیشن-م…یل-اندروید-و-ios/1685/",
      },
    ],
  },
]);
</script>

<style>
.rtl {
  direction: rtl !important;
}
</style>
