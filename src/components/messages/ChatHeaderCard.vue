<script setup lang="ts">
import Avatar from '@/assets/images/avatars/avatar-1.png'
import ShopIcon from '@/assets/images/svg/shop-light.svg'
import PersonIcon from '@/assets/images/svg/user-outline.svg'
import ChatIcon from '@/assets/images/svg/chat1.svg'
import { useFile } from '@/composables'
import { object } from 'yup'
const props = defineProps(['item'])
const {getFileUrl} = useFile()
const router = useRouter()
const obj = ref({
    type :'office',
    id  :props.item.office_id, 
    title : 'مكتب', img:  props.item.office.profile_image_name,
})
const selectType = ()=>{
   
    if(props.item.office_id){
        obj.value.type='office'
        obj.value.id =props. item.office_id,
        obj.value.title ='المكتب'
        obj.value.img =props.item.office.profile_image_name
    }
    else  if(props.item.store_id){
        obj.value.type='store'
        obj.value.id =props. item.store_id
        obj.value.title ='المتجر'
        obj.value.img =props.item.store.profile_image_name
    }
    else  if(props.item.online_market_id){
        obj.value.type='online_market'
        obj.value.id =props. item.online_market_id
        obj.value.title ='المتجر الكتروني'
        obj.value.img =props.item.online_market.profile_image_name
    }
    else  if(props.item.delegate_id){
        obj.value.type='delegate'
        obj.value.id =props. item.delegate_id
        obj.value.title ='المندوب'
        obj.value.img =props.item.delegate.profile_image_name
    }
}
</script>

<template>

<div  v-if="item.office_id ||item.online_market_id||item.store_id"   class="bg-primary  w-[400px] h-auto rounded-lg" >
    <div class="  flex-row  flex justify-start relative">
<div  class="w-[150px] h-[100px] flex justify-center items-center">
   <v-img  class="rounded-full w-[70px] h-[70px]" :src="getFileUrl(obj.img)">
<template #error>
    <img  :src="Avatar" class=" mx-2 rounded-full w-[70px] h-[70px]" />

</template>

   </v-img>

</div>

<div class="flex flex-col pt-5   justify-start w-full items-start ">
<div v-if="item.office" class="flex justify-start items-start gap-2">
    <img  class="mt-1" :src="PersonIcon" alt="">
<p class="mt-">اسم {{ item.office_id? 'المكتب' : item.delegate_id ? 'المندوب':'المتجر' }}: {{item.office.name}}</p>
</div>
<div   v-if="item.delegation" class="flex  mt-[-12px] justify-start items-start gap-2">
    <img  class="mt-1" :src="PersonIcon" alt="">
<p class="mt-">اسم المندوب : {{item.delegation.name}}</p>
</div>
<div class="flex  mt-[-12px] justify-start items-start gap-2">
    <img  class="mt-1" :src="ShopIcon" alt="">
<p class="mt-">  {{item.office_id  ?'مكتب':item.delegate_id ?'مندوب':'متجر الكتروني'}} </p>
</div>
</div>

</div>
<div class="flex justify-center items-center w-full">
<div class="border-top w-[94%]"></div>

</div>
<div  class="flex justify-center pt-5  pb-[20px]   gap-5 items-center w-full">

<p   class=" cursor-pointer bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  @click="

">
    <router-link  :to="{
path:'../../../inbox/'+obj.id,
query : {
    type :obj.type
}
    }" class="text-primary text-12  mt-[-8px] py-1">التواصل مع المكتب  </router-link>
    <img   :src="ChatIcon"  class=" mx-1 mt-[-10px]"  />

</p>


</div>
</div>
</template>
<style scoped  lang="scss">
.border-top {
    border-top:3px dashed #fff ;
    padding:0px 80px;
}
</style>