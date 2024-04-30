<script  setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  SellIcon from '@/assets/images/svg/sell.svg'
import SellCard from '@/components/exta_materials/SellCard.vue'
</script>
<template>
    <AllOrdersLayout 
    :search="false"
    title="المواد الفائضة بيع"
    >
    <router-link  to="">
<div class="bg-primary 
flex justify-center items-center
rounded-full  w-[140px] mt-4 h-[36px]

">
<p  class=" mt-[12px] mx-2 text-white" >
إضافة شراء 

</p>
<img :src="SellIcon" class="w-4 mt-1" alt="">
</div>

    </router-link>
    <div class="mt-0 my-flex">
<SellCard/>

    </div>
    <div class="absolute left-0 bottom-5 bg-primary  

flex justify-center right-0
w-[250px] h-[40px] rounded-l-lg">

    <p class="text-white mt-[8px]">
المبلغ الكلي  {{ 32000 }}دينار عراقي

    </p>
</div>
    </AllOrdersLayout>
</template>