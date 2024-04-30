<script setup lang="ts">
import NavBarI18n from '@/layouts/components/NavBarI18n.vue';
import { emailValidator, requiredValidator } from '@validators'
import { useAuth } from '@/composables';
import { useAppStore } from '@/stores/App';
import EmptyState from  '@/assets/images/svg/empty-state.svg'
import CallIcon from '@/assets/images/svg/call.svg'
import LockIcon from '@/assets/images/svg/lock-icon.svg'
import Logo from '@/assets/images/logo.svg'
import { useAuthorization } from '@/stores/Auth';
const store = useAuthorization();
const {authDto} = storeToRefs(store)
const loginResponse = ref()
const router = useRouter()
const { Login } = useAuth();
const loginRes = ref()
const loginBtnLoading = ref(false); 
const appStore = useAppStore();
const loginForm = ref()
const isPasswordVisible = ref(false);

const rememberMe = ref(false);
const {showDialog , dialogContent} = storeToRefs(appStore)


async function submitLogin() {
  // authDto.value.noti_id='61c40f3d-4dd2-4700-8292-c89be5b6882f'
loginForm.value.validate().then(async( valid:any)=>{
  if (valid.valid){
    
    try {
  loginBtnLoading.value=true
 await  store.login()
 loginBtnLoading.value=false
  router.push('/')
} catch (error) {
  loginBtnLoading.value=false
  throw (error)
}







  }
})

}
const showReviewDialog = ref(false)
</script>

<template>
  <v-dialog v-model="showDialog" width="350">
<div class="w-[350px] h-[350px] rounded-lg bg-surface flex justify-center items-center flex-col">

  <img :src="EmptyState"
  alt="">
  {{ dialogContent }}

</div>
  </v-dialog>
  <div class="">
 

    <VRow no-gutters class="auth-wrapper">
      <VCol
        cols="12"
        lg="12"
        class="d-flex align-center justify-center items-center"
      >
        <div flat :max-width="500" >
          <div class="flex justify-center items-center">

            <img   class=" object-cover h-[200px] w-[200px]" :src="Logo">
          </div>
          <p class=" mt-[-50px] text-center text-grey text-18 ">Medical Box</p>
          <p class="text-center text-grey text-18 ">تسجيل دخول</p>
  
          <VCardText>
            <VForm  
             ref="loginForm"
              @submit.prevent="
                () => {
                  submitLogin();
                }
              "
              class="w-[350px]"
            >
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField
               
                    v-model="authDto.phone_number"
                    :placeholder="'رقم الهاتف'"
                    :rules="[requiredValidator]"
                   
                  >
                <template #prepend-inner>

                  <!-- <VIcon color="#9095A5">  mdi-phone-outline</VIcon> -->
               
               <img :src="CallIcon" class="invert-[-3]" />
                </template>
                </VTextField>
                </VCol>

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="authDto.password"
                    placeholder="كلمة السر"
                    :rules="[requiredValidator]"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="
                      isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                    "
                 
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  >
                  <template #prepend-inner>

<!-- <VIcon color="#9095A5">  mdi-phone-outline</VIcon> -->

<img :src="LockIcon" class="invert-[-3]" />
</template>
                </VTextField>

                  <div
                    class=" flex justify-end mt-2 mb-4"
                  >
                
                    <RouterLink class="text-blue ms-2 mb-1" to="forget_password">
<span class="w-full text-left">                هل نسيت كلمة السر ؟</span>
                    </RouterLink>
                  </div>

              <div class="flex justify-center items-center">
                <VBtn  
                :loading="loginBtnLoading"
                class="custom-btn" block type="submit">
                تسجيل الدخول
                  </VBtn>
                  
              </div>
              <div class=" mt-4 flex justify-center items-center">
                <VBtn  class="custom-btn" block type="button">
                حول 
                  </VBtn>
                  
              </div>

                </VCol>
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
<style lang="scss">

</style>