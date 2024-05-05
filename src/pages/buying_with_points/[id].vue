<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import  StoreDetailsTitleCard from '@/components/EStores/StoreDetailsTitleCard.vue'
import  Loading from '@/components/shared/Loading.vue'
import  NoData from '@/components/shared/NoData.vue'
import { HomeStore } from '@/stores/Home';
import { PointsOrderStore } from '@/stores/PointsOrder';
import { MaterialStore } from '@/stores/Material';

const homeStore = HomeStore();
const pointStore = PointsOrderStore()
const route = useRoute();
const id = route.params.id;
const loading = ref(true)
const {office} = storeToRefs(homeStore)
const getContent =async ()=>{
   try {
   await  homeStore.get_office_by_id(id)

   await  MaterialStore().material_search({office_id:id
    }) 
      loading.value = false ; 
   } catch (error) {
      
   }
}
onMounted(async()=>{
  await  getContent()
  
})
</script>

<template>

   <AllOrdersLayout
   title="تفاصيل مكتب"
   >

   <div class="mt-8">
    <StoreDetailsTitleCard
    :id="office.id"
    :item="office"
    />

   </div>
   </AllOrdersLayout>
</template>