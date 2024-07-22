<template>
  <v-snackbar v-model="alertActive" vertical color="#1E1E21" :timeout="5000" class="rtl" >
    <div class="flex flex-col justify-center">
      <div class="text-subtitle-1 pb-2 text-center">متشکریم!</div>
      <p class="text-center mt-2">
        {{ props.text }}
      </p>
      <v-btn @click="alertActive = false" variant="outlined" class="mt-5" color="#6E45E9"
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
