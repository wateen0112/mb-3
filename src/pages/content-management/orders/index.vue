<script setup  lang="ts" >
import  OrderCard from '@/components/orders/OrderCard.vue'
import  Refunded from '@/assets/images/svg/refunded.svg'
import Loading from '@/components/shared/Loading.vue'
import  WaitingRefunding from '@/assets/images/svg/wating-refunding.svg'
import  Rejected from '@/assets/images/svg/rejected.svg'
import  WithWorker from '@/assets/images/svg/with-worker.svg'
import  Delivered from '@/assets/images/svg/delivered.svg'
import  Preparing from '@/assets/images/svg/perparing.svg'
import  WorkingOn from '@/assets/images/svg/working-on.svg'
import  NoData from '@/components/shared/NoData.vue'
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
const searchLoading  = ref(false)
const loading  =  ref(true)
// search controls 
const showOfficesOption = ref(true)
const showOrdersCard= ref(true)
const showOrderDates = ref(false)
// search controls 
const res = ref()
const getContent = async()=>{
 try {
    loading.value =true 
     res.value  = await store.get_my_orders(query.value) 
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
const orderCards = [

{
    title :  "قيد التنفيذ",
    image:WorkingOn ,
    route :'working_on'
},
{
    title :  "قيد التجهيز",
    image:Preparing ,
    route :'preparing'
},{
    title :   "بحوزة المندوب",
    image:Delivered ,
    route :'delivered'
},{
    title :  "تم التسليم",
    image:WithWorker ,
    route :'with_representative'
},
{
    title :    "رفض",
    image:Rejected ,
    route :'rejected'
},
{
    title :  "في انتظار الاسترجاع",
    image:WaitingRefunding ,
    route :'waiting_refunding'
},
{
    title : "مرتجع",
    image:Refunded ,
    route :'refunded'
}
]
const matchRoute = (name:string)=>{
return orderCards.filter(i=>{
    return i.title==name
})[0]
}
watch(itemId , async()=>{
    loading.value = true
if(selectedOption.value=='اسم المكتب'){
    res .value = await store.get_my_orders({
        office_id:itemId.value
    })
}
if(selectedOption.value=='اسم المتجر'){
    res .value = await store.get_my_orders({
        store_id:itemId.value
    })
}
    loading.value = false
})
</script>
<template>
<div>
    <AllOrdersLayout

title="طلباتي"
:advanced-option="true"
      :custom-search="true"
      :custom-input="true"
>
<template #custom-search>
  
    <div   class="w-[150px] h-[44px]" >
      <h4  @click="dnlOpened=!dnlOpened" class="h-[44px]   cursor-pointer pt-[10px]">{{ selectedOption }}</h4>
<ul v-if="dnlOpened" class="bg-surface">
      
<!-- <option selected> الكل</option> -->
<li class="flex justify-center items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]" @click="async()=>{
searchLoading= true

await homeStore.get_online_markets()
searchLoading= false
dnlOpened= false; 


selectedOption = 'اسم المتجر'
}" > 
<div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
اسم المتجر</li>
<li class="flex justify-center items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]"  @click="async()=>{
    dnlOpened= false; 
    selectedOption = 'اسم المكتب'
    searchLoading= true
    await homeStore.get_offices()
    searchLoading= false


}" > 
<div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
اسم المكتب</li>

<li
@click="()=>{
dnlOpened= false; 


selectedOption = 'رقم القائمة'
}" 
 class="flex justify-center items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]">
<div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>


رقم القائمة</li>
<li 
@click="()=>{
dnlOpened= false; 


selectedOption = 'تاريخ من إلى'
}" 
 class="flex justify-center items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]" > 
<div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>

تاريخ من إلى</li>
</ul>
    </div>
</template>
<template        #custom-input>
<div class="orders-search-bar">
    <VAutocomplete 


    
placeholder="اسم المتجر"


:items="onlineMarketsResponseDto.data"
v-model="itemId"
item-title="name"
item-value="id"
v-if="selectedOption=='اسم المتجر'"
variant="text"  class="w-[800px] pt-1"    >
<template #append>
    <div>
        <v-progress-circular  v-if="searchLoading"  indeterminate       color="primary" />
    </div>
</template>
</VAutocomplete>
<VAutocomplete 
v-if="selectedOption=='اسم المكتب'"
placeholder="اسم المكتب"
@input="async(e)=>{
    searchLoading=true
    // await store.get_my_orders({
    //     office_id:e.target.value
    // })
    await homeStore.get_offices()
    loading.value=false
    // showOrdersCard=false
}"
@select="async(e)=>{
    searchLoading=true
    await store.get_my_orders({
        office_id:itemId
    })
 
    searchLoading=false
    // showOrdersCard=false
}"

:items="officesResponseDto.data"
v-model="itemId"
item-title="name"
item-value="id"

variant="text"  class="w-[800px] pt-1"    >
<template #append>
    <div>
        <v-progress-circular  v-if="searchLoading"  indeterminate       color="primary" />
    </div>
</template>
</VAutocomplete>
<div v-if="selectedOption=='تاريخ من إلى'" class=" px-16  flex w-[800px] justify-start gap-5 items-center"     >
    <div      class="w-[220px] flex gap-2"  >
        <VLabel>من</VLabel>
        <AppDateTimePicker
        
        @change= "async()=>{
            loading= true
         if(endDate!==''&&startDate!==''){
            await store.get_my_orders({
                start : startDate ,
                end:endDate 
            })
         }
            loading= false
        }"
        v-model="startDate"  class="w-[200px]" />
    </div>
    <div   class="w-[220px] flex gap-2"  >
        <VLabel>إلى</VLabel>
    <AppDateTimePicker  
        
    @change= "async()=>{
            loading= true
         if(endDate!==''&&startDate!==''){
            await store.get_my_orders({
                start : startDate ,
                end:endDate 
            })
         }
            loading= false
        }"
    v-model="endDate" class="w-[200px]"  />
</div>
<div>
        <v-progress-circular  v-if="searchLoading"  indeterminate       color="primary" />
    </div>
</div>
<div v-if="selectedOption=='رقم القائمة'" class="flex  justify-center items-center">
<VTextField

@change="async(e)=>{
     loading = true  
   res=  await store.get_my_orders({
        order_id :e.target.value
     })
     loading = false  

}"
variant="text" class="w-[200px]"  placeholder=" أدخل رقم القائمة"   />
    <div>
        <v-progress-circular  v-if="searchLoading"  indeterminate       color="primary" />
    </div>
</div>
</div>
</template>

<Loading   v-if="loading==true" />
  <div    v-else class=" mt-8 flex w-full  sm:justify-center    lg:justify-start items-center flex-row flex-wrap gap-5">

    <OrderCard  
v-if="showOrdersCard==true"
v-for="(item , index) in res.data" :key="index"  :img="orderCards[index].image"  
:route="'orders/'+Object.keys(item)[0]"
:count="item[Object.keys(item)[0]]"
:title="Object.keys(item)[0] "

/>

    </div>


</AllOrdersLayout>
 
</div>
</template>
<style >
.orders-search-bar .iconify--tabler{
    display:  none !important;
}
</style>