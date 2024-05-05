
<script setup lang="ts">
import { MessageItem } from '@/api/Messages/MessagesDto';
import  Line1 from '@/assets/images/svg/line1.svg';
import  Line2 from '@/assets/images/svg/line2.svg';
import { useFile } from '@/composables';
const props = defineProps({
    message : {
        type :MessageItem, 
        default :new MessageItem()
    }
})
const {getFileUrl,createSinglePreview} = useFile()
</script>
<template>
           <a   v-if="message.image!==null" 
           target="_blank"
           :href="(typeof message.image=='string'?getFileUrl(message.image):createSinglePreview(message.image))"
           >
            <v-img
            class="rounded-lg mb-2 w-[300px] max-w-[300px] h-[300px] object-cover"
            v-if="message.image!==null" :lazy-src="(typeof message.image=='string'?getFileUrl(message.image):createSinglePreview(message.image))"
            :src="(typeof message.image=='string'?getFileUrl(message.image):createSinglePreview(message.image))"
            alt="">
            <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>   
        </v-img>
           </a>
    <div>
        
        <div class="w-full">
    
     <div  class="bg-primary   rounded-2xl rounded-tl-none px-2 py-2 flex justify-center items-center ">
       <p  class="text-left w-full">{{ message.message }}</p>
        </div>
    
      <div class="flex justify-end flex-row w-full items-center">
        
          <img v-if="message.is_read" class="mt-[-15px] mx-1" :src="Line2" />
          <img  v-else  class="mt-[-15px] mx-1" :src="Line1" />
        <p class=" text-left text-10 mt-1">{{message.created_at.split(' ')[1]}}</p>
    </div>
        </div>
    </div>
</template> 