<script setup lang="ts">
    import  Accepted from '@/assets/images/svg/done.svg'
    import  Rejected from '@/assets/images/svg/rejeected.svg'
const props = defineProps({
    accepted:{
        type:Boolean ,
        default:false
    }
})
</script>
<template>
    <div  class="bg-primary rounded-2xl w-[400px]    min-h-[250px] relative flex flex-col justify-center items-center ">
<div class="w-full flex justify-center items-center">
    <img :src="accepted ? Accepted:Rejected"   class="w-[200px]" alt="">

</div>
<h2 class="text-white  mt-[-20px]">{{ accepted?'تم قبول حسابك بنجاح':'للاسف ... تم رفض حسابك' }}</h2>
    </div>
</template>