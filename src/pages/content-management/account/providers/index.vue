
<script setup lang="ts">

import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import OfficeCard from '@/components/offices/OfficeCard.vue';
</script>

<template>
   <AllOrdersLayout
   :search="false"
   title="الموردين"
   >

   <div  class="min-h-[70vh]">
    <div class="flex rounded-lg w-full mb-8 bg-[#F3F5FB] account-filter-container ">
        <div class=" z-30  px-8 w-[120px] ">
    <select  class="w-[120px] h-[44px]" >
    
<option selected> الكل</option>
<option selected> اسم المكتب</option>
<option selected> مذخر</option>
<option selected> رقم القائمة</option>
<option selected> تاريخ من إلى</option>
</select>
</div>

    <input  />




</div>
<div  class="flex justify-start items-start  gap-5 flex-row flex-wrap">

    <OfficeCard :route="'providers/dsasd'"  v-for="item in  12"   :key="item"/>
</div>
   </div>
   </AllOrdersLayout>
</template>
<style scoped>
select{
    padding: 0px 2px !important;
    border: none;
    color: #63636358;
    outline: none;
}
option{
    padding: 0px 2px !important;
    border: none;
    color: #63636358 !important;
    outline: none;
}
.account-filter-container input{
outline: none ;
width: 100%;
padding:0px 12px;
}

</style>