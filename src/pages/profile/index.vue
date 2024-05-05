<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import  FileUploader from '@/components/shared/FileUploader.vue'
import CameraIcon from '@/assets/images/svg/camera-icon1.svg';
import UserIcon from '@/assets/images/svg/user-ico.svg'
import StoreIcon from '@/assets/images/svg/shops.svg'
import  CallIcon from '@/assets/images/svg/call-outline.svg'
import  QuestionIcon from '@/assets/images/svg/question-light.svg'
import  LockIcon from '@/assets/images/svg/lock-light.svg'
import  InfoIcon from '@/assets/images/svg/info-light.svg'
import  FileBtn from '@/components/shared/FileBtn.vue'
import {  requiredValidator } from '@validators'
import  {Field , ErrorMessage} from 'vee-validate'
import { useAuthorization } from '@/stores/Auth';
import { useAppConfig, useFile } from '@/composables';
import { HomeStore } from '@/stores/Home';
import CustomDialog from '@/components/shared/CustomDialog.vue'
import Loading from '@/components/shared/Loading.vue';
import  LocationPicker from '@/components/shared/LocationPicker.vue'

import { GOOGLE_MAPS_API_KEY } from '~config';
const {getFileUrl,createPreview} = useFile();
const showFileBtn = ref(false)
const showDialog = ref(false)
const showLicenseFileBtn = ref(false)
const showBookFileBtn = ref(false)
const showLabFileBtn = ref(false)
const book_image_preview = ref('')

const lab_image_preview = ref('')
const profile_image_preview = ref('')
const license_image_preview = ref('')
const router = useRouter()
const store  = useAuthorization();
const homeStore = HomeStore()
const  {profileResponseDto} = storeToRefs(store);
const loading = ref(true)
const editProfileForm = ref()
const submitLoading =  ref(false)
const  { book_image_file,lab_image_file,profile_image_file,license_image_file} = storeToRefs(store)
const  {governorateResponseDto,subGovernorateResponseDto} = storeToRefs(homeStore);
onMounted(async ()=>{
try {
    loading.value = true
    await store.getUserData()
    loading.value = false
    await homeStore.get_governorate()
    await homeStore.get_sub_governorate(profileResponseDto.value.data.governorate_id)

} catch (error) {
    loading.value = false
    throw(error)
}


})
const submit =  async ()=>{
try {
editProfileForm.value.validate().then(async(v:any)=>{
    if (v.valid){
        submitLoading . value = true ;
    await store.updateUserData() 
    
    submitLoading.value = false
showDialog.value = true    
}
})
} catch (error) {
    submitLoading.value = false
    throw(error)
}

}
</script>
<template>
    <CustomDialog   v-model="showDialog"  type="success" 
    @leave="()=>{
        router.push('/')
    }"
    content="تم تعديل الحساب بنجاح" />
    <div>
       <AllOrdersLayout  
       :search="false"
       title=" الملف الشخصي "
       >


<Loading  v-if="loading == true"  />
    <VForm  ref="editProfileForm"   v-else  class="flex flex-row flex-wrap px-2 mt-8 gap-5 ">
<div class="col-span-2   flex-wrap flex md:justify-evenly items-center">

<div>    <VLabel class="w-full text-center flex justify-center mb-2">صورة بروفايل </VLabel>
    <div  class=" w-[250px] mx-8">
<VFileInput
accept=".png,.jpg,.svg"
@click:clear="profile_image_preview=''"

@change="()=>{
        profile_image_preview =  createPreview(profile_image_file)
    }"
v-model="profile_image_file" />
</div>
    <div class="flex justify-center items-center  flex-col gap-5">
    <div class="w-[200px] h-[100px] mr-5 mt-5 overflow-hidden  ">
        <a   :href="profile_image_preview==''?getFileUrl(profileResponseDto.data.profile_image_name):profile_image_preview"  target="_blank">

        <img  class="w-full h-full object-cover" :src="profile_image_preview==''?getFileUrl(profileResponseDto.data.profile_image_name):profile_image_preview">
</a>
</div>


</div></div>
<div class="flex justify-center items-center flex-col">    <VLabel class="w-full text-center flex justify-center mb-2">صورة عن كتاب فتح للجمهور  </VLabel>
    <div class="w-[250px] mx-8">
    <VFileInput 
    accept=".png,.jpg,.svg"
    @click:clear="book_image_preview=''"
    @change="()=>{
        book_image_preview =  createPreview(book_image_file)
    }"
    
    v-model="book_image_file" />

    <!-- <FileBtn  v-model="book_image_file"/> -->
</div>

    <div class="flex justify-center items-center  flex-col gap-5">
    <div class="w-[200px] h-[100px] mr-5 mt-5 overflow-hidden ">
        <a   :href="book_image_preview==''?getFileUrl(profileResponseDto.data.book_image):book_image_preview"  target="_blank">

        <img  class="w-full h-full object-cover" :src="book_image_preview==''?getFileUrl(profileResponseDto.data.book_image):book_image_preview">
