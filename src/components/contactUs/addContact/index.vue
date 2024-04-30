<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import {useContactUsStore} from '@/stores/ContactUs'
import { useFile } from '@/composables';
import * as yup from 'yup'
import {storeSetting} from '@/stores/Setting'
import {Field, Form , ErrorMessage} from 'vee-validate';
import { Vehicle } from '@/api/Setting/SettingDto';
const emit = defineEmits(['dialog'])
const store = useContactUsStore();
const settingStore =storeSetting();
const  {vehicleTypes} = storeToRefs(settingStore)
const {driverRequest,replyDto,dialogDisabled}= storeToRefs(store);
const {t}= useI18n()
const loading = ref(false )
const deleteLBtnLoading = ref(false)
const {getFileUrl} = useFile();
const driverSchema = computed(()=>{
  return yup.object({
    reply:yup.string().required()
  })
})
const  vehicleName= ref<String|never>('')
const driverRequestform =  ref<InstanceType<typeof Form> | null>(null);
const props = defineProps({
  dialogType:{
    type:Number,
    default:2
  },

})
//onmounted  . . . 
onMounted(()=>{
if(props.dialogType===2){

  settingStore.GetAllVehicleTypes().then(()=>{
  
    vehicleName.value = vehicleTypes.value.filter((v:Vehicle)=>{
      return v.id===driverRequest.value.vehicleTypeId
    })[0].name
  //  console.log('vechilce types array :',vehicleTypes.value.filter(v=>{
  //   return driverRequest.value. ===v.id
  //  }));
   
  })
  
}
})
function driverRqeustreplyEvent(){
replyDto.value.id= driverRequest.value.id;

driverRequestform.value?.validate().then((v:any)=>{
  if(v.valid){
    loading.value = true;
    store.replyDriverRequest().then(()=>{
  loading.value = false ; 
  store.getAllDriverRequest();
  emit('dialog')

})
  }
})

}
function deleteDriverRequest(){
  emit('dialog')
store.deleteDriverRequest([driverRequest.value.id])
}
</script>
<template>
<div>
  <div v-if="dialogType===2">
    <!-- main content form-->
<Form :validation-schema="driverSchema" ref="driverRequestform">
  <div class="grid  lg:px-5 px-0 gap-8 grid-cols-1 lg:grid-cols-2" >
<!-- column 1 -->
    <div class="grid grid-cols-1 gap-5 ">
<VTextField  v-model="driverRequest.name"  class="capitalize"  :readonly="true" :label="$t('contactUs.dialog.requestOwnerName')"/>
<VTextField  v-model="driverRequest.phoneNumber"    class="capitalize"  :readonly="true" :label="$t('contactUs.phoneNumber')" />
<VTextField  v-model="driverRequest.email"    class="capitalize"  :readonly="true" :label="$t('contactUs.email')" />
<VTextField  v-model="driverRequest.skillYears"    class="capitalize"  :readonly="true" :label="$t('contactUs.dialog.experienceYears')" />
<!-- شروط اضافية للانضمام-->

</div>
<!-- column 2-->

<div   class="grid grid-cols-1 gap-5">

<VTextField   v-model="vehicleName"  :readonly="true"  class="capitalize" :label="$t('contactUs.dialog.carModel')" />

<!-- <VFileInput   prepend-icon="" prepend-inner-icon="mdi-paperclip"    :label="$t('contactUs.dialog.drivingLicense')"  /> -->

  <Field  v-model="replyDto.reply" v-slot="{field}" name="reply">
    <VTextarea  v-bind="field"   :no-resize="true" v-if="!dialogDisabled" v-model="replyDto.reply"   class="  resize-none capitalize" :label="$t('contactUs.dialog.reply')" />
    <VTextarea   :no-resize="true" :readonly="true"  v-else v-model="driverRequest.reply"   class="  resize-none capitalize" :label="$t('contactUs.dialog.reply')" />
<ErrorMessage   class="text-red-600" name="reply"></ErrorMessage>
  </Field>



