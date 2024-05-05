<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  OfficeCard from '@/components/offices/OfficeCard.vue'
import { HomeStore } from '@/stores/Home'
import  Loading from '@/components/shared/Loading.vue';
import NoData from '@/components/shared/NoData.vue';
const loading = ref(true)
const store = HomeStore ();
 onMounted(async()=>{
try {
   loading.value = true
   await store .get_online_markets()
   loading.value = false
} catch (error) {
   loading.value = false
   throw(error)
}
 })
 const {onlineMarketsResponseDto}  = storeToRefs(store)
</script>
<template>
<AllOrdersLayout

title="المتاجر الالكترونية"
>


  <Loading  v-if="loading==true"/>
 <div  v-if="loading==false" class="flex justify-start items-start gap-5 mt-8 flex-row flex-wrap">
    <OfficeCard 
    :img="item.profile_image_name" 
    :title="item.name"
    v-for="item in onlineMarketsResponseDto.data" :route="`/e_stores/${item.id}`" bannerTitle="متجر" />
   </div>




</AllOrdersLayout>
</template>