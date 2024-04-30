<script   setup lang="ts">
import TimeIcon from '@/assets/images/svg/time-light.svg';
import InfoIcon from '@/assets/images/svg/info-light.svg';
import  CalendarIcon from '@/assets/images/svg/calendar.svg' 
import DollarIcon from '@/assets/images/svg/dollar-outline.svg'
const props = defineProps({
    status :{
        type:Number , 
        default:1
    }
})
</script>
<template>
    <div class=" flex relative overflow-hidden  px-4 justify-start items-start flex-col rounded-2xl bg-primary  w-[400px] pt-4  "> 
<div   v-if="status==1" rounded="" class="  w-[25px] h-[25px] bg-[#ED3443] flex justify-center items-center rounded-full absolute top-3 left-3"><VIcon  size="18">mdi-arrow-up</VIcon></div>
<div   v-else rounded="" class="  w-[25px] h-[25px] bg-[#fff] flex justify-center items-center rounded-full absolute top-3 left-3"><VIcon color="primary" size="18">mdi-arrow-down</VIcon></div>
        <div class="flex ">
<img  class="ml-2 w-[20px] mt-[-15px] "   :src="DollarIcon" />
    <p class="text-14">    {{ 50 }}  نقطة   </p>
  
</div>
<div class="flex  mt-[-10px]">
<img  class="ml-2 w-[20px] mt-[-15px] "   :src="TimeIcon" />
    <p class="text-14">  تتمنى شركة اطلالة المستقبل لك ولعائلتك شهراً مباركاً   </p>
  
</div>
<div class="flex  mt-[-10px] ">
<img  class="ml-2 w-[20px] mt-[-15px] "   :src="CalendarIcon" />
    <p class="text-14">    2-2-2022    </p>
  
</div>
<div class="flex   mt-[-10px]">
<img  class="ml-2 w-[20px] mt-[-15px] "   :src="TimeIcon" />
    <p class="text-14">    06:35    </p>
  
</div>

    </div>
</template>