<script setup lang="ts">
const props = defineProps(['status'])
</script>
<template>
    <div class="rounded-2xl  notification-container relative overflow-hidden min-h-[200px] w-[400px]  bg-primary">
        <span></span>

        <div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">اسم الصيدلية</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table"> موقع الصيدلية</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table"> الموضوع</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">رفع صورة </p>

<p  class="custom-table"><VBtn color="white" class="text-black rounded-lg font-semibold" >تصفح</VBtn> </p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table"> ملاحظات</p>

<p  class="custom-table">2 </p>

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