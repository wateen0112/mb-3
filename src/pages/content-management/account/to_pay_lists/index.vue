<script  setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import OrderDetailsCard from '@/components/orders/OrderDetailsCard2.vue'

</script>

<template>
<AllOrdersLayout


title="القوائم المستحقة"
>

<div  class="flex justify-start items-start gap-5 flex-row flex-wrap">
    <OrderDetailsCard  :showRemainTime="true" :option="2"  :showBanner="false"  :showMapBtn="false" />
</div>
</AllOrdersLayout  >
</template>