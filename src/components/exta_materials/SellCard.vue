<script setup lang="ts" >
import  Avatar from '@/assets/images/avatars/avatar-2.png'
import UserIcon from '@/assets/images/svg/user-outline.svg'
import LocationIcon from '@/assets/images/svg/pin-outline.svg'
import CallIcon from '@/assets/images/svg/call-outline.svg'
import ChatIcon from '@/assets/images/svg/chat1.svg'
import OrderIcon from '@/assets/images/svg/order-outline.svg'
import WalletIcon from '@/assets/images/svg/wallet.svg'
import CheckedIcon from '@/assets/images/svg/checked-outline.svg'
import DollarIcon from '@/assets/images/svg/dollar-outline.svg'
import CalendarIcon from '@/assets/images/svg/calendar.svg'
import ClipboardIcon from '@/assets/images/svg/desk-green.svg'
import  PinAltFill from '@/assets/images/svg/pin-alt-fill.svg'
import  PrintIcon from '@/assets/images/svg/print-icon.svg'
import  WalletFill from '@/assets/images/svg/wallet-fill.svg'

const props = defineProps({
    status :{
        type:String , 
        default:'rejected'
    },
    showBanner:{
        type:Boolean,
        default:true
    },
    showMapBtn : {
        type:Boolean , 
        default :true
    },
    option :{
        type:Number , 
        default :1
    },
    showRemainTime :{
        type:Boolean,
        default:false
    }
})
</script>
<template>
<div class="   flex justify-start  items-center flex-col">


    <div class=" w-[400px] relative flex justify-start overflow-hidden  rounded-[30px]   flex-col bg-primary max-w-[440px] mt-5 px-4 py-5" >
        <div class="flex   ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="ClipboardIcon" />
    <p class="text-14"> نوع القائمة :  {{'بيع'}} </p>
  
</div>

        <div class="flex   ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="ClipboardIcon" />
    <p class="text-14"> رقم القائمة :  1 </p>
  
</div>
        <div class="flex">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="UserIcon" />
    <p class="text-14">اسم الصيدلية : عراق تكنو </p>
  
</div>



<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CalendarIcon" />
    <p class="text-14"> التاريخ   :  1-1-2024 </p>
  
</div>
<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="DollarIcon" />
    <p class="text-14"> المبلغ الكلي  :  500 دينار عراقي </p>
  
</div>


<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="ClipboardIcon" />
    <p class="text-14"> ملاحظات   :    </p>
  
</div>






<div class="flex justify-center items-center w-full">

    <router-link class="bg-surface pt-3  w-[140px] max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
    <p class="text-primary text-12">   عرض التفاصيل  </p>
    <img   :src="ClipboardIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>

</div>
</div>

</div>
</template>
<style scoped lang="scss">
.invert-icon {
 
 filter:invert(20%) brightness(1119%) contrast(119%);
}

</style>