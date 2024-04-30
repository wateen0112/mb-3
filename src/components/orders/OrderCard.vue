<script setup   lang="ts">

const props = defineProps (
{
    img :{
        type :String , 
        default:''
    },
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
    },

}
)
</script>
<template>
<router-link :to="route">
    <div  class="bg-primary w-[166px] h-[166px] flex justify-center items-center flex-col py-8 rounded">
        <img   class="w-[40px] mb-2"  :src="img" />
         <h3  class="text-white text-14">{{ title }}</h3>
         <h3 class="text-white  text-14"> {{ count }}</h3>

    </div>

</router-link>
</template>