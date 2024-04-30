<script setup lang="ts">
import OrderDetailsCard from '@/components/orders/OrderDetailsCard.vue'
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import { OrderStore } from '@/stores/Order'
import Loading from '@/components/shared/Loading.vue';
import NoData from '@/components/shared/NoData.vue';
const store = OrderStore();
const loading  = ref(true)
const  {myOrdersResponseDto } = storeToRefs(store)
const route = useRoute();
const id = route.params.id
const getContent = async ()=>{
    try {
        loading.value  = true
        await store.get_orders({
            status :  id
        })
        loading.value  = false
    } catch (error) {
        loading.value  = false
        
    }
}
onMounted(async()=>{
    await getContent()
})

//  const OrderStatues = [
//  "قيد التنفيذ",
//  "قيد التجهيز", "بحوزة المندوب",
//  "تم التسليم", "رفض",  "في انتظار الاسترجاع",  "مرتجع"
//  ]
</script>
<template>
    
<AllOrdersLayout  
:search="false"
:title="id??''" >

    <Loading   v-if="loading ==true"/>

    <NoData   v-if="loading==false &&myOrdersResponseDto.pagination.total==0" />
    <div
    v-if="loading==false &&myOrdersResponseDto.pagination.total>0" 
class="flex  mt-8 justify-start items-center gap-5  flex-row flex-wrap"
>        <OrderDetailsCard  
:dialog-title="id"
v-for="(item, index) in  myOrdersResponseDto.data" 
:delete-option="id!=='قيد التنفيذ'"
:key="index"
:item="item"
/>
    </div>
    <div></div>
    </AllOrdersLayout>

</template>