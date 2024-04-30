<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import StoreImg from '@/assets/images/svg/shop-very-light.svg';
</script>
<template>
  <AllOrdersLayout
  :search="false"
  
  title="دليل الأدوية "
  >
  
  <div  class="flex justify-start items-start gap-5 w-full flex-row">

    <router-link to="med_guid/offices">
    <div class=" relative rounded-lg bg-primary  w-[400px] h-[150px] flex justify-center items-center flex-row">

    <h2 class="text-surface">
    المكاتب
</h2>

    <img class="absolute top-[-100px] w-[200px] left-[50%] translate-x-[-50%]  h-[400px]" :src="StoreImg" alt="">

</div>
</router-link>
<router-link to="med_guid/providers">
    <div class=" relative rounded-lg bg-primary  w-[400px] h-[150px] flex justify-center items-center flex-row">

    <h2 class="text-surface">
    المذاخر
</h2>

    <img class="absolute top-[-100px] w-[200px] left-[50%] translate-x-[-50%]  h-[400px]" :src="StoreImg" alt="">

</div>
</router-link>
  </div>
  </AllOrdersLayout>
</template>