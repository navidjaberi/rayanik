<template>
  <div
    ref="root"
    class="relative w-full p-5"
    @keydown.left.prevent="prev"
    @keydown.right.prevent="next"
    tabindex="0"
  >
    <div
      class="transition-shadow duration-300 [transition-timing-function:cubic-bezier(.05,1,.7,1.15)] shadow-[4px_4px_16px_rgba(149,144,203,0.32)] transform-gpu rounded-2xl"
    >
      <!-- Slides -->
      <div class="relative min-h-40 overflow-hidden md:h-64 cursor-pointer rounded-t-2xl">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="absolute inset-0 transition-opacity duration-700 ease-in-out"
          :class="current === i ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'"
          role="group"
          :aria-roledescription="`slide ${i + 1} of ${images.length}`"
          :aria-hidden="current !== i"
        >
          <img
            :src="img"
            class="w-full h-full object-cover aspect-square"
            :alt="alts[i] ?? `slide ${i + 1}`"
          />
        </div>
      </div>
      <div
        class="min-h-12 px-2 rounded-b-2xl flex justify-center align-center dark:!bg-[#1E1E21] !bg-light-secondary dark:!from-[#1E1E21] dark:!to-[#1E1E21] text-white"
      >
        <h3 class="text-lg font-semibold">{{ title }}</h3>
      </div>
      <div class="absolute z-30 flex space-x-3 rtl:space-x-reverse bottom-16 right-6">
        <button
          v-for="(img, i) in images"
          :key="i"
          @click="goTo(i)"
          :aria-current="current === i ? 'true' : 'false'"
          :aria-label="`Go to slide ${i + 1}`"
          class="h-2 md:max-2xl:h-3 rounded-full border border-white/40 focus:outline-none bg-white"
          :class="current === i ? 'md:max-2xl:w-8 w-6' : 'md:max-2xl:w-3 w-2'"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
const props = defineProps({
  images: { type: Array, default: () => [] },
  alts: { type: Array, default: () => [] },
  title: { type: String },
  autoplay: { type: Boolean, default: true },
  interval: { type: Number, default: 1000 },
});
const root = ref(null);
const current = ref(0);
let timer = null;

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

onMounted(() => {
  const el = root.value;
  if (!el) return;

  isDesktop = window.matchMedia("(hover: hover)").matches;

  if (isDesktop) {
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
  }

  el.addEventListener("touchstart", onTouchStart);
  el.addEventListener("touchend", onTouchEnd);

  el.addEventListener("pointerdown", onTouchStart);
  el.addEventListener("pointerup", onTouchEnd);

  if (!isDesktop) startTimer();
});

onBeforeUnmount(() => {
  const el = root.value;
  if (!el) return;

  stopTimer();

  el.removeEventListener("mouseenter", onMouseEnter);
  el.removeEventListener("mouseleave", onMouseLeave);

  el.removeEventListener("touchstart", onTouchStart);
  el.removeEventListener("touchend", onTouchEnd);

  el.removeEventListener("pointerdown", onTouchStart);
  el.removeEventListener("pointerup", onTouchEnd);
});
watch(
  () => props.images.length,
  () => {
    if (current.value >= props.images.length) current.value = 0;
    resetTimer();
  }
);
</script>

<style scoped>
@media (pointer: coarse) {
  .w-3.h-3 {
    width: 0.75rem;
    height: 0.75rem;
  }
}
</style>
