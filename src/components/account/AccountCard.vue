<script setup lang="ts">
const props  = defineProps({
    type:{
        type:Number , 
        default:1
    },
    image:{
        type:String , 
        default:''
    },
    title:{
        type:String , 
        default:''
    }
    ,    route:{
        type:String , 
        default:''
    },
    total:{
        type:Number,
        default:0
    }
},



)

</script>
<template>
<router-link  v-if="type==1" :to="`../../../account/${route}`">

<div class="bg-primary pt-4 flex justify-center items-center flex-col rounded-2xl w-[150px] h-[150px]">
<img :src="image" alt="">
<p class="text-surface text-14  ">{{  title}}</p>
</div>
</router-link>
<router-link  v-if="type==2" :to="`../../../account/${route}`">

<div class="bg-primary py-4 flex justify-start items-center flex-row w-[400px] rounded-2xl h-[100px]">
<img :src="image" alt="">
<div class="flex w-full flex-col justify-center items-center">
    <h1 class="   font-light text-surface text-center w-full text-14  ">{{  title}}</h1>
<h1 class="text-surface text-center w-full text-14  ">{{  total}}   دينار عراقي</h1>

</div></div>
</router-link>
</template>