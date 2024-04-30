<script setup lang="ts">
    import  Avatar from '@/assets/images/avatars/avatar-1.png';
    import DoneRing from  '@/assets/images/svg/done-ring.svg'
    import ShopIcon from '@/assets/images/svg/shop-light.svg';
    import LocationIcon from '@/assets/images/svg/pin-outline.svg';
    import ChatIcon from '@/assets/images/svg/chat1.svg'
    import ProductCardSmall from '@/components/products/ProductCardSmall.vue'
import NoData from '@/components/shared/NoData.vue'
    import { OfficeDto } from '@/api/Home/HomeDto';
import  Loading from '@/components/shared/Loading.vue'
    import { HomeStore } from '@/stores/Home';
import { MaterialStore } from '@/stores/Material';
import { useFile } from '@/composables';
import { PointsOrderStore } from '@/stores/PointsOrder';
const store = HomeStore ();
const loading = ref(true)

const materialStore = MaterialStore();
const {materialSearchResponseDto} = storeToRefs(materialStore)
onMounted(async()=>{
    await store.get_governorate()
    await PointsOrderStore().get_points_orders({
      supplier_type : "office" ,
        office_id : props.id
    })
    loading.value=false

})
const {governorateResponseDto} = storeToRefs(store)
const props = defineProps({
    options:{
        type :Boolean,
        default:true
    },
    item : {
        type:OfficeDto, 
        default :new OfficeDto()
    }, 
    id :{
        type:Number
    }
})
const {getFileUrl} = useFile()
</script>
<template>

<Loading  v-if="loading==true" />
<div v-if="loading==false">
    <div class="bg-primary rounded-lg">
  
  <div class="bg-primary rounded-lg w-full pb-0  min-h-[120px]  flex justify-start items-center gap-3 p-3">
<div class="flex justify-center items-center w-[120px] h-[120px]">
  <img   v-if="item.profile_image_name" :src="getFileUrl(item.profile_image_name)"    class="w-[70px] h-[70px] rounded-full" />
  <img   v-else :src="Avatar"    class="w-[70px] h-[70px] rounded-full" />
</div>
<div class="flex justify-start  flex-col h-full items-start">
<p class="text-18">{{  item.name}}   </p>
<div class="mt-[-24px] flex justify-start "><img  class="w-6" :src="ShopIcon" />
  <p class=" text-16  mt-3 mx-1"> مكتب </p>
</div>
<div class="mt-[-24px] flex justify-start "><img  class="w-6" :src="LocationIcon" />
  <p class=" text-16  mt-3 mx-1">   {{ store.get_governorate_by_id(item.governorate_id) .name}} ,  {{item. nearest_point }} </p>
</div>
<div class="mt-[-24px] flex justify-start "><img  class="w-6" :src="DoneRing" />
  <p class=" text-16  mt-3 mx-1"> عدد المواد: {{materialSearchResponseDto.pagination.total}} </p>
</div>
</div>

</div>

<div  v-if="options" class="w-full pt-2 flex justify-center items-center">
  <div class="  h-[70px] border-top  flex justify-center items-center gap-5 w=full lg:w-[60%]">


<router-link class="bg-surface pt-3  max-h-[30px] rounded-2xl px-4 flex justify-center items-center"  :to="'../../../../inbox/'+item.id">
  <p class="text-primary text-12"> التواصل مع المكتب  </p>
  <img   :src="ChatIcon"  class=" mx-1 mt-[-15px]"  />

</router-link>

  </div>
</div>

</div>
<div  class="mt-8">
<NoData   v-if="materialSearchResponseDto.pagination.total==0&&loading==false" />

</div>
<div class="my-flex my-8">
<ProductCardSmall     :route="'../../../buying_with_points/materials/'+item.id"  v-for="(item, key) in materialSearchResponseDto.data" 
:key="key"
:item="item"
/>

</div>
<div class="w-full flex justify-center items-center"

v-if="loading==false && materialSearchResponseDto.pagination.last_page>1"
>
<v-pagination 
@click="async ()=>{
  loading=true
  await materialStore.material_search({
    page : materialSearchResponseDto.pagination.current_page,
        office_id:id 
      
    })
  loading=false
}"
v-model="materialSearchResponseDto.pagination.current_page"
:length="materialSearchResponseDto.pagination.last_page"
:total-visible="4"
></v-pagination>

</div>
</div>
</template>
<style scoped>
.border-top {
    border-top:3px dashed #fff ;
    padding:0px 80px;
}
</style>