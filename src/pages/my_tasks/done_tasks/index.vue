<script  setup lang="ts">
 import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  DoneTasks from '@/components/tasks/MyDoneTasks.vue'

</script>
<template>
<AllOrdersLayout

title="المهام المنجزة"
>
<div  class="my-8 flex justify-start items-start ">
    <h2>العدد : {{ 60 }}</h2>
</div>
<div  class="my-flex">
<DoneTasks v-for="item in 12" />    
</div>
</AllOrdersLayout>

</template>