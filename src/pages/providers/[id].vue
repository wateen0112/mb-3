<script setup  lang="ts" >

import  Paper from '@/assets/images/svg/paper.svg'
import  Desk from '@/assets/images/svg/desk_alt.svg'
import Loading from '@/components/shared/Loading.vue'
import  OrderImage  from '@/assets/images/svg/order.svg'
import  Basket  from  '@/assets/images/svg/basket.svg'
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import { OrderStore } from '@/stores/Order'
import { OrderQuery } from '@/api/Home/HomeDto'
import { HomeStore } from '@/stores/Home'
const homeStore = HomeStore()
const itemId =ref('')
const showStoreOption  = ref(false)
const {query} = storeToRefs(homeStore)
const dnlOpened= ref(false)
const selectedOption = ref('اسم المكتب')
const  store  = OrderStore();

const startDate =ref('')
const endDate =ref('')

const showListNumberOption= ref(false)
const  {officesResponseDto , onlineMarketsResponseDto} = storeToRefs(homeStore)
const {myOrdersResponseDto  }  = storeToRefs(store)
// const orderQuery = ref<OrderQuery>(new OrderQuery())
// const resetQuery = ()=>{
//      orderQuery .value= {
//     payment_status  :''  ,
//     start : '' ,
//     end :  '',
//     office_id : '',
//      store_id :'  '
// } 
// }
const images  =[Desk,OrderImage,Paper,Basket]
const searchLoading  = ref(false)
const loading  =  ref(true)
// search controls 
const showOfficesOption = ref(true)
const showOrdersCard= ref(true)
const showOrderDates = ref(false)
// search controls 
const res = ref()
const {office}  = storeToRefs(homeStore)
const route  = useRoute();
const id  = route.params.id
const getContent = async()=>{
 try {
    loading.value =true 
     res.value  = await store.get_orders({
        office_id : id
     }) 
     await homeStore.get_office_by_id(id)
    loading.value =false
return res
} catch (error) {
    loading.value =false
    throw(error)
 }
    
}
onMounted(async()=>{
await getContent()
})

const matchRoute = (name:string)=>{
return orderCards.filter(i=>{
    return i.title==name
})[0]
}
const setOfficeId  = ()=>{
    localStorage.setItem('office_id', id)
}
</script>
<template>
<div>
    <AllOrdersLayout
:search="false"
:title="office.name"
:advanced-option="false"
      :custom-search="false"
      :custom-input="false"
>



<Loading   v-if="loading==true" />
  <div    v-else class=" mt-8 flex w-full   sm:justify-center    lg:justify-start items-center flex-row flex-wrap gap-5">

    <div 
   
    class="bg-primary rounded-lg  pt-9  flex justify-evenly  flex-col items-center w-[400px] min-h-[140px]
    "

v-for="(item , index) in myOrdersResponseDto.data" :key="index"    
:route="'orders/'+Object.keys(item)[0]"
:count="item[Object.keys(item)[0]]"
:title="Object.keys(item)[0] "

>
<div class="flex flex-row justify-start items-center">
   <div class="flex justify-center  mr-8 items-center w-[80px]">
    <img   :src="images[index]" alt="">
   </div>
<div  class="flex w-[280px] justify-start items-start flex-col">

  <h3 class="text-white  font-normal">  {{Object.keys(item)[0]   }}</h3>
  <h4 class="text-white">  {{item[Object.keys(item)[0]]   }}    دينار عراقي  </h4>
</div>
</div>
<div  class="flex px-2 justify-end w-full pb-2 items-center flex-row">
<router-link   @click="setOfficeId()"   :to="'orders/'+Object.keys(item)[0]"  class="bg-white px-2  rounded-full py-1">
 <span  class="text-sm">

    عرض التفاصيل
 </span>

</router-link>

</div>
</div>

    </div>


</AllOrdersLayout>
 
</div>
</template>
<style >
.orders-search-bar .iconify--tabler{
    display:  none !important;
}
</style>