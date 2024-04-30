import { OREDER_STATUS } from "@/enums/OrderStatus";
import  {Service,Titleml} from '@/api/service/dto'
export class ChangeOrderStatusDto {
status:OREDER_STATUS=OREDER_STATUS.CANCELLED;
reason:string=''
}
export class OrderDto {
  order_id: number=0;
  order_number: string ='';
  order_status: string='';
  customer_mobile: string='';
  created_at: string='';
  serving_date?: any=''
  is_gifted: boolean=false;
  services: Service[]=[]
  payment_method: Paymentmethod|null=null;
  payment_status: string='';
  customer_name: string='';
  store_name: string='';
  waiting_time: number=0
  gifted_person: Giftedperson|null=null;
  total_price: number=0;
  order_location: string='';
  gender?: any='male';
}

interface Giftedperson {
  id: number;
  name: string;
  phone: string;
  gift_card: string;
  location_latitude: string;
  location_longitude: string;
}

interface Paymentmethod {
  id: number;
  slug: string;
  title__ml: Titleml;
}



interface Location {
  home?: boolean;
  store?: boolean;
  male_price?: string;
  female_price?: string;
}
