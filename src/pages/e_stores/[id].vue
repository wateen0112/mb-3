<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import StoreDetailsTitleCard from '../../components/EStores/StoreDetailsTitleCard.vue';
import ProductCardSmall from '@/components/products/ProductCardSmall.vue'
import  Avatar from '@/assets/images/avatars/avatar-1.png';
    import DoneRing from  '@/assets/images/svg/done-ring.svg'
    import ShopIcon from '@/assets/images/svg/shop-light.svg';
    import LocationIcon from '@/assets/images/svg/pin-outline.svg';
    import ChatIcon from '@/assets/images/svg/chat1.svg'
import { HomeStore } from '@/stores/Home';
import  Loading from '@/components/shared/Loading.vue'
import  NoData from '@/components/shared/NoData.vue'
import { useFile } from '@/composables';
import { MaterialStore } from '@/stores/Material';
const {getFileUrl} = useFile()
const materialStore = MaterialStore()
const {material} = storeToRefs(materialStore)
  const route = useRoute ();
  const id = route.params.id.toString();
const loading = ref(true)
const store = HomeStore ();
onMounted(async()=>{
try {
loading.value = true 
await  store.get_online_market({
    online_market_id :id
});
loading.value = false
} catch (error) {
    loading.value = false
    throw(error)
}
})
const {singleOnlineMarketResponse}  = storeToRefs(store)
</script>
<template>
<AllOrdersLayout

title="تفاصيل المتجر "
>
<!-- {{ singleOnlineMarketResponse.market }} -->
<Loading   v-if="loading==true" />
 <div  v-else  class="flex mt-8  justify-start items-start gap-5 flex-col flex-wrap">
    <div class="bg-primary  w-full rounded-lg">
    <div class="bg-primary rounded-lg w-full pb-0  min-h-[120px]  flex justify-start items-center gap-3 p-3">
<div class="flex justify-center items-center w-[120px] h-[120px]">
    <img  v-if="singleOnlineMarketResponse.market.profile_image_name" :src="getFileUrl(singleOnlineMarketResponse.market.profile_image_name)"    class="w-[70px] h-[70px] rounded-full   object-cover" />
    <img  v-else :src="Avatar"    class="w-[70px] h-[70px] rounded-full" />
</div>

<div class="flex justify-start  flex-col h-full items-start">
<p class="text-[28px]">{{ 
    singleOnlineMarketResponse.market.name
    }}   </p>
<div class="mt-[-24px] flex justify-start "><img  class="w-6" :src="ShopIcon" />
    <p class=" text-16  mt-3 mx-1"> متجر الكتروني </p>
</div>
<div class="mt-[-24px] flex justify-start "><img  class="w-6" :src="LocationIcon" />
    <p class=" text-16  mt-3 mx-1"> {{ singleOnlineMarketResponse.market.nearest_point }}  </p>
</div>
<div class="mt-[-24px] flex justify-start "><img  class="w-6" :src="DoneRing" />
    <p class=" text-16  mt-3 mx-1">  عدد المواد :  {{singleOnlineMarketResponse.pagination.total}} </p>
</div>
</div>

</div>

<div   class="w-full pt-2 flex justify-start items-center ">
    <div class="  h-[70px] border-top  flex justify-start lg:mr-[150px] items-center gap-5 w=full lg:w-[60%]">


<router-link class="bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  :to="{
path:'../../../inbox/'+singleOnlineMarketResponse.market.id ,query:{
type:'online_market'
}
}">
    <p class="text-primary text-12"> التواصل مع المتجر  </p>
    <img   :src="ChatIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>

    </div>
</div>

</div>
 </div>

 <NoData  v-if="singleOnlineMarketResponse.pagination.total==0" />
 <div class="my-flex mt-8"  v-if="loading==false&&singleOnlineMarketResponse.pagination.total>0">

<ProductCardSmall 

v-for="item in  singleOnlineMarketResponse.materials"  :route="`../../../../materials/${item.id}`"  :item="item" />

 </div>



</AllOrdersLayout>
</template>