<template>
  <div>
    <v-form @submit.prevent="nextStep" class="ltr" ref="formRef">
      <FormWizard
        hide-buttons
        ref="formWizard"
        color="#6E45E9"
        class="mt-10"
        disableBackOnClickStep
        step-size="xs"
      >
        <TabContent title="اطلاعات فردی" icon="fa fa-user">
          <v-container v-if="currentStep === 0" class="text-black dark:!text-white">
            <v-row>
              <v-col cols="12" md="6">
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
              <v-col cols="12" md="6">
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

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.number"
                  :rules="phone"
                  label="تلفن تماس"
                  required
                  variant="underlined"
                  color="main"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.website"
                  :rules="website"
                  label="آدرس وبسایت شما"
                  required
                  variant="underlined"
                  color="main"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.companyName"
                  :rules="text"
                  label="نام مجموعه"
                  required
                  variant="underlined"
                  color="main"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.position"
                  :rules="text"
                  label="سمت شما در مجموعه"
                  required
                  variant="underlined"
                  color="main"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </TabContent>
        <TabContent title="اطلاعات وبسایت" icon="fa fa-gear">
          <v-container v-if="currentStep === 1">
            <v-row>
              <v-col cols="12" md="6">
                <v-radio-group
                  label="چه مدت از راه اندازی سایت شما میگذرد؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.launchTime"
                  :rules="radio"
                >
                  <v-radio
                    color="main"
                    label="کمتر از 6 ماه"
                    value="lessSixMonth"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label="بین 6 ماه تا 1 سال"
                    value="sixMonthToOneYear"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label="بین 1 سال تا 3 سال"
                    value="oneToThreeYear"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label=" بیشتر از 3 سال"
                    value="upThreeYear"
                  ></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" md="6">
                <v-radio-group
                  label="سایت شما توسط چه کسی طراحی شده است؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.designerName"
                  :rules="radio"
                >
                  <v-radio color="main" label="فریلنسر" value="freelance"></v-radio>
                  <v-radio
                    color="main"
                    label="شرکت طراحی وبسایت"
                    value="company"
                  ></v-radio>
                  <v-radio color="main" label=" تیم داخلی مجموعه" value="three"></v-radio>
                  <v-radio color="main" label="سایر" value="else"></v-radio>
                  <v-text-field
                    v-model="formData.designerNameElse"
                    v-if="formData.designerName === 'else'"
                    :rules="text"
                    required
                    variant="outlined"
                    color="main"
                  >
                  </v-text-field>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  label="امکان انجام تغییرات در سایت توسط شما یا طراح وجود دارد؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.websiteChanges"
                  :rules="radio"
                >
                  <v-radio color="main" label="بله" value="yes"></v-radio>
                  <v-radio color="main" label="خیر" value="no"></v-radio>
                  <v-radio color="main" label="سایر" value="else"></v-radio>
                  <v-text-field
                    v-model="formData.websiteChangesElse"
                    v-if="formData.websiteChanges === 'else'"
                    :rules="text"
                    required
                    variant="outlined"
                    color="main"
                  >
                  </v-text-field>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  label="سایت شما با کدام سیستم مدیریت محتوایی طراحی شده است؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.websiteType"
                  :rules="radio"
                >
                  <v-radio color="main" label="وردپرسی" value="wordpress"></v-radio>
                  <v-radio color="main" label=" CMS اختصاصی" value="customCms"></v-radio>
                  <v-radio
                    color="main"
                    label="از پایه برنامه نویسی شده است"
                    value="code"
                  ></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="امکان دسترسی به پنل هاست خود و مدیریت آن دارید؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.hostAccess"
                  :rules="radio"
                >
                  <v-radio color="main" label="بله" value="yes"></v-radio>
                  <v-radio color="main" label="خیر" value="no"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </TabContent>
        <TabContent title="تولید محتوا و سئو" icon="fa fa-display">
          <v-container v-if="currentStep === 2">
            <v-row>
              <v-col cols="12" md="6">
                <v-radio-group
                  label="وظیفه تولید محتوا در بخش مقالات سایت به عهده کیست ؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.contentProduction"
                  :rules="radio"
                >
                  <v-radio
                    color="main"
                    label="تیم تولید محتوا داریم"
                    value="ownTeam"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label="با شرکت یا شخص تولید محتوا همکاری داریم"
                    value="otherTeam"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label=" تولید محتوا نداشته ایم"
                    value="noContent"
                  ></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  label="به طور متوسط چه تعداد محتوا در ماه منتشر میکنید؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.contentAmount"
                  :rules="radio"
                >
                  <v-radio color="main" label="کمتر از ۵ عدد" value="lessFive"></v-radio>
                  <v-radio
                    color="main"
                    label="بین ۵ تا ۱۵ عدد"
                    value="fiveToFifteen"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label="بین ۱۵ تا ۳۰ عدد"
                    value="fifteenToThirty"
                  ></v-radio>
                  <v-radio color="main" label="بالای ۳۰ عدد" value="upThirty"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group
                  label="برای سئو سایت خود با شخص یا شرکتی همکاری داشته اید؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.seoActivity"
                  :rules="radio"
                >
                  <v-radio color="main" label="بله" value="yes"></v-radio>
                  <v-radio color="main" label="خیر" value="no"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </TabContent>
        <TabContent title="تجربه استفاده از ابزار گوگل" icon="fa-brands fa-google">
          <v-container v-if="currentStep === 3">
            <v-row>
              <v-col cols="12" md="6">
                <v-radio-group
                  label="به ابزار google search console سایت دسترسی دارید؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.googleSearchConsole"
                  :rules="radio"
                >
                  <v-radio color="main" label="بله" value="yes"></v-radio>
                  <v-radio color="main" label="خیر" value="no"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  label="به ابزار google analytics سایت دسترسی دارید؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.googleAnalytics"
                  :rules="radio"
                >
                  <v-radio color="main" label="بله" value="yes"></v-radio>
                  <v-radio color="main" label="خیر" value="no"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  label="آیا از گوگل ادوردز استفاده کرده اید ؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.googleAd"
                  :rules="radio"
                >
                  <v-radio color="main" label="بله" value="yes"></v-radio>
                  <v-radio color="main" label="خیر" value="no"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  label="تجربه جریمه سایت توسط گوگل یا افت شدید بازدید و جایگاه را داشته اید ؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.googleSuspense"
                  :rules="radio"
                >
                  <v-radio color="main" label="بله" value="yes"></v-radio>
                  <v-radio color="main" label="خیر" value="no"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </TabContent>
        <TabContent title="چه کمکی میتوانیم بکنیم؟" icon="fa-regular fa-handshake">
          <v-container v-if="currentStep === 4">
            <v-row>
              <v-col cols="12">
                <v-radio-group
                  label="فکر میکنید رایانیک در چه زمینه هایی می تواند به کسب و کار شما کمک کند ؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.companyHelp"
                  :rules="radio"
                >
                  <v-radio color="main" label=" از پایه" value="fromBase"></v-radio>
                  <v-radio color="main" label="فقط مشاوره" value="advice"></v-radio>
                  <v-radio
                    color="main"
                    label="آموزش تیم تولید محتوا"
                    value="teach"
                  ></v-radio>
                  <v-radio color="main" label="سایر" value="else"></v-radio>
                  <v-text-field
                    v-model="formData.companyHelpElse"
                    v-if="formData.companyHelp === 'else'"
                    :rules="text"
                    required
                    variant="outlined"
                    color="main"
                  >
                  </v-text-field>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="بودجه ای که به صورت ماهیانه به سئو اختصاص داده اید چقدر است؟"
                  class="border-[0.5px] border-gray-400 rounded-xl p-2"
                  v-model="formData.seoBudget"
                  :rules="radio"
                >
                  <v-radio
                    color="main"
                    label="کمتر از 5 میلیون تومان"
                    value="lessFive"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label=" 5 الی 10 میلیون تومان"
                    value="fiveToTen"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label=" 10 الی 15 میلیون تومان"
                    value="tenToFifteen"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label=" 15 الی 20 میلیون تومان"
                    value="fifteenToTwenty"
                  ></v-radio>
                  <v-radio
                    color="main"
                    label=" بیش از 20 میلیون تومان"
                    value="upTwenty"
                  ></v-radio>
                  <v-radio color="main" label="سایر" value="else"></v-radio>
                  <v-text-field
                    v-model="formData.seoBudgetElse"
                    v-if="formData.seoBudget === 'else'"
                    :rules="text"
                    required
                    variant="outlined"
                    color="main"
                  />
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  clearable
                  label="توضیحات تکمیلی که باید بدانیم"
                  variant="underlined"
                  color="main"
                  v-model="formData.description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </TabContent>
      </FormWizard>
      <v-row>
        <v-col
          cols="10"
          class="flex justify-between mx-auto"
          :class="{ 'justify-end': currentStep === 0 }"
        >
          <BaseButton
            v-if="currentStep !== 0"
            type="button"
            @clickHandler="prevStep()"
            text="مرحله قبل"
            mode="primary"
          >
          </BaseButton>

          <BaseButton
            v-if="currentStep !== stepLength"
            type="submit"
            text="مرحله بعد"
            mode="primary"
          ></BaseButton>

          <BaseButton
            v-if="currentStep === stepLength"
            type="submit"
            text="پایان"
            mode="primary"
          ></BaseButton>
        </v-col>
      </v-row>
    </v-form>
    <BaseSuccessAlert
      text="اطلاعات شما با موفقیت ثبت شد.همکاران ما به زودی جهت مشاوره با شما تماس خواهند گرفت."
      :alertActive="openAlert"
      @update:alertActive="alertActive"
    />
  </div>
