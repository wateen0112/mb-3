<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  Avatar from '@/assets/images/avatars/avatar-1.png';
import DoneRing from  '@/assets/images/svg/done-ring.svg'
import ShopIcon from '@/assets/images/svg/shop-light.svg';
import LocationIcon from '@/assets/images/svg/pin-outline.svg';
import ChatIcon from '@/assets/images/svg/chat1.svg'
import CallIcon from '@/assets/images/svg/call-outline.svg';
import SubjectIcon from '@/assets/images/svg/subject-light.svg'
import ClipboardIcon from '@/assets/images/svg/order_light.svg'
import RepliesIcon from '@/assets/images/svg/replies.svg'
import CameraIcon from '@/assets/images/svg/camera-icon1.svg'
import ReplyCard from '@/components/pharmacies_requests/ReplyCard.vue'
</script>
<template>
    <AllOrdersLayout
    :search="false"
    title="الطلبات"
    >
    <div class="bg-primary rounded-lg pb-2">
    <div class="bg-primary rounded-lg w-full pb-0  min-h-[120px]  flex justify-start items-center gap-3 p-3">
<div class="flex justify-center items-center w-[120px] h-[120px]">
    <img :src="Avatar"    class="w-[70px] h-[70px] rounded-full" />
</div>
<div class="flex justify-start  flex-col h-full items-start">
<p class="text-18">عراق تكنو لتكنلوجيا المعلومات</p>

<div class="mt-[-24px] flex justify-start "><img  class="w-6" :src="CallIcon" />
    <p class=" text-16  mt-3 mx-1">  {{ '09989856598'}} </p>
</div>
<div class="mt-[-24px] flex justify-start "><img  class="w-6" :src="LocationIcon" />
    <p class=" text-16  mt-3 mx-1"> بغداد , شارع الزير </p>
</div>

</div>
</div>
<div class="w-full flex justify-center items-center">
    <div class="border-top w-[95%]"></div>
</div>
<div class="flex justify-between items-center w-full">
<div>
<div class="flex justify-start px-8 items-center gap-3">
    <img :src="SubjectIcon" class="w-7" alt="">
    <p class="mt-[15px]">الموضوع  : {{ 'نص تجريبي ' }}</p>
</div>

<div class=" mt-[-20px] flex justify-start px-8 items-center gap-3">
    <img :src="ClipboardIcon" class="w-7" alt="">
    <p class="mt-[15px]">ملاحظات  : {{ 'نص تجريبي ' }}</p>
</div>

</div>
<div>
    <div class="bg-[#F3F5FB]  flex justify-center items-center w-[60px] h-[60px] ml-8 rounded-lg">
        <img :src="CameraIcon" alt="">
    </div>
</div>

</div>


</div>
<div class="w-[90px] flex justify-center items-center  h-[40px] bg-primary mt-3 rounded-full rounded-tr-none">
<p class="mt-3">الردود</p>
<img  class="mx-1 w-5" :src="RepliesIcon" alt="">
</div>
<div class="flex  mt-5 flex-col justify-start items-start gap-5">
    <ReplyCard  v-for="item  in 8"  :key="item" />
</div>
    </AllOrdersLayout>
</template>
<style scoped lang="scss" >
.border-top {
    border-top:3px dashed #fff ;
    padding:0px 80px;
}
</style>