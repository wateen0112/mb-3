<script  setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  BasketAlt3 from '@/assets/images/svg/Basket-alt3.svg'
import  SellIcon from '@/assets/images/svg/sell.svg'
</script>
<template >
    <AllOrdersLayout
    :search="false"
    title="المواد الفائضة"
    >
    <div class="mt-8 my-flex">

<router-link to="/extra_materials/sell">
    <div class=" rounded-lg bg-primary w-[400px] h-[120px] relative flex justify-center items-center">
<img :src="SellIcon" class="absolute top-0 opacity-20 w-[120px] h-[120px] left-[50%]  translate-x-[-50%]" alt="">
    <h2 class="text-white">بيع</h2>
</div>
</router-link>
<router-link to="/extra_materials/buy">
    <div class=" rounded-lg bg-primary w-[400px] h-[120px] relative flex justify-center items-center">
<img :src="BasketAlt3" class="absolute top-0  w-[120px] h-[120px] left-[50%]  translate-x-[-50%]" alt="">
    <h2 class="text-white">شراء</h2>
</div>
</router-link>

    </div>
    </AllOrdersLayout>
</template>