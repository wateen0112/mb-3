<script  setup lang="ts">
import SearchIcon from '@/assets/images/svg/search.svg'
import { HomeStore } from '@/stores/Home'
const store = HomeStore()
const props = defineProps({
  title:{
    type:String,
    default :''
  },
  searchValue :{
type:String , 
default :''
  },
  search:{
    type:Boolean ,
    default  :true
  },
  advancedOption :{
    type:Boolean , 
    default:false
  },
  dateFrom :{
    type:String
  },
  dateTo :{
    type:String
  },
  listNumber :{
    type:String , 

  },
   officeId :  {
    type:String
   }
   ,
   storeId :  {
    type:String
   }
})
const showListDialog = ref(false)
const showOfficeDialog = ref(false)
const showStoreDialog = ref(false)
const selectedOption = ref('اسم المكتب')
const dnlOpened = ref(false)
const { officesResponseDto,onlineMarketsResponseDto,query}  =storeToRefs(store)
const emit = defineEmits([
'update:listNumber',  
'search',
'update:dateFrom',  'update:dateTo','storeFilter',  'update:storeId','update:officeId','dateFilter','officeFilter','listFilter','filter','update:searchValue'])
const router = useRouter();
const showDateDialog = ref(false)
</script>

<template>
    <v-dialog   v-model="showListDialog"  width="350">
<div  class="bg-surface  items-center pt-8 px-3 flex-row rounded-lg w-[350px]  min-h-[100px]">
  <div   >
    <label> أدخل رقم القائمة</label>
    <VTextField  class="my-2"  
    
    v-model="query.list_id"
    />
  </div>

<div class="flex my-4 justify-center items-center w-full">

<VBtn 
@click="()=>{
  showListDialog =false
  $emit('listFilter')
}"
> 
<span class="text-surface">
  تم 
</span>

</VBtn>

</div>
</div>

  </v-dialog>
  
  <v-dialog   v-model="showDateDialog"  width="350">
<div  class="bg-surface  items-center pt-8 px-3 flex-row rounded-lg w-[350px]  min-h-[100px]">
<h3  class="text-center">تاريخ من إلى </h3>
  <div  class="w-[320px]">
  <VLabel class="my-2">من</VLabel>
  <AppDateTimePicker
  
v-model="query.start"
/>
</div>
<div  class="w-[320px]">
  <VLabel class="my-2">إلى</VLabel>
  <AppDateTimePicker
  
@change="(e)=>{$emit('update:dateTo',e.target.value)}"
/>
</div>
<div class="flex my-4 justify-center items-center w-full">
<VBtn 
@click="()=>{
  showListDialog= false
  $emit('dateFilter')
}"
> 
<span class="text-surface">
  تم 
</span>

</VBtn>

</div>
</div>

  </v-dialog>
  <v-dialog   v-model="showOfficeDialog"  width="350">
<div  class="bg-surface  items-center pt-8 px-3 flex-row rounded-lg w-[350px]  min-h-[100px]">
<VLabel>أدخل اسم المكتب</VLabel>
<VAutocomplete
item-title="name"
item-value="id"
v-model="query.office_id"
:items="officesResponseDto.data"
/>
<div class="flex my-4 justify-center items-center w-full">
<VBtn 
@click="()=>{
  showOfficeDialog= false
  $emit('officeFilter')
}"
> 
<span class="text-surface">
  تم 
</span>

</VBtn>

</div>
</div>

  </v-dialog>
  <v-dialog   v-model="showStoreDialog"  width="350">
<div  class="bg-surface  items-center pt-8 px-3 flex-row rounded-lg w-[350px]  min-h-[100px]">
<VLabel>أدخل اسم المتجر</VLabel>
<VAutocomplete
item-title="name"
item-value="id"
v-model="query.store_id"
:items="onlineMarketsResponseDto.data"
/>
<div class="flex my-4 justify-center items-center w-full">
<VBtn 
@click="()=>{
  showStoreDialog= false
  $emit('officeFilter')
}"
> 
<span class="text-surface">
  تم 
</span>

</VBtn>

</div>
</div>

  </v-dialog>
<div class="bg-surface relative rounded-md shadow-sm px-4 pb-2 h-auto ">
  
  <div class="flex justify-start items-center">
     <VIcon   
     
     @click="()=>{
      
      router.go(-1);
     }"
     color="text-color"   class="ml-3" size="28">mdi-chevron-right</VIcon>
    <h1 class="my-2 text-text-color">{{ title }}</h1>
    
    <slot name="custom-title"></slot>
    
  </div>

  <div  class="" v-if="search" >
    <div class="flex rounded-lg w-full mb-8 bg-[#F3F5FB] account-filter-container ">
        <div  v-if="advancedOption==true" class=" z-30  px-8 w-[120px] ">
<slot name="custom-search"></slot>
</div>

<slot name="custom-input"></slot>
<VTextField
@keypress ="(e)=>{
  emit('update:searchValue',e.target.value)
  emit('search')
}"
v-if="advancedOption==false" variant="text" placeholder="بحث" >
<template   #prepend-inner>
  <img  :src="SearchIcon" />
</template>

  </VTextField>



</div>
</div>

<div class="min-h-[70vh]">
  <slot></slot>
</div>

</div>
</template>
<style  scoped>


</style>