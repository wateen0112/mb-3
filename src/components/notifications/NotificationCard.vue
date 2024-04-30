<script setup   lang="ts">
import BellIcon from '@/assets/images/svg/bell-light.svg'
const props = defineProps (
{

    title :{
        type :String , 
        default:''
    },
    count :{
        type :Number , 
        default:0
    },
    route :{
        type :String , 
        default:''
    }
}
)
</script>
<template>
<router-link :to="'notifications/'+route">

    <div  class=" relative bg-primary w-[166px] h-[166px] flex justify-center items-center flex-col py-8 rounded">
        <h3 class="text-white absolute top-[45px] left-[85px]  bg-red-500 w-5 h-5 rounded-full pt-[3px] flex justify-center items-center text-14"> {{ count }}</h3>
        <img  :src="BellIcon" />
         <h3  class="text-white text-14">{{ title }}</h3>
       

    </div>

</router-link>
</template>