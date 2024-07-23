<template>
  <div>
    <VApp class="rtl">
      <v-layout>
        <TheHeader />
        <div
          class="md:!hidden !fixed z-50 bg-black border-b-[0.5px] border-gray-300 w-full flex justify-between"
        >
          <v-btn
            icon="mdi-menu"
            variant="text"
            color="#D1D5DA"
            size="x-large"
            @click.stop="drawer = !drawer"
          ></v-btn>
          <v-btn
            icon="mdi-weather-sunny"
            variant="text"
            size="x-large"
            class="cursor-pointer"
            color="#D1D5DA"
          >
          </v-btn>
        </div>
        <v-navigation-drawer
          v-model="drawer"
          location="right"
          temporary
          :elevation="20"
          class="!fixed"
          :width="180"
          color="#1E1E21"
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
            <TheNavbar direction="vertical" class="my-2  !justify-center !align-center" />
            <svgo-DigitalMarketingAgency class="text-[13rem] mx-auto" :filled="true" />
        <svgo-rayanik class="text-[14rem] mx-auto -mt-20" :filled="true" />
          </div>
        </v-navigation-drawer>

        <v-main class="bg-[#110A14] text-white">
          <slot />
        </v-main>
      </v-layout>
    </VApp>
  </div>
</template>
<script setup>
const drawer = ref(false);
</script>
