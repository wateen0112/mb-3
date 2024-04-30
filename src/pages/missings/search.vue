<script  setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import MissingItemCard from '@/components/missings/MissingItemCard.vue'
</script>
<template>
    <AllOrdersLayout 
     
    title="النقوصات"
    >
    
    
    <div class="my-flex mt-8">
<MissingItemCard  v-for="item in 8" />

    </div>
    </AllOrdersLayout>
</template>