<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  OfficeCard from '@/components/offices/OfficeCard.vue'
import { HomeStore } from '@/stores/Home'
import Loading from '@/components/shared/Loading.vue';
import DelegationCard from '@/components/delegations/DelegationCard.vue'
import  NoData from '@/components/shared/NoData.vue'
const store = HomeStore ()
const loading = ref(true );

onMounted(async ()=>{
await getContent()
})
const getContent = async()=>{
    try {
    loading.value=true
    await store.get_delegators({})
    loading.value=false
} catch (error) {
    loading.value=false
    throw(error)
}

}
const searchQuery = ref('')
const {delegationsResponseDto } = storeToRefs(store)
</script>
<template>
    
    <AllOrdersLayout

    v-model:search-value="searchQuery"
    @search=" async()=>{
        try {
            loading = true 
            await store.get_delegators({
                name : searchQuery 
            })
        loading = false 
        
    } catch (error) {
        loading = false 
        throw(error)
        }
    }"
    title="المندوبين   "
    >
<NoData  v-if="loading==false  &&delegationsResponseDto.pagination.total==0" />
    <Loading  v-if="loading==true" />
    <div  v-if="loading==false" class="flex mt-8 justify-start items-center flex-row flex-wrap  gap-5">

<DelegationCard 
v-for="(item , index) in delegationsResponseDto.data" 
:item="item"
:img="item.profile_image_name"

bannerTitle="مندوب"
:key="index" />

    </div>

    <div 
    v-if="delegationsResponseDto.pagination.last_page>1&&loading==false"
    class="w-full flex justify-center items-center ">
<v-pagination   v-model="delegationsResponseDto.pagination.current_page"
:length="delegationsResponseDto.pagination.last_page"
:total-visible="4" 
@click="async()=>{
    await getContent()
}"
></v-pagination>
</div>
    </AllOrdersLayout>
</template>