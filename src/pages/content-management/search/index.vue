<script setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import SearchIcon from '@/assets/images/svg/search.svg'
import { HomeStore } from '@/stores/Home'
import { MaterialStore } from '@/stores/Material'
import MaterialCard from '@/components/products/MaterialCard.vue'
import Loading from '@/components/shared/Loading.vue'
import NoData from '@/components/shared/NoData.vue'
const homeStore =  HomeStore()
const materialStore = MaterialStore()

const searchStarted= ref(false)
const officeFilter = ref('الكل')
const providerFilter = ref('الكل')
const medShapeFilter = ref('حب')
const MaterialShapeValue = ref('')
const mainLoading = ref(true)
const customSearchContent = ref('اسم المكتب')
const  dnlOpened = ref(false)
const searchMode = ref('office')
const materialShapeValue = ref('')
const showMaterialShapeDetails= ref(false)
const officesSearchKeyWords = ref(JSON.parse(localStorage.getItem('officesSearchKeyWords'))??[])
const officesValue = ref('')
const tradeNameValue= ref('')
const scientificNameValue= ref('')
const loading = ref(false)
const showMaterialDetails  = ref(false)
const {officesResponseDto,materialShapeResponseDto} = storeToRefs(homeStore)
const {materialSearchResponseDto} = storeToRefs(materialStore)
const offices_search =async(e:string)=>{
    officesResponseDto.value .data = []
    officesValue.value = e
   if(officesValue.value!=''){
    loading.value=true
    
    await homeStore.get_offices({
        name:e
    })
    loading.value=false
   }
}
const materialSearchT =async(e:any)=>{
    materialSearchResponseDto.value.data= []
    materialShapeValue.value = e.target.value
  if(materialShapeValue.value!==''){
    loading.value=true
    await materialStore.material_search({
        trade_name:e.target.value
    })
    loading.value=false  
}
}
const materialSearchS =async(e:any)=>{
    materialSearchResponseDto.value.data= []
    materialShapeValue.value = e.target.value
  if(materialShapeValue.value!==''){
    loading.value=true
    await materialStore.material_search({
        scientific_name:e.target.value
    })
    loading.value=false
  }
}
const addToOfficesKeyWords= (kw:string)=>{
   officesSearchKeyWords.value= JSON.parse(localStorage.getItem('officesSearchKeyWords'))??[];
   if (officesSearchKeyWords.value.length>4){
    officesSearchKeyWords.value=[]
   }
if (!officesSearchKeyWords.value.includes(kw)&&kw!==''){
    officesSearchKeyWords.value.push(kw);
}
    localStorage.setItem('officesSearchKeyWords',JSON.stringify(officesSearchKeyWords.value))
}
onMounted(async()=>{
try {
    mainLoading.value = true 
    await homeStore.get_material_shapes()
    mainLoading.value = false
} catch (error) {
    mainLoading.value = false
    throw(error)
}
})
/**
 * this data will be used for search
 * officesValue
 * materialShapeValue  (for shape)
 * tradeNameValue
 * scientificNameValue
 * 
 */
const  applySearch = async()=>{
//     console.log(
//        "office name  :" + officesValue.value ,
//    "material shape  : "+   materialShapeValue.value.id  ,
//    "material trading name   : "+   tradeNameValue.value  ,
//    "material scientific name   : "+   scientificNameValue.value  ,

//     );
searchStarted.value = true
    try {
        let searchQuery = {
            trade_name : tradeNameValue.value,
            scientific_name :scientificNameValue.value,
            pharma_shape_id  :materialShapeValue.id , 
            office_id : officesValue.value
        }

        // console.log(  ' search query is  : ', searchQuery);
        
         if (scientificNameValue.value ==''){
            delete searchQuery.scientific_name
         }
         if (
            tradeNameValue.value==''
         ){
            delete searchQuery.trade_name
         }
         if (officesValue.value==''){
delete searchQuery.office_id
         }
          if (materialShapeValue.value ==''){
            delete  searchQuery.pharma_shape_id
          }
        mainLoading.value = true ; 
    //   console.log( ' search query after  :  ', searchQuery);
        
        await materialStore.material_search(searchQuery)

        mainLoading.value = false; 
    } catch (error) {
        mainLoading.value = false; 
        throw(error)
    }
}
const resetData = ()=>{
    materialSearchResponseDto.value.data = []
materialSearchResponseDto.value .pagination  .total = 0;
officesValue .value = ''
searchStarted.value=false
tradeNameValue.value = ''
searchMode.value = 'office'
materialShapeValue .value = ''
}
</script>
<template>
    <div>
        
      <AllOrdersLayout 
      :advanced-option="true"
      :custom-search="true"
      :custom-input="true"
      title="البحث" >
      
       <template #custom-search>

        <h4  @click="dnlOpened=!dnlOpened" class=" z-30 h-[44px]  w-[100px] cursor-pointer pt-[15px]">{{ customSearchContent }}</h4>
        <ul v-if="dnlOpened&&showMaterialDetails==false&&showMaterialShapeDetails==false" class="bg-surface shadow-md rounded-lg ">
      
      <!-- <option selected> الكل</option> -->
      <li class="flex justify-around items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]"  > 
      <div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
      <span  class="w-[100px]">الكل</span> </li>
      <li
      @click="()=>{
