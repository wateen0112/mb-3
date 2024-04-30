
<script setup lang="ts">

import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import OfficeCard from '@/components/offices/OfficeCard.vue';

import NoData from '@/components/shared/NoData.vue';
import { HomeStore } from '@/stores/Home';
const loading = ref(true)
const store  = HomeStore();
onMounted(async()=>{
    try {
        loading.value =true ; 
        await store.get_suppliers()
        loading.value =false ; 
        
    } catch (error) {
        loading.value =false ; 
        throw(error)
    }
})
const {suppliersResponseDto}  = storeToRefs(store)
</script>

<template>
   <AllOrdersLayout
   :search="false"
   title="الموردين"
   >
<!-- <Loading  v-if="loading==true"/> -->
   <div  class="min-h-[70vh]"  v-if="loading==false">
    <div class="flex rounded-lg w-full mb-8 bg-[#F3F5FB] account-filter-container ">
        <div class=" z-30  px-8 w-[120px] ">
    <select  class="w-[120px] h-[44px]" >
    
<option selected> الكل</option>
<option selected> اسم المكتب</option>
<option selected> مذخر</option>
<option selected> رقم القائمة</option>
<option selected> تاريخ من إلى</option>
</select>
</div>

    <input  />




</div>
<div  class="flex justify-start items-start  gap-5 flex-row flex-wrap">

    <OfficeCard :route="`providers/${item.id}`"  v-for="(item , index) in  suppliersResponseDto.data"   :key="index" :title="item.name"/>
</div>
   </div>
   </AllOrdersLayout>
</template>
<style scoped>
select{
    padding: 0px 2px !important;
    border: none;
    color: #63636358;
    outline: none;
}
option{
    padding: 0px 2px !important;
    border: none;
    color: #63636358 !important;
    outline: none;
}
.account-filter-container input{
outline: none ;
width: 100%;
padding:0px 12px;
}

</style>