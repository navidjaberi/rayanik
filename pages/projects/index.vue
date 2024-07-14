<template>
  <div>
    <div
      class="bg-[url('@/assets/img/project-background.jpg')] bg-cover flex md:flex-row flex-col-reverse align-center md:h-[600px] rtl"
    >
      <div class="md:w-4/6 w-full">
        <svgo-Portfolio
          class="md:text-[30rem] text-[20rem] mx-auto md:mt-30 -mt-10"
          :filled="true"
        />
        <div>
          <h1 class="text-center md:text-2xl text-lg -mt-20 mb-10">
            <span class="blinking-cursor">|</span>
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h1>
        </div>
      </div>
      <div class="md:w-1/3 w-full flex h-full justify-center align-center mx-15 mt-14">
        <svgo-Project class="md:text-[43rem] text-[23rem]" :filled="true" />
      </div>
    </div>
    <div class="md:h-[90rem] h-auto mt-10">
      <div
        class="md:grid grid-cols-1 md:grid-cols-3 grid-rows-8 md:grid-rows-8 gap-4 !h-full md:w-[78%] px-4 md:px-0 mx-auto"
      >
        <div class="row-span-1 md:row-span-2 md:col-span-2 my-4 md:!my-0">
          <img
            src="@/assets/img/projects/project2.jpg"
            class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
          />
        </div>
        <div class="row-span-2 md:row-span-4 my-4 md:!my-0">
          <img
            src="@/assets/img/projects/project1.jpg"
            class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
          />
        </div>
        <div class="row-span-1 md:row-span-2 my-4 md:!my-0">
          <img
            src="@/assets/img/projects/project3.jpg"
            class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
          />
        </div>
        <div class="row-span-1 md:row-span-2 my-4 md:!my-0">
          <img
            src="@/assets/img/projects/project4.jpg"
            class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
          />
        </div>
        <div class="row-span-1 md:row-span-4 my-4 md:!my-0">
          <img
            src="@/assets/img/projects/project7.jpg"
            class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
          />
        </div>
        <div class="row-span-1 md:row-span-2 relative my-4 md:!my-0">
          <img
            src="@/assets/img/projects/project6.jpg"
            class="rotate-15 md:absolute md:bottom-[51px] md:right-[68px] mx-auto neon-box rounded-xl md:!rounded-none md:hover:rotate-0 md:hover:bottom-0 md:hover:right-0 duration-1000 ease-in z-0"
          />
        </div>
        <div class="row-span-1 md:row-span-2 my-4 md:!my-0">
          <img
            src="@/assets/img/projects/project5.jpg"
            class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
          />
        </div>

        <div class="row-span-1 md:row-span-2 md:col-span-2 my-4 md:!my-0">
          <img
            src="@/assets/img/projects/project8.jpg"
            class="mx-auto rounded-xl md:!rounded-none neon-box md:!shadow-none"
          />
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
const typeValue = ref("");
const typeStatus = ref(false);
const displayTextArray = ref(["طراحی سایت", "سئو سایت", "خدمات اینستاگرام", "طراحی اپلیکیشن"]);
const typingSpeed = ref(100);
const erasingSpeed = ref(100);
const newTextDelay = ref(2000);
const displayTextArrayIndex = ref(0);
const charIndex = ref(0);
const typeText = () => {
  if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value += displayTextArray.value[displayTextArrayIndex.value].charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(typeText, typingSpeed.value);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay.value);
  }
};
const eraseText = () => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = displayTextArray.value[displayTextArrayIndex.value].substring(
      0,
      charIndex.value - 1
    );
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed.value);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex.value += 1;
    if (displayTextArrayIndex.value >= displayTextArray.value.length)
      displayTextArrayIndex.value = 0;
    setTimeout(typeText, typingSpeed.value + 1000);
  }
};

onBeforeMount(() => {
  setTimeout(typeText, newTextDelay.value + 200);
});
</script>

<style lang="scss">
h1 {
  span.typed-text {
    color: transparent;
    -webkit-text-stroke: 0.1px white;
    font-weight: bolder;
    text-shadow: 0 0 11px #6e45e9, 0 0 0px #fff, 0 0 4px #fff, 0 0 0px #6e45e9, 0 0 1px #6e45e9,
      0 0 11px #6e45e9, 0 0 1px #6e45e9, 0 0 20px #6e45e9;
  }
}
.neon-box {
  box-shadow: 0 0 0px #6e45e9, 0 0 0px #fff, 0 0 1px #fff, 0 0 0px #6e45e9, 0 0 1px #6e45e9,
    0 0 2px #6e45e9, 0 0 1px #6e45e9, 0 0 12px #6e45e9;
}
@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa, 0 0 80px #0fa,
      0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
  }

  20%,
  24%,
  55% {
    text-shadow: none;
  }
}
// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 3rem;
  color: #d1d6da;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #d1d6da;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #d1d6da;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #d1d6da;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #d1d6da;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #d1d6da;
  }
}
.rotate-15 {
  transform: rotate(15deg);
}
// Cursor blinking CSS Ends...
</style>
