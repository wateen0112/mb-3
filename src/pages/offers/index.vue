<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import OfficeCard from '@/components/offices/OfficeCard.vue'
import NoData from '@/components/shared/NoData.vue';
 import Loading from '@/components/shared/Loading.vue';
import { MaterialStore } from '@/stores/Material';
const store = MaterialStore()
const loading = ref(true);
const {materialOffersResponseDto} = storeToRefs(store)
const getContent = async ()=>{
    try {
        loading.value = true ;
        await store.get_offers() 
        loading.value = false; 
    } catch (error) {
        loading.value = false; 
        throw(error)
    }
}
onMounted(async()=>{
await getContent()
})
const setOfficeName = (name :string)=>{
    localStorage.setItem('office_name',name)
}
</script>
<template>
<AllOrdersLayout
title=" العروض  -  المكاتب "
>
<Loading   v-if="loading==true"/>

<div   v-if="loading==false" class="flex my-8 justify-start items-start ">

    <h2  v-if="loading==false">
العدد : {{ materialOffersResponseDto.data_count }}

</h2>

</div>
<div class="my-flex" v-if="loading==false">
    <OfficeCard 
    @click="setOfficeName(item.name)"
    :route="'offers/'+item.id.toString()" :color="'#FFBE16'"  v-for="(item  , index) in  materialOffersResponseDto.data"  :key="index"
    
    :title="item.name"
    :img="item.profile_image_name"
    />

</div>
<div  v-if="loading==false&&materialOffersResponseDto.pagination.last_page>1"   class="flex justify-center items-center">

    <v-pagination v-model="materialOffersResponseDto.pagination.current_page"
   
    :length="materialOffersResponseDto.pagination.last_page"
    @click="getContent()"
    />
</div>
</AllOrdersLayout>
</template>