</div>
<!-- !row 2-->
<div> 

 
 <div> <div>
  <p class="text-center lg:text-right capitalize text-teal-500">  {{$t('contactUs.dialog.additionalConditions')}}</p>

  <VCheckbox  :readonly="true" v-model="driverRequest.hasUniform" :label="$t('contactUs.dialog.profissionalClothes')" />
  <VCheckbox   :readonly="true" v-model="driverRequest.hasTools" :label="$t('contactUs.dialog.workTools')" />
   </div>
   </div></div>
  <div><p class="text-lg ">{{$t('contactUs.dialog.drivingLicense')}}</p>
    <div class="p-1 border-dashed border-[2px] flex justify-center items-center">
      <img  class="h-[240px] w-full object-fill" :src="getFileUrl(driverRequest.drivingLicenseUrl)" alt="">
      
    </div>  
    </div>

  <!-- dialog actions ...  can be changed -->

  </div>

  <div class=" mt-8  lg:flex-nowrap flex-wrap flex lg:gap-5 gap-2  items-center justify-center  sticky bottom-1" >
    <VBtn  :loading="loading" :disabled="dialogDisabled"  @click="driverRqeustreplyEvent()" color="#3FB984"><span  class="text-white capitalize">{{$t('contactUs.dialog.send')}}</span></VBtn>

    <VBtn color="error" :loading="deleteLBtnLoading" @click="deleteDriverRequest()" :disabled="dialogDisabled" class="capitalize" > {{ $t('contactUs.dialog.requestDelete') }} </VBtn>
    <VBtn color="error"   @click="$emit('dialog')"  class="capitalize" > {{$t('contactUs.dialog.cancel')}}</VBtn>
        </div>
</Form>
</div>
<div v-else-if="dialogType===3">
  <VForm>
    <div>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 " >
      <!-- col 1 -->
         <div class="grid grid-cols-1 gap-5">
           <p class="text-center  text-lg text-blue-500 capitalize"> {{$t('contactUs.dialog.personalInformation')}}</p>
     <div class=" grid grid-cols-2 gap-8">
       <VTextField    class="capitalize"  :label="$t('contactUs.dialog.firstName')" />
       <VTextField    class="capitalize"  :label="$t('contactUs.dialog.lastName')"/>
     </div>
     
     <VTextField    class="capitalize" :label="$t('contactUs.phoneNumber')" />
     <VTextField    class="capitalize"  :label="$t('contactUs.dialog.password')" />
     <VTextField    class="capitalize"  :label="$t('contactUs.email')+'  ('+ $t('contactUs.dialog.required')+' )'" />
     <VTextField    class="capitalize"  :label="$t('contactUs.dialog.address')"/>
     
         </div>
         <!-- col 2 -->
       <div class="grid grid-cols-1 gap-3">
         <p class="text-center  text-lg text-blue-500 capitalize">{{$t('contactUs.dialog.bankAccountDetails')}}</p>
         <VTextField    class="capitalize"  :label="$t('contactUs.dialog.iban')"/>
        
        
         <VTextField    class="capitalize"  :label="$t('contactUs.dialog.coc')" />
         <p class="text-center  text-lg text-blue-500 capitalize"> {{$t('contactUs.dialog.accountDetails')}} </p>
       
         <VTextField    class="capitalize"  :label="$t('contactUs.dialog.vat')" />
      
         </div>
       </div>
       <div>
         <div class="flex lg:flex-nowrap   lg:justify-end    px-20 gap-5 mt-8 mb-2">
     
           <VBtn  :loading="loading"  color="#3FB984"><span class="text-white capitalize">{{$t('contactUs.dialog.accept')}}</span></VBtn>
           <VBtn class="capitalize"  @click="$emit('dialog')" color="error" variant="outlined">{{$t('contactUs.dialog.refuse')}}</VBtn>
         </div>
        
       </div>
  </div>
  </VForm>
</div>
</div>
</template>
