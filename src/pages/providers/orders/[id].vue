

<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import Loading from '@/components/shared/Loading.vue'
import NoData from '@/components/shared/NoData.vue'
import { HomeStore } from '@/stores/Home';
import { OrderStore } from '@/stores/Order';
const loading = ref(true);
const homeStore = HomeStore()
const route  = useRoute ();
const id = route.params.id
const orderStore =  OrderStore()
const {office} = storeToRefs(homeStore);
const {myOrdersResponseDto} = storeToRefs(orderStore);

const office_id = ref('')
const getContent= async()=>{
    office_id .value= office.value.id
if (office.value.name==''){
   office_id .value= localStorage.getItem('office_id')??''
    if (office_id.value!==''){
        try {
            await homeStore.get_office_by_id(office_id);
        } catch (error) {
           throw(error) 
        }
    }
    try {
        await orderStore.get_orders({
            office_id :office_id .value,
            payment_status :id
        })
    } catch (error) {
        throw(error)
    }
}
}
onMounted(async()=>{
    await getContent()
})
</script>
<template>
    <div>
<AllOrdersLayout

:search="false"
:title="id"
>
{{myOrdersResponseDto}}
   {{office}}
</AllOrdersLayout>
    </div>
</template>