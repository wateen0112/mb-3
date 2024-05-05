<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  OfficeCard from '@/components/offices/OfficeCard.vue'
import Loading from '@/components/shared/Loading.vue'
import  NoData from '@/components/shared/NoData.vue'
import { HomeStore } from '@/stores/Home';
const loading = ref(true)  ; 
const store = HomeStore()
const name = ref('')
const {suppliersResponseDto} = storeToRefs(store)
const getContent = async()=>{
    try {
        loading.value=true
        await store.get_suppliers()
        loading.value=false
    } catch (error) {
        loading.value=false
        throw(error)
    }
}
onMounted(async()=>{
    await getContent()
})
</script>
<template>
    <AllOrdersLayout
    v-model:search-value="name"
    @search="async()=>{
        loading=true ; 
        await store.get_suppliers({
            name :name
        })
        loading=false; 
    }"
    title="الموردين"
    >
    <NoData   v-if="loading==false&&suppliersResponseDto.pagination.total==0"/>
    <Loading  v-if="loading==true"/>
    <div
    v-if="loading==false"
    class="    mt-8 flex justify-start items-center flex-row flex-wrap  gap-5">

<OfficeCard

v-for="(item, index) in suppliersResponseDto.data" 
:title="item.name"
banner-title="مورد"
:route="'providers/'+item.id"
:img="item.profile_image_name"
:key="index" />
    </div>
    </AllOrdersLayout>
</template>