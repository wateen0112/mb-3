import { Pagination } from "../Ads/AddsDto";

export class  NotificationByTypeResponseDto {
  status: string= '';
  data: NotificationItemDto[] =[];
  pagination: Pagination = new Pagination();
}



export class NotificationItemDto {
  id: number=0;
  title: string='';
  content: string='';
  type: string='';
  is_read: string='';
  sender_type: string='';
  pharmacy_id: any;
  lab_id: number=0;
  created_at: string='';
  updated_at: string='';
}