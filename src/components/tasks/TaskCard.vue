<script setup >
import NoteBookIcon from '@/assets/images/svg/notebook-light.svg'
</script>
<template>
   <div class=" mt-2 flex justify-start items-start gap-5 flex-col">
    <div class="  box-shadow rounded-lg bg-primary w-[400px] h-[140px] "> 
      <h1 class="text-white">صورة</h1>  
    </div>

    <VCard  color="#F3F5FB"
    class="w-[400px] h-[40px] mt-[-20px] rounded-tr-none box-shadow" >
  
  <div class="w-full flex justify-start items-center flex-row  px-2" >
<img   :src="NoteBookIcon" class="mt-[-5px]" />
<p class="text-[#9095A5]  mt-[12px]  mx-1"> {{ 'النص' }}</p>
  </div>
  </VCard>
   </div>
</template>