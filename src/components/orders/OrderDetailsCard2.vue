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
import ClipboardIcon from '@/assets/images/svg/clipboard.svg'
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
<div class="    flex justify-start  items-center flex-col">


    <div class=" relative flex justify-start overflow-hidden  rounded-[30px]   flex-col bg-primary max-w-[440px] mt-5 px-4 py-5" >
        <div  v-if="showBanner"
         :class="status=='rejected'?'bg-red-500':status=='delivered'?'bg-gray-800 bg-opacity-20':'bg-[#FFBE16]'"
        class="absolute  top-[10px] left-[-65px]  flex justify-center items-center rotate-[-45deg]  w-[200px] h-[30px]">

<h5 class="text-surface">{{status =='rejected'?'مرفوض':status=='delivered'?'تم التسليم':'قيد التنفيذ' }}</h5>

        </div>
        <div class="flex   ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="ClipboardIcon" />
    <p class="text-14"> رقم القائمة :  1 </p>
  
</div>
        <div class="flex">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="UserIcon" />
    <p class="text-14">اسم الصيدلية : عراق تكنو </p>
  
</div>
<div class="flex justify-between items-center   mt-[-5px] ">
<div class="flex "><img  class="ml-2 w-[20px] mt-[-15px]"   :src="LocationIcon" />
    <p class="text-14">العنوان  :  بغداد </p>
  </div>
  <div>
<router-link  v-if="showMapBtn" class=" mt-[-12px] bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center" to="">

    <router-link   to="../../../map"> <p>الموقع على الخريطة</p></router-link>
<img class="mt-[-15px] mr-1"  :src="PinAltFill" />
</router-link>

  </div>
</div>
<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CallIcon" />
    <p class="text-14"> رقم الهاتف :  009639641925620 </p>
  
</div>


<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CalendarIcon" />
    <p class="text-14"> تاريخ القائمة  :  1-1-2024 </p>
  
</div>
<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="DollarIcon" />
    <p class="text-14"> المبلغ الكلي  :  500 دينار عراقي </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="DollarIcon" />
    <p class="text-14"> اجمالي الخصم   :  500 دينار عراقي  </p>
  
</div>

<div  class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="DollarIcon" />
    <p class="text-14"> المبلغ الواصل   :  500 دينار عراقي  </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="DollarIcon" />
    <p class="text-14"> المبلغ المتبقي  :  500 دينار عراقي  </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="ClipboardIcon" />
    <p class="text-14"> ملاحظات   :    </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CalendarIcon" />
    <p class="text-14"> تاريخ التسديد  :  500 دينار عراقي  </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CheckedIcon" />
    <p class="text-14"> المندوب  :    عراق تكنو  </p>
  
</div>

<div class="flex  mt-[-5px] justify-between  ">
<div class="flex"><img  class="ml-2 w-[20px] mt-[-15px]"   :src="CheckedIcon" />
    <p class="text-14"> اسم المورد  :    عراق تكنو  </p>
  </div>
  <div  v-if="showRemainTime"  class="ml-[-16px] h-[30px]  rounded-full rounded-l-none flex justify-center items-center bg-surface w-auto">
<p class="mt-3 text-primary  text-10 px-4">باقي على التسديد {{  5}} أيام</p>

  </div>
</div>

<div class="flex  mt-[-5px] ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="WalletIcon" />
    <p class="text-14"> نوع التسديد  :  آجل </p>
  
</div>
<!-- option 1-->
<div  v-if="option==1" class="flex justify-center  pb-[40px]   gap-5 items-center w-full">

<router-link class="bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
    <p class="text-primary text-12">التواصل مع الصيدلية  </p>
    <img   :src="ChatIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>
<router-link class="bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
    <p class="text-primary text-12"> التواصل مع المذخر  </p>
    <img   :src="ChatIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>

</div>
<!-- option 2-->
<div  v-if="option==2" class="flex justify-center  pb-[20px]   gap-5 items-center w-full">

<router-link class="bg-surface pt-3  w-[140px] max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
    <p class="text-primary text-12">   عرض التفاصيل </p>
    <img   :src="OrderIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>
<router-link class="bg-surface pt-3  w-[140px] max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
    <p class="text-primary text-12">   الذهاب للمحادثة  </p>
    <img   :src="ChatIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>

</div>
<div  v-if="option==2" class="flex justify-center  pb-[20px]   gap-5 items-center w-full">

<router-link class="bg-surface pt-3  w-[140px] max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
    <p class="text-primary text-12">   تسديد  </p>
    <img   :src="WalletFill"  class=" mx-1 mt-[-15px]"  />

</router-link>
<router-link class="bg-surface pt-3  w-[140px] max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
    <p class="text-primary text-12">    طباعة  </p>
    <img   :src="PrintIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>

</div>

</div>
<div  v-if="status=='working_on'"  class=" w-full h-[60px] flex justify-center items-center gap-5 mt-[-30px]">
    <VBtn class="shadow-lg" color="#FFBE16" rounded>
<span class="text-surface">تم التسليم</span>

</VBtn>
<VBtn   class="shadow-lg" color="#ED3443" rounded>
<span class="text-surface">رفض</span>

</VBtn>



</div>
</div>
</template>
<style scoped lang="scss">
.invert-icon {
 
 filter:invert(20%) brightness(1119%) contrast(119%);
}

</style>