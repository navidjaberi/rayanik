<template>
<div class="rtl dark:!bg-black bg-white text-white md:p-[81px] p-[30px] md:h-[407px] h-auto">
    <div
      class="md:h-[351px] h-auto mx-auto bg-light-secondary dark:bg-gradient-to-r dark:!from-[#34035A]   dark:!to-[#08698D]  rounded-b-3xl flex md:flex-row flex-col"
    >
      <div class="w-3/12 md:flex align-center hidden">
        <TheNavbar direction="vertical" height="53px" />
      </div>
      <div class="md:w-6/12 w-full mx-auto text-center">
        <svgo-DigitalMarketingAgency class="text-[15rem] mx-auto " :filled="true" />
        <svgo-rayanik class="text-[16rem] mx-auto -mt-20" :filled="true" />
        <h1 class="md:text-xl text-sub font-bold md:mt-7">آدرس:</h1>
        <p class="md:text-sub text-sm leading-5 font-bold mt-3 px-2">
          کرج، عظیمیه، بلوار 45 متری کاج، نبش کوچه چمران، ساختمان بیمه ایران، پلاک 12، واحد 8
        </p>
        <p class="md:text-lg text-base mt-7 mb-4">۰۹۳۰۶۰۱۸۴۳۴ - ۰۲۶۳۲۵۴۸۱۲۲</p>
      </div>
      <div class="md:w-3/12 w-full flex flex-col px-9 mt-10">
        <div class="md:mt-20">
          <v-form ref="formRef" @submit.prevent="getPhoneNum">
            <div>
              <p class="mb-5">ارتباط سریع مشاورین ما باشما:</p>
              <div class="relative">
                <v-text-field
                  placeholder="09121111111"
                  variant="solo"
                  class="!rounded-none"
                  :rules="phone"
                  v-model="userPhoneNum"
                >
                </v-text-field>
                <v-btn
                  icon="mdi-email"
                  variant="flat"
                  color="#0385B5"
                  class="w-12 !h-[48px] !rounded-r-none !rounded-l-md !absolute left-[-2px] top-0"
                  type="submit"
                >
                </v-btn>
              </div>
            </div>
          </v-form>
        </div>
        <div
          class="flex flex-col md:!align-end md:justify-end justify-center align-center h-full mb-6"
        >
          <p class="font-bold text-center mb-2">باما همراه باشید در:</p>
          <div class="flex">
            <v-btn v-for="i in socialMedia" :key="i.id" variant="text" size="" class="mx-[2px]">
              <template #default>
                <VIcon class="!text-[2.2rem]">{{ i.icon }}</VIcon>
              </template>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <p class="text-gray-500 text-center mt-5">
      تمامی حقوق مادی و معنوی این سایت متعلق به شرکت رایا نیارش کارا می باشد.
    </p>
    <BaseSuccessAlert
      text="اطلاعات شما با موفقیت ثبت شد.همکاران ما به زودی جهت مشاوره با شما تماس خواهند گرفت."
      :alertActive="openAlert"
      @update:alertActive="alertActive"
    />
  </div>
</template>
<script setup lang="ts">
const formRef = ref<any>(null);
const userPhoneNum = ref<string>("");
const { phone } = useFormRules(false);
const openAlert = ref<boolean>(false);
const socialMedia = ref([
  {
    id: "whatsapp",
    icon: "mdi-whatsapp",
    link: "",
  },
  {
    id: "instagram",
    icon: "mdi-instagram",
    link: "https://www.instagram.com/rayaniyareshkara/",
  },
  {
    id: "linkedin",
    icon: "mdi-linkedin",

    link: "https://www.linkedin.com/company/101478709/admin/feed/posts/",
  },
]);
const alertActive = (newVal: boolean) => {
  openAlert.value = newVal;
};
const getPhoneNum = async () => {
  openAlert.value = false;
  const { valid } = await formRef.value.validate();
  if (valid) {
    openAlert.value = true;
    await formRef.value.reset();
  } else {
    return;
  }
};
const socialRedirect = async (link: string) => {
  await navigateTo(link, {
    open: {
      target: "_blank",
      windowFeatures: {
        width: 500,
        height: 500,
      },
    },
  });
};
</script>
