<script setup lang="ts">
import  Avatar from '@/assets/images/avatars/avatar-1.png';
import { useFile } from '@/composables';
const props = defineProps({
  title :{
type :String , 
default :''
  },
  img :{
    type :String , 
default :''
  },
  route :{
    type:String , 
    default:''
  },
  bannerTitle :{
    type:String , 
    default:'مكتب'
  },
  color :{
    type :String , 
    default:'white'
  }
})
const {getFileUrl} = useFile()
</script>

<template>
    <router-link  :to="route">

    
<div class=" flex-col overflow-hidden pt-8 relative bg-[#33a1948e] rounded-2xl w-[120px] h-[120px] flex justify-center items-center">
   <div   
   
   v-if="img" class="w-[50px] z-20  h-[50px] rounded-full overflow-hidden">
    <img

    :src="getFileUrl(img)" alt="" class=" z-20 w-full h-full  object-cover" >
   </div>
    <img  v-else  :src="Avatar" alt="" class=" z-20 w-[60px] h-[60px] rounded-full" >
<p  class="text-white"> {{ title.length>15 ? title.slice(0,15)+'..':title }} </p>
    <!-- absolute div -->
  
  <div :style="'background-color:'+color"  class="w-[150px] h-[20px] absolute  rotate-[-45deg] top-[10px] left-[-55px] z-30">
<p :class="color!=='white'?'text-surface':'text-primary'"  class="text-center text-12">{{bannerTitle}}</p>

  </div>
    <div  class="  z-10 absolute w-[300px] h-[300px] bg-secondary  top-[-230px] rounded-full"></div>
</div>
   </router-link>
</template>