</a>

</div>



</div></div>

<div>    <VLabel class="w-full text-center flex justify-center mb-2">صورة عن الشهادة </VLabel>
    <div class="w-[250px] mx-8">
    <VFileInput
    accept=".png,.jpg,.svg"
    @click:clear="license_image_preview=''"
    
    @change="()=>{
        license_image_preview =  createPreview(license_image_file)
    }"
    v-model="license_image_file" />
<!-- <FileBtn  v-model="license_image_file"/> -->
</div>
    <div class="flex justify-center items-center  flex-col gap-5">
    <div class="w-[200px] h-[100px] mr-5 mt-5 overflow-hidden  ">
<a   :href="license_image_preview==''?getFileUrl(profileResponseDto.data.license_image):license_image_preview"  target="_blank">

    <img  class="w-full h-full object-cover" :src="license_image_preview==''?getFileUrl(profileResponseDto.data.license_image):license_image_preview">

</a>
</div>


</div></div>
<div>    <VLabel class="w-full text-center flex justify-center mb-2">صورة المخبر </VLabel>
    <div class="w-[250px] mx-8">
    <VFileInput 
    accept=".png,.jpg,.svg"
    @click:clear="lab_image_preview=''"
    @change="()=>{
        lab_image_preview =  createPreview(lab_image_file)
    }"
    
    v-model="lab_image_file" />
<!-- <FileBtn  v-model="lab_image_file"/> -->
</div>
    <div class="flex justify-center items-center  flex-col gap-5">
    <div class="w-[200px] h-[100px] mr-5 mt-5 overflow-hidden  ">
        <a   :href="lab_image_preview==''?getFileUrl(profileResponseDto.data.lab_image):lab_image_preview"  target="_blank">

        <img  class="w-full h-full object-cover" :src="lab_image_preview==''?getFileUrl(profileResponseDto.data.lab_image):lab_image_preview">
</a>
</div>


</div></div>
</div>
<VTextField                     :rules="[requiredValidator]"  label="الاسم "

v-model="profileResponseDto.data.name"
>
<template  #prepend-inner>

   <img :src="UserIcon" alt="">
</template>

</VTextField>
<VTextField                     :rules="[requiredValidator]"  label="اسم المسؤول "

v-model="profileResponseDto.data.owner_name"
>
<template  #prepend-inner>

   <img :src="UserIcon" alt="">
</template>

</VTextField>

<VTextField                     :rules="[requiredValidator]"
v-model="profileResponseDto.data.nearest_point"
label="أقرب منطقة  ">


</VTextField>

<VSelect
@click="()=>{
    homeStore.get_sub_governorate(profileResponseDto.data.governorate_id)
}"
label="المحافظة"
v-model="profileResponseDto.data.governorate_id"
:items="governorateResponseDto.data"
item-title="name"
item-value="id"
>

    <template  #prepend-inner>

<img class="invert-icon" :src="InfoIcon" alt="">
</template>
</VSelect>
<VSelect
label="المنطقة"
:items="subGovernorateResponseDto.data"
item-title="name"
item-value="id"
v-model="profileResponseDto.data.area_id"
>

    <template  #prepend-inner>

<img class="invert-icon" :src="InfoIcon" alt="">
</template>
</VSelect>

<VTextField                     :rules="[requiredValidator]"  label="رقم الهاتف   "

v-model="profileResponseDto.data.phone_number"
>
<template  #prepend-inner>

   <img :src="CallIcon" alt="">
</template>

</VTextField>

<VTextField                     label="كلمة السر "
v-model="profileResponseDto.data.password"
>
<template  #prepend-inner>

   <img :src="LockIcon" alt="">
</template>

</VTextField>

<div   class="flex pb-5 w-full gap-0  col-span-2 justify-center items-center">
    <VBtn :loading="submitLoading"  class="shadow-md rounded-full mx-5" @click="submit"   color="#FFBE16" >  
<span class=" text-white  px-4">تعديل</span>

<!-- </VBtn>
    <VBtn  class="shadow-md rounded-full mx-5"   color="#ED3443" >  
<span class=" text-white  px-4">حذف</span> -->

</VBtn>
</div>
    </VForm>
    <h2>الموقع على الخريطة</h2>
<div class="w-full flex justify-center h-[300px]  items-center">
    <LocationPicker 

      />
</div>
    </AllOrdersLayout>
    </div>
</template>
<style>
.invert-icon{
    filter: invert(.4);
}
.v-label , .v-field-label{
    color: #9095A5 !important;

}
.v-input__control  ,.v-input{
    border: none !important;
    min-width: 300px !important;
}
</style>