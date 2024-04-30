<script  setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import SendedMessage from '@/components/messages/SendedMessage.vue';
import SendBtnIcon from '@/assets/images/svg/chat1.svg'
import ReceivedMessage from '@/components/messages/ReceivedMessage.vue';
import AttachIcon from '@/assets/images/svg/attach-file.svg'
import  Avatar from '@/assets/images/avatars/avatar-3.png'
import  SentimentSatisfied from '@/assets/images/svg/sentiment-satisfied.svg'
import { MessageStore } from "@/stores/Message";



const store = MessageStore()



const route = useRoute();
const id  = route.params.id.toString();
const enableEmojies = ()=>{
      // Dispatch a KeyboardEvent for the "Win" button (Windows key)
      const winKeyEvent = new KeyboardEvent('keydown', { key: 'Meta' });
      document.dispatchEvent(winKeyEvent);
      
      // Dispatch a KeyboardEvent for the "." button
      const dotKeyEvent = new KeyboardEvent('keydown', { key: '.' });
      document.dispatchEvent(dotKeyEvent);
}
onMounted(async()=>{
    try {
        await store.pusher_auth(id.toString())
    } catch (error) {
        throw(error)
    }
})

</script>

<template>
<AllOrdersLayout
:search="false"
>
    <template #custom-title>
     <div class="flex  py-3">
        <img  :src="Avatar"   class="rounded-full w-12 h-12 "  />
<div class="mx-2">
    <h3> محمد حجازي</h3>
    <h5 class="font-light">عراق تكنو</h5>
</div>
     </div>
    </template>

    <div  class="min-h-[70vh]">
        <!--messages container  -->
      <div  class="flex  w-full   px-3 overflow-auto  max-h-[60vh] items-end flex-col">

<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
<SendedMessage/>
<ReceivedMessage/>
      </div>
      <!-- messages toolbar  -->
      <div class="flex justify-center h-[10vh] items-center">

    
       <div class="msg-field">
        <v-text-field    placeholder=" اكتب هنا">

            <template #append-inner >
                <div class="">  
        <VBtn   size="35" rounded variant="text"><img   class=" mt-[-15px] w-6" :src="AttachIcon" /></VBtn>
   </div>
            </template>
    <template  #prepend-inner>
        <div class="">  
        <VBtn   size="35" rounded variant="text"><img   class=" mt-[-15px] w-8" :src="SentimentSatisfied" /></VBtn>
   </div>
    </template>
        </v-text-field>
       </div>
        <div class="px-2">  
        <VBtn   size="35" rounded variant="elevated">

<img class="invert-icon w-6"   :src="SendBtnIcon" />

     </VBtn>
      </div>
      </div>
    </div>
</AllOrdersLayout>
</template>
<style scoped>
.invert-icon {
 
 filter:invert(20%) brightness(1119%) contrast(119%);
}
</style>