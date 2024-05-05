<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import BoxIcon from '@/assets/images/svg/box-light.svg'
import ShopIcon from  '@/assets/images/svg/shop-light.svg';
import CameraOutline from '@/assets/images/svg/camera-outline.svg';
import LocationIcon from '@/assets/images/svg/pin-outline.svg'
import DollarIcon from '@/assets/images/svg/dollar-outline.svg'
import CalendarIcon from '@/assets/images/svg/calendar.svg'
import ClipboardIcon from '@/assets/images/svg/clipboard.svg'
import PilIcon from '@/assets/images/svg/pil-light.svg'
import  CameraIcon from '@/assets/images/svg/camera-icon1.svg'
import QtyButton from '@/components/shared/QtyButton.vue'
import { MaterialStore } from '@/stores/Material';
import  Loading from '@/components/shared/Loading.vue'
import { MaterialDto } from '@/api/Home/HomeDto';
import { useFile } from '@/composables';
import { HomeStore } from '@/stores/Home';
import  CustomDialog from '@/components/shared/CustomDialog.vue'
import { OrderStore } from '@/stores/Order';
import { PointsOrderStore } from '@/stores/PointsOrder';

const store = MaterialStore()
const homeStore = HomeStore();
const showSuccessDialog =ref(false)
const qty = ref(1)
const loading = ref(true)
const addToCartLoading = ref(false)
const route = useRoute();
const id = route.params.id; 
const {singleOnlineMarketResponse} = storeToRefs(homeStore)
const options = route.query.options??false;
const {filtered_deficient_list_dto,filterDto,material}  = storeToRefs(store);
const {getFileUrl} = useFile()

const router = useRouter()
const orderStore = PointsOrderStore();

onMounted(async()=>{
try {
  
    loading.value = true ;
await homeStore.get_material_shapes()
    await store . get_material_by_id (id );
 if (material.value.supplier_type=='online_market'){
    await homeStore.get_online_market( {
        online_market_id : material.value.online_market_id
    })
 }
    loading.value = false ;
} catch (error) {
    loading.value = false ;
    throw(error)
}
})
const addToCart = async()=>{
   
    try {
        addToCartLoading.value  =true;
      
        
    const key = material.value.supplier_type=='office' ?'office_id':material.value.supplier_type=='store'?'store'  :'online_market'
await  orderStore.add_to_points_cart( {
    material_id :id  ,
    supplier_type :material.value.supplier_type , 
    key :material.value.office_id ? material.value.office_id :material.value.store_id ?material.value.office_id:material.value.online_market_id??0
   , qty:qty.value
});
showSuccessDialog.value = true

        addToCartLoading.value  = false  ;
 
    } catch (error) {
        addToCartLoading.value  = false  ;
       throw(error) 
    }
}

</script>
<template>
    <!-- {{ material }} -->
<CustomDialog  

v-model="showSuccessDialog"
@leave ="()=>{
    router.push('../../../content-management/cart')
    showSuccessDialog=false
 }"
status="success" content="تم الإضافة للسلة بنجاح" />

<AllOrdersLayout
title="تفاصيل المادة"
:search="false"
>
<Loading    v-if="loading ==true" />

<div
v-if="loading == false "
class=" relative w-full pb-12 bg-secondary rounded-lg  min-h-[100px]  overflow-hidden">
   <!-- <div class="absolute left-[-65px] rotate-[-45deg] top-[20px] w-[200px] h-[30px] bg-primary flex justify-center items-center ">مكتب</div> -->
    <div class="p-5  flex justify-between items-start">
<!-- container  1-->
    <div >

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ShopIcon" />
<p>اسم المتجر :{{ singleOnlineMarketResponse.market.name }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ShopIcon" />
<p> الاسم التجاري :{{material.trade_name }}</p>
</div>
<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ShopIcon" />
<p>الاسم العلمي  :{{material.scientific_name }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="CameraOutline" />
<p>صورة المنتج :</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="LocationIcon" />
<p>بلد المنشأ  :{{ material.origin_country }}</p>
</div>

<div  v-if="material.company" class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ShopIcon" />
<p>الشركة  :{{material.company }}</p>
</div>

<div  v-if="material.packing_type.length>0" class="flex justify-start items-start gap-3">
<img   class="w-8" :src="BoxIcon" />
<p>التعبئة  : </p>
<p  v-for="i in material.packing_type">{{  i.name }}قطعة   *{{  i.amount}} علية</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="CalendarIcon" />
<p>الإكسباير  :{{ material.expire_date }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="DollarIcon" />
<p> السعر :{{ material.price }}دينار عراقي</p>
</div>
<div v-if="material.price_in_points" class="flex justify-start items-start gap-3">
<img   class="w-8" :src="DollarIcon" />
<p>  السعر  بالنقاط:{{ material.price_in_points }} نقطة </p>
</div>
<div  v-if="material.notes" class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ClipboardIcon" />
<p>ملاحظات:{{ material.notes}}</p>
</div>
<!-- 
<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="PilIcon" />
<p> وصف المادة :{{ ' نص تجريبي' }}</p>
</div> -->

<div class="flex justify-start items-start gap-3">
<img   class="w-8" :src="PilIcon" />
<p>  الشكل الدوائي  :{{ material.shape.name}}</p>
</div>


</div>
<!-- container  2-->
<div class="flex justify-start items-end flex-col ">

    <img    v-if="material.image_name" class="w-[150px] h-[150px] rounded-lg object-cover" :src="getFileUrl(material.image_name)" />
    <div  v-else class="bg-[#F3F5FB] w-[120px] h-[120px] rounded-lg flex justify-center items-center">
        <img    class="w-10" :src="CameraIcon" />

    </div>
<div class="mx-8 mt-4 scale-[1.2]">
    <QtyButton  v-model="qty" :theme="2" />
</div>
</div>

</div>
<div class=" px-8 pt-4 w-full rounded-lg justify-between flex items-center h-[60px] bg-surface">
<div class="flex justify-start gap-3">
    <VChip color="primary" variant="elevated" >{{  qty}}</VChip>
<p class="text-18"> {{ material.price_in_points}} نقطة  </p>
</div>

<VBtn 
@click="addToCart"
:loading = "addToCartLoading"
class="mt-[-16px] rounded-lg" >
<span class="text-surface">
 
    السلة
</span>

</VBtn>


</div>
</div>
<div v-if="loading == false " class=" z-30 flex justify-center gap-5 items-center w-full h-12 mt-[-25px]">

<router-link class="bg-[#9095A5] z-30  px-8 py-3 rounded-full" to=""><span class="text-white">تواصل مع  المكتب</span></router-link>

</div>
</AllOrdersLayout>

</template>