dnlOpened=false
searchMode= 'office'
customSearchContent= 'اسم المكتب'
officesResponseDto.data= []
}"
      
      class="flex justify-around items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]"   > 
      <div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
      <span class="w-[100px]">اسم المكتب</span>  </li>
      
      <li
@click="()=>{

    showMaterialDetails=true
    searchMode= 'materialTradeName'
    customSearchContent= 'اسم المادة'
    materialSearchResponseDto.data= []
}"
       class="flex justify-around items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]">
      <div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
      
      
      <span  class="w-[100px]">اسم المادة</span>  </li>
      <li
@click="()=>{

showMaterialShapeDetails=true
    searchMode= 'materialShape'
    customSearchContent= 'الشكل الدوائي'
    materialSearchResponseDto.data= []
}"
       class="flex justify-around items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]">
      <div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
      
      
      <span  class="w-[100px]">الشكل الدوائي </span>  </li>
      </ul>
      <ul v-if="dnlOpened&&showMaterialDetails==true&&showMaterialShapeDetails==false" class="bg-surface shadow-md rounded-lg ">
      
      <!-- <option selected> الكل</option> -->
      <li 
      @click="showMaterialDetails=false"
      class="flex justify-around items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]"  > 
      <div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
      <span  class="w-[100px]">رجوع</span> </li>
      <li
      @click="()=>{
dnlOpened=false
showMaterialDetails=true
searchMode= 'materialTradeName'
customSearchContent= 'اسم تجاري'
materialSearchResponseDto.data= []
}"
      class="flex justify-around items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]"   > 
      <div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
     <span class="w-[100px]"> اسم  تجاري </span></li>
      
 
      <li
      @click="()=>{
dnlOpened= false
showMaterialDetails=true
searchMode= 'materialScientificName'
customSearchContent= 'اسم علمي'
materialSearchResponseDto.data= []
}"
       class="flex justify-around items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]">
      <div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
      
      
      <span  class="w-[100px]">اسم علمي</span>  </li>
      </ul>
      <ul v-if="dnlOpened&&showMaterialShapeDetails==true&&showMaterialDetails==false" class="bg-surface shadow-md rounded-lg ">
      
      <!-- <option selected> الكل</option> -->
      <li 
      @click="showMaterialShapeDetails=false"
      class="flex justify-around items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]"  > 
      <div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
      <span class="w-[100px]">رجوع</span> </li>
   
 
      <li

      v-for="(item , index) in materialShapeResponseDto.data" :key="index"
      @click="()=>{
dnlOpened= false
showMaterialDetails=true
searchMode= 'materialShape'
customSearchContent= item.id.toString()
materialSearchResponseDto.data= []
}"
       class="flex justify-around items-center gap-2 p-2 text-[#9095A5]  relative cursor-pointer hover:bg-[#eee]">
      <div class="w-[3px] h-[3px] p-1 bg-[#9095A5]"></div>
      
      
      <span class="w-[100px]">{{ item .name}} </span>  </li>
      </ul>
       </template>

       <template   
       #custom-input
       >
   <!-- mode   = office -->
<div  @click="dnlOpened=false" class="search-bar">
    <VAutocomplete
    @keyup.enter="async(e)=>{
        addToOfficesKeyWords(e.target.value)
    }"
    v-if="searchMode=='office'"
    item-value="id"
v-model="officesValue"
@input="async (e)=>{
   await offices_search(e.target.value)
   officesValue =  officesResponseDto.data[0].id ??''
}"
:items="officesResponseDto.data"
item-title="name"
variant="text"  class="w-[800px] mt-2"  >
<template   
#prepend-inner
>
<img class="mt-[-5px]" :src="SearchIcon" />
</template>
<template  #append-inner>

    <v-progress-circular
    v-if="loading==true"
    class="mt-[-10px]"
      color="primary"
      indeterminate
    ></v-progress-circular>
