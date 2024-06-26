<template>
  <div class="fixed w-100 z-50 ">
    <v-card color="black" class="relative">
      <div class="absolute left-1/2 transform -translate-x-1/2 top-3">
        <picture>
          <source srcset="@/assets/img/logo.webp" type="image/webp" />
          <img src="@/assets/img/logo.webp" alt="Screen" width="130" />
        </picture>
      </div>

      <v-toolbar class="py-2" color="transparent" >
        <v-btn
          icon="mdi-account-multiple"
          variant="text"
          size="xl"
          class="cursor-pointer mr-12"
          color="#BB8971"
        >
        </v-btn>
        <v-tabs v-model="currentItem" class="mx-auto"  >
          <v-tab
            v-for="(item, index) in items"
            :key="item.id"
            :text="item.title"
            :value="item.title"
            :class="[index == 3 ? 'xl:mr-60 lg:mr-60 mr-40' : 'lg:mx-2 xl:mx-2 mx-1','w-18']"

          >
          </v-tab>
        </v-tabs>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn
              icon="mdi-dots-grid"
              variant="text"
              size="xl"
              class="cursor-pointer ml-12"
              color="#BB8971"
              v-bind="props"
            >
            </v-btn>
          </template>
          <div class=" border-[0.5px] border-white ">

          <v-list class="bg-black text-center">
            <v-list-item>
              <NuxtLink to="#" class="text-xs">آکادمی</NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink to="#" class="text-xs">پشتیبانی</NuxtLink>
            </v-list-item>
          </v-list>
        </div>
        </v-menu>
      </v-toolbar>
    </v-card>
  </div>
</template>
<script setup lang="ts">
interface Items {
  title: string;
  id: number;
}
const currentItem = ref<string>("خانه");
const items = ref<Items[]>([
  { title: "خانه", id: 1 },
  { title: "طراحی سایت", id: 2 },
  { title: "مشاوره سئو", id: 4 },
  { title: "تماس با ما", id: 5 },
  { title: "وبلاگ رایانیک", id: 7 },
  { title: "نمونه کارها", id: 8 },
]);
</script>
