<script setup lang="ts">

import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import GiftsBg from '@/assets/images/svg/gift-bg.svg';
import { FreeSamplesStore } from '@/stores/FreeSamples';
import  Loading from '@/components/shared/Loading.vue'
import NoData from '@/components/shared/NoData.vue';
const store = FreeSamplesStore()
const {freeSamplesResponseDto}  = storeToRefs(store)
const getContent  = async ()=>{
try {
    loading.value = true ;
    await store.get_free_samples({
        status : "غير مسلمة" ,
    list_id : 1 
    })
    loading.value = false ;
} catch (error) {
    loading.value = false ;
    throw(error)
}
}
const loading = ref(false)
onMounted(async()=>{
await getContent()
})
</script>
<template>
<AllOrdersLayout :search="false" title="العينات المجانية ">


<div class="my-flex mt-5">
<router-link to="free_items/delivered">
    <div class=" relative rounded-lg bg-primary  w-[400px] h-[150px] flex justify-center items-center flex-row">
<div class="relative flex justify-center items-center">

</div>

    <h2 class="text-surface">
    العينات المسلمة
    
</h2>
<img class="absolute top-[-20px] w-[150px] h-[150px] left-[50%] translate-x-[-50%] " :src="GiftsBg" alt="">

</div>
</router-link>
<router-link to="free_items/not_delivered">
    <div class=" relative rounded-lg bg-primary  w-[400px] h-[150px] flex justify-center items-center flex-row">
<div class="relative flex justify-center items-center">
</div>

    <h2 class="text-surface">
         العينات الغير مسلمة 
</h2>

    <img class="absolute top-[-20px] w-[150px] h-[150px] left-[50%] translate-x-[-50%] " :src="GiftsBg" alt="">
</div>
</router-link>
</div>
</AllOrdersLayout>
</template>