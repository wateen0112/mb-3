
<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import  AwardIcon from '@/assets/images/svg/award.svg'
import  SoundIcon from '@/assets/images/svg/sound-max.svg'
import  PrivacyIcon from '@/assets/images/svg/chield.svg'
import  TermsIcon from '@/assets/images/svg/phone.svg'
import  TrashIcon from '@/assets/images/svg/trash.svg'
import Loading from '@/components/shared/Loading.vue'
import  SupportIcon from '@/assets/images/svg/whatsapp.svg'
import  LogoutIcon from '@/assets/images/svg/sign-out.svg'
import { PointsOrderStore } from '@/stores/PointsOrder';
const pointStore  = PointsOrderStore()
const {totalPoints} = storeToRefs(pointStore)
const loading  =ref(true) 
onMounted(async()=>{
await getContent()
})
const getContent = async ()=>{
  try {
    await pointStore.get_points()
    loading.value = false

} catch (error) {
  loading.value = false
  throw(error)
  }
}
</script>
<template>
<AllOrdersLayout
:search="false"
title="الإعدادات"
>
<Loading v-if="loading == true"  />
<div v-if="loading==false">
  <div  class="  mt-3  w-full h-[160px] bg-primary rounded-lg  relative flex justify-center items-center" >

<img :src="AwardIcon" class="w-32" alt="">
<p   class="mx-4 text-3xl"> {{ totalPoints }}  نقطة</p>
<RouterLink to="settings/my_points"
class="bg-white px-4 absolute left-3 py-2 rounded-full bottom-3"
><span class="font-medium text-black">عرض</span></RouterLink>
</div>
<div class="grid  gap-5  mt-4 lg:grid-cols-2 grid-cols-1">
    <!-- item -->
<div class="w-full  h-[50px]  rounded-lg flex justify-between items-center bg-[#EAEFFF]">
<div class="flex justify-start  px-3 items-center">

<img :src="SoundIcon" alt="">
<p class="text-xl mt-3 mx-2">صوت اللإشعارات</p>
</div>
<div class="px-3">
    <VSwitch  :value="true"/>
</div>

</div>
<!-- item-->
<div class="w-full  h-[50px]  rounded-lg flex justify-between items-center bg-[#EAEFFF]">
<div class="flex justify-start  px-3 items-center">

<img :src="PrivacyIcon" alt="">
<p class="text-xl mt-3 mx-2">سياسة الخصوصية </p>
</div>
<div class="px-3">
  <VIcon>mdi-chevron-left</VIcon>
</div>

</div>
<!-- item-->
<div class="w-full  h-[50px]  rounded-lg flex justify-between items-center bg-[#EAEFFF]">
<div class="flex justify-start  px-3 items-center">

<img :src="TermsIcon" alt="">
<p class="text-xl mt-3 mx-2">سياسة الاستخدام </p>
</div>
<div class="px-3">
  <VIcon>mdi-chevron-left</VIcon>
</div>

</div>

<!-- item-->
<div class="w-full  h-[50px]  rounded-lg flex justify-between items-center bg-[#EAEFFF]">
<div class="flex justify-start  px-3 items-center">

<img :src="TrashIcon" alt="">
<p class="text-xl mt-3 mx-2">حذف الحساب  </p>
</div>
<div class="px-3">
  <VIcon>mdi-chevron-left</VIcon>
</div>

</div>

<!-- item-->
<div class="w-full  h-[50px]  rounded-lg flex justify-between items-center bg-[#EAEFFF]">
<div class="flex justify-start  px-3 items-center">

<img :src="SupportIcon" alt="">
<p class="text-xl mt-3 mx-2">الدعم الفني  </p>
</div>
<div class="px-3">
  <VIcon>mdi-chevron-left</VIcon>
</div>

</div>

<!-- item-->
<div class="w-full  h-[50px]  rounded-lg flex justify-between items-center bg-[#EAEFFF]">
<div class="flex justify-start  px-3 items-center">

<img :src="LogoutIcon" alt="">
<p class="text-xl mt-3 mx-2"> تسجيل الخروج </p>
</div>
<div class="px-3">
  <VIcon>mdi-chevron-left</VIcon>
</div>

</div>

<!-- item-->
<div class="w-full  h-[50px]  rounded-lg flex justify-between items-center bg-[#EAEFFF]">
<div class="flex justify-start  px-3 items-center">

<img :src="PrivacyIcon" alt="">
<p class="text-xl mt-3 mx-2">سياسة الخصوصية </p>
</div>
<div class="px-3">
  <VIcon>mdi-chevron-left</VIcon>
</div>

</div>

<!-- item-->
<div class="w-full  h-[50px]  rounded-lg flex justify-between items-center bg-[#EAEFFF]">
<div class="flex justify-start  px-3 items-center">

<img :src="PrivacyIcon" alt="">
<p class="text-xl mt-3 mx-2">سياسة الخصوصية </p>
</div>
<div class="px-3">
  <VIcon>mdi-chevron-left</VIcon>
</div>

</div>



</div></div>
</AllOrdersLayout>
</template>