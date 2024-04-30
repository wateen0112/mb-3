<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import  RequestCard from '@/components/pharmacies_requests/RequestCard.vue'

</script>
<template>
    <AllOrdersLayout
    :search="false"
    title="إرسال طلب  "
    
    >
    <div>

        <RequestCard/>
    </div>
    <div class="absolute bottom-3">
<VBtn class="w-[400px] rounded-lg"> إرسال طلب</VBtn>

    </div>
    </AllOrdersLayout>
</template>