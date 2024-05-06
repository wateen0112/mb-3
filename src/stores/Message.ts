import { MESSAGES_API } from "@/api/Messages";
import { GetChatsResponseDto, GetMessagesResponseDto, MessageItem } from "@/api/Messages/MessagesDto";
import { useApi } from "@/composables";
import Pusher from 'pusher-js';
const {GET , POST }= useApi();
import  { API_URL, HOST_DOMAIN ,OneSignalAppId,GOOGLE_MAPS_API_KEY
    ,
        PUSHER_APP_ID,
        PUSHER_APP_KEY,
        PUSHER_APP_SECRET,
        PUSHER_PORT,
        PUSHER_SCHEME,
        PUSHER_APP_CLUSTER
    }  from  '~config'
export const MessageStore = defineStore('message',()=>{
const getMessagesResponseDto = ref<GetMessagesResponseDto>(new GetMessagesResponseDto())
    const pusherLoggedIn = ref(false)
    const   getChatsResponseDto = ref<GetChatsResponseDto>(new GetChatsResponseDto())
const send_message = async(query :MessageItem =new MessageItem())=>{
try {

    const res = await POST(MESSAGES_API.send_message,query ,{},{formData:true});
    getMessagesResponseDto.value.data= [query,...getMessagesResponseDto.value.data]

} catch (error) {
    throw(error)
}
}


const get_messages = async( query : Object  = {})=>{
    try {
        const res = await GET<GetMessagesResponseDto>(MESSAGES_API.get_messages+`?page=${getMessagesResponseDto.value.pagination.current_page}`,query);
        getMessagesResponseDto.value.pagination= res.data.pagination ; 
        getMessagesResponseDto.value.chat_id= res.data.chat_id ; 
        getMessagesResponseDto.value.status= res.data.status ; 
        getMessagesResponseDto.value.user_type= res.data.user_type ; 
        getMessagesResponseDto.value.data= [...getMessagesResponseDto.value.data , ...res.data.data]

       
    } catch (error) {
        throw(error)
    }
    }
    

    
const get_chats = async()=>{
    try {
        const office_id= localStorage.getItem('token')
        const res = await GET<GetChatsResponseDto>(MESSAGES_API.get_chats);
        getChatsResponseDto.value  = res.data
    } catch (error) {
        throw(error)
    }
    }
    
    const pusher_auth  = async(id:string)=>{
        let token  = localStorage.getItem('token');
  
        
     try {
        const pusher = new Pusher(PUSHER_APP_KEY, {
            cluster:PUSHER_APP_CLUSTER,
        
            authEndpoint:`${HOST_DOMAIN}/${MESSAGES_API.pusher_auth}`,
          auth:{
            headers : {
                // Authorization:`Bearer ${token}`
                // Authorization:`Bearer 142|gaJUpYhaAQQDeShhepvow8KgfJa5Hu1AS4BfS43C`
                }
          },
        
         appId: PUSHER_APP_ID,
          key: PUSHER_APP_KEY,
          secret: PUSHER_APP_SECRET,
           useTLS: true,
        
          });
        pusherLoggedIn.value = true;
        console.log(pusherLoggedIn.value);
        
  pusher.connection.bind('connected',()=>{
    console.log('connected !!!!');
    
  })
 const channel =  pusher.subscribe('chat-1').trigger('client-event-1',{
    message:'hi'
 });

  pusher.connection.bind('chat',(data:any)=>{
    console.log(data);
    
  })  
     } catch (error) {
        console.log(error);
        
      throw(error)  
     }
       
    }

    return {
        getMessagesResponseDto,getChatsResponseDto,
        send_message  ,
        get_chats,
        get_messages,
        pusher_auth
    }
}) 