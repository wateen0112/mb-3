<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
// import  StoreDetailsTitleCard from '@/components/EStores/StoreDetailsTitleCard.vue'
import  OrderMainCard from '@/components/orders/OrderMainCard.vue'
import { MaterialStore } from '@/stores/Material';
import Loading from '@/components/shared/Loading.vue';
import  NoData from '@/components/shared/NoData.vue'
const  store = MaterialStore ();
const loading = ref(true )
const route  = useRoute()
const id  = route.params.id;
const name = ref('')
const getContent = async()=>{
try {
   loading.value = true
   name.value = localStorage.getItem('office_name')??''
   await store.get_materials_by_office_offer({
   office_id :id, 
   type : "مكتب"
   })
   loading.value = false
} catch (error) {
   loading.value = false
   throw(error)
}
}
onMounted(async()=>{
   await getContent()
})
const {materialSearchResponseDto } = storeToRefs(store)
</script>

<template>

   <AllOrdersLayout
   :title="' العروض - المكاتب - '+name "
   >

   <Loading  v-if="loading==true"/>

<div   v-if="loading==false">
   <NoData v-if="materialSearchResponseDto.data.length==0" />
   <div class="my-flex mt-8">
   <OrderMainCard 
   
   v-for="(item , index) in materialSearchResponseDto.data"

:item="item"
   :key="index"
   />

</div>
</div>

</AllOrdersLayout>
</template>
