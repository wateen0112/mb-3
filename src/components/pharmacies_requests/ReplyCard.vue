<script setup lang="ts">
import ShopIcon from '@/assets/images/svg/shop-light.svg';
</script>
<template>
    <div class="w-[400px] flex justify-start items-start flex-col px-5  rounded-[16px]  p-4 rounded-tr-none h-[100px] bg-primary">
<div class="flex  mt-[-12px] justify-start gap-2">
<img  class="w-6" :src="ShopIcon" alt="">
<p class="mt-[15px]">{{  'صيدلية عراق تكنو'}}</p>
</div>
<p class="mt-[-10px]">{{ 'نص تجريبي' }}</p>
    </div>
</template>