<script  setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue'
import SendedMessage from '@/components/messages/SendedMessage.vue';
import SendBtnIcon from '@/assets/images/svg/chat1.svg'
import ReceivedMessage from '@/components/messages/ReceivedMessage.vue';
import AttachIcon from '@/assets/images/svg/attach-file.svg'
import  Avatar from '@/assets/images/avatars/avatar-3.png'
import  SentimentSatisfied from '@/assets/images/svg/sentiment-satisfied.svg'
import {  requiredValidator } from '@validators'
import UserImageLoading  from '@/assets/images/svg/user-ico.svg'
import { MessageStore } from "@/stores/Message";
import { HomeStore } from '@/stores/Home';
import { useFile } from '@/composables';
import Loading from '@/components/shared/Loading.vue';
const homeStore = HomeStore();
const imageFile = ref<any[]|any>([])

const store = MessageStore()
const sendMessageForm = ref()
const sendMessageLoading = ref(false)
const loading =ref(true)
const route = useRoute();

const messagesList = computed(()=>{
    return getMessagesResponseDto.value.data
})
var key =  ''
const id  = route.params.id.toString();
const enableEmojies = ()=>{
      // Dispatch a KeyboardEvent for the "Win" button (Windows key)
      const winKeyEvent = new KeyboardEvent('keydown', { key: 'Meta' });
      document.dispatchEvent(winKeyEvent);
      
      // Dispatch a KeyboardEvent for the "." button
      const dotKeyEvent = new KeyboardEvent('keydown', { key: '.' });
      document.dispatchEvent(dotKeyEvent);
}
const {getMessagesResponseDto} = storeToRefs(store)
const  {singleOnlineMarketResponse,office,delegationsResponseDto} = storeToRefs(homeStore)
onMounted(async()=>{
    try {
        await store.pusher_auth(id.toString())
        switch(query.type){
            case 'online_market' :{
homeStore.get_online_market({
    online_market_id : id  
})
await  store.get_messages({
    online_market_id : id  
})
            }
            break ; 
            case 'office':{
await  homeStore.get_office_by_id (id)
await  store.get_messages({
    office_id : id  
})
            }
            break; 
            case 'delegator':{
await  homeStore.get_delegators ({
id  : id

})
await  store.get_messages({
    delegator_id : id  
})
            }
            break; 
            default :{

            }
            break ;
        }

        loading.value = false
        setTimeout(() => {
        const container  = document.getElementById('msg-container');
container?.addEventListener('scroll',async(e)=>{

    if (container.scrollTop<0)
    if(getMessagesResponseDto.value.pagination.current_page<getMessagesResponseDto.value.pagination.last_page){
        getMessagesResponseDto.value.pagination.current_page=getMessagesResponseDto.value.pagination.current_page+1;
        await store.get_messages()
        container.scrollTop = 50
    }

})
    }, 300);
    } catch (error) {
        throw(error)
    }

}) 
const lock  =ref(false)
const {getFileUrl} = useFile()
const query = route.query
const messageContent  =ref('')
const sendMessage = async()=>{
  console.log(  imageFile.value);
  
if(lock.value==false){
    if(messageContent.value!=''||imageFile.value!=null){
    lock.value = true
    try {
    sendMessageLoading.value  = true

    const created_at = new Date()


  
await store.send_message({
    id:-1,
    image:imageFile.value[0]??null,
    chat_id : getMessagesResponseDto.value.chat_id , 
   channel_name : "private-chat-"+id,
    message :messageContent.value ,
    is_read:'',
    sender_type: '',
    updated_at:'',
    created_at : (created_at.toLocaleString().split(' ')[0]+created_at.toLocaleString().split(' ')[1]).replace(',',' ')
})


    sendMessageLoading.value  = false
    imageFile.value =[];
    messageContent.value = ''
    lock.value = false
} catch (error) {
    sendMessageLoading.value  = false
    lock.value = false
    throw(error)
}
}
   
} 
}
onBeforeUnmount(()=>{
    getMessagesResponseDto.value.data = [];
    getMessagesResponseDto.value.pagination.current_page = 1 
    getMessagesResponseDto.value.chat_id  =-1 
    getMessagesResponseDto.value.user_type  ='' 
})
</script>

