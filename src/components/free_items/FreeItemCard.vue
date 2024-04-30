<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import BoxIcon from '@/assets/images/svg/box-light.svg'
import ShopIcon from  '@/assets/images/svg/shop-light.svg';
import CameraOutline from '@/assets/images/svg/camera-outline.svg';
import LocationIcon from '@/assets/images/svg/pin-outline.svg'
import DollarIcon from '@/assets/images/svg/dollar-outline.svg'
import CalendarIcon from '@/assets/images/svg/calendar.svg'
import ClipboardIcon from '@/assets/images/svg/clipboard.svg'
import PilIcon from '@/assets/images/svg/pil-light.svg'
import  CameraIcon from '@/assets/images/svg/camera-icon1.svg'
import QtyButton from '@/components/shared/QtyButton.vue'
const qty = ref(1)
const route = useRoute();

</script>
<template>

<div class=" w-[400px] pb-[40px] mb-[80px] relative  bg-secondary rounded-lg  min-h-[100px] ">
  
    <div class="p-5  flex justify-between items-start">
<!-- container  1-->
    <div >
<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ShopIcon" />
<p>اسم المتجر :{{ 'عراق تكنو' }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ShopIcon" />
<p>اسم المادة :{{ 'نص تجريبي ' }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="CameraOutline" />
<p>صورة المنتج :</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="LocationIcon" />
<p>بلد المنشأ  :{{ 'العراق ' }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ShopIcon" />
<p>الشركة  :{{ 'عراق تكنو' }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="BoxIcon" />
<p>التعبئة  :{{ 'كارتون = 20 قطعة = الدرزن = 7وقطعة' }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="CalendarIcon" />
<p>الإكسباير  :{{ '2-2-2020' }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="DollarIcon" />
<p> السعر :{{ 200 }}دينار عراقي</p>
</div>
<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ClipboardIcon" />
<p>ملاحظات:{{ ' ' }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="PilIcon" />
<p> وصف المادة :{{ ' نص تجريبي' }}</p>
</div>


</div>
<!-- container  2-->
<div class="flex justify-start items-end flex-col ">

    <div class="bg-[#F3F5FB] w-[120px] h-[120px] rounded-lg flex justify-center items-center">
        <img   class="w-10" :src="CameraIcon" />

    </div>
<div class="mx-8 mt-4 scale-[1.2]">
    <QtyButton  v-model="qty" :theme="2" />
</div>
</div>

</div>
<div class=" px-8 pt-4 w-full rounded-lg justify-between flex items-center h-[60px] bg-surface">
<div class="flex justify-start gap-3">
    <VChip color="primary" variant="elevated" >{{  qty}}</VChip>
<p class="text-18">{{  2300}} دينار عراقي</p>
</div>
<router-link  to="">
<VBtn class="mt-[-16px] rounded-lg" >
<span class="text-surface">

    السلة
</span>

</VBtn>

</router-link>
</div>
<div  v-if="true" class=" absolute mt-[20px] flex justify-around  w-[400px] h-12 ">

<router-link class="bg-[#9095A5] text-12 px-6 py-3 rounded-full" to=""><span class="text-white"> تواصل مع مندوب المذخر  </span></router-link>
<router-link class="bg-[#9095A5] text-12 px-5 py-3 rounded-full" to=""><span class="text-white">تواصل مع    المذخر</span></router-link>

</div>
</div>



</template>