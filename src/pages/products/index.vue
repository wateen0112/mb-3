<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  ProductCard from '@/components/products/ProductCard.vue'
</script>
<template>
    <div>
<AllOrdersLayout

title="المنتجات"
>
<div class="flex justify-start items-center flex-row flex-wrap gap-5">

    <ProductCard v-for="item in 12" :key="item" />
</div>
</AllOrdersLayout>
    </div>
</template>