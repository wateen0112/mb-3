<script setup lang="ts">

import  Union from '@/assets/images/svg/union.svg';
import { HomeStore } from '@/stores/Home';
import Loading from '@/components/shared/Loading.vue';
import { useAuthorization } from '@/stores/Auth';
import { useFile } from '@/composables';
import { TabDto } from '@/api/Home/HomeDto';
const {getFileUrl} = useFile()
const matchImage = (nn:string='')=>{
 return homeResponseDto.value.tabs.filter(item=>item.name==nn
)[0]}
const store = HomeStore()
const authStore = useAuthorization();

const loading = ref(true)
const router = useRouter()
const {homeResponseDto} = storeToRefs(store)
const mainRoutes = computed(()=>{
  return [

  {
    id:2,
    title :' حسابات',
    route:'account',  
 
    
  },
 
  {
    id:4,
    title :'العروض',
    route:'offers',
    
  },
  {
    id:5,
    title :'التنبيهات',
    route:'notifications',
    
  },   {
    id:7,
    title :'الموردين',
    route:'providers',
    
  },   {
    id:9,
    title :'المندوبين',
    route:'representatives',
    
  },  {
    id:10,
    title :'مواد وصلت حديثا',
    route:'new_materials',
    
  },  {
    id:11,
    title :'العاملين',
    route:'workers',
    
  },  {
    id:13,
    title :'مساعدة في ',
    route:'',
    
  },  {
    id:14,
    title :'العينات المجانية',
    route:'free_items',
    
  }, 
  
  
  {
    id:15,
    title :'المحادثات',
    route:'inbox',
    
  },  {
    id:16,
    title :'متاجر إلكترونية',
    route:'e_stores',
    
  },  {
    id:17,
    title :'شراء بالنقاط',
    route:'buying_with_points',
    
  },  {
    id:18,
    title :'وظائف',
    route:'tasks',
    
  },   {
    id:20,
    title :'الهدايا',
    route:'gifts',
    
  }
]
})
onMounted(async()=>{

try {
  loading.value=true;
await  store.home()
await authStore.getUserData()
loading.value=false;
} catch (error) {

  loading.value=false;

  
throw(error)
}

})

const matchData = (id:number)=>{
  return mainRoutes.value.find((i:any)=>{
    return  i.id ==id
  })
}
</script>
<template>
  <div class="flex w-full flex-row flex-wrap justify-start items-center gap-x-5 ">

<Loading  v-if="loading==true" />
<div  v-else v-for="(item, i) in  homeResponseDto.tabs" :key="i">
  <router-link   :to="matchData(item.id)?.route??''"    >
<div  class="flex justify-center items-center flex-col ">
  <img v-if="item.image"   class="w-[90px] h-[60px] rounded-lg"  :src="getFileUrl(item.image)" />

  <img     v-else class="w-[90px] h-[60px] rounded-lg"  :src="Union" />

  <p class=" mt-2 text-grey-text">
    <!-- {{   matchImage(item.title)["image"] }} -->
    {{ item.name }}
  </p>
</div>

 </router-link>
</div>
  </div>
</template>
