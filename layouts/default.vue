<template>
  <div>
    <VApp class="rtl">
      <v-layout>
        <TheHeader />
        <div
          class="md:!hidden !fixed z-50 dark:bg-black bg-light-secondary border-b-[0.5px] border-gray-300 w-full flex justify-between"
        >
          <v-btn
            icon="mdi-menu"
            variant="text"
            color="#D1D5DA"
            size="large"
            @click.stop="drawer = !drawer"
          ></v-btn>
          <v-btn
          :icon="colorMode.preference === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            variant="text"
            size="large"
            class="cursor-pointer"
            color="#D1D5DA"
            @click="toggleTheme"
          >
          </v-btn>
        </div>
        <v-navigation-drawer
          v-model="drawer"
          location="right"
          temporary
          :elevation="20"
          class="!fixed dark:bg-[#1E1E21] "
          :width="180"
      
        >
          <div class="mt-3">
            <v-btn
              icon="mdi-window-close"
              @click.stop="drawer = !drawer"
              size="x-large"
              variant="text"
              color="white"
            ></v-btn>
          </div>
          <div>
            <TheNavbar direction="vertical" class="my-2  !justify-center !align-center ! text-base text-black dark:!text-white" />

          </div>
        </v-navigation-drawer>

        <v-main class="dark:!bg-dark-secondary bg-light-primary text-white">
          <slot />
        </v-main>
      </v-layout>
    </VApp>
  </div>
</template>
<script setup>
const drawer = ref(false);
const colorMode=useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>
