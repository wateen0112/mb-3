import { Pagination } from "../Ads/AddsDto";


export interface deficientListRequestFto {
  trade_name: string;
  amount: number;
}
export interface getOffersRequestDto {
  type: string;
  store_id: string;
  office_id: string;
}
export interface DeficienListResponseDto {
  status: string;
  data: MaterialDto[];
  pagination: Pagination;
}




export interface Office {
  id: number;
  name: string;
  profile_image_name: string;
  owner_name: string;
  license_image?: any;
  book_image: string;
  office_image?: any;
  nearest_point?: any;
  type: string;
  latitude: number;
  longitude?: any;
}
export interface MaterialSearchRequstDto {
  trade_name: string, scientific_name: string, office_id: string, store_id: string, 
  
  online_market_id : string  ,
  pharma_shape_id: string, qr_code: string
}

export  class MaterialSearchResponseDto {
  status: string='';
  data: MaterialDto[]=[];
  pagination: Pagination= new Pagination();
}



export class MaterialDto {
  id: number=0;
  image_name: string='';
  trade_name: string='';
  scientific_name: string='';
  origin_country: string='';
  company?: string='';
  expire_date: string='';
  qr_code: string='';
  pharma_shape_id: number=0;
  price: number=0;
  show_price: string='';
  fresh_added: string='';
  buy_with_points: string='';
  price_in_points?: any;
  notes?: string='';
  buy_count?: number=0;
  free_sample_count?: number=0;
  offer_price?: number=0;
  amount: number=0;
  supplier_type: string='';
  office_id: number=0;
  store_id?: any;
  online_market_id?: any;
  created_at: string='';
  updated_at: string='';
  store_joined_status: string='';
  office_joined_status: string='';
  shape: Shape |any;
  packing_type: any[]= [];
  office: Office|any;
  store: any;
}



interface Shape {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
export class MaterialOffersResponseDto {
  status: string='';
  data_count: number=0;
  data: OfferOfficeDto[] = [];
  pagination: Pagination = new Pagination;
}



export  interface OfferOfficeDto {
  id: number;
  profile_image_name: string;
  name: string;
  owner_name: string;
  license_image?: any;
  book_image?: any;
  office_image: string;
  governorate_id: number;
  area_id: number;
  in_progress: string;
  nearest_point?: any;
  latitude?: any;
  longitude: number;
  phone_number: string;
  password: string;
  type: string;
  noti_id?: any;
  referal_id?: any;
  created_at: string;
  updated_at: string;
  store_joined_status: string;
  office_joined_status: string;
}