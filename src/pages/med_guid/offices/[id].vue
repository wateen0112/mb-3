<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import  StoreDetailsTitleCard from '@/components/EStores/StoreDetailsTitleCard.vue'
</script>

<template>
   <AllOrdersLayout
   title="تفاصيل مكتب"
   >
   <div class="mt-8">
    <StoreDetailsTitleCard/>
   </div>
   </AllOrdersLayout>
</template>