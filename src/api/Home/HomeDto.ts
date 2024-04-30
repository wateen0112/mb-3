import { Pagination } from "../Ads/AddsDto";

export class  GovernorateResponseDto{
  status: string='';
  data: GovernorateDto[]=[];
  pagination: Pagination= new Pagination();
}



export interface GovernorateDto {
  id: number;
  name: string;
  governorate_id: number;
  created_at: string;
  updated_at: string;
  governorate: Governorate;
}

export class Governorate {
  id: number=0;
  name: string='';
  deleviery_price: string='';
  created_at: string='';
  updated_at: string='';
}
export class OfficesResponseDto {
  status: string= '';
  data: OfficeDto[]= [];
}

export class OfficeDto {
  id: number=0;
  profile_image_name: string='';
  name: string='';
  owner_name: string='';
  license_image?: string='';
  book_image?: string='';
  office_image?: string='';
  governorate_id: number=0;
  area_id: number=0;
  in_progress: string='';
  nearest_point?: any;
  latitude?: number=0;
  longitude?: number=0;
  phone_number: string='';
  password: string='';
  type: string='';
  noti_id?: any;
  referal_id?: any;
  created_at: string='';
  updated_at: string='';
}
export class HomeResponseDto {
  logo: string='';
  icon: string='';
  slider: string[] = [];
  privacy_policy: string='';
  responsability_disclaimer: string='';
  info: InfoDto |any;
  tabs: TabDto[]=[];
}

export class TabDto {
  id:number=0;
  name: string = '';
  image?: string='';
}

export interface InfoDto {
  id: number;
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  slider?: any;
  logo: string;
  icon: string;
  privacy_policy?: any;
  usage_policy?: any;
  facebook: string;
  twitter?: any;
  instagram?: any;
  linkedin?: any;
  youtube?: any;
  telegram?: any;
  tiktok?: any;
  whatsapp: string;
  point_price: number;
}
export class RootObject {
  status: string='';
  data: GovernorateDto[]=[];
  pagination: Pagination= new Pagination();
}



export  class GovernorateDto {
  id: number=0;
  name: string='';
  deleviery_price: string='';
  created_at: string='';
  updated_at: string='';
}

export class OnlineMarketResponseDto {
  status: string='';
  data: GovernorateDto[]=[];
  pagination: Pagination= new Pagination();
}



export class OnlineMarketDto {
  id: number=0;
  profile_image_name: string='';
  name: string='';
  owner_name: string='';
  id_image: string='';
  university_id_image: string='';
  governorate_id: number=0;
  area_id?: number=0;
  in_progress: string='';
  nearest_point: string='';
  latitude: number=0;
  longitude: number=0;
  phone_number: string='';
  password: string='';
  employee_id?: any;
  noti_id?: any;
  referal_id?: any;
  created_at: string='';
  updated_at: string='';
}
export class SingleOnlineMarketResponse {
  status: string='';
  market: OnlineMarketDto = new OnlineMarketDto();
  material_count: number=0;
  materials: MaterialDto[]=[];
  pagination: Pagination=new Pagination();
}

interface Pagination {
  current_page: number;
  first_page_url: string;
  from?: any;
  last_page: number;
  last_page_url: string;
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to?: any;
  total: number;
}

export  class MaterialDto {
  id: number=0;
  image_name: string='';
  trade_name: string='';
  scientific_name: string='';
  origin_country: string='';
  company: string='';
  expire_date: string='';
  qr_code?: any;
  pharma_shape_id: number=0;
  price: number=0;
  show_price: string='';
  fresh_added: string='';
  buy_with_points: string='';
  price_in_points: number=0;
  notes: string='';
  buy_count?: any;
  free_sample_count?: any;
  offer_price?: any;
  amount: number=0;
  supplier_type: string='';
  office_id?: any;
  store_id?: any;
  online_market_id: number=0;
  created_at: string='';
  updated_at: string='';
}
export class SuppliersResponseDto {
  status: string='';
  data: SupplierDto[]=[];
  pagination: Pagination= new Pagination();
}



export class SupplierDto {
  id: number=0;
  name: string='';
  profile_image_name: string='';
  owner_name: string='';
  license_image: string='';
  book_image: string='';
  office_image?: string='';
  governorate_id: number=0;
  area_id?: number=0;
  nearest_point: string='';
  latitude?: number=0;
  longitude: number=0;
  phone_number: string='';
  type: string='';
  area?: Area;
  governorate: Governorate = new Governorate() ;
}



export class Area {
  id: number=0;
  name: string='';
  governorate_id: number=0;
  created_at: string='';
  updated_at: string='';
}
export class OrderQuery  {
  start  :string  =''
  end  :string  =''
  payment_status  :string  =''
  office_id  :string  ='1'
  store_id  :string  =''
  list_id  :string  =''
}

export class MaterialShapeResponseDto {
  status: string='';
  data: MaterialShapeDto[]= [];
}

export  class MaterialShapeDto {
  id: number=0;
  name: string='';
  created_at: string='';
  updated_at: string='';
}