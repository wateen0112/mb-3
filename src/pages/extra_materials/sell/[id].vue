<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
const props = defineProps(['status'])

</script>
<template>
 <AllOrdersLayout
 title="المواد الفائضة - بيع "
 >
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
    <div class="flex w-full  absolute justify-start px-2 items-start bottom-2 left-0">
<VBtn class="rounded-full shadow-lg text-white" width="400px" color="primary">

    إرسال
</VBtn>

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