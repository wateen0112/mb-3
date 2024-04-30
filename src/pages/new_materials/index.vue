<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import OfficeCard from '@/components/offices/OfficeCard.vue'
import { HomeStore } from '@/stores/Home';
import Loading from '@/components/shared/Loading.vue';
import NoData from '@/components/shared/NoData.vue';
const store = HomeStore ();

const loading = ref(false)
const getContent = async()=>{
try {
    loading.value = true
    await store.get_offices()
    loading.value = false
} catch (error) {
    loading.value = false
    throw(error)
}
}
const  {officesResponseDto} = storeToRefs(store)
onMounted(async()=>{
    await getContent();
})
const setOfficeName  = (name:string)=>{
    try {
        localStorage.setItem('office_name',name)
    } catch (error) {
        
    }
}

</script>
<template>
<AllOrdersLayout
title=" مواد وصلت حديثا - المكاتب"
>
 <Loading    v-if="loading==true" />
 <div  v-if="loading ==false">
<NoData  v-if="officesResponseDto.data.length==0" />
<div 
v-if="officesResponseDto.data.length>0"
class="flex my-8 justify-start items-start ">
<h2>
العدد : {{ officesResponseDto.data.length}}

</h2>

</div>
<div class="my-flex">
    <OfficeCard 
   @click="setOfficeName(item.name)"
    :img="item.profile_image_name"
    :route="'new_materials/'+item.id" :color="'#FFBE16'"  v-for="(item ,index) in  officesResponseDto.data"
    :key="index"
    :title ="item.name"
    />

</div>
</div>
</AllOrdersLayout>
</template>