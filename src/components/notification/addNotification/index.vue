<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import {Form , Field , ErrorMessage} from 'vee-validate';
import * as yup from 'yup'
const props = defineProps({
  dialogType:{
    type:Number,
    default:1
  },

})

const emit = defineEmits(['dialog'])
</script>
<template>
<div class="lg:px-6">
 <!-- private or person dialog-->
  <div v-if="dialogType==1">
  

    <Form>

        <!-- main content form-->
  <div class="flex justify-center items-center   pb-3">
    <p class="text-black lg:text-lg text-sm">{{$t('notifications.requestHint')}}</p>
   </div>
   <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
     <div class="col-span-1"> 
       <Field name="fname" v-slot="{field}"   >
       <div>
         <VTextField  v-bind="field"   prepend-inner-icon="mdi-message" :label="$t('notifications.sendto')" variant="outlined"></VTextField>
       <ErrorMessage  class="text-red-600 text-xs"  name="fname" v-slot="{message}"></ErrorMessage>
       </div>
       
       </Field>
       
           </div>
     <div class="col-span-1"> 
       <Field name="fname" v-slot="{field}"   >
       <div>
         <VTextField  v-bind="field"   prepend-inner-icon="mdi-pen" :label="$t('notifications.mainTitle')" variant="outlined"></VTextField>
       <ErrorMessage  class="text-red-600 text-xs"  name="fname" v-slot="{message}"></ErrorMessage>
       </div>
       
       </Field>
       
           </div>
   
   </div>
   <div  class="mt-5 mb-5"> 
     <Field name="fname" v-slot="{field}"   >
     <div>
       <VTextarea :no-resize="true" v-bind="field"    :label="$t('notifications.text')" variant="outlined"></VTextarea>
     <ErrorMessage  class="text-red-600 text-xs"  name="fname" v-slot="{message}"></ErrorMessage>
     </div>
     
     </Field>
     
         </div>
<div class="w-full sticky  gap-5 flex justify-center items-center">
<VBtn >{{$t('notifications.sendAll')}}</VBtn>
<VBtn   @click="$emit('dialog')" color="#14AD98"> <span class="text-white">{{$t('contactUs.dialog.cancel')}}</span> </VBtn>

</div> 
    </Form>
</div>
<!-- company dialog -->
<div v-else-if="dialogType===2">
  <Form>

    <!-- main content form-->
<div class="flex justify-center items-center   pb-3">
<p class="text-black lg:text-lg text-sm">{{$t('notifications.requestHint')}}</p>
</div>
<div class="grid lg:grid-cols-2 grid-cols-1 mb-10 gap-5">
 <div class="col-span-1"> 
   <Field name="fname" v-slot="{field}"   >
   <div>
     <VTextField  v-bind="field"  :label="$t('notifications.reqNumber')" variant="outlined"></VTextField>
   <ErrorMessage  class="text-red-600 text-xs"  name="fname" v-slot="{message}"></ErrorMessage>
   </div>
   
   </Field>
   
       </div>
 <div class="col-span-1"> 
   <Field name="fname" v-slot="{field}"   >
   <div>
     <VTextField  v-bind="field" :label="$t('notifications.reqDate')" variant="outlined"></VTextField>
   <ErrorMessage  class="text-red-600 text-xs"  name="fname" v-slot="{message}"></ErrorMessage>
   </div>
   
   </Field>
   
       </div>
       <div class="col-span-1"> 
        <Field name="fname" v-slot="{field}"   >
        <div>
          <VTextField  v-bind="field"    :label="$t('contactUs.phoneNumber')" variant="outlined"></VTextField>
        <ErrorMessage  class="text-red-600 text-xs"  name="fname" v-slot="{message}"></ErrorMessage>
        </div>
        
        </Field>
        
            </div>
      <div class="col-span-1"> 
        <Field name="fname" v-slot="{field}"   >
        <div>
          <VSelect  v-bind="field"   :label="$t('notifications.reqType')" variant="outlined"></VSelect>
        <ErrorMessage  class="text-red-600 text-xs"  name="fname" v-slot="{message}"></ErrorMessage>
        </div>
        
        </Field>
        
            </div>
</div>

<div class="w-full sticky  gap-5 flex justify-center items-center">
<VBtn >{{$t('notifications.sendAll')}}</VBtn>
<VBtn  @click="$emit('dialog')" color="#14AD98"> <span class="text-white">{{$t('contactUs.dialog.cancel')}}</span> </VBtn>

</div> 
</Form>
</div>
</div>
</template>
