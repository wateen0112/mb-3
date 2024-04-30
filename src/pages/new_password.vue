<script setup lang="ts">
import { VForm } from 'vuetify/components';
import { useAuthorization } from '@/stores/Auth';
import NavBarI18n from '@/layouts/components/NavBarI18n.vue';
import OtpVerify from '@/assets/images/svg/otp-verify.svg'
import LockIcon from '@/assets/images/svg/lock-icon.svg'
import { emailValidator, requiredValidator } from '@validators'
const route = useRouter();
const store = useAuthorization();
const submitted = ref(false)
const auth = computed(() => store.authDto);
const isLoading = ref(false);
const {resetPasswordDto} = storeToRefs(store)
const resetPasswordForm = ref<InstanceType<typeof VForm>>();
const isPasswordVisible= ref(false)
function onSubmit() {
submitted.value=true ;  
resetPasswordForm.value?.validate().then( async v=>{
  if (v.valid&&resetPasswordDto.value.password==resetPasswordDto.value.confirm_password)
try {
  isLoading.value = true
  await store.resetPassword()
  isLoading.value = false
} catch (error) {
  isLoading.value = false
  throw(error)
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
            <VForm ref="resetPasswordForm">
              <VRow>
                <!-- code -->
                <VCol cols="12">
                  <div>
                    <h2 class="text-center">إعادة تعيين كلمة السر </h2>
                    <img  :src="OtpVerify" />
                  </div>
        <VLabel class="my-3">أدخل كلمة السر الجديدة</VLabel>
                  <VTextField
              v-model="resetPasswordDto.password"
                    :rules="[requiredValidator]"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="
                      isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                    "
                 
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  >
                  <template #prepend-inner>



<img :src="LockIcon" class="invert-[-3]" />
</template>
                </VTextField>
                <VLabel class="my-3">تأكيد كلمة السر الجديدة</VLabel>
                <VTextField
                  class="w-[300px]"
                  v-model="resetPasswordDto.confirm_password"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
               
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                >
                <template #prepend-inner>



<img :src="LockIcon" class="invert-[-3]" />
</template>
              </VTextField>
              <div   v-if="submitted==true &&resetPasswordDto.confirm_password!=resetPasswordDto.password"   class="w-full rounded-lg mt-[-30px] flex flex-col justify-end  h-[55px] bg-red-500"> 


                <p class="mb-[-0px] mx-2 text-12 text-white">
                  <VIcon size="14" class="mt-[-4px]">mdi-cancel</VIcon>
                  كلمة المرور غير مطابقة

                </p>
              </div>
                  <VBtn 
                  

                  rounded class="mt-8" block :loading="isLoading" @click="onSubmit">
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
