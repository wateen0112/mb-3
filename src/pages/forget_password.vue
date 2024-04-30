<script setup lang="ts">
import { VForm } from 'vuetify/components';
import { useAuthorization } from '@/stores/Auth';
import NavBarI18n from '@/layouts/components/NavBarI18n.vue';
import { emailValidator, requiredValidator } from '@validators'
import  ForgotPassword from '@/assets/images/svg/forgot-password.svg'
const route = useRouter();
const store = useAuthorization();
const {sendOtpDto}  = storeToRefs(store)
const isLoading = ref(false);
const forgetPassword = ref<InstanceType<typeof VForm>>();

function onSubmit() {
  if (forgetPassword.value) {
    forgetPassword.value.validate().then(result => {
      if (result.valid) {
        isLoading.value = true;
       store.sendOtp().then(()=>{
        isLoading.value=false
        route.push('otp_verify')
       }).catch(error=>{
        console.log('error otp', error);
        
       })
        
        
     
      }
    });
  }
}
</script>

<template>
  <div class="relative" >

    <VRow class="auth-wrapper" no-gutters>
      <VCol cols="12" lg="12" class="d-flex align-center justify-center">
        <div flat :max-width="400" class="  w-[400px] mt-12 mt-sm-0 pa-4 ">
          <VCardText>
       <div class="flex justify-center flex-col items-center">
<h2 class="mb-14">نسيت كلمة السر</h2>
        <img :src="ForgotPassword" alt="">
       </div>
          </VCardText>

          <VCardText>
            <VForm ref="forgetPassword"  @submit.prevent="onSubmit">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VLabel class="my-3">
                    يرجى إدخال رقم الهاتف
                  </VLabel>
                  <VTextField
                    v-model="sendOtpDto.phone_number"

                    
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <!-- Reset link -->
                <VCol cols="12" class="d-flex align-center justify-center">
                  <VBtn
                  height="44px"
                 
                  width="400px"
                    :loading="isLoading"
                    color="primary"
                    class="tw-mt-5 text-white tw-px-10 tw-py-3 rounded-pill"
                    @click="onSubmit"
                  >
                 إرسال
                  </VBtn>
                </VCol>

                <!-- back to login -->
            
              </VRow>
            </VForm>
          </VCardText>
        </div>
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
