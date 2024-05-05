<script setup lang="ts">

import ProductCard from '@/components/products/ProductCard.vue'
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import { OrderStore } from '@/stores/Order'
import  NoData from '@/components/shared/NoData.vue';

import Loading from '@/components/shared/Loading.vue';
import { PointsOrderStore } from '@/stores/PointsOrder';
const store = OrderStore()
const loading = ref(false)
const paymentType = ref(0)
const emptyCardLoading = ref(false)
const cartMode=ref(0);
const pointsOrderStore =  PointsOrderStore()

const total = computed(()=>{
    var t = 0 ;
  cartProductsResponseDto.value.data.forEach((element:any) => {
        t+=element.total_price
    });
    return t ; 
})

const pointsTotal = computed(()=>{
    var t = 0 ;
  cartPointsProductsResponseDto.value.data.forEach((element:any) => {
        t+=element.total_price
    });
    return t ; 
})
onMounted(async()=>{
    try {
    loading.value = true
   await store .get_cart_products()
   await pointsOrderStore.get_cart_products()
    loading.value = false
    
} catch (error) {
    loading.value = false
    throw(error)
    }
})
const confirmLoading= ref(false)
const confirmOrderLoading = ref(false )
const showEmptyCardDialog = ref(false)
const {cartProductsResponseDto,confirmOrderDto}  = storeToRefs(store)
const {cartPointsProductsResponseDto,confirmPointsOrderDto}  =storeToRefs(pointsOrderStore)
const confirmOrder = async()=>{
    try {
        confirmOrderLoading.value = false;
        // confirmOrderDto.value.online_market_id = cartProductsResponseDto.value.data[0].material.online_market_id
        const type = cartProductsResponseDto.value.data[0].online_market_id ? 'online_market':cartProductsResponseDto.value.data[0].store_id? 'store':'office'
        if(type=='online_market'){
            confirmOrderDto.value.online_market_id = cartProductsResponseDto.value.data[0].material.online_market_id
        }
        else      if(type=='online_market'){
            confirmOrderDto.value.store_id = cartProductsResponseDto.value.data[0].material.store_id
        }
        else {
            confirmOrderDto.value.office_id = cartProductsResponseDto.value.data[0].material.office_id
        }
        confirmOrderLoading.value = false;
        
        await store .confirm_order()
    } catch (error) {
        confirmOrderLoading.value = true ;
        throw(error)
    }
}
</script>
<template>

    <v-dialog v-model="showEmptyCardDialog" width="350px" >
    <div class="w-[350px] bg-surface p-5 rounded-lg flex justify-around flex-col items-center px-5">
<h2 class="pb-10"> تأكيد إفراغ السلة ؟ </h2>
<div class="flex justify-evenly  items-center w-full">

    <VBtn
@click="showEmptyCardDialog =true"
color="error" class="text-white"> <span class="text-white">
تأكيد

</span> </VBtn>
<VBtn
@click="showEmptyCardDialog =false"
color="warning" class="text-white"> <span class="text-white">
تراجع
</span> </VBtn>
</div>
    </div>
    </v-dialog>
<AllOrdersLayout  title="السلة "

:search="false"
>
<div class="flex justify-center items-center">
    <VTabs v-model="cartMode">
<VTab value="0">طلباتي </VTab>
<VTab value="1">طلباتي بالنقاط</VTab>
</VTabs>
</div>
<VWindow v-model="cartMode">
    <VWindowItem value="0">    <Loading   v-if="loading==true" />
    <NoData  v-if="cartProductsResponseDto.data.length==0" />
<div v-if="loading==false&&cartProductsResponseDto.data.length>0">
    <div  class="flex justify-between mt-8 mb-8 lg:max-w-[70%] items-center ">
<h3 class="text-black">المنتجات</h3>
<h3  class="text-black">{{total}} دينار عراقي

<VBtn

:loading="emptyCardLoading"
@click="async()=>{
try {
    emptyCardLoading = true
    await store.empty_cart()
    emptyCardLoading = false
    showEmptyCardDialog = false

} catch (error) {
    emptyCardLoading = false
    throw(error)
}
}"
color="error" class="text-white"> <span class="text-white">
إفراغ السلة

</span> </VBtn>
</h3>

    </div>
    <div class="flex justify-start items-center flex-row flex-wrap gap-5">

