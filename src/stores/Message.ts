import { MESSAGES_API } from "@/api/Messages";
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

    const pusherLoggedIn = ref(false)
const send_message = async()=>{
try {
    const res = await POST(MESSAGES_API.send_message,{});
} catch (error) {
    throw(error)
}
}


const get_messages = async(office_id:string)=>{
    try {
        const res = await GET(MESSAGES_API.get_messages,{
            office_id:office_id
        });
    } catch (error) {
        throw(error)
    }
    }
    

    
const get_chats = async()=>{
    try {
        const office_id= localStorage.getItem('token')
        const res = await GET(MESSAGES_API.get_chats,{
            office_id:office_id
        });
    } catch (error) {
        throw(error)
    }
    }
    
    const pusher_auth  = async(id:string)=>{
        let token  = localStorage.getItem('token');
        console.log('from messages pusher auth ');
        
     try {
        const pusher = new Pusher(PUSHER_APP_KEY, {
            cluster:PUSHER_APP_CLUSTER,
        
            authEndpoint:`${HOST_DOMAIN}/${MESSAGES_API.pusher_auth}`,
          auth:{
            headers : {
                Authorization:`Bearer ${token}`
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
        
     } catch (error) {
      throw(error)  
     }
       
    }

    return {
        send_message  ,
        get_chats,
        get_messages,
        pusher_auth
    }
}) 