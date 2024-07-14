<template>
  <div class="h-screen flex align-center">
    <div class="jb__container">
      <div class="jb__planets">
        <div class="jbSection">
          <div id="centerSphere">
            <img src="@/assets/img/sphere1.png" id="jb__center" />
          </div>
          <div class="loader-ring">
            <div class="loader-ring-light"></div>
            <div class="loader-ring-track"></div>
          </div>
          <div class="loader-ring2">
            <div class="loader-ring-light"></div>
            <div class="loader-ring-track"></div>
          </div>
        </div>
        <div class="jb__sphere">
          <img src="@/assets/img/sphere1.png" id="image1" />
          <img src="@/assets/img/sphere2.png" id="image2" />
          <img src="@/assets/img/sphere3.png" id="image3" />
          <img src="@/assets/img/sphere4.png" id="image4" />
        </div>
      </div>
      <div >
        <div class="jb__sheets" id="jb__section1">
          <h1 class="text-2xl">طراحی سایت</h1>
          <p class="text-sub">
            طراحی سایت برای هر کسب و کاری حکم یک شعبه در کل دنیا را دارد تا مخاطبین بتوانند دربازار
            رقابتی امروزی بین رقبا بیشتر با آن کسب و کار آشنا شوند.استفاده قرار گیرد.
          </p>
          <BaseButton text="سفارش طراحی سایت" class="mt-7" mode="primary"/>
        </div>

        <div class="jb__sheets" id="jb__section2">
          <h1 class="text-2xl">طراحی اپلیکیشن</h1>
          <p class="text-sub">
            طراحی اپلیکیشن ، امروزه که بیشتر کاربران اینترنت ، با گوشی موبایل های هوشمند هستند واگر
            شما به دنبال یک پلی بین کاربران و کسب وکار منحصربه‌فردخود میگردید که بتوانید با آن ها
            ارتباط برقرار کنید بهترین گزینه طراحی اپلیکیشن موبایل است.
          </p>
          <BaseButton text="سفارش طراحی اپلیکیشن" class="mt-7" mode="primary"/>
        </div>

        <div class="jb__sheets" id="jb__section3">
          <h1 class="text-2xl">سئو</h1>
          <p class="text-sub">
            سئو، کلیدی برای بیشتر دیده شدن و بهبود رتبه وبسایت شما در نتایج جستجوی اینترنتی است،
            اجازه دهید تخصص و استراتژی ما، شما را به قله‌ی نمایانی در صفحه‌ی نتایج گوگل
            برسانداستفاده قرار گیرد.
          </p>
          <BaseButton text="سفارش سئو تخصصی" class="mt-7" mode="primary"/>
        </div>

        <div class="jb__sheets" id="jb__section4">
          <h1 class="text-2xl">اینستاگرام</h1>
          <p class="text-sub">
            با اینستاگرام ، دنیای خلاقیت، زیبایی و ارتباط بی‌ انتها در دستان شماست. بگذارید با
            استفاده از استراتژی‌ و تخصص های منحصر به فردمان، شما را به جامعه‌ای پراز انگیزه و افزایش
            دسترسی به مخاطبان هدف برسانیم.استفاده قرار گیرد.
          </p>
          <BaseButton text="سفارش خدمات اینستاگرام" class="mt-7" mode="primary"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  document.addEventListener(
    "DOMContentLoaded",
    (function () {
      const centerSphere = document.getElementById("centerSphere");
      const loaderRing1 = document.querySelector(".loader-ring");
      const loaderRing2 = document.querySelector(".loader-ring2");
      centerSphere.addEventListener("mouseover", function () {
        loaderRing1.style.transform = "rotate(240deg) scale(0.333, 1)";
        loaderRing2.style.transform = "rotate(120deg) scale(0.333, 1)";
        loaderRing2.style.zIndex = "2";
      });
      centerSphere.addEventListener("mouseout", function () {
        loaderRing1.style.transform = "";
        loaderRing2.style.transform = "";
        loaderRing2.style.zIndex = "";
      });
      const activate = [
        {
          image: document.getElementById("image1"),
          jbSection: document.getElementById("jb__section1"),
          active: false,
        },
        {
          image: document.getElementById("image2"),
          jbSection: document.getElementById("jb__section2"),
          active: false,
        },
        {
          image: document.getElementById("image3"),
          jbSection: document.getElementById("jb__section3"),
          active: false,
        },
        {
          image: document.getElementById("image4"),
          jbSection: document.getElementById("jb__section4"),
          active: true, // Set jb__section4 as active initially
        },
      ];

      function activateImage(index) {
        // Update #jb__center image source
        document.getElementById("jb__center").src = activate[index].image.src;

        // Show the corresponding jbSection
        activate.forEach((item) => (item.jbSection.style.display = "none"));
        activate[index].jbSection.style.display = "flex";

        // Mark the clicked item as active
        activate.forEach((item) => (item.active = false));
        activate[index].active = true;
      }

      // Activate jb__section4 on page load
      activateImage(1);

      // Add click event listener to each image
      activate.forEach((item, index) => {
        item.image.addEventListener("mouseover", function () {
          if (!item.active) {
            activateImage(index);
          }
        });
      });
    })()
  );
});
</script>

<style>
.jb__sheets h1 {
  color: #d7d7d7;

  font-weight: 600;
}
.jb__sheets a {
  fill: #6E45E9;
  color: #6E45E9 !important;
  background-color: #0000008f;
  border-style: solid;
  border-width: 3px 3px 3px 3px;
  border-color: #6E45E9;
  font-weight: bold;
  cursor: pointer;
}
.jb__sheets a:hover {
  transform: scale(0.9);
}

