
<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import TaskCard from '../../components/tasks/TaskCard.vue';

import BellIcon from '@/assets/images/svg/bell-light.svg'
</script>
<template>
<AllOrdersLayout 
:search="false"  
title="المهام"
>

<div class="my-flex mt-5">
<router-link to="my_tasks/done_tasks">
    <div class=" relative rounded-lg bg-primary  w-[400px] h-[150px] flex justify-center items-center flex-row">
<div class="relative flex justify-center items-center">
<img :src="BellIcon" alt="">
<VChip variant="elevated" class="absolute top-0 opacity-80 scale-[.85] right-0" color="#f00"><span class="text-surface">{{  1}}</span></VChip>
</div>
    <h2 class="text-surface">
    المهام المنجزة
</h2>

    

</div>
</router-link>
<router-link to="my_tasks/not_done_tasks">
    <div class=" relative rounded-lg bg-primary  w-[400px] h-[150px] flex justify-center items-center flex-row">
<div class="relative flex justify-center items-center">
<img :src="BellIcon" alt="">
<VChip variant="elevated" class="absolute top-0 opacity-80 scale-[.85] right-0" color="#f00"><span class="text-surface">{{  3}}</span></VChip>
</div>
    <h2 class="text-surface">
    المهام الغير منجزة
</h2>

    

</div>
</router-link>
<router-link to="my_tasks/rejected_tasks">
    <div class=" relative rounded-lg bg-primary  w-[400px] h-[150px] flex justify-center items-center flex-row">
<div class="relative flex justify-center items-center">
<img :src="BellIcon" alt="">
<VChip variant="elevated" class="absolute top-0 opacity-80 scale-[.85] right-0" color="#f00"><span class="text-surface">{{  3}}</span></VChip>
</div>
    <h2 class="text-surface">
    المهام المرفوضة
</h2>

    

</div>
</router-link>
</div>
</AllOrdersLayout>
</template>