<ProductCard 
@delete="()=>{
    store.remove_from_cart(item.material_id)
}"

:options="true" v-for="(item, index) in cartProductsResponseDto.data" :key="index" :item="item" />


</div>
<div  v-if="cartProductsResponseDto.data.length>0" class="flex flex-row justify-start gap-5">
    <h3 class="text-black">نوع التسديد</h3>
    <VRadioGroup 
    
    v-model="confirmOrderDto.payment_type" class="flex">
<div class="flex gap-6"><div class="flex justify-center items-center"><VRadio value="آجل" /> آجل</div>
<div  class="flex justify-center items-center"><VRadio value="نقدي"/>نقدي</div></div>

    </VRadioGroup>
</div>
<div v-if="cartProductsResponseDto.data.length>0">
    <h3 class="text-black mt-2">  سعر التوصيل  : {{ 3000 }} دينار عراقي </h3>

</div>
<div v-if="cartProductsResponseDto.data.length>0" class="py-2 w-[400px] flex-col justify-start items-start">

<VTextField

v-model="confirmOrderDto.promo_code"
placeholder="إضافة كود خصم"  class="tw-w-[400px]"  >

<!-- <template  #append-inner>
<div class="mt-[-6px]">
    <VBtn><span>إضافة</span></VBtn>
</div>
</template> -->
</VTextField>
<textarea  placeholder="إضافة ملاحظات" rows="4"></textarea>

<VBtn 
:loading="confirmOrderLoading" 
@click="async ()=>{


try {
    confirmOrderLoading = true 
    await confirmOrder()
    confirmOrderLoading = false
} catch (error) {
    confirmOrderLoading = false
    throw(error)
}
}"
width="400px" height="44px"

class="rounded-xl shadow-lg mt-1">تأكيد الطلب - {{ total }} دينار عراقي</VBtn>
</div>

</div></VWindowItem>

<!-- points cart orders -->
<VWindowItem value="1">    <Loading   v-if="loading==true" />
    <NoData  v-if="cartPointsProductsResponseDto.data.length==0" />
<div v-if="loading==false&&cartPointsProductsResponseDto.data.length>0">
    <div  class="flex justify-between mt-8 mb-8 lg:max-w-[70%] items-center ">
<h3 class="text-black">المنتجات</h3>
<h3  class="text-black">{{pointsTotal}} نقطة

<VBtn

:loading="emptyCardLoading"
@click="async()=>{
try {
    emptyCardLoading = true
    await pointsOrderStore.empty_points_cart()
    emptyCardLoading = false
    showEmptyCardDialog = false

} catch (error) {
    emptyCardLoading = false
    throw(error)
}
}"
color="error" class="text-white"> <span class="text-white">
إفراغ السلة

</span> </VBtn>
</h3>

    </div>
    <div class="flex justify-start items-center flex-row flex-wrap gap-5">

<ProductCard 
@delete="()=>{
    pointsOrderStore.remove_from_points_cart(item.material_id)
}"

:options="true" v-for="(item, index) in cartPointsProductsResponseDto.data" :key="index" :item="item" />


</div>

<div v-if="cartPointsProductsResponseDto.data.length>0">
    <h3 class="text-black mt-2">  سعر التوصيل  : {{ 3000 }} دينار عراقي </h3>

</div>
<div v-if="cartPointsProductsResponseDto.data.length>0" class="py-2 w-[400px] flex-col justify-start items-start">


<textarea  placeholder="إضافة ملاحظات" rows="4"></textarea>

<VBtn 
:loading="confirmOrderLoading" 
@click="async ()=>{


try {
    confirmOrderLoading = true 
    await  pointsOrderStore. confirm_points_order()
    confirmOrderLoading = false
} catch (error) {
    confirmOrderLoading = false
    throw(error)
}
}"
width="400px" height="44px"

class="rounded-xl shadow-lg mt-1">تأكيد الطلب - {{ pointsTotal }} نقطة </VBtn>
</div>

</div></VWindowItem>
</VWindow>
</AllOrdersLayout>
</template>
<style scoped>
textarea {
    width: 400px ;
    margin-top: 12px;
    outline: none;
    font-size: 18;
border-radius: 16px !important;
padding: 10px !important;

  background-color: #F3F5FB !important;
  resize: none;

}
textarea::placeholder{
    color: #63636358;
}
</style>