.jb__sheets {
  font-size: 1.2rem;
  text-align: center;
  border: 2px solid #6E45E9;
  border-radius: 30px;
  color: white;
  display: none;
  animation: fadeInFromRight 1s ease-in;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

@keyframes fadeInFromRight {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.jb__sphere {
  animation: fadeInRight 6s ease-out;
}
.jb__sphere img {
  box-shadow: inset 0 0 2px 13px rgba(3, 0, 3, 0.397), 0 0 2px 13px rgba(3, 0, 3, 0.397);
  border-radius: 50%;
}
.jb__planets {
  position: relative;
}
.jb__sphere div {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  padding: 0.4rem;
  box-shadow: inset 0 0 15px 9px #000000ba;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.jb__sphere img {
  transition: transform 1s, width 2s; /* Apply transition to both properties */
  box-shadow: inset 0 0 2px 13px rgba(3, 0, 3, 0.397);
  border-radius: 50%;
}
.jb__sphere img:hover {
  transform: scale(0.8);
  cursor: pointer;
}
.jb__sphere img:not(:hover) {
  transform: scale(1);
  cursor: default;
}
.jbSection {
  position: relative;
  animation: fadeInUp 1s ease-out;
}
#center {
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(3, 0, 0, 0.573);
  box-shadow: inset 0 0 2px 13px rgba(3, 0, 3, 0.397);
  transition: 1s transform ease-in-out;
  height: 170px;
  width: 170px;
  margin: -20px auto;
  animation: moveUpDown 3s infinite alternate ease-in-out;
}
@keyframes moveUpDown {
  from {
    transform: translateY(12px);
  }
  to {
    transform: translateY(20px); /* Adjust the vertical distance as needed */
  }
}

.loader-ring {
  transform: rotate(120deg) scale(0.333, 1);
  transition: transform 3s ease-in-out; /* Simplified the transition property */
  position: absolute;
}
.loader-ring2 {
  transform: rotate(240deg) scale(0.333, 1);
  transition: transform 3s ease-in-out; /* Simplified the transition property */
}
.loader-ring-light {
  -moz-border-radius: 500px;
  -webkit-border-radius: 500px;
  border-radius: 500px;
  -moz-box-shadow: 0 15px 0 #6E45E9 inset;
  -webkit-box-shadow: 0 15px 0 #6E45E9 inset;
  box-shadow: 0 15px 0 #6E45E9 inset;
  animation: rotate-360 2s linear infinite;
}
.loader-ring-track {
  position: absolute;
  top: 0;
  left: 0;

  -moz-border-radius: 500px;
  -webkit-border-radius: 500px;
  border-radius: 500px;
  -moz-box-shadow: 0 0 10px 4px rgb(255 255 255 / 23%) inset;
  -webkit-box-shadow: 0 0 10px 4px rgb(255 255 255 / 23%) inset;
  box-shadow: 0 0 10px 4px rgb(255 255 255 / 23%) inset;
}

@keyframes rotate-360 {
  from {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 992px) {
  .jb__sphere img {
    width: 60px;
    height: 60px;
  }
  .jb__sheets p {
    margin-top: 2rem;
    font-size: 0.8rem;
    line-height: 30px;
  }
  .jb__sheets h1 {
    font-size: 1.563rem;
  }
  .jb__sheets a {
    margin-bottom: 1rem;
  }
  .jb__sheets {
    font-size: 0.6rem;
    padding: 30px!important;
    margin:  20px;
  }

  .jb__sphere {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: -1rem;
  }
  .loader-ring,
  .loader-ring2,
  .loader-ring-light,
  .loader-ring-track {
    width: 350px;
    height: 350px;
  }
  #jb__center {
    width: 105px;
  }
  #centerSphere {
    left: 50%;
    transform: translate(-50%, 116%);
    position: absolute;
    z-index: 1;
  }
  .jbSection {
    display: flex;
    justify-content: center;
  }
  #image1 {
    margin-top: -2rem;
  }
  #image4 {
    margin-top: -2rem;
  }
 
  .jb__container {
    overflow-x: hidden;
  }
}
@media screen and (min-width: 992px) {
  .jb__planets {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
  .jb__sheets {
    font-size: 1.2rem;
    min-height: 25rem;
    padding: 2rem;
    margin: 10px 10px;
  }
  .jb__sheets p {
    margin-top: 2rem;
  }
  .jb__sheets a {
    margin-top: 3rem;
  }
  .jb__container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .jb__sphere {
    display: flex;
    flex-direction: column;
    width: 10rem;
  }
  #image1 {
    margin-right: 5rem;
    margin-bottom: 1.5rem;
  }
  #image4 {
    margin-right: 5rem;
  }
  #image2 {
    align-self: center;
    margin-bottom: 1.5rem;
  }
  #image3 {
    align-self: center;
    margin-bottom: 1.5rem;
  }
  .loader-ring,
  .loader-ring2,
  .loader-ring-light,
  .loader-ring-track {
    width: 680px;
    height: 680px;
  }
  #jb__center {
    width: 200px;
  }
  #centerSphere {
    position: absolute;
    top: 238px;
    left: 245px;
    z-index: 1;
  }
  .jb__sphere img {
    width:100px;
    height: 100px;
  }
}
</style>
