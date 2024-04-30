<script  setup lang="ts">

import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import ImgBox from  '@/assets/images/svg/img-box.svg';
import  GiftBg from '@/assets/images/svg/gifts-bg.svg' 
import { GiftsStore } from '@/stores/Gifts';
import  Loading from '@/components/shared/Loading.vue'
import NoData from '@/components/shared/NoData.vue';
import { useFile } from '@/composables';
const store = GiftsStore();

const loading  = ref(true)
onMounted(async()=>{
    loading.value = true;
    await store.getGiftsCategories()
    loading.value = false;
})
const {getFileUrl} = useFile()
const{giftsCategoriesResponseDto}  = storeToRefs(store)
</script>
<template>
<AllOrdersLayout
title="الهدايا "

>

<div  v-if="loading==false"  class=" mt-8 flex flex-row flex-wrap justify-start items-start gap-5 ">
<router-link  v-for="(item ,key) in giftsCategoriesResponseDto.data"  :key="key" :to="'gifts/'+item.id" >


    <div  class="relative flex justify-evenly items-center flex-row w-[400px] h-[120px] bg-primary rounded-lg">
        <h2  class="text-surface">{{ item.name }} </h2>
        <img v-if="item.image_name" :src="getFileUrl(item.image_name)"  class="w-14 rounded-lg" alt="">
        <img  v-else :src="ImgBox"  class="w-8" alt="">
<img :src="GiftBg"  class="  absolute top-0 right-0 w-[120px]  h-[120px]"  alt="">
</div> 
</router-link>

</div>
<Loading  v-if="loading==true" />
<NoData v-if="loading==false&&giftsCategoriesResponseDto.pagination.total==0" />

</AllOrdersLayout>

</template>