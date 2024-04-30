<script setup lang="ts">
import { MaterialDto } from '@/api/Home/HomeDto'
import  CameraIcon from '@/assets/images/svg/camera-icon1.svg'
import QtyButton from '@/components/shared/QtyButton.vue'
import { useFile } from '@/composables'
const  {getFileUrl} = useFile()
const props  = defineProps({
    options:{
        type:Boolean ,
        default:false
    },
    modelValue:{
        type:Number , 
        default :1
    },
    route:{
      type :String , 
      default:''
    },
    item :{
      type : Object,
      default :new MaterialDto()
    },
    inPoints :{
      type :Boolean , 
      default : false
    }
})
const emit = defineEmits(['delete','update:modelValue'])
const qty = ref(1)
</script>
<template>

<router-link :to="route">
    <div class="  box-shadow rounded-lg overflow-hidden p-2  pb-0 bg-surface flex-col flex justify-start items-start  w-[150px]">

      <div class="flex justify-center rounded-lg items-center w-full h-[120px] bg-[#F3F5FB] ">
        <img  v-if="getFileUrl(item.image_name)"  :src="CameraIcon" class="w-9" />
        <img  v-else :src="CameraIcon" class="w-9" />
      </div>
      <div class="flex flex-col mt-1  justify-start h-full items-start">

        <p  class="text-text-color text-12 "> {{item.trade_name  }}   </p>
<div class="flex justify-between items-center w-full" >
  
  <p  v-if="item.material"  class="text-text-color mt-[-12px] text-12  font-semibold">  د.ع  {{item.material.price}} </p>
  <p v-if="item.price"  class="text-text-color mt-[-12px] text-12  font-semibold">  د.ع {{item.price}} </p>
  <p  v-if="item.amount" class="text-10 text-left mr-8 font-light flex ">  {{ item.amount }} {{ item.amount >10?'قطعة':'قطع' }}</p>
  <p   v-if="item.free_qty" class="text-10 text-left mr-8 font-light flex ">  {{ item.free_qty }} {{ item.free_qty >10?'قطعة':'قطع' }}</p>
</div>

      </div>
     
    </div>
</router-link>
</template>
<style scoped>



</style>