<template>
  <v-snackbar v-model="alertActive" vertical color="red" :timeout="timeout" class="rtl">
    <div class="flex flex-col justify-center">
      <div class="text-subtitle-1 pb-2 text-center">متاسفم!</div>
      <p class="text-center mt-2">مشکلی پیش آمده است.از وصل بودن اینترنت اطمینان حاصل فرمایید.</p>
      <v-btn @click="alertActive = false" variant="outlined" class="mt-5" color="white">بستن</v-btn>
    </div>
  </v-snackbar>
</template>
<script setup lang="ts">
const props = defineProps<{
  alertActive: boolean;
  timeout: number;
}>();
const colorMode = useColorMode();
const emit = defineEmits(["update:alertActive"]);
const alertActive = computed({
  get() {
    return props.alertActive;
  },
  set(newVal: boolean) {
    emit("update:alertActive", newVal);
  },
});
</script>
