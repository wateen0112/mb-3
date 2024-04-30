<script setup lang="ts"> 
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  Loading from '@/components/shared/Loading.vue'
import AddCard from '@/components/ads/addCard.vue' 
import { AdsStore } from '@/stores/Ads'
import NoData from '@/components/shared/NoData.vue'
const store = AdsStore ();
const loading = ref(true)
const page = ref(1)
const  {adsResponseDto} = storeToRefs(store)
onMounted(async()=>{
    loading.value = true 
await store.getAdvertisements()
loading.value = false
})
</script>
<template>
<AllOrdersLayout
:search="false"
title="أعلن هنا "
>

<div class="flex w-auto  justify-end items-center">
<router-link to="/content-management/ads/new" >
<VBtn>
    <span>إضافة إعلان</span>
    <VIcon color="#fff">mdi-plus-circle-outline</VIcon>

</VBtn>    
</router-link>

</div>
<NoData  v-if="adsResponseDto.pagination.total==0&&loading==false" />
<div v-if="loading==true">
<Loading/>
</div>
<div class="my-flex mt-8"  v-if="loading==false">
    <AddCard  v-for="(item , key) in adsResponseDto.data"  :key="key" :item="item" />
</div>
<div 
v-if="adsResponseDto.pagination.last_page>1&&loading==false"
class="flex mt-8 justify-center items-center w-full">
<VPagination

:length="adsResponseDto.pagination.last_page"
@click="async()=>await store.getAdvertisements()"  v-model="adsResponseDto.pagination.current_page"></VPagination>

</div>
</AllOrdersLayout>
</template>