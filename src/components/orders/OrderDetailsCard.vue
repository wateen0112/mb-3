<script setup lang="ts" >
import  Avatar from '@/assets/images/avatars/avatar-2.png'
import UserIcon from '@/assets/images/svg/user-outline.svg'
import LocationIcon from '@/assets/images/svg/pin-outline.svg'
import CallIcon from '@/assets/images/svg/call-outline.svg'
import ChatIcon from '@/assets/images/svg/chat1.svg'
import OrderIcon from '@/assets/images/svg/order-outline.svg'
import WalletIcon from '@/assets/images/svg/wallet.svg'
import CheckedIcon from '@/assets/images/svg/checked-outline.svg'
import DollarIcon from '@/assets/images/svg/dollar-outline.svg'
import CalendarIcon from '@/assets/images/svg/calendar.svg'
import ClipboardIcon from '@/assets/images/svg/clipboard.svg'
import { OrderDto } from '@/api/Order/OrderDto'
import  productCard from '@/components/products/productCard.vue'
import { useFile } from '@/composables'
import { OrderStore } from '@/stores/Order'
const  {getFileUrl} = useFile()
const deleteOrderLoading = ref(false)
const props = defineProps ({
    item : {
        type :OrderDto
        ,default:new OrderDto()
    }
   ,
   dialogTitle : {
    type :String , 
    default: 'تم التجهيز '
   } ,
   deleteOption : {
    type :Boolean  , 
    default :false
   }
})
const emit = defineEmits (['delete'])
const showDialog = ref(false)
const router  = useRouter()
const store = OrderStore();
const {deleteOrder} = store;
const showDeleteOrderDialog = ref(false)
const deleteOrderFunction  =async ()=>{
    try {
        deleteOrderLoading.value = true
       const res =  await deleteOrder(props.item.id.toString())
    if(res==true){
      router.push('/content-management/order');
    }
showDeleteOrderDialog.value = false;
showDialog.value=false
        deleteOrderLoading.value = false
    } catch (error) {
        
        deleteOrderLoading.value = false
        throw(error)
    }
}
</script>
<template>
<v-dialog   width="350px"

v-model="showDeleteOrderDialog"
>
<div class="bg-surface rounded-lg min-h-[60px]  p-6 pb-2">
<h3 class="text-center">هل أنت متأكد من حذف الطلب ؟</h3>
<div  class="flex   mt-4 justify-center items-center gap-8">
<VBtn
:loading="deleteOrderLoading"
@click="deleteOrderFunction"
>تأكيد</VBtn>    
<VBtn 
@click="showDeleteOrderDialog=false"
color="#aaa"><span class="text-white">إلغاء</span></VBtn>    
</div>

</div>

</v-dialog>
 <v-dialog 
 
 v-model="showDialog"
 width="450px"
 >
<div class="w-[450px]  bg-surface min-h-[60px] rounded-lg max-h-[100vh] ">
<div   class="w-full   p-4 flex justify-between items-center">

<h4>المنتجات</h4>
<VBtn 

v-if="deleteOption==true"
@click="showDeleteOrderDialog= true"
class="rounded-lg">
<span>حذف</span>

</VBtn>
</div>

  <div  class="p-4   flex flex-col gap-5  overflow-y-auto overflow-x-hidden">
    <product-card  

:quantity="true"
v-for="(material , index) in item.products"
:key="index"
:item="material"
v-model="material.material.amount"
:material-option="true"
/>
  </div>
    <div   class="w-full   mb-2 flex justify-between">
    <div  class="bg-primary bg-primary  px-1 w-[250px] h-[40px]
    flex justify-start items-center rounded-l-lg
    ">
    المبلغ الكلي : 
{{ item.materials_total_price }}
دينار عراقي

</div>
<div   class="bg-primary rounded-r-lg   px-5 min-w-[90px] flex justify-center items-center h-[40px]">{{ dialogTitle }}</div>
</div>
</div>
</v-dialog>


<div class="flex justify-start items-center flex-col">
    <div   v-if="item.office" class="flex justify-start   rounded-lg   first-letter:items-center bg-primary max-w-[440px]">
        <div class="max-w-[150px] flex justify-center items-center w-[150px]">
            <img  v-if="item.office.profile_image_name"  class="  w-[90px] h-[90px] rounded-full" :src="getFileUrl(item.office.profile_image_name)" alt="">
            <img    class="  w-[90px] h-[90px] rounded-full" :src="Avatar" alt="">
        </div>
        <div  class="w-full flex h-full justify-start items-start py-4  flex-col">
