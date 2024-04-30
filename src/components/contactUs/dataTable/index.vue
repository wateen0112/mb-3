<script setup lang="ts">
import { useContactUsStore } from '@/stores/ContactUs';
import { useI18n } from 'vue-i18n';
const {t,locale} =useI18n()

const store = useContactUsStore();
const {messagesList,query,dialogDisabled,pagination,messagesPagCount} = storeToRefs(store);

//headers . . . .. . 
const headers = ref([t('contactUs.senderName'),t('contactUs.phoneNumber'),


t('contactUs.email')
,
t('contactUs.replyStatus'),t('contactUs.requestDate'),t('contactUs.details')]
)
const emit = defineEmits (['dialog'])
//onMounted... 
onMounted(()=>{
if(props.tableType===1){
  store.getAllMessages()
}
else  if  (props.tableType===2){
  store.getAllDriverRequest()
}
})
watch(query, ()=>{
  if(props.tableType===1){
  store.getAllMessages()
}
else  if  (props.tableType===2){
  store.getAllDriverRequest()
}
})
//we will get data based on table type
//functions  . .. 
const getDetalis =  (id:string)=>{

emit('dialog')

}
const router = useRouter()
const props = defineProps({
  tableType:{
    type:Number,
    default:1
  }
})
function tableEvent(id:string,disabled:boolean){
  dialogDisabled.value=disabled
  if(props.tableType===1){
    router.push(`contactus/${id}`)
  }
  else  if(props.tableType===2){

    store.getDrvierRequestById(id);

    getDetalis(id)
}
}
const idsToBeDeleted = ref<string[]>([])
function addItemToDelete(id:string|never){
  let arr = idsToBeDeleted.value.filter((item:any)=>
 {

  
  return item ==id}
  )
  if(arr.length>0){
    idsToBeDeleted.value= idsToBeDeleted.value.filter((item:any)=>
 item!=id
  )
  }
  else {
    idsToBeDeleted.value =[...idsToBeDeleted.value ,id ]
  }

  
}
function unselectCheckBoxs (){
  const checkBoxs = document.querySelectorAll('input[type="checkbox"]');
console.log(checkBoxs);
checkBoxs.forEach((check:any)=>{
if(check.checked){
  check.click()
}
})
}
function deleteMultiItems(){
if(idsToBeDeleted.value.length!==0){
  switch(props.tableType){
  case 1:{
    store.deleteMessage(idsToBeDeleted.value).then(()=>{
    unselectCheckBoxs()
  })
  }
  break;
  case 2 :{
    store.deleteDriverRequest(idsToBeDeleted.value).then(()=>{
    unselectCheckBoxs()
  })
  }
  break;
  default :{
//do nothing
  }
}
}
}
//wtching locale to change header content based on selected language . .  
watch(locale,()=>{
  headers .value= [t('contactUs.senderName'),t('contactUs.phoneNumber'),
t('contactUs.email')
,
t('contactUs.replyStatus'),t('contactUs.requestDate'),t('contactUs.details')]

})
</script>
<template>
  <div>
   <div >
    <VTable>
      <thead>
        <tr>

          <th class="max-w-[40px]"><VBtn   @click="deleteMultiItems" variant="text"><VIcon size="30" color="error">mdi-delete</VIcon></VBtn></th>
          <th  class="capitalize text-center" v-for="(header, index) in headers">{{header}}</th>
        </tr>
     
      </thead>
      <tbody>
        <tr v-for="(item , index) in messagesList">
          <td><VCheckbox @change="addItemToDelete(item.id)"></VCheckbox></td>
          <td class="text-center">{{item.name}}</td>
          <td class="text-center">{{item.phoneNumber}}</td>
          <td class="text-center">{{item.email}}</td>
          <td class="text-center">
            <VChip v-if="!item.isReplied"  color="error"> {{$t('contactUs.messages.isNotReplied')}} </VChip>
            <VChip  v-else color="success">{{$t('contactUs.messages.isReplied')}}</VChip>
         </td>
          <td class="text-center">
         
            {{item.dateCreated.split('T')[0]}}</td>
          
          
    <td class="text-center"><VBtn icon="tabler:dots-vertical" size="40" @click="tableEvent(item.id,item.isReplied)"></VBtn></td>

    
        </tr>
      </tbody>
     </VTable>
     <div class="mt-10">
      <VPagination
      :total-visible="10"
      v-model="pagination.pageIndex"
      :length="pagination.totalPages"
      @update:model-value="tableType===1?store.getAllMessages():store.getAllDriverRequest"
     
      />
    </div>
   </div>
  
  </div>
</template>

