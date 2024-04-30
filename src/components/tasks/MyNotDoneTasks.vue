<script setup lang="ts">
const props = defineProps(['status'])
</script>
<template>
<div>
    <div class="rounded-2xl pb-[60px]  notification-container    relative  min-h-[200px] w-[400px]  bg-primary">
        <span></span>

        <div  class=" custom-table-container  flex justify-around items-center">
<p  class="custom-table">نوع المهام</p>

<p  class="custom-table">نص تجريبي</p>

</div>
<div   v-for="item in 3" class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">  بندول </p>

<p  class="custom-table">شرح عن المادة </p>

</div>
<div  class="  custom-table-container flex justify-around items-center">
<p  class="custom-table">  وقت الزيارة </p>

<p  class="custom-table"> 2024-12-13 - 9:00 am </p>

</div>


    </div>
    <div class="flex justify-center mt-[-20px] items-center gap-5 h-[40px] w-[400px] " >
        <VBtn rounded class="shadow-lg" height="45px"  variant="elevated" color="#FFBE16">
<span class="text-surface px-4 py-2">انتهى</span>

</VBtn>
        <VBtn rounded class="shadow-lg" height="45px"  variant="elevated" color="#ED3443">
<span class="text-surface px-4 py-2">رفض</span>

</VBtn>

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