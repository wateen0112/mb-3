<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import LocationIcon from '@/assets/images/svg/pin-outline.svg'
import CallIcon from '@/assets/images/svg/call-outline.svg'
import  Avatar from '@/assets/images/avatars/avatar-2.png'
const props = defineProps(['status'])

</script>
<template>
 <AllOrdersLayout
 title="المواد الفائضة - شراء "
 >
<div class="pb-[60px] relative">
    <div  class="flex justify-start mt-8  rounded-lg   first-letter:items-center bg-primary max-w-[400px]">
        <div class="max-w-[150px] flex justify-center items-center w-[150px]">
            <img    class="  w-[90px] h-[90px] rounded-full" :src="Avatar" alt="">
        </div>
        <div  class="w-full flex h-full justify-start items-start py-4  flex-col">
<div class="flex">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="UserIcon" />
    <p class="text-14">اسم الصيدلية : عراق تكنو </p>
  
</div>

<div class="flex  mt-[-5px]  ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="CallIcon" />
    <p class="text-14">    {{  '009639641925620'}} </p>
  
</div>
<div class="flex   mt-[-5px] ">
<img  class="ml-2 w-[20px] mt-[-15px]"   :src="LocationIcon" />
    <p class="text-14">العنوان  :  بغداد </p>
  
</div>
        </div>
    </div>
 <div class="rounded-2xl mt-8  notification-container relative overflow-hidden min-h-[200px] w-[400px]  bg-primary">
        <span></span>
        <div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">الاسم التجاري للمادة</p>

<p  class="custom-table">نص تجريبي</p>

</div>
        <div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">الاسم العلمي</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table"> الشركة</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table"> الاكسباير</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table"> العدد</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">السعر </p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">ملاحظات </p>

<p  class="custom-table">نص تجريبي</p>

</div>

    </div>
    <!-- <div class="flex w-full  absolute justify-start px-2 items-start bottom-2 left-0">
<VBtn class="rounded-full shadow-lg text-white" width="400px" color="primary">

    شراء
</VBtn>

    </div> -->
        <div class="w-[400px] max-w-[400px] flex  absolute justify-center gap-5 px-2 items-center bottom-2 right-0">
      
            <VBtn class="rounded-full shadow-lg text-white"  color="#ED3443">

رفض
</VBtn>
      

    </div>
</div>
 </AllOrdersLayout>
</template>

<style scoped lang="scss" >
.custom-table{
    padding-top: 18px;

} 
.notification-container  span{
        width: 1px;
        background:#fff;
        position: absolute; 
        top: 5%;
        left: 50%;
        height: 90%;
        transform: translateX(-50%);
    }
.custom-table-container{
    border-bottom: 1px solid white;

}
</style>