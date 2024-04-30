<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import Group3 from  '@/assets/images/svg/group3.svg';
import  Group2 from  '@/assets/images/svg/group-add-light.svg'
</script>
<template>
    
    <AllOrdersLayout

    :search="false"
    title="العاملين"
    >
<div class="flex  mt-8 justify-start  gap-5 flex-row flex-wrap items-start">  
<router-link  to="workers/all">

    <div   class="bg-primary  flex justify-center items-center rounded-lg w-[400px] h-[140px] 
relative
">

<h1 class="  text-white w-full text-center">  العاملين</h1>
<img  class="w-[200px] top-0 h-[140px] absolute left-[50%] translate-x-[-50%] "  :src="Group3" />
</div>  
</router-link>  
<router-link  to="workers/add">

<div   class="bg-primary  flex justify-center items-center rounded-lg w-[400px] h-[140px] 
relative
">

<h1 class="  text-white w-full text-center">   إضافة عامل </h1>
<img  class="w-[200px] top-0 h-[140px] absolute left-[50%] translate-x-[-50%] "  :src="Group2" />
</div>  
</router-link>  
</div>
    </AllOrdersLayout>
</template>