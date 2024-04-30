<script setup  lang="ts" >
import  OrderCard from '@/components/orders/OrderCard.vue'
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import  Refunded from '@/assets/images/svg/refunded.svg'
import  WaitingRefunding from '@/assets/images/svg/wating-refunding.svg'
import  Rejected from '@/assets/images/svg/rejected.svg'
import  WithWorker from '@/assets/images/svg/with-worker.svg'
import  Delivered from '@/assets/images/svg/delivered.svg'

import  Preparing from '@/assets/images/svg/perparing.svg'
import  WorkingOn from '@/assets/images/svg/working-on.svg'
import  QuestionIcon from '@/assets/images/svg/quesiton-icon.svg'
import  RequestSendIcon from '@/assets/images/svg/request-send.svg'
import ChatFill from '@/assets/images/svg/chat-fill.svg'
const orderCards = [


{
    title : ' تم التسليم ',
    image:Delivered ,
    route :'pharmacies_orders/delivered'
},{
    title : ' بحوزة المندوب',
    image:WithWorker ,
    route :'pharmacies_orders/with_representative'
},
{
    title : ' رفض ',
    image:Rejected ,
    route :'pharmacies_orders/rejected'
},
{
    title : ' المحادثات ',
    image:ChatFill ,
    route :'../../../inbox'
},

]
</script>
<template>
    <!-- <div  class="flex w-full  sm:justify-center    lg:justify-start items-center flex-row flex-wrap gap-5">
<OrderCard  v-for="(item , key) in orderCards" :key="key"  :img="item.image"  :route="item.route" :title="item.title"   />
    </div> -->

    <all-orders-layout  title="طلبات الصيدليات"
    
    :search="false"
    >
<div class="my-flex mt-9">
<router-link to="pharmacies_orders/send_request">
    <div class=" relative  justify-center items-center flex w-[400px] h-[150px] bg-primary rounded-lg">
<h1 class="text-white">إرسال طلب</h1>
        <img :src="RequestSendIcon" class="opacity-10 h-[120px] top-[50%]  w-[120px] absolute translate-y-[-50%] left-[50%] translate-x-[-50%]" alt="">

    </div>
</router-link>
<router-link to="pharmacies_orders/all_requests">
    <div class=" relative  justify-center items-center flex w-[400px] h-[150px] bg-primary rounded-lg">
<h1 class="text-white">الطلبات</h1>
        <img :src="QuestionIcon" class="opacity-10 h-[150px] w-[150px] absolute top-0 left-[50%] translate-x-[-50%]" alt="">

    </div>
</router-link>
    </div>
   
    </all-orders-layout>
</template>