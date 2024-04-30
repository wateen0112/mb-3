<script setup lang="ts">
import  Avatar from '@/assets/images/avatars/avatar-3.png'
</script>
<template>
    <div  class="  w-full flex justify-center items-start flex-col">
<!-- main message box -->
    <div class="w-auto ">

      <div class="flex gap-1 ">
        <img  class="rounded-full  h-10 w-10" :src="Avatar"  />
        <div  class="bg-grey-200  rounded-2xl rounded-tr-none px-2 py-2 flex justify-center items-center ">
            <p class="">        السلام عليكم </p>
        </div>
      </div>
        <p class=" text-left w-full text-10 mt-1"> م05:00 </p>
    </div>
    </div>
</template>