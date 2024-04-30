<script setup lang="ts">
import OrderDetailsCard from '@/components/orders/OrderDetailsCard2.vue'
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'


</script>
<template>
    
<AllOrdersLayout  title="بحوزة المندوب " >
    <div

class="flex justify-start items-center gap-5  flex-row flex-wrap"
>        <OrderDetailsCard  status="working_on"  v-for="item in  4" :key="item"/>
    </div>
    </AllOrdersLayout>

</template>