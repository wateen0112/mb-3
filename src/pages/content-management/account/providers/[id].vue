<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import ProviderPaymentsDetailsCard from '@/components/provider/ProviderPaymentsDetailsCard.vue';

</script>
<template>
    <div>
        <AllOrdersLayout
        :search="false"
        title="محمد حجازي"
        >
<div class="flex justify-start items-start flex-row flex-wrap gap-5">
<ProviderPaymentsDetailsCard  :type="item-1"  v-for="item in 4"  :key="item" />
    
</div>
    </AllOrdersLayout>
    </div>
</template>