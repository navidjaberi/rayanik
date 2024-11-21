<template>
  <div
    class="rtl dark:!bg-black bg-white text-white md:px-[81px] md:pb-[81px] px-[30px] pb-[30px] md:h-[407px] h-auto"
  >
    <div
      class="md:h-[351px] h-auto mx-auto bg-light-secondary dark:bg-gradient-to-r dark:!from-[#34035A] dark:!to-[#08698D] rounded-b-3xl flex md:flex-row flex-col"
    >
      <div class="w-3/12 md:flex align-center hidden">
        <TheNavbar direction="vertical" height="53px" />
      </div>
      <div class="md:w-6/12 w-full mx-auto text-center">
        <v-img src="/svg/DigitalMarketingAgency.svg" class="md:w-[200px] w-[150px] mx-auto">
          <template #placeholder>
            <BaseLoadingSpinner />
          </template>
        </v-img>
        <v-img src="/svg/rayanik.svg" class="md:w-[200px] w-[150px] mx-auto">
          <template #placeholder>
            <BaseLoadingSpinner />
          </template>
        </v-img>
        <h1 class="md:text-xl text-sub font-bold md:mt-7 mt-7">آدرس:</h1>
        <p class="md:text-sub text-base leading-5 font-bold mt-3 px-2">
          کرج، عظیمیه، بلوار 45 متری کاج، نبش کوچه چمران، ساختمان بیمه ایران، پلاک 12، واحد 8
        </p>
        <div class="flex gap-2 justify-center mt-5">
          <v-btn variant="tonal" size="xl" class="pa-2">
            <a href="tel:02632548122">۰۲۶۳۲۵۴۸۱۲۲</a></v-btn
          >

          <v-btn variant="tonal" size="xl" class="pa-2">
            <a href="tel:09397985857">۰۹۳۹۷۹۸۵۸۵۷</a></v-btn
          >
        </div>
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
                  icon="mdi-phone"
                  variant="flat"
                  color="#0385B5"
                  class="w-12 !h-[48px] !rounded-r-none !rounded-l-md !absolute left-[-2px] top-0"
                  type="submit"
                  :loading="loading"
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
          <div class="flex gap-1">
            <v-btn v-for="i in socialMedia" :key="i.id" variant="text" size="" class="mx-[2px]">
              <NuxtLink :to="i.link" target="_blank">
                <template #default>
                  <Icon size="1.8rem" :name="i.icon"></Icon>
                </template>
              </NuxtLink>
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
      :alertActive="openSuccessAlert"
      @update:alertActive="successAlertActive"
      :timeout="3000"
    />
    <BaseErrorAlert
      :alertActive="openErrorAlert"
      @update:alertActive="errorAlertActive"
      :timeout="3000"
    />
  </div>
</template>
<script setup lang="ts">
const formRef = ref<any>(null);
const userPhoneNum = ref<string>("");
const { phone } = useFormRules(false);
const disabled = ref(false);
const openSuccessAlert = ref<boolean>(false);
const openErrorAlert = ref<boolean>(false);
const loading = ref(false);
const socialMedia = ref([
  {
    id: "telegram",
    icon: "jam:telegram",
    link: "https://t.me/parisa_jnl",
  },
  {
    id: "instagram",
    icon: "simple-icons:instagram",
    link: "https://www.instagram.com/rayaniyareshkara/",
  },
  {
    id: "linkedin",
    icon: "devicon-plain:linkedin",

    link: "https://www.linkedin.com/company/101478709/admin/feed/posts/",
  },
]);
const successAlertActive = (newVal: boolean) => {
  openSuccessAlert.value = newVal;
  disabled.value = true;
};
const errorAlertActive = (newVal: boolean) => {
  openErrorAlert.value = newVal;
  disabled.value = true;
};
const getPhoneNum = async () => {
  openSuccessAlert.value = false;
  const { valid } = await formRef.value.validate();
  if (valid) {
    loading.value = true;
    const { data, status, error } = await useFetch("http://rayaniyareshkara.com:2030/api/Form/Create", {
      method: "post",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: { phoneNumber: userPhoneNum.value },
    });
    if (status.value === "success") {
      loading.value = false;
      openSuccessAlert.value = true;
      formRef.value.reset();
    }
    if (error) {
      console.log(error.value);
      openErrorAlert.value = true;
      loading.value = false;
    }

    return;
  }
};
</script>
