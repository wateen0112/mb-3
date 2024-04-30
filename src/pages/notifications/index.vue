<script setup  lang="ts" >
import  OrderCard from '@/components/orders/OrderCard.vue'
import { NotificationStore } from '@/stores/Notification'
import ALlOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import NotificationCard from '../../components/notifications/NotificationCard.vue'
import  Loading from '@/components/shared/Loading.vue'
const store = NotificationStore();
const loading = ref(true)
onMounted(async()=>{
    try {
        loading.value = true
        loading.value = false
        await store.get_notifications()
    } catch (error) {
        loading.value = false
        throw(error)
    }
})
const {notificationsResponse} = storeToRefs(store)
const orderCards = computed(()=>{
    return [

{
    title : 'تنبيهات مكتب',
  
    route :'office' ,
    count:notificationsResponse.value.offices_notifications
},
{
    title : ' تنبيهات  المتاجر ',

    route :'stores',
    count:notificationsResponse.value.stores_notifications
},
{
    title : ' تنبيهات الأدمن ',

    route :'admin',
    count:notificationsResponse.value.admin_notifications
},
{
    title : ' تنبيهات أخرى ',

    route :'delegations'
},


]
})
</script>
<template>

<ALlOrdersLayout

title="التنبيهات"
:search="false"
>
    <Loading    v-if="loading==true" />


    <div   v-else class="flex w-full  sm:justify-center  mt-8  lg:justify-start items-center flex-row flex-wrap gap-5">
<NotificationCard  
route="office"
:count="notificationsResponse[0].offices_notifications"
title="تنبيهات المكاتب"
  />
  <NotificationCard  
route="store"
:count="notificationsResponse[1].stores_notifications"
title="تنبيهات المتاجر"
  />
  <NotificationCard  
route="delegation"
:count="notificationsResponse[2].delegations_notifications"
title="تنبيهات المندوبين"
  />
  <NotificationCard  
route="admin"
:count="notificationsResponse[3].admin_notifications"
title="تنبيهات الأدمن"
  />


    </div>

</ALlOrdersLayout>
</template>