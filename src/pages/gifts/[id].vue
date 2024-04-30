<script setup lang="ts">
import  AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import GiftCard from '@/components/gifts/GiftCard.vue'
import { GiftsStore } from '@/stores/Gifts';
import Loading from '@/components/shared/Loading.vue'
import  NoData from '@/components/shared/NoData.vue'
const route = useRoute () ; 
const id  = route.params.id

const store = GiftsStore();
const loading = ref(true)
const  {giftsResponseDto,giftsCategoriesResponseDto} = storeToRefs(store)
onMounted(async()=>{
    loading.value = true;
    await store.getGifts(id.toString())
    await store.getGiftsCategories()
    loading.value = false;
})
</script>
<template>
<AllOrdersLayout

:title="giftsCategoriesResponseDto.data.filter((item)=>{
    return item.id==id
})[0].name??''"
>

<Loading v-if="loading==true" />
<NoData v-if="loading==false &&giftsResponseDto.pagination.total==0" />

<div v-if="loading==false"  class="my-flex mt-8">
<GiftCard  v-for="(item ,key) in giftsResponseDto.data" :key="key"
:item="item"
/>
    
</div>
<div 
v-if="giftsResponseDto.pagination.last_page>1&&loading==false"
class="flex mt-8 justify-center items-center w-full">
<VPagination

:length="giftsResponseDto.pagination.last_page"
@click="async()=>await store.getGifts(id.toString())" :total-visible="4" v-model="giftsResponseDto.pagination.current_page"></VPagination>

</div>
</AllOrdersLayout>

</template>
