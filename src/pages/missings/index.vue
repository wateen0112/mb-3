<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
</script>
<template >

<AllOrdersLayout
title="نقصوات"
>
<div class="rounded-2xl mt-8  notification-container relative overflow-hidden min-h-[200px] w-[400px]  bg-primary">
        <span></span>

        <div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">الاسم التجاري</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">تاريخ البيع</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">اجمالي المبيع</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">اسم الصيدلية</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">اسم الصيدلية</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">اسم الصيدلية</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">اسم الصيدلية</p>

<p  class="custom-table">نص تجريبي</p>

</div>

    </div>
    <div class="flex w-[400px]  mt-3
 justify-center items-center
    ">
<router-link to="missings/search">
<VBtn  class="w-[400px] shadow-xl" rounded="">بحث</VBtn>        
</router-link>
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