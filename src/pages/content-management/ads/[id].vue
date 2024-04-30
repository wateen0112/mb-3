<script setup lang="ts" >
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import NoteBookIcon from '@/assets/images/svg/notebook-light.svg'
import SubjectIcon from '@/assets/images/svg/subject.svg'
import { emailValidator, requiredValidator } from '@validators'
import FileBtn from '@/components/shared/FileBtn.vue'
import { AdsStore } from '@/stores/Ads';
import ReviewDialog from '@/components/shared/ReviewDialog.vue'
const submitted = ref(false)
const store  = AdsStore();
const router = useRouter();
const showReviewDialog= ref(false)
const adsForm = ref()
const  {addAddvertisementDto} = storeToRefs(store)
const loading = ref(false)
const submit = async ()=>{
    submitted.value =true
if(addAddvertisementDto.value.text!==''){
    
    loading .value = true ;
await store.addAdvertisements();
loading.value=false
showReviewDialog.value = true 

}

}
</script>
<template>
    <ReviewDialog 
content="إعلانك قيد المراجعة"
    @leave="()=>{
        router.go(-1)
    }"
    v-model="showReviewDialog"
    />
<AllOrdersLayout 
title="أعلن هنا "
:search="false">
<div class="mt-8 ">



    <div
    class="flex justify-start items-end by-5 gap-5"
    >

<FileBtn 


v-model="addAddvertisementDto.image"  class="cursor-pointer" />


</div>

<VForm  ref="adsForm" class="w-[433px]  px-8 rounded-lg  bg-[#F3F5FB] mt-8 relative">
    <img  class="absolute top-6 right-2" :src="NoteBookIcon" alt="">
    <textarea 


     class="outline-none  w-[400px]" no-resize  v-model="addAddvertisementDto.text" placeholder=" النص" rows="6" >   </textarea >
     
    </VForm>
    <div 
    v-if="submitted==true  &&  addAddvertisementDto.text==''"
    class="bg-red-500 max-w-[430px] pt-8 mt-[-25px]  px-[5px] rounded-b-lg "><p class="text-white">هذا الحقل مطلوب  !</p></div>

    
<div class="max-w-[433px] mt-5">
    <v-text-field
    v-model="addAddvertisementDto.link"
    placeholder="لينك تحويل خارجي"
    >

<template 

#prepend-inner >
   <img :src="SubjectIcon" alt="">
</template>

    </v-text-field>
</div>
</div>
<div class="absolute w-[400px] bottom-3  flex justify-start items-start">
<VBtn :loading="loading"  @click="submit" rounded width="400px"  class="shadow-xl"> أضف إعلان</VBtn>
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