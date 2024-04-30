<script   setup lang="ts">
import { GiftDto } from '@/api/Gifts/GiftsDto'
import  CameraIcon from '@/assets/images/svg/camera-icon1.svg'
import { useFile } from '@/composables'
import { GiftsStore } from '@/stores/Gifts'
const {getFileUrl}  = useFile()
const loading = ref(false)
const store = GiftsStore()
const props = defineProps({
    item :{
        type :GiftDto , 
        default:new GiftDto()
    }
})

 const sendRequest = async()=>{
    loading.value = true ;
    await store.add_gift_request(props.item.id.toString()) 
    loading.value = false ; 

 }
</script>
<template>
    <div class=" rounded-lg pb-5 bg-primary flex justify-center items-center flex-col w-[164px] h-auto">
        <div   v-if="item.image_name"  class=" overflow-hidden w-full h-[164px] bg-[#EAEFFF] rounded-lg flex justify-center items-center">
        
        <img :src="getFileUrl(item.image_name)??CameraIcon"  class="w-full h-full object-cover" alt="">
       </div>
     
        <div   v-else class="w-full h-[164px] bg-[#EAEFFF] rounded-lg flex justify-center items-center">
            <img :src="CameraIcon"  class="w-10" alt="">
        </div>
 
        <p class="text-surface mt-3">
{{item.name}}

        </p>
        <p class="text-surface mt-[-20px]">
{{  item.points}} نقطة

        </p>
        <div class="flex mt-[-10px] justify-center items-center w-full">
            <VBtn 
            @click="sendRequest"
            :loading="loading"
            color="surface" class="rounded-lg"><span class=" px-8 text-primary">طلب</span> </VBtn>


        </div>
    </div>
</template>