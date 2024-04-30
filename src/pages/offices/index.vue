<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  OfficeCard from '@/components/offices/OfficeCard.vue'
</script>
<template>
    
    <AllOrdersLayout
    title="المكاتب"
    >
    <div class="flex justify-start items-center flex-row flex-wrap  gap-5">

<OfficeCard v-for="item in 12"  :key="item" route="offers/providers/ds" />
    </div>
    </AllOrdersLayout>
</template>