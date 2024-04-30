<script setup lang="ts">
import { Delegation } from "@/api/Order/OrderDto";
import Avatar  from '@/assets/images/avatars/avatar-1.png'
import User from '@/assets/images/svg/user-outline.svg'
import  Shop from '@/assets/images/svg/shop-light.svg'
import { useFile } from "@/composables";
import  Chat from '@/assets/images/svg/chat1.svg'
const props = defineProps  ({
    item  :{
    type :Delegation ,
    default: new Delegation()
}
})
const {getFileUrl} = useFile()
</script>
<template>
  <div class="bg-primary  w-[400px] p-2  rounded-lg">
<div class="flex justify-start items-start flex-row gap-3">
    <div>
        <img  v-if="item.profile_image_name" class="rounded-full  w-20 h-20 object-cover"   :src="getFileUrl(item.profile_image_name)" />
        <img    v-else class="rounded-full w-20 h-20 object-cover"   :src="Avatar" />
    </div>
    <div class="flex flex-col justify-start items-start  pt-2">
<div class="flex justify-start">
<img   class="mt-[-15px]  w-5 ml-1"  :src="User"    />
<p class="text-14">اسم المندوب :</p>
<p class="text-14">
{{ 
    item.delegation_name }}

</p>

</div>
<div   v-if="item.office_id"  class="flex justify-start  mt-[-10px]">
<img   class="mt-[-15px]  w-5 ml-1"  :src="User"    />
<p class="text-14">اسم المكتب :</p>
<p class="text-14">
{{ 
    item.office.name }}

</p>
</div>
<div  v-if="item.pharmacy_id" class="flex justify-start  mt-[-10px]">
<img   class="mt-[-15px]  w-5 ml-1"  :src="User"    />
<p class="text-14">اسم الصيدلية :</p>
<p class="text-14">
{{ 
    item.pharmacy.name }}

</p>
</div>
<div  v-if="item.store_id"  class="flex justify-start  mt-[-10px]">
<img   class="mt-[-15px]  w-5 ml-1"  :src="User"    />
<p class="text-14">اسم المتجر :</p>
<p class="text-14">
{{ 
    item.store.name }}

</p>
</div>


<div class="flex justify-start  mt-[-10px]">
<img   class="mt-[-15px]  w-5 ml-1"  :src="Shop"    />

<p class="text-14"  v-if="item.office_id" >
مندوب مكتب

</p>
<p class="text-14"  v-else-if="item.pharmacy_id" >
مندوب صيدلية

</p>
<p class="text-14"  v-else-if="item.store_id" >
مندوب متجر

</p>

</div>

    </div>
</div>
<div  class="flex justify-center  px-8 items-center  w-full" >
<span   class="dashed  w-full"></span>

</div>
<div  class="flex justify-center items-center   py-3 gap-5">
<router-link   v-if="item.office_id" class="bg-surface py-1 px-2 rounded-full  "  :to="'../../../../inbox/'+item.office_id" >
   <img class="mb-[-5px]" :src="Chat" />
    <span class="text-primary">التواصل مع المورد</span>
</router-link>
<router-link   v-else-if="item.pharmacy_id" class="bg-surface py-1 px-2 rounded-full  "  :to="'../../../../inbox/'+item.pharmacy_id" >
   <img class="mb-[-5px]" :src="Chat" />
    <span class="text-primary">التواصل مع المورد</span>
</router-link>
<router-link   v-else-if="item.store_id" class="bg-surface py-1 px-2 rounded-full  "  :to="'../../../../inbox/'+item.store_id" >
   <img class="mb-[-5px]" :src="Chat" />
    <span class="text-primary">التواصل مع المورد</span>
</router-link>
<router-link  class="bg-surface py-1 px-2 rounded-full  "  :to="'../../../../inbox/'+item.id" >
   <img class="mb-[-5px]" :src="Chat" />
    <span class="text-primary">التواصل مع المندوب</span>
</router-link>

</div>
  </div>
</template>
<style scoped >

.dashed{
    
    border : 1px dashed white;
}
</style>