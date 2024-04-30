
export class AddAdvertismentDto {
  text: string= '';
  link: string = '';
  image: string|File|any;
}
export class AdsResponseDto {
  status: string ='';
  data: AdsItemDto[] = [];
  pagination: Pagination  = new Pagination();
}

export  class Pagination {
  current_page: number=1;
  first_page_url: string='';
  from: number=1;
  last_page: number=1;
  last_page_url: string='';
  next_page_url?: any;
  path: string='';
  per_page: number=1;
  prev_page_url?: any;
  to: number=1;
  total: number=0;
}

export class AdsItemDto {
  id: number=0;
  image: string='';
  text: string='';
  link: string='';
  pharmacy_id: number=0;
  confirmed: string='';
  created_at: string='';
  updated_at: string='';
  pharmacy: Pharmacy|any;
}

export  interface Pharmacy {
  id: number;
  name: string;
  profile_image_name?: string;
  owner_name: string;
  license_image?: any;
  book_image?: any;
  pharmacy_image?: string;
  latitude?: number;
  longitude?: number;
  nearest_point: string;
  phone_number: string;
  area_id: number;
  governorate_id: number;
  area: Area;
  governorate: Governorate;
}

export interface Governorate {
  id: number;
  name: string;
  deleviery_price: string;
  created_at: string;
  updated_at: string;
}

export interface Area {
  id: number;
  name: string;
  governorate_id: number;
  created_at: string;
  updated_at: string;
}