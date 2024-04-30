<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import OfficeCard from '@/components/offices/OfficeCard.vue'
import  Loading from '@/components/shared/Loading.vue'
import NoData from '@/components/shared/NoData.vue'
import { HomeStore } from '@/stores/Home'
const loading = ref(true)
const  homeStore = HomeStore()
const {officesResponseDto}= storeToRefs(homeStore)
const office_name_filter = ref('')
const getContent = async ()=>{
try {
    await homeStore.get_offices({})
    loading .value=false
} catch (error) {
    loading .value=false
    throw(error)
}
}
onMounted(async()=>{
   await  getContent()
})
</script>
<template>
<AllOrdersLayout
v-model:search-value="office_name_filter"
@search="async()=>{
   loading=true
   await homeStore.get_offices({
       name:office_name_filter
    })
    loading=false
}"
title="شراء بالنقاط  - المكاتب"
>
<Loading v-if="loading==true"></Loading>
<div v-if="loading==false">
    <div class="flex my-8 justify-start items-start ">
<h2>
العدد : {{ officesResponseDto.data.length }}

</h2>

</div>
<div class="my-flex">
    <OfficeCard :route="'/buying_with_points/'+item.id" :color="'#FFBE16'"  v-for="(item, index) in   officesResponseDto.data"
    
    :key="index"
    :title="item.name"
    :img="item.profile_image_name"
    />

</div>
</div>

</AllOrdersLayout>
</template>