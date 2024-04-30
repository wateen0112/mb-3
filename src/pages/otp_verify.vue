<script setup lang="ts">
import { VForm } from 'vuetify/components';
import { useAuthorization } from '@/stores/Auth';
// import NavBarI18n from '@/layouts/components/NavBarI18n.vue';
import OtpVerify from '@/assets/images/svg/otp-verify.svg'
const route = useRouter();
const store = useAuthorization();
const auth = computed(() => store.authDto);
const isLoading = ref(false);
const {resetPasswordDto} = storeToRefs(store)
const otpForm = ref()
function onSubmit() {
  otpForm.value.validate().then((v:any)=>{
    if (v.valid){
      route.push('new_password')
    }
  })
}
</script>

<template>
  <div class="relative">
   

    <VRow no-gutters class="auth-wrapper">
      <VCol cols="12" lg="12" class="d-flex align-center justify-center">
        <VCard flat :max-width="400" class="pa-4 ">
       
          <VCardText>
            <VForm ref="otpForm">
              <VRow>
                <!-- code -->
                <VCol cols="12">
                  <div>
                    <h2 class="text-center">تأكيد الهاتف</h2>
                    <img  :src="OtpVerify" />
                  </div>
                  <p>الرجاء ادخال رمز التحقق الذي تم ارساله الى رقم الهاتف </p>
                  <div class="d-flex d-flex-row my-2 gap-x-2">
                    <AppOtpInput 
                    
                    
                    :total-input="5"  variant="outlined" type="number" 
                    v-model="resetPasswordDto.code"
                    />
                  </div>
                  <div class=" mt-4 flex justify-center items-center">
لم يتم استلام الرمز  ؟
<VBtn variant="text">إعادة الارسال</VBtn>


                  </div>
                  <VBtn  rounded class="mt-8" block :loading="isLoading" @click="onSubmit">
                 التحقق
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
