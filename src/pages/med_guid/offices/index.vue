<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import OfficeCard from '@/components/offices/OfficeCard.vue'
</script>
<template>
<AllOrdersLayout
title="دليل الأدوية - المكاتب"
>
<div class="flex my-8 justify-start items-start ">
<h2>
العدد : {{ 60 }}

</h2>

</div>
<div class="my-flex">
    <OfficeCard :route="'/buying_with_points/offices/ss'" :color="'#FFBE16'"  v-for="item in  14" />

</div>
</AllOrdersLayout>
</template>