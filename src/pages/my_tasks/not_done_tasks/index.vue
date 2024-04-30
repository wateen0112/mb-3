<script  setup lang="ts">
 import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  NotDoneTasks from '@/components/tasks/MyNotDoneTasks.vue'

</script>
<template>
<AllOrdersLayout

title="المهام الغير منجزة"
>
<div  class="my-8 flex justify-start items-start ">
    <h2>العدد : {{ 60 }}</h2>
</div>
<div  class="my-flex">
<NotDoneTasks v-for="item in 12" />    
</div>
</AllOrdersLayout>

</template>