<script setup lang="ts">
import { CartMaterialDto } from '@/api/Order/OrderDto'
import  CameraIcon from '@/assets/images/svg/camera-icon1.svg'
import QtyButton from '@/components/shared/QtyButton.vue'
import { useFile } from '@/composables'
const props  = defineProps({
    options:{
        type:Boolean ,
        default:false
    },
    modelValue:{
        type:Number , 
        default :1
    },
    item :{
      type :CartMaterialDto,
      default:new  CartMaterialDto()
    }
})
const {getFileUrl}  = useFile()
const emit = defineEmits(['delete','update:modelValue'])

</script>
<template>
<router-link to="">

    <div class="flex justify-start items-start  w-[450px]">
      <img  class="flex justify-center  rounded-lg  items-center w-[120px] h-[120px] bg-[#F3F5FB] "  v-if="item.material.image_name" :src="getFileUrl(item.material.image_name)" />
      <div  v-else class="flex justify-center items-center w-[120px] h-[120px] bg-[#F3F5FB] ">
        <img  :src="CameraIcon" />
      </div>
      <div class="flex flex-col  p-5 justify-start h-full items-start">
<p   :class="item.material.offer_price?' line-through':''" class="text-text-color"> {{  item.material.price}} دينار عراقي   </p>
<p      v-if="item.material.offer_price" class="text-text-color"> {{  item.material.offer_price}} دينار عراقي   </p>

<p  class="text-text-color mt-[-12px]"> {{  item.material.trade_name}}  </p>

      </div>
      <div v-if="options"
      class="flex justify-start pt-2  min-w-[120px] items-center flex-col"
      >
      <QtyButton  v-model="item.qty" />
      <VBtn  @click="$emit('delete')" class="mt-3 rounded-lg " height="40px"><span> حذف</span></VBtn>
      </div>
    </div>
</router-link>
</template>