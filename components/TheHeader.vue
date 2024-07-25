<template>
  <div>
    <div
      class="fixed w-100 !z-50 justify-between algin-center mt-5 md:flex hidden transition-all duration-500"
      :class="[navbarStickTop ? '-translate-y-5' : 'translate-y-3']"
    >
      <div class="w-1/6 flex align-center justify-center"></div>
      <div class="w-5/6">
        <v-toolbar
          class="p-2 rtl mx-auto dark:!bg-[#1E1E21]  !bg-light-secondary dark:!from-[#1E1E21] dark:!to-[#1E1E21] "
          density="compact"
          :class="[navbarStickTop ? '!rounded-b-full' : '!rounded-full']"
        >
          <v-btn
            :icon="colorMode.preference === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            variant="text"
            size="xl"
            class="cursor-pointer mx-auto !text-light-primary dark:!text-main"
            @click="toggleTheme"
          >
          </v-btn>
          <TheNavbar direction="horizontal" />
          <div class="mx-auto">
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon="mdi-dots-grid"
                  variant="text"
                  size="xl"
                  class="cursor-pointer !text-light-primary dark:!text-main"
                  v-bind="props"
                >
                </v-btn>
              </template>
              <div class="border-[0.5px] border-main">
                <v-list class="dark:bg-black text-black dark:!text-white text-center">
                  <v-list-item class="hover:bg-main hover:text-white  cursor-pointer">
                    <NuxtLink to="#" class="text-[13px]">آکادمی</NuxtLink>
                  </v-list-item>
                  <v-list-item class="hover:bg-main hover:text-white cursor-pointer">
                    <NuxtLink to="#" class="text-[13px]">پشتیبانی</NuxtLink>
                  </v-list-item>
                </v-list>
              </div>
            </v-menu>
          </div>
        </v-toolbar>
      </div>
      <div class="w-1/6 flex align-center justify-center"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();
const navbarStickTop = ref<boolean>(false);
function handleScroll() {
  if (window.scrollY > 500) {
    navbarStickTop.value = true;
  } else {
    navbarStickTop.value = false;
  }
}
const scrollY = () => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
};
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
onMounted(() => {
  scrollY();
});
</script>
