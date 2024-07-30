<template>
  <v-snackbar v-model="alertActive" vertical :color="colorMode.preference==='dark' ? '#1E1E21' : '#321848' "  :timeout="5000" class="rtl " >
    <div class="flex flex-col justify-center ">
      <div class="text-subtitle-1 pb-2 text-center">متشکریم!</div>
      <p class="text-center mt-2">
        {{ props.text }}
      </p>
      <v-btn @click="alertActive = false" variant="outlined" class="mt-5  " :color="colorMode.preference==='dark' ? '#6E45E9' : 'white' "
        >بستن</v-btn
      >
    </div>
  </v-snackbar>
</template>
<script setup lang="ts">
const props = defineProps<{
  alertActive: boolean;
  text: string;
}>();
const colorMode=useColorMode()
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
