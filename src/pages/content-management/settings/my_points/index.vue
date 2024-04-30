
<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import  AwardIcon from '@/assets/images/svg/award.svg'
import  PointsCard from '@/components/settings/PointsCard.vue'
</script>
<template>
    <div>
        <AllOrdersLayout
:search="false"
title="الإعدادات"
>
<div  class="  mt-3  w-full h-[160px] bg-primary rounded-lg  relative flex justify-center items-center" >

<img :src="AwardIcon" class="w-32" alt="">
<p   class="mx-4 text-3xl"> {{ 0 }}  نقطة</p>

</div>
<div class="my-flex mt-8">
    <PointsCard   :status="3%item+1" v-for="item in 3" />
</div>
</AllOrdersLayout>
    </div>
</template>