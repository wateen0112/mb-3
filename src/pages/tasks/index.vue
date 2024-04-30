
<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import TaskCard from '../../components/tasks/TaskCard.vue';
</script>
<template>
<AllOrdersLayout 
:search="false"  
title="الوظائف"
>
<div   class="my-flex">
<TaskCard  v-for="item in 14" />

</div>
</AllOrdersLayout>
</template>