<template>
    <Loading  v-if="loading==true" />
<AllOrdersLayout
v-else-if="loading==false"
:search="false"
>

    <template #custom-title>
     <div class="flex  py-3">
     <v-img  
   
     v-if="query.type=='online_market'"  class="rounded-full w-12 h-12 " :src="getFileUrl(    singleOnlineMarketResponse.market.profile_image_name)">
<template #error>

    <img  :src="UserImageLoading"   class="rounded-full w-12 h-12 "  />
</template>
<template #placeholder>

    <div class="rounded-full  w-[50px] h-[50px] flex justify-center items-center bg-[#eee]">
        <img  :src="UserImageLoading"   class="rounded-full  w-[50px] h-[50px] "  />
    </div>
</template>


     </v-img>
     <v-img 
     :lazy-src="UserImageLoading"
     v-if="query.type=='delegator'&& delegationsResponseDto.data[0]"  class="rounded-full w-12 h-12 " :src="getFileUrl(    delegationsResponseDto.data[0].profile_image_name)">
<template #error>

    <img  :src="Avatar"   class="rounded-full w-12 h-12 "  />
</template>

     </v-img>
     <v-img   v-if="query.type=='office'"  class="rounded-full w-12 h-12 " :src="getFileUrl(    office.profile_image_name)">
<template #error>

    <img  :src="Avatar"   class="rounded-full w-12 h-12 "  />
</template>

     </v-img>
<div v-if="query.type=='online_market'" class="mx-2">
    <h3> {{  
    singleOnlineMarketResponse.market.name
    }}</h3>
    <h5 class="font-light">عراق تكنو</h5>
</div>
     </div>
<div v-if="query.type=='delegator'&& delegationsResponseDto.data[0]" class="mx-2">
    <h3> {{  
    delegationsResponseDto.data[0].name
    }}</h3>
    <h5 class="font-light">عراق تكنو</h5>
</div>

<div v-if="query.type=='office'" class="mx-2">
    <h3> {{  
    singleOnlineMarketResponse.market.name
    }}</h3>
    <h5 class="font-light">عراق تكنو</h5>
</div>

    </template>

    <div  v-if="loading==false" class="min-h-[70vh]">
        <!--messages container  -->
      <div  id="msg-container" class="flex overflow-y-scroll  w-full h-[60vh]  px-3 overflow-auto  max-h-[60vh] items-end flex-col-reverse">
<div v-for="item in messagesList" class="">
   
<SendedMessage  :message="item" v-if="query.type!==item.sender_type"   />
<ReceivedMessage  :message="item"   v-else />
</div>

      </div>
      <!-- messages toolbar  -->
      <div class="flex justify-center h-[10vh] items-center">

    
       <div class="msg-field">
        <v-text-field 
        @keyup.enter="sendMessage"
        v-model="messageContent"  placeholder=" اكتب هنا">

            <template #append-inner >
                <div class="f-input  ">  
        <VFileInput    accept="image/*"   class="mt-[-9px]" :multiple="false" v-model="imageFile"  size="35" rounded variant="text"><img   class=" mt-[-15px] w-6" :src="AttachIcon" /></VFileInput>
   </div>
   <VBtn   v-if="imageFile.length> 0"
    @click="imageFile=[]"
    rounded width="25" height="25" icon color="primary"  variant="tonal" class=" rounded-full  mt-[0px] " >
<VIcon size="20">

    mdi-close
</VIcon>

   </VBtn>

            </template>

        </v-text-field>
        
       </div>
        <div class="px-2">  
        <VBtn     @click="sendMessage"  :loading="sendMessageLoading" size="35" rounded variant="elevated">
         
<img class="invert-icon w-6"   :src="SendBtnIcon" />

     </VBtn>
      </div>
      </div>
    </div>
</AllOrdersLayout>
</template>
<style >
.invert-icon {
 
 filter:invert(20%) brightness(1119%) contrast(119%);
}
.f-input .v-field__input
,
.f-input .v-field 

{
display: none !important;
}
</style>