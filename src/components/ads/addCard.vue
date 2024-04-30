<script setup >
import NoteBookIcon from '@/assets/images/svg/notebook-light.svg'
import GoldMedal from '@/assets/images/svg/gold-medal.svg'
import { AdsItemDto } from '@/api/Ads/AddsDto'
import { useFile } from '@/composables'
const props = defineProps({
  item : {
    type:AdsItemDto , 
    default :new AdsItemDto()
  }
})
const {getFileUrl}  = useFile()
</script>
<template>
   <div class="  overflow-hidden relative mt-2 flex justify-start items-start gap-5 flex-col">
    
    <div class="bg-[#ED3443]
    flex justify-center items-center
    w-[200px] h-[30px]  absolute top-5 left-[-65px] rotate-[-45deg] ">

<img class="w-7"  :src="GoldMedal" />
<p  class=" mx-[1px] text-10 mt-2.5 text-white ">اعلان مميز</p>
</div>
    <div class=" overflow-hidden box-shadow rounded-t-lg bg-primary w-[400px] h-[140px] "> 
    <img  v-if="item.image!==null" :src="getFileUrl(item.image)" class="object-contain w-full" alt="">
    </div>

    <VCard  color="#F3F5FB"
    class="w-[400px] h-auto rounded-b-[16px] pb-2 mt-[-20px] rounded-tr-none box-shadow" >
  
  <div class="w-full  flex justify-start items-center flex-row  px-2" >
<img   :src="NoteBookIcon" class="mt-[-5px]" />
<p class="text-[#9095A5]  mt-[12px]  mx-1"> {{ item.text}}</p>
  </div>
  
  <div class="w-full  flex justify-start items-center flex-row  px-2" >
<VIcon  class="mt-3"  color="#9095A5">mdi-link</VIcon>
<a  target="_blank"   :href="item.link" class="text-[#9095A5]  mt-[12px]  mx-1"> {{ item.link}}</a>
  </div>

  </VCard>
 
   </div>
</template>