</template>
</VAutocomplete>
   <!-- mode   = material trade name -->
   <VAutocomplete
    v-if="searchMode=='materialTradeName'"

@input="async (e)=>{
   await materialSearchT(e)

}"
v-model="tradeNameValue"
item-value="trade_name"
:items="materialSearchResponseDto.data"
item-title="trade_name"
variant="text"  class="w-[800px] mt-2"  >
<template   
#prepend-inner
>
<img class="mt-[-5px]" :src="SearchIcon" />
</template>
<template  #append-inner>

    <v-progress-circular
    v-if="loading==true"
    class="mt-[-10px]"
      color="primary"
      indeterminate
    ></v-progress-circular>
</template>
</VAutocomplete>
   <!-- mode   = material sen name -->
<VAutocomplete
    v-if="searchMode=='materialScientificName'"

@input="async (e)=>{
   await materialSearchS(e)
}"
:items="materialSearchResponseDto.data"
item-title="scientific_name"
item-value="scientific_name"
v-model="scientificNameValue"
variant="text"  class="w-[800px] mt-2"  >
<template   
#prepend-inner
>
<img class="mt-[-5px]" :src="SearchIcon" />
</template>
<template  #append-inner>

    <v-progress-circular
    v-if="loading==true"
    class="mt-[-10px]"
      color="primary"
      indeterminate
    ></v-progress-circular>
</template>
</VAutocomplete>
</div>
    </template>
<Loading v-if="mainLoading==true"/>
<div v-if="mainLoading==false">
    <div  class="flex justify-start pt-4 items-start flex-col ">
    <h2>المكاتب </h2>
<div class="w-full  flex    mt-8 first-letter:justify-start gap-12 flex-row flex-wrap">
<VChip   

v-for="item in officesSearchKeyWords" class=" scale-125" color="primary" @click="async()=>{
    searchMode='office'
    dnlOpened=false
    customSearchContent='اسم المكتب'
    officesValue=item
 await offices_search(item)
officesValue = officesResponseDto.data[0].id??''
}"  :variant="officesValue==item||officesValue==item.id?'elevated':'outlined'">
{{item}} 
</VChip>


</div>

</div>
<div  class="flex justify-start pt-4 items-start flex-col ">
    <!-- <h2>المذاخر </h2>
<div class="w-full  flex   mt-8 first-letter:justify-start gap-5 flex-row flex-wrap">
<VChip  class=" scale-125" color="primary" @click="providerFilter='الكل'"  :variant="providerFilter=='الكل'?'elevated':'outlined'">
الكل 2
</VChip>
<VChip    class=" scale-125" color="primary"  @click="providerFilter='تست'"  :variant="providerFilter=='تست'?'elevated':'outlined'">
تست 
</VChip>
<VChip     class=" scale-125" color="primary"  @click="medShapeFilter='اختبار'"  :variant="medShapeFilter=='اختبار'?'elevated':'outlined'">
اختبار 
</VChip>
<VChip    class=" scale-125"  color="primary" @click="medShapeFilter='اليقين'"  :variant="medShapeFilter=='اليقين'?'elevated':'outlined'">
اليقين 
</VChip>

</div> -->
<div  class="flex justify-start pt-4 items-start flex-col ">
    <h2>الشكل الدوائي </h2>
<div class="w-full  flex   mt-8 first-letter:justify-start gap-5 flex-row flex-wrap">
<VChip
v-for="item in materialShapeResponseDto.data"
class=" scale-125" color="primary" @click="materialShapeValue=item"  :variant="materialShapeValue==item?'elevated':'outlined'">
{{item.name}} 
</VChip>




</div>
</div>
</div>

<div  class=" w-full mt-12 flex justify-start gap-5 flex-row">
    <VBtn 
    @click="applySearch()"
    rounded  variant="elevated"><span>تطبيق</span></VBtn>
    <VBtn @click="resetData()" rounded variant="outlined"><span>إعادة ضبط</span></VBtn>

</div></div>
        <!-- data is here (search results )-->
        <NoData   v-if="materialSearchResponseDto.pagination.total==0&&loading==false &&searchStarted==true"/>
<div   class="mt-8  my-flex"  v-if="materialSearchResponseDto.pagination.total>0&&mainLoading==false" >

<MaterialCard
:deleteOption="true"
v-for="(item , index)  in materialSearchResponseDto.data" 
:item="item"


/>

</div>
      </AllOrdersLayout>
    </div>
</template>
<style >
.search-bar .iconify--tabler{
    display:  none !important;
}
</style>