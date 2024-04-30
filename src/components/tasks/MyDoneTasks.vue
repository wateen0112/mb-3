<script setup lang="ts">
import  Avatar from '@/assets/images/avatars/avatar-1.png';
import DoneRing from  '@/assets/images/svg/done-ring.svg'
import ShopIcon from '@/assets/images/svg/shop-light.svg';
import LocationIcon from '@/assets/images/svg/pin-outline.svg';
import ChatIcon from '@/assets/images/svg/chat1.svg'
import  PinAltFill from '@/assets/images/svg/pin-alt-fill.svg'
import CallIcon from '@/assets/images/svg/call-outline.svg'
import UserIcon from '@/assets/images/svg/user-outline.svg'
import ClipboardIcon from '@/assets/images/svg/desk-green.svg'
const props = defineProps({
    options:{
        type :Boolean,
        default:true
    }
})
</script>
<template>

<div class="bg-primary rounded-lg w-[450px]">
    <div class="bg-primary rounded-lg w-full pb-0   flex justify-start items-center gap-3 p-3 ">
<div class="flex justify-center items-center w-[120px] h-[100px]">
    <img :src="Avatar"    class="w-[90px] h-[90px] rounded-full" />
</div>
<div class="flex justify-start  flex-col h-full items-start">
    <div class="flex">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="UserIcon" />
    <p class="text-14">اسم الصيدلية : عراق تكنو </p>
  
</div>
<div class="flex relative justify-between w-full items-center   mt-[-5px] ">
<div class="flex "><img  class="ml-2 w-[20px] mt-[-15px]"   :src="LocationIcon" />
    <p class="text-14">العنوان  :  بغداد </p>
  </div>
  <div class="">
<router-link  class="ml-[-90px] mt-[-12px] bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center" to="">

<p class="text-12 text-primary"> عرض الخريطة</p>
<img class="mt-[-15px] mr-1"  :src="PinAltFill" />
</router-link>

  </div>
</div>
<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CallIcon" />
    <p class="text-14"> رقم الهاتف :  009639641925620 </p>
  
</div>

</div>

</div>

<div   class="w-full pt-2 flex justify-center items-center">

<div class="flex justify-center items-center flex-col">
    <div class="border-top">
        
    </div>
    <div class="  h-[70px]   flex justify-center items-center gap-5 ">

<router-link class="bg-surface pt-4  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
<p class="text-primary text-12"> عرض المهام    </p>
<img   :src="ClipboardIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>
<router-link class="bg-surface pt-4  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
<p class="text-primary text-12">  الانتقال إلى المحادثة  </p>
<img   :src="ChatIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>

</div>
</div>
</div>

</div>

</template>
<style scoped>
.border-top {
    border-top:3px dashed #fff ;
    padding:0px 80px;
}

</style>