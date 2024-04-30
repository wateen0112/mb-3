import { NOTIFICATION_API } from "@/api/Notification"
import { NotificationByTypeResponseDto, NotificationsResponseDto } from "@/api/Notification/NotificationDto"
import { useApi } from "@/composables"

const {GET , POST } = useApi()
export const NotificationStore  = defineStore('notification',()=>{
const notificationsResponse =ref<any>([])
const notificationsByTypeResponseDto = ref<NotificationByTypeResponseDto>(new NotificationByTypeResponseDto())
    const get_notifications = async()=>{

    try {
    const res = await GET<any>(NOTIFICATION_API.get_notifications);
    notificationsResponse .value = res.data.data;
} catch (error) {
    throw(error);   
}

}
const get_notifications_by_type = async(query:Object = {})=>{

    try {
    const res = await GET<NotificationByTypeResponseDto>(NOTIFICATION_API.get_notifications,query);
    notificationsByTypeResponseDto .value = res.data;
} catch (error) {
    throw(error);   
}

}
    return {
        get_notifications_by_type,
get_notifications,notificationsByTypeResponseDto
,
notificationsResponse
}
    
})