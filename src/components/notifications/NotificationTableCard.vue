<script setup lang="ts">
const props = defineProps(['status'])
</script>
<template>
    <div class="rounded-2xl  notification-container relative overflow-hidden min-h-[200px] w-[400px]  bg-primary">
        <span></span>
<div  class="absolute  rotate-[-45deg] top-[14px] left-[-60px] w-[180px] h-[30px]"

:class="status!=='offer'?'bg-[#9095A5]':'bg-red-500'"
>
<p class="text-center text-14 mt-[2px]">{{  status!=='offer'?' فائض - بيع':'عرض'}}</p>
</div>
        <div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">المادة</p>

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

    </div>
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