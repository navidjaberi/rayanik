<template>
  <div class="md:mt-20 mt-5 text-black dark:!text-white">
    <div class="py-12 md:px-20 px-10">
      <v-img
        :src="colorMode.preference === 'light' ? '/svg/contact-us-dark.svg' : '/svg/contact-us.svg'"
        class="md:w-[200px] w-[200px] mx-auto mt-10 dark:!mt-7"
        placeholder
      >
        <template #placeholder>
          <BaseLoadingSpinner />
        </template>
      </v-img>
      <h2 class="md:text-xl text-sub md:text-right text-center mt-10 rtl font-bold leading-7">
        آیا سوالی دارید؟ تیم پشتیبانی رایانیک آماده پاسخگویی به شماست.
      </h2>
      <p class="mt-10 leading-7 md:text-right text-center rtl md:text-sub text-base">
        برای دریافت کمک یا اطلاعات بیشتر، با پرکردن بخش اطلاعات و نوشتن پیام خود در سریعترین زمان
        ممکن کارشناسان ما با شما تماس خواهند گرفت و یا می توانید خودتان با شماره های زیر تماس
        بگیرید.
      </p>
      <div class="flex align-center flex-col-reverse md:flex-row rtl mt-14">
        <div class="md:w-1/2 w-full text-center">
          <h2 class="text-sub font-black md:text-xl">فرم تماس با ما</h2>
          <v-form @submit.prevent="submitForm" ref="formRef">
            <v-container class="mt-6">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.firstName"
                    :rules="text"
                    label="نام"
                    required
                    variant="underlined"
                    color="main"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.lastName"
                    :rules="text"
                    label="نام خانوادگی"
                    required
                    variant="underlined"
                    color="main"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.phoneNumber"
                    :rules="phone"
                    label="تلفن تماس"
                    required
                    variant="underlined"
                    color="main"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.email"
                    :rules="email"
                    label="ایمیل"
                    required
                    variant="underlined"
                    color="main"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    clearable
                    label="پیام شما"
                    :rules="text"
                    variant="underlined"
                    color="main"
                    v-model="formData.message"
                  ></v-textarea>
                </v-col>
                <BaseButton
                  text="ارسال"
                  :btnBlock="true"
                  class="mt-10"
                  type="submit"
                  mode="primary"
                  :loading="loading"
                ></BaseButton>
              </v-row>
            </v-container>
          </v-form>
        </div>
        <div class="md:w-1/2 w-full text-center font-bold flex justify-center flex-col">
          <v-img
            :src="colorMode.preference === 'light' ? '/img/shapes/contactDark.png' : '/img/shapes/contact.png'"
            class="md:w-[400px] w-[200px] md:mr-28 mx-auto mb-5"
            placeHolder
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :duration="2000"
            lazy-src="/img/DarkPlaceholder.png"
          >
            <template #placeholder>
              <BaseLoadingSpinner />
            </template>
          </v-img>

          <p class="text-3xl leading-[60px] hidden md:block">۰۹۳۰۶۰۱۸۴۳۴ <br />۰۲۶۳۲۵۴۸۱۲۲</p>
        </div>
      </div>
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
    <TheFooter />
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();
const formRef = ref<any>(null);
const openSuccessAlert = ref<boolean>(false);
const { text, email, phone } = useFormRules(true);
const openErrorAlert = ref<boolean>(false);
const loading = ref(false);
const disabled = ref(false);
const formData = ref({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  message: "",
});

const successAlertActive = (newVal: boolean) => {
  openSuccessAlert.value = newVal;
  disabled.value = true;
};
const errorAlertActive = (newVal: boolean) => {
  openErrorAlert.value = newVal;
  disabled.value = true;
};
const submitForm = async () => {
  openSuccessAlert.value = false;
  const { valid } = await formRef.value.validate();
  if (valid) {
    loading.value = true;
    const { data, status, error } = await useFetch("http://87.248.153.111:2030/api/Form/Contact", {
      method: "post",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: formData.value,
    });
    if (status.value === "success") {
      loading.value = false;
      openSuccessAlert.value = true;
      formRef.value.reset();
    }
    if (error.value) {
      console.log(error.value);
      loading.value = false;
      openErrorAlert.value = true;
    }
    return;
  }
};
</script>

<style></style>
