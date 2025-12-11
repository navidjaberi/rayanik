<template>
  <div
    ref="root"
    class="group relative w-full p-5"
    style="touch-action: pan-y;"
    @keydown.left.prevent="prev"
    @keydown.right.prevent="next"
    tabindex="0"
    @pointerdown.prevent="onPointerDown"
    @pointermove.prevent="onPointerMove"
    @pointerup.prevent="onPointerUp"
    @pointercancel.prevent="onPointerCancel"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend="onTouchEnd"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="transition-shadow duration-300 [transition-timing-function:cubic-bezier(.05,1,.7,1.15)] shadow-[4px_4px_16px_rgba(149,144,203,0.32)] transform-gpu rounded-2xl">
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
            v-if="images.length"
            :src="img"
            class="w-full h-full object-cover aspect-square"
            :alt="alts[i] ?? `slide ${i + 1}`"
            draggable="false"
          />
        </div>
      </div>
      <div class="min-h-12 px-2 rounded-b-2xl flex justify-center items-center dark:!bg-[#1E1E21] !bg-light-secondary text-white">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
      </div>
      <div class="absolute z-30 flex space-x-3 rtl:space-x-reverse bottom-16 right-6">
        <button
          v-for="(img, i) in images"
          :key="i"
          @click="goTo(i)"
          :aria-current="current === i ? 'true' : 'false'"
          :aria-label="`Go to slide ${i + 1}`"
          class="h-2 md:h-3 rounded-full border border-white/40 focus:outline-none bg-white"
          :class="current === i ? 'w-6 md:w-8' : 'w-2 md:w-3'"
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
  title: { type: String, default: "" },
  autoplay: { type: Boolean, default: true },
  interval: { type: Number, default: 1000 },
});

const root = ref(null);
const current = ref(0);
let timer = null;

const canHover = ref(false);     // برای autoplay روی دسکتاپ
const isCoarse = ref(false);   
const imagesCount = () => props.images?.length || 0;

const startTimer = () => {
  if (!canHover.value) return;        // فقط دستگاه‌های دارای hover
  if (!props.autoplay) return;
  if (timer) return;
  const n = imagesCount();
  if (n <= 1) return;
  timer = setInterval(() => next(), props.interval);
};
const stopTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

const goTo = (i) => {
  const n = imagesCount();
  if (n === 0) return;
  const idx = ((i % n) + n) % n;
  current.value = idx;
};
const prev = () => {
  if (imagesCount() <= 1) return;
  goTo(current.value - 1);
};
const next = () => {
  if (imagesCount() <= 1) return;
  goTo(current.value + 1);
};

let dragging = false;
let startX = 0;
let currentX = 0;
const SWIPE_THRESHOLD = 24;

const onPointerDown = (e) => {
  if (isCoarse.value) return;
  dragging = true;
  startX = e.clientX ?? 0;
  currentX = startX;
  try { e.target.setPointerCapture?.(e.pointerId); } catch {}
  if (root.value) root.value.style.cursor = "grabbing";
  stopTimer();
};
const onPointerMove = (e) => {
  if (!dragging) return;
  currentX = e.clientX ?? currentX;
};
const onPointerUp = (e) => {
  if (!dragging) return;
  finishDrag();
  try { e.target.releasePointerCapture?.(e.pointerId); } catch {}
};
const onPointerCancel = () => finishDrag();
const onTouchStart = (e) => {
  if (!isCoarse.value) return;
  const t = e.touches && e.touches[0];
  startX = t ? t.clientX : 0;
  currentX = startX;
  dragging = true;
  stopTimer();
};
const onTouchMove = (e) => {
  if (!dragging) return;
  const t = e.touches && e.touches[0];
  if (t) currentX = t.clientX;
};
const onTouchEnd = (e) => {
  if (!dragging) return;
  const t = e.changedTouches && e.changedTouches[0];
  if (t) currentX = t.clientX;
  finishDrag();
};

const finishDrag = () => {
  if (!dragging) return;
  const diff = startX - currentX;
  if (Math.abs(diff) > SWIPE_THRESHOLD) {
    diff > 0 ? next() : prev();
  }
  dragging = false;
  startX = currentX = 0;
  if (root.value) root.value.style.cursor = "";
  if (canHover.value) startTimer();
};

const onMouseEnter = () => {
  if (!canHover.value) return;
  startTimer();
};
const onMouseLeave = () => {
  if (!canHover.value) return;
  stopTimer();
};
onMounted(() => {
  canHover.value = window.matchMedia("(hover: hover)").matches;
  isCoarse.value = window.matchMedia("(pointer: coarse)").matches;
  if (root.value) root.value.setAttribute("tabindex", "0");
});

onBeforeUnmount(() => {
  stopTimer();
  if (root.value) root.value.style.cursor = "";
});

watch(
  () => props.images.length,
  (len) => {
    if (!len) current.value = 0;
    if (current.value >= len) current.value = 0;
  }
);
</script>

<style scoped>
img {
  -webkit-user-drag: none;
  user-select: none;
}
:root {
  -webkit-tap-highlight-color: transparent;
}
</style>
