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
const store = MaterialStore()
const homeStore = HomeStore();

const qty = ref(1)
const loading = ref(true)
const addToCartLoading = ref(false)
const route = useRoute();
const id = route.params.id; 
const {singleOnlineMarketResponse} = storeToRefs(homeStore)
const options = route.query.options??false;
const {filtered_deficient_list_dto,filterDto,material}  = storeToRefs(store);
const {getFileUrl} = useFile()
const showDialog = ref(false )
const router = useRouter()
const orderStore = OrderStore();
const{addToCartDto   } = storeToRefs(orderStore)
onMounted(async()=>{
try {
  
    loading.value = true ;
await homeStore.get_material_shapes()
    await store . get_material_by_id (id );
 if (material.value.supplier_type=='online_market'){
    await homeStore.get_online_market(material.value.online_market_id)
 }
    loading.value = false ;
} catch (error) {
    loading.value = false ;
    throw(error)
}
})
const addToCart = async()=>{
    try {
        addToCartLoading.value  = true  ;
        addToCartDto.value.material_id =material.value.id 
        addToCartDto.value.qty =qty.value 
    
await  orderStore.add_to_cart();
        addToCartLoading.value  = false  ;
    showDialog.value = true    
    } catch (error) {
        addToCartLoading.value  = false  ;
       throw(error) 
    }
}

</script>
<template>
    <!-- {{ material }} -->
<CustomDialog  

v-model="showDialog"
@close ="()=>{
    router.push('../../../content-management/cart')
 }"
status="success" content="تم الأضافة للسلة بنجاح" />
<AllOrdersLayout
title="العينات غير المسلمة  - تفاصيل المادة "
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
<div  v-if="material.notes" class="flex justify-start items-start gap-3">
<img   class="w-8" :src="ClipboardIcon" />
<p>ملاحظات:{{ material.notes}}</p>
</div>

<!-- <div class="flex justify-start items-start gap-3">
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

</div>

</div>

</div>
<div v-if="loading == false " class=" z-30 flex justify-center gap-5 items-center w-full h-12 mt-[-25px]">

<router-link class="bg-[#9095A5] z-30  px-8 py-3 rounded-full" to=""><span class="text-white">تواصل مع  المكتب</span></router-link>

</div>
</AllOrdersLayout>

</template>