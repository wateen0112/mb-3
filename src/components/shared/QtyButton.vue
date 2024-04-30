<script setup  lang="ts">
const props = defineProps({
    modelValue :{
        type:Number , 
        default:1000
    },
    theme :{
        type:Number , 
        default :1
    },
    maxValue  :{
        type:Number  , 
        default :1
    } ,
    minValue  :{
        type:Number  , 
        default :1
    }
})
const emit = defineEmits(['update:modelValue'])
const dec = ()=>{
if (props.modelValue>1&& props.modelValue>= props.minValue){
    
    emit('update:modelValue',parseInt(props.modelValue)-1)
}
}
const inc = ()=>{

    
 if(props.modelValue< props.maxValue)
{
    emit('update:modelValue',parseInt(props.modelValue)+1)
}
}
</script>
<template>
    <div class="qty-filed flex justify-center items-center gap-1">
<VBtn  @click="inc" rounded size="20" :color="theme==1?'primary':'surface'"><VIcon>mdi-plus</VIcon></VBtn>
<input  @change="(e)=>{emit('update:modelValue',e.target.value)}" :value="modelValue"  :class="theme==1?'text-black':'text-surface'" />
<VBtn  @click="dec" rounded size="20" :color="theme==1?'primary':'surface'"><VIcon>mdi-minus</VIcon></VBtn>

</div>
</template>
<style  scoped lang="scss">
.qty-filed{
    width: 50px !important;
   input{
        background-color: none  !important;
        padding:0px 9px;

        width: 50px !important;
outline: none;
    }

}
</style>