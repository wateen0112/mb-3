<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import  FileUploader from '@/components/shared/FileUploader.vue'
import CameraIcon from '@/assets/images/svg/camera-icon1.svg';
import UserIcon from '@/assets/images/svg/user-ico.svg'
import StoreIcon from '@/assets/images/svg/shop-light.svg'
import  CallIcon from '@/assets/images/svg/call-outline.svg'
import  QuestionIcon from '@/assets/images/svg/question-light.svg'
import  LockIcon from '@/assets/images/svg/lock-light.svg'
import  InfoIcon from '@/assets/images/svg/info-light.svg'

import  {Field , ErrorMessage} from 'vee-validate'
const route = useRoute();
const id = route.params.id;

</script>
<template>
    <div>
       <AllOrdersLayout  
       :search="false"
       title="إضافة عامل "
       >
    <div class="grid px-2 mt-8 gap-5 grid-cols-1    lg:grid-cols-2">
<div class="col-span-2">
    <VLabel>صورة بروفايل </VLabel>
<div class="rounded-lg w-[120px] h-[120px]  flex justify-center items-center my-3 bg-[#F3F5FB]">

    <img :src="CameraIcon" class="w-10" alt="">
</div>


</div>
<VTextField  placeholder="اسم العامل">
<template  #prepend-inner>

   <img :src="UserIcon" alt="">
</template>

</VTextField>
<VTextField  placeholder="اسم مسؤول الصيدلية">
<template  #prepend-inner>

   <img :src="StoreIcon" alt="">
</template>

</VTextField>
<VTextField  placeholder="صفة العامل  ">
<template  #prepend-inner>

   <img :src="QuestionIcon" alt="">
</template>

</VTextField>
<VSelect
label="الحالة"
>

    <template  #prepend-inner>

<img class="invert-icon" :src="InfoIcon" alt="">
</template>
</VSelect>
<VTextField  placeholder="رقم الهاتف   ">
<template  #prepend-inner>

   <img :src="CallIcon" alt="">
</template>

</VTextField>
<VTextField  placeholder="اسم المستخدم">
<template  #prepend-inner>

   <img :src="UserIcon" alt="">
</template>

</VTextField>
<VTextField  placeholder="كلمة السر ">
<template  #prepend-inner>

   <img :src="LockIcon" alt="">
</template>

</VTextField>
<VSelect
label="صلاحيات"
>

    <template  #prepend-inner>

<img class="invert-icon" :src="InfoIcon" alt="">
</template>
</VSelect>
<div  v-if="id=='add'" class="flex  w-full  lg:items-start px-5 lg:justify-center items-center">
<VBtn  class="shadow-md rounded-lg w-full mx-5"   color="primary" >  
<span>إضافة</span>

</VBtn>
</div>
<div  v-else class="flex pb-5 w-full gap-0 justify-center items-center">
    <VBtn  class="shadow-md rounded-full mx-5"   color="#FFBE16" >  
<span class=" text-white  px-4">تعديل</span>

</VBtn>
    <VBtn  class="shadow-md rounded-full mx-5"   color="#ED3443" >  
<span class=" text-white  px-4">حذف</span>

</VBtn>
</div>
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
}
</style>