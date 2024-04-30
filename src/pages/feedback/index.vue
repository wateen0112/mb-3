<script setup lang="ts" >
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import NoteBookIcon from '@/assets/images/svg/notebook-light.svg'
import SubjectIcon from '@/assets/images/svg/subject.svg'

</script>
<template>
<AllOrdersLayout 
title="إرسال شكوى"
:search="false">
<div class="mt-8 ">

<div class="max-w-[433px]">
    <v-text-field
    placeholder="الموضوع"
    >

<template 

#prepend-inner >
   <img :src="SubjectIcon" alt="">
</template>

    </v-text-field>
</div>

<div class="w-[433px]  px-8 rounded-lg  bg-[#F3F5FB] mt-8 relative">
    <img  class="absolute top-6 right-2" :src="NoteBookIcon" alt="">
    <textarea   class="outline-none  w-[400px]" no-resize placeholder=" النص" rows="6" > </textarea >


 
</div>
    
</div>
</AllOrdersLayout>
</template>
<style scoped>
textarea {
    width: 400px ;
    margin-top: 12px;
    outline: none;
    font-size: 18;
border-radius: 16px !important;
padding: 10px !important;

  background-color: #F3F5FB !important;
  resize: none;

}
textarea::placeholder{
    color: #63636358;
}
</style>