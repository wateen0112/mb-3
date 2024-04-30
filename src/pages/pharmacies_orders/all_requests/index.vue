<script  setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import RequestItemCard from '../../../components/pharmacies_requests/RequestItemCard.vue';
</script>
<template>
<all-orders-layout
:search="false"
title="الطلبات "
>
<div class="my-flex">
    <RequestItemCard v-for="item in 3" />
</div>
</all-orders-layout>
</template>