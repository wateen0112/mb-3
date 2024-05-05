import { Office } from './../Materials/MaterisalsDto';
import { Pagination } from "../Ads/AddsDto";
import { OfficeDto } from '../Home/HomeDto';

export  class GetMessagesResponseDto {
  status: string='';
  chat_id: number=0;
  user_type: string='';
  data: MessageItem[] = [];
  pagination: Pagination=new  Pagination();
}
export class MessageItem {
  id: number=0;
image : any ;
  message: string='';
  channel_name: string='';
  chat_id: number=0;
  is_read: string='';
  sender_type: string='';
  created_at: string='';
  updated_at: string='';
}
export  class  GetChatsResponseDto {
  status: string='';
  data: SingleChatDto[]=[];
  pagination: Pagination = new Pagination();
}



export class SingleChatDto {
  id: number=0;
  pharmacy_id: number =0;
  delegate_id: number =0;
  office_id: null | number=0;
  store_id: number=0;
  created_at: string='';
  updated_at: string='';
  lab_id: number=0;
  office: OfficeDto = new OfficeDto();
  store: number=0;
  pharmacy: number=0;
  delegation: number=0;
}

