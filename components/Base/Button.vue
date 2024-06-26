<template>
<v-btn variant="outlined" color="#BB8971">
{{ text }}
</v-btn>
</template>
<script setup lang="ts">
const props=defineProps({
    text:String
})
</script>