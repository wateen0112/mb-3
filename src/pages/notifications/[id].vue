<script setup  lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  Loading from '@/components/shared/Loading.vue'
import  NoData from '@/components/shared/NoData.vue'
import  NotificationDetailsCard from '@/components/notifications/NotificationDetailsCard.vue'
import { NotificationStore } from '@/stores/Notification'
const route = useRoute()
const loading = ref(true)
const store = NotificationStore()
const id  = route.params.id
const title = ()=>{
    if (id=='admin'){
        return 'تنبيهات الأدمن'
    }
  else   if (id=='office'){
        return 'تنبيهات المكاتب'
    }
    else   if (id=='delegation'){
        return 'تنبيهات المندوبين'
    }
  
       else return 'تنبيهات المتاجر'
 
       
}
const  {notificationsByTypeResponseDto} = storeToRefs(store)
const getContent  = async()=>{
try {
     loading.value =true
    await store.get_notifications_by_type({type :id.toString()})
     loading.value =false
    } catch (error) {
    loading.value =false
    throw(error)
}
}

const t = title()
onMounted(async()=>await getContent())
</script>
<template>
   <AllOrdersLayout  :title="t  ">
<Loading  v-if="loading==true"></Loading>

<div  v-if="loading==false"  class="flex  mt-8 justify-start flex-row flex-wrap gap-5 ">
    <NotificationDetailsCard   v-for="(item , index) in  notificationsByTypeResponseDto.data"  :key="index "  :item="item" />
  </div>
</AllOrdersLayout>
</template>