</template>
<script setup lang="ts">
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
const colorMode = useColorMode();
const router = useRouter();
const currentStep = ref<number>(0);
// step length to control the number of steps
const stepLength = ref<number>(4);
// form wizard reference to control the steps
const formWizard = ref<InstanceType<typeof FormWizard>>();
const formRef = ref<any>(null);
const openAlert = ref<boolean>(false);
const formData = ref({
  firstName: "",
  lastName: "",
  number: "",
  website: "", //نام وبسایت
  companyName: "",
  position: "", //سمت شما در مجموعه
  launchTime: "", //چه مدت از راه اندازی سایت شما میگذرد؟
  designerName: "", //سایت شما توسط چه کسی طراحی شده است؟
  designerNameElse: "",
  websiteChanges: "", //امکان انجام تغییرات در سایت توسط شما یا طراح وجود دارد؟
  websiteChangesElse: "",
  websiteType: "", //سایت شما با کدام سیستم مدیریت محتوایی طراحی شده است؟
  hostAccess: "", //امکان دسترسی به پنل هاست خود و مدیریت آن دارید؟
  contentProduction: "", //وظیفه تولید محتوا در بخش مقالات سایت به عهده کیست ؟
  contentAmount: "", //به طور متوسط چه تعداد محتوا در ماه منتشر میکنید؟
  seoActivity: "", //برای سئو سایت خود با شخص یا شرکتی همکاری داشته اید؟
  googleSearchConsole: "", //به ابزار google search console سایت دسترسی دارید؟
  googleAnalytics: "", //به ابزار google analyticsسایت دسترسی دارید؟
  googleAd: "", //آیا از گوگل ادوردز استفاده کرده اید ؟
  googleSuspense: "", //تجربه جریمه سایت توسط گوگل یا افت شدید بازدید و جایگاه را داشته اید ؟
  companyHelp: "", //فکر میکنید رایانیک در چه زمینه هایی می تواند به کسب و کار شما کمک کند ؟
  companyHelpElse: "",
  seoBudget: "", //بودجه ای که به صورت ماهیانه به سئو اختصاص داده اید چقدر است؟
  seoBudgetElse: "",
  description: "",
});
const { text, phone, radio, website } = useFormRules();
const alertActive = (newVal: boolean) => {
  openAlert.value = newVal;
};
async function nextStep(values: any): Promise<void> {
  openAlert.value = false;
  const { valid } = await formRef.value.validate();
  if (valid as boolean) {
  if (currentStep.value === stepLength.value) {
    openAlert.value = true;
    await formRef.value.reset();
    formWizard.value?.reset();
    currentStep.value=0
    return;
  }
  currentStep.value++;
  // next step function to move to the next step
  formWizard.value?.nextTab();
  } else {
    return;
  }
}

function prevStep(): void {
  if (currentStep.value <= 0) {
    return;
  }
  currentStep.value--;

  // previous step function to move to the previous step
  formWizard.value?.prevTab();
}
const redirectToHome = (): void => {
  openAlert.value = false;
  router.push("/");
};
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
.vue-form-wizard {
  direction: ltr;
}
.stepTitle{
  font-size: 13px;
}
</style>
