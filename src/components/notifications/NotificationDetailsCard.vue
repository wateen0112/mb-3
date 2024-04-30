<script   setup lang="ts">
import TimeIcon from '@/assets/images/svg/time-light.svg';
import InfoIcon from '@/assets/images/svg/info-light.svg';
import  CalendarIcon from '@/assets/images/svg/calendar.svg' 
import BellIcon from '@/assets/images/svg/bell-light.svg'
const props = defineProps(['status','item'])
</script>
<template>
    <div class=" flex relative overflow-hidden  px-4 justify-start items-start flex-col rounded-2xl bg-primary  w-[400px] pt-4  "> 
        <div  class="absolute  rotate-[-45deg] top-[14px] left-[-60px] w-[180px] h-[30px]"

:class="status!=='offer'?'bg-[#9095A5]':'bg-red-500'"
>
<p class="text-center text-14 mt-[2px]">{{  status!=='offer'?' فائض - بيع':'عرض'}}</p>
</div>
        <div class="flex ">
<img  class="ml-2 w-[20px] mt-[-15px] "   :src="BellIcon" />
    <p class="text-14">  {{item.title}}   </p>
  
</div>
<div class="flex  mt-[-10px]">
<img  class="ml-2 w-[20px] mt-[-15px] "   :src="TimeIcon" />
    <p class="text-14">  {{item.content}} </p>
  
</div>
<div class="flex  mt-[-10px] ">
<img  class="ml-2 w-[20px] mt-[-15px] "   :src="CalendarIcon" />
    <p class="text-14">    {{item.created_at.split(' ')[0]}}  </p>
  
</div>
<div class="flex   mt-[-10px]">
<img  class="ml-2 w-[20px] mt-[-15px] "   :src="TimeIcon" />
    <p class="text-14">     {{item.created_at.split(' ')[1]}}   {{item.created_at.split(' ')[2]}}    </p>
  
</div>

    </div>
</template>