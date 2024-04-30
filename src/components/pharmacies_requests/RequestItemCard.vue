<script   setup lang="ts">
import BellIcon from '@/assets/images/svg/bell-light.svg';
import CalenderIcon from '@/assets/images/svg/calendar.svg';
import ClockIcon from '@/assets/images/svg/time-light.svg';

</script>
<template>

    <div  class="bg-primary w-[400px] h-[100px] h-auto px-2 rounded-lg">
<div class="flex justify-between items-center w-full">
<div class="flex justify-start items-center ">
<img :src="BellIcon"  class="w-[25px]" alt="">
<p class="mt-[8px] mx-1">الطلب : نص تجريبي </p>    
</div>

<router-link class="bg-white px-3 py-1 rounded-lg text-black text-12" to="/pharmacies_orders/all_requests/id">
    عرض
</router-link>
</div>
<div class="flex justify-start items-center mt-[-18px] ">
<img :src="CalenderIcon"  class="w-[25px]" alt="">
<p class="mt-[18px] mx-1"> 02 - 02 - 2022</p>    
</div>
<div class="flex justify-start items-center  mt-[-18px] ">
<img :src="ClockIcon"  class="w-[25px]" alt="">
<p class="mt-[18px] mx-1"> 06:35   </p>    
</div>
</div>


</template>