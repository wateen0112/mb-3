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
import { useFile } from '@/composables';
import CustomDialog from '../shared/CustomDialog.vue';
import { OrderStore } from '@/stores/Order';
const qty = ref(1)
const loading = ref (false)
const route = useRoute();
const showDialog = ref(false)
const props = defineProps(['item'])
const {getFileUrl }= useFile() 
const store = OrderStore()
const  {addToCartDto} = storeToRefs(store)
const addToCart  =async ()=>{
    addToCartDto.value.material_id= props.item.id
    addToCartDto.value.qty= qty.value
try {
    loading.value= true
    await store.add_to_cart()

    
    loading.value= false
    showDialog.value  = true
} catch (error) {
    loading.value= false
    throw(error)
}
}
</script>
<template>
<CustomDialog
:content="' تمت الإضافة للسلة بنجاح !'"
status="success"

v-model="showDialog" />
<div class=" w-[400px] pb-[40px] mb-[80px] relative h-auto  bg-secondary rounded-lg  min-h-[100px] ">
  
    <div class="p-5  flex justify-between items-start">
<!-- container  1-->
    <div >
<!-- <div class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="ShopIcon" />
<p>اسم المتجر :{{ item.store_name }}</p>
</div> -->

<div class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="ShopIcon" />
<p>اسم المادة :{{ item.trade_name}}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="CameraOutline" />
<p>صورة المنتج :</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="LocationIcon" />
<p>بلد المنشأ  :{{item.origin_country}}</p>
</div>

<div  v-if="item.company" class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="ShopIcon" />
<p>الشركة  :{{ item.company }}</p>
</div>

<div v-if="item.packing_type" class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="BoxIcon" />
<p>التعبئة  :
    <br>
   <div v-for="i in item.packing_type">
{{i}}</div>
   </p>  
</div>

<div class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="CalendarIcon" />
<p>الإكسباير  :{{ item.expire_date }}</p>
</div>

<div class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="DollarIcon" />
<p> السعر :{{ item.price }}دينار عراقي</p>
</div>
<div v-if="item.notes" class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="ClipboardIcon" />
<p>ملاحظات: <br> {{item.notes}}</p>
</div>

<div  v-if="item.shape" class="flex justify-start items-start gap-3">
<img   class="min-w-8 max-w-8 w-8" :src="PilIcon" />
<p> شكل المادة : {{ item.shape.name }}</p>
</div>


</div>
<!-- container  2-->
<div class="flex justify-start items-end flex-col ">
    <img  v-if="item.image_name" class="bg-[#F3F5FB] w-[120px] h-[120px] rounded-lg flex justify-center  object-cover items-center" :src="getFileUrl(item.image_name)" />
    <div  v-else  class="bg-[#F3F5FB] w-[120px] h-[120px] rounded-lg flex justify-center items-center">
    
        <img  class="w-10" :src="CameraIcon" />

    </div>
<div class="mx-8 mt-4 scale-[1.2]">
    <QtyButton 
    :max-value="item.amount"
    v-model="qty" :theme="2" />
</div>
</div>

</div>
<div class=" px-8 pt-4 w-full rounded-lg justify-between flex items-center h-[60px] bg-surface">
<div class="flex justify-start gap-3">
    <VChip color="primary" variant="elevated" >{{  qty}}</VChip>
<p class="text-18">{{  item.price*qty}} دينار عراقي</p>
</div>
<router-link  to="">
<VBtn
@click="addToCart"
:loading="loading"
class="mt-[-16px] rounded-lg" >
<span class="text-surface">

    السلة
</span>

</VBtn>

</router-link>
</div>
<div  v-if="true" class=" absolute mt-[20px] flex justify-center gap-5  w-[400px] h-12 ">

<!-- <router-link class="bg-[#9095A5] text-12 px-6 py-3 rounded-full" to=""><span class="text-white"> منضم  </span></router-link> -->
<router-link class="bg-[#9095A5] text-12 px-5 py-3 rounded-full" 

:to="{
    path:'../../../inbox/'+item.id  ,
  query :{
    type:'office'
  }
}"><span class="text-white">تواصل مع    المكتب</span></router-link>

</div>
</div>



</template>