<template>
  <div class="md:mt-20 mt-5">
    <div class="py-12 md:px-20 px-10">
      <svgo-ContactUs class="md:text-[20rem] text-[10rem] mx-auto" :filled="true" />
      <h2 class="md:text-xl text-sub text-right mt-10 rtl font-bold">
        آیا سوالی دارید؟ تیم پشتیبانی رایانیک آماده پاسخگویی به شماست.
      </h2>
      <p class="mt-10 leading-7 text-right rtl md:text-sub text-sm">
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
                    color="light-primary"
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
                    color="light-primary"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.number"
                    :rules="phone"
                    label="تلفن تماس"
                    required
                    variant="underlined"
                    color="light-primary"
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
                    color="light-primary"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    clearable
                    label="پیام شما"
                    :rules="text"
                    variant="underlined"
                    color="light-primary"
                    v-model="formData.message"
                  ></v-textarea>
                </v-col>
                <BaseButton
                  text="ارسال"
                  :btnBlock="true"
                  class="mt-10"
                  type="submit"
                  mode="primary"
                ></BaseButton>
              </v-row>
            </v-container>
          </v-form>
        </div>
        <div class="md:w-1/2 w-full text-center font-bold">
          <svgo-contact
            class="md:text-[50rem] text-[25rem] md:mr-28 mx-auto"
            :filled="true"
            v-motion
            :initial="{ x: -600 }"
            :visible-once="{ x: 0 }"
            :delay="300"
            :duration="3000"
          />
          <p class="text-3xl leading-[60px] hidden md:block">۰۹۳۰۶۰۱۸۴۳۴ <br />۰۲۶۳۲۵۴۸۱۲۲</p>
        </div>
      </div>
      <BaseSuccessAlert
        text="اطلاعات شما با موفقیت ثبت شد.همکاران ما به زودی جهت مشاوره با شما تماس خواهند گرفت."
        :alertActive="openAlert"
        @update:alertActive="alertActive"
      />
    </div>
    <TheFooter />
  </div>
</template>
<script setup lang="ts">
const formRef = ref<any>(null);
const openAlert = ref<boolean>(false);
const { text, email, phone } = useFormRules(true);
const formData = ref({
  firstName: "",
  lastName: "",
  number: "",
  email: "",
  message: "",
});
const alertActive = (newVal: boolean) => {
  openAlert.value = newVal;
};
const submitForm = async () => {
  openAlert.value = false;
  const { valid } = await formRef.value.validate();
  if (valid) {
    openAlert.value = true;
    formRef.value.reset();
  }
  return;
};
</script>

<style></style>
