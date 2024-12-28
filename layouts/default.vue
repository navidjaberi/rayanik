<template>
  <div>
    <VApp class="rtl">
      <v-layout>
        <TheHeader />
        <div
          class="md:!hidden !fixed z-50 dark:bg-black bg-light-secondary border-b-[0.5px] border-gray-300 w-full flex justify-between"
        >
          <v-btn variant="text" color="#D1D5DA" size="large" @click.stop="drawer = !drawer">
            <Icon
              name="line-md:list"
              size="1.6rem"
            />
          </v-btn>
          <v-btn
            variant="text"
            size="large"
            class="cursor-pointer"
            color="#D1D5DA"
            @click="toggleTheme"
          >
            <Icon
              :name="
                colorMode.preference === 'light'
                  ? 'line-md:sunny-loop'
                  : 'line-md:moon-rising-alt-loop'
              "
              size="1.6rem"
            />
          </v-btn>
        </div>
        <v-navigation-drawer
          v-model="drawer"
          location="right"
          temporary
          :elevation="20"
          class="!fixed dark:bg-[#1E1E21]"
          :width="180"
        >
          <div class="mt-3">
            <v-btn
              icon="mdi-window-close"
              @click.stop="drawer = !drawer"
              size="x-large"
              variant="text"
              color="white"
            >
            <Icon
              name="line-md:close-small"
              size="1.6rem"
              class="text-black dark:!text-white"
            />
        
          
          </v-btn>
          </div>
          <div>
            <TheNavbar
              direction="vertical"
              class="my-2 !justify-center !align-center  !text-black dark:!text-white"
            />
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
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>