<div class="flex">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="UserIcon" />
<p class="text-14">اسم المكتب :  {{ item.office.name }} </p>
  
</div>
<div class="flex   mt-[-5px] ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="LocationIcon" />
    <p class="text-14">العنوان  :  بغداد </p>
  
</div>
<div  v-if="item.office.phone_number " class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CallIcon" />
    <p class="text-14"> رقم الهاتف :  {{ item.office.phone_number }} </p>
  
</div>

        </div>
    </div>
    <div   v-if="item.store" class="flex justify-start   rounded-lg   first-letter:items-center bg-primary max-w-[440px]">
        <div class="max-w-[150px] flex justify-center items-center w-[150px]">
            <img  v-if="item.store.profile_image_name"  class="  w-[90px] h-[90px] rounded-full" :src="getFileUrl(item.store.profile_image_name)" alt="">
            <img    class="  w-[90px] h-[90px] rounded-full" :src="Avatar" alt="">
        </div>
        <div  class="w-full flex h-full justify-start items-start py-4  flex-col">
<div class="flex">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="UserIcon" />
<p class="text-14">اسم المكتب :  {{ item.store.name }} </p>
  
</div>
<div class="flex   mt-[-5px] ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="LocationIcon" />
    <p class="text-14">العنوان  :  بغداد </p>
  
</div>
<div  v-if="item.store.phone_number " class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CallIcon" />
    <p class="text-14"> رقم الهاتف :  {{ item.store.phone_number }} </p>
  
</div>

        </div>
    </div>
    <div class="flex justify-start    rounded-[30px]   flex-col bg-primary max-w-[440px] mt-5 px-4 py-5" >

        <div class="flex   ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="ClipboardIcon" />
    <p class="text-14"> رقم القائمة :  {{item.id}} </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CalendarIcon" />
    <p class="text-14"> تاريخ القائمة  :  {{ item.created_at }} </p>
  
</div>
<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="DollarIcon" />
    <p class="text-14"> المبلغ الكلي  :  {{ item.final_total_order_price }} دينار عراقي </p>
  
</div>

<div class="flex  mt-[-5px]  "  v-if="item.total_order_price_before_promo_code &&item.final_total_order_price">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="DollarIcon" />
    <p class="text-14"> اجمالي الخصم   :  {{item.total_order_price_before_promo_code - item.final_total_order_price }} دينار عراقي  </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="DollarIcon" />
    <p class="text-14"> المبلغ الواصل   :  {{item.final_total_order_price}} دينار عراقي  </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="DollarIcon" />
    <p class="text-14"> المبلغ المتبقي  :  {{500}} دينار عراقي  </p>
  
</div>

<div class="flex  mt-[-5px]  "   v-if="item.note">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="ClipboardIcon" />
    <p class="text-14"> ملاحظات   :  {{item.note}} دينار عراقي  </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CalendarIcon" />
    <p class="text-14"> تاريخ التسديد  :     </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CheckedIcon" />
    <p class="text-14"> المندوب  :     {{  item.delegation.delegation_name}}  </p>
  
</div>

<div class="flex  mt-[-5px]  "  v-if="item.supplier_type=='office'">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CheckedIcon" />
    <p class="text-14"> اسم المورد  :     {{ item.office.name }}  </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="WalletIcon" />
    <p class="text-14"> نوع التسديد  :  {{ item.payment_type }} </p>
  
</div>
<div class="flex justify-center  gap-5 items-center w-full">

<router-link  @click="showDialog=true" class="bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="">
    <p class="text-primary text-14">عرض التفاصيل </p>
    <img   :src="OrderIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>
<router-link class="bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  :to="'../../../inbox/'+item.id">
    <p class="text-primary text-14">الذهاب للمحادثة  </p>
    <img   :src="ChatIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>

</div>

    </div>
</div>
</template>
<style scoped lang="scss">
.invert-icon {
 
 filter:invert(20%) brightness(1119%) contrast(119%);
}

</style>