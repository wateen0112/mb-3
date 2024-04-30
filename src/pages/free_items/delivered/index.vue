<script  setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import ProductCard from '@/components/products/ProductCardSmall.vue'
import { FreeSamplesStore } from '@/stores/FreeSamples';
import  Loading from '@/components/shared/Loading.vue'
import NoData from '@/components/shared/NoData.vue';
const store = FreeSamplesStore()
const {freeSamplesResponseDto}  = storeToRefs(store)
const getContent  = async ()=>{
try {
    loading.value = true ;
    await store.get_free_samples({
        status : "مسلمة" ,
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
<template 
>
<AllOrdersLayout
:search="false"
title="العينات   المسلمة"
>
<Loading v-if="loading==true"/>
<div v-if="loading==false">
    <NoData  v-if="loading==false && freeSamplesResponseDto.pagination.total==0" />
<div   v-if="loading==false" class="mt-8 my-flex">
<ProductCard    
:route="'delivered/'+item.id.toString()"
v-for="(item , index) in freeSamplesResponseDto.data"  :item="item"  :key="index" />

</div>
<div class="flex justify-center  items-center "
v-if="loading==false&&freeSamplesResponseDto.pagination.last_page>1"
>
<v-pagination  
@click="async()=>{
    await getContent()
}"
:length="freeSamplesResponseDto.pagination.last_page"
total-visible="4"
v-model="freeSamplesResponseDto.pagination.current_page"
/>

</div>
</div>
</AllOrdersLayout>
</template>