<script setup lang="ts">
import Avatar from '@/assets/images/avatars/avatar-1.png'
import ShopIcon from '@/assets/images/svg/shop-light.svg'
import PersonIcon from '@/assets/images/svg/user-outline.svg'
import ChatIcon from '@/assets/images/svg/chat1.svg'
import { useFile } from '@/composables'
const props = defineProps(['item'])
const {getFileUrl} = useFile()
</script>

<template>

<div class="bg-primary  w-[400px] h-auto rounded-lg" >
    <div class="  flex-row  flex justify-start relative">
<div v-if="item.office" class="w-[150px] h-[100px] flex justify-center items-center">
   <v-img  class="rounded-full w-[70px] h-[70px]" :src="getFileUrl(item.office.profile_image_name)">
<template #error>
    <img  :src="Avatar" class="rounded-full w-[70px] h-[70px]" />

</template>

   </v-img>

</div>

<div class="flex flex-col pt-5   justify-start w-full items-start ">
<div v-if="item.office" class="flex justify-start items-start gap-2">
    <img  class="mt-1" :src="PersonIcon" alt="">
<p class="mt-">اسم المكتب: {{item.office.name}}</p>
</div>
<div class="flex  mt-[-12px] justify-start items-start gap-2">
    <img  class="mt-1" :src="PersonIcon" alt="">
<p class="mt-">اسم المندوب : اليقين</p>
</div>
<div class="flex  mt-[-12px] justify-start items-start gap-2">
    <img  class="mt-1" :src="ShopIcon" alt="">
<p class="mt-">  مكتب </p>
</div>
</div>

</div>
<div class="flex justify-center items-center w-full">
<div class="border-top w-[94%]"></div>

</div>
<div  class="flex justify-center pt-5  pb-[20px]   gap-5 items-center w-full">

<router-link   class="bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  :to="{
path:'inbox/'+item.office.id ,
query :{
    type:'office'
}
}">
    <p class="text-primary text-12">التواصل مع المكتب  </p>
    <img   :src="ChatIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>
<!-- <router-link class="bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  to="inbox/dsadasd">
    <p class="text-primary text-12"> التواصل مع المذخر  </p>
    <img   :src="ChatIcon"  class=" mx-1 mt-[-15px]"  />

</router-link> -->

</div>
</div>
</template>
<style scoped  lang="scss">
.border-top {
    border-top:3px dashed #fff ;
    padding:0px 80px;
}
</style>