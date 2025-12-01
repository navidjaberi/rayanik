<template>
  <div
    class="relative w-full p-5"
    @keydown.left.prevent="prev"
    @keydown.right.prevent="next"
    tabindex="0"
  >
    <!-- Slides -->
    <div class="relative h-36 overflow-hidden rounded-base md:h-64 cursor-pointer rounded-t-3xl">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="absolute inset-0 transition-opacity duration-700 ease-in-out"
        :class="current === i ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'"
        role="group"
        :aria-roledescription="`slide ${i + 1} of ${images.length}`"
        :aria-hidden="current !== i"
      >
        <img :src="img" class="w-full h-full object-cover aspect-square" :alt="alts[i] ?? `slide ${i + 1}`" />
      </div>
    </div>
    <div class="min-h-12 px-2 bg-white rounded-b-3xl flex justify-center align-center">
      <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
    </div>
    <div class="absolute z-30 flex space-x-3 rtl:space-x-reverse bottom-24 right-10">
      <button
        v-for="(img, i) in images"
        :key="i"
        @click="goTo(i)"
        :aria-current="current === i ? 'true' : 'false'"
        :aria-label="`Go to slide ${i + 1}`"
        class="h-3 rounded-full border border-white/40 focus:outline-none bg-white "
        :class="current === i ? 'w-8' : 'w-3'"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
const props = defineProps({
  images: { type: Array, default: () => [] },
  alts: { type: Array, default: () => [] },
  autoplay: { type: Boolean, default: true },
  interval: { type: Number, default: 1000 },
});
const current = ref(0);
let timer = null;

// ----------------------
// SLIDER LOGIC
// ----------------------
const goTo = (i) => {
  current.value = i % props.images.length;
  resetTimer();
};

const prev = () => {
  current.value = (current.value - 1 + props.images.length) % props.images.length;
  resetTimer();
};

const next = () => {
  current.value = (current.value + 1) % props.images.length;
  resetTimer();
};

// ----------------------
// AUTOPLAY
// ----------------------
const startTimer = () => {
  if (!props.autoplay || props.images.length <= 1) return;
  stopTimer();
  timer = setInterval(next, props.interval);
};

const stopTimer = () => {
  if (timer) clearInterval(timer);
  timer = null;
};

const resetTimer = () => {
  stopTimer();
  startTimer();
};

let isDesktop = false;

const onMouseEnter = () => {
  if (isDesktop) startTimer();
};
const onMouseLeave = () => {
  if (isDesktop) stopTimer();
};

// ----------------------
// MOBILE SWIPE
// ----------------------
let startX = 0;
let endX = 0;

const onTouchStart = (e) => {
  startX = e.touches ? e.touches[0].clientX : e.clientX;
};

const onTouchEnd = (e) => {
  endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 1) {
    diff > 0 ? next() : prev();
  }
};

// ----------------------
// MOUNT
// ----------------------
onMounted(() => {
  const root = document.querySelector('[tabindex="0"]');

  // Detect desktop (mouse hover available)
  isDesktop = window.matchMedia("(hover: hover)").matches;

  // 🖱 Desktop hover autoplay
  if (root && isDesktop) {
    root.addEventListener("mouseenter", onMouseEnter);
    root.addEventListener("mouseleave", onMouseLeave);
  }

  // 📱 Mobile swipe
  if (root) {
    root.addEventListener("touchstart", onTouchStart);
    root.addEventListener("touchend", onTouchEnd);

    // pointer fallback
    root.addEventListener("pointerdown", onTouchStart);
    root.addEventListener("pointerup", onTouchEnd);
  }

  // desktop initial autoplay is off → only on hover
  // mobile autoplay is normal
  if (!isDesktop) startTimer();
});

// ----------------------
// UNMOUNT
// ----------------------
onBeforeUnmount(() => {
  stopTimer();

  const root = document.querySelector('[tabindex="0"]');
  if (!root) return;

  root.removeEventListener("mouseenter", onMouseEnter);
  root.removeEventListener("mouseleave", onMouseLeave);

  root.removeEventListener("touchstart", onTouchStart);
  root.removeEventListener("touchend", onTouchEnd);

  root.removeEventListener("pointerdown", onTouchStart);
  root.removeEventListener("pointerup", onTouchEnd);
});

// ----------------------
// WATCH IMAGES
// ----------------------
watch(
  () => props.images.length,
  () => {
    if (current.value >= props.images.length) current.value = 0;
    resetTimer();
  }
);
</script>

<style scoped>
/* optional: make indicators a bit larger on touch devices */
@media (pointer: coarse) {
  .w-3.h-3 {
    width: 0.75rem;
    height: 0.75rem;
  }
}
</style>
