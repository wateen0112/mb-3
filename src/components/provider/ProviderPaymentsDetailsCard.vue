<script setup lang="ts">
import  Desk from '@/assets/images/svg/desk_alt.svg'
import OrderIcon from '@/assets/images/svg/order.svg'
import  PaperIcon from '@/assets/images/svg/paper.svg'
import  Cart from '@/assets/images/svg/basket.svg';
const props = defineProps({
    type:{
        type:Number , 
        default:0
    }
})
const imagesArr = [
    Desk , 
    OrderIcon  ,
    PaperIcon , 
    Cart 
]
const titlesArr =  [
    'إجمالي القوائم المسددة',

'إجمالي القوائم المستحقة للتسديد',
'إجمالي قوائم الإسترجاع',
'إجمالي المشتريات'
]
</script>


<template>
    <div  class="bg-primary rounded-lg  px-2 flex flex-row justify-start items-center h-auto min-w-[400px] w-[400px]">

        <img   class="w-[60px] h-[60px]"  :src="imagesArr[type]"/>
     <div class="flex gap-0 flex-col justify-center items-center w-full">

<p class=" text-14 pt-8">{{ titlesArr[type] }}</p>
<p class=  "  text-14 mt-[-15px] font-semibold">{{31000 }}  دينار عراقي</p>
<div   class=" mb-2 flex justify-end items-end w-full ">
<router-link    class=" flex justify-center items-center rounded-full py-[5px] px-4 bg-surface" to="">
    <span class=" text-primary text-10 rounded-full  bg-surface">عرض التفاصيل</span>
</router-link>
    
</div>    
</div>
    </div>
</template>