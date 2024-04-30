
<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import Paper2 from '@/assets/images/svg/paper2.svg'
import Paper from '@/assets/images/svg/paper.svg'
import Group from '@/assets/images/svg/group_light.svg'
import Desk from '@/assets/images/svg/desk_alt.svg'
import OrderImg from '@/assets/images/svg/order.svg'
import Basket from '@/assets/images/svg/basket.svg'
import AccountCard from '@/components/account/AccountCard.vue'
import { ref } from 'vue';
const accountRoutes2 = [
{
        title:' إجمالي القوائم المسددة'
        ,image:Desk,
        route:'paid_lists'
    }
 ,  {
      
        title:'إجمالي القوائم المستحقة للتسديد '
        ,image:OrderImg,
        route:'to_pay_lists'
    },  {
    
        title:'إجمالي قوائم الإسترجاع '
        ,image:Paper,
        route:'refunded_resources'
    },  {
      
        title:'إجمالي المشتريات '
        ,image:Basket,
        route:'providers'
    },  {
      
        title:'إجمالي بيع الفائض '
        ,image:Paper2,
        route:'providers'
    }
]
const accountRoutes = [
    {
        title:'موردين',
       image:Group,
        route:'providers'
    },
    {
        title:'قوائم مسددة'
        ,image:Desk,
        route:'paid_lists'
    },  {
        title:'قوائم تستحق التسديد'
        ,image:OrderImg,
        route:'to_pay_lists'
    },  {
        title:'استرجاع مواد',image:Paper,
        route:'refunded_resources'
    },  {
        title:'إحمالي المشتريات ',
      image:Basket,
        route:'providers'
    },  {
        title:'مواد فائضة'
        ,image:Paper2,
        route:'providers'
    }
]
const searchType = ref(1)
</script>
<template>
   <AllOrdersLayout :search="false" title="الحسابات">
    <div class="flex rounded-lg w-full mb-8 bg-[#F3F5FB] account-filter-container ">
        <div class=" z-30  px-8 w-[120px] ">
    <select  @change="(e)=>{
searchType=e.target.value
    }" class="w-[120px] h-[44px]" >
    
<option value="1" selected @click="searchType=1"> الكل</option>
<option  value="1" @click="searchType=1"> اسم المكتب</option>
<option value="1"  @click="searchType=1"> مذخر</option>
<option  value="1" @click="searchType=1"> رقم القائمة</option>
<option  value="2" @click="searchType=2"> تاريخ من إلى</option>
</select>
</div>

    <input  />




</div>
<div class=" min-h-[70vh] ">
  <div class="flex justify-start items-start gap-5 flex-row flex-wrap">

      <AccountCard v-if="searchType==1"  v-for="item in accountRoutes"   :title="item.title" :image="item.image" :route="item.route" />    
      <AccountCard   v-if="searchType==2" :type="2" v-for="item in accountRoutes2"   :title="item.title" :image="item.image" :route="item.route" />    
  </div> 
</div>

   </AllOrdersLayout>
</template>
<style scoped lang="scss">
select{
    padding: 0px 2px !important;
    border: none;
    color: #63636358;
    outline: none;
}
option{
    padding: 0px 2px !important;
    border: none;
    color: #63636358 !important;
    outline: none;
}
.account-filter-container input{
outline: none ;
width: 100%;
padding:0px 12px;
}

</style>