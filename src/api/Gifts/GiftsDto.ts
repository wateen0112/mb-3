export interface GetSuppliersRequestDto {
  status: string;
  type: string;
}

export interface GetOnlineMarketRequestDto {
  online_market_id: number;
  material_id: number;
}
export interface BuyWithPointsRequestDto {
  supplier_type: string;
  material_id: number;
}
export interface MedicationGuideRequestDto {
  supplier_type: string;
  material_id: number;
}
export class GiftsResponseDto {
  status: string='';
  data: GiftDto[]=[];
  pagination: Pagination= new Pagination();
}

class Pagination {
  current_page: number=0;
  first_page_url: string='';
  from: number=0;
  last_page: number=0;
  last_page_url: string='';
  next_page_url?: any;
  path: string='';
  per_page: number=0;
  prev_page_url?: any;
  to: number=0;
  total: number=0;
}

export class GiftDto {
  id: number=0;
  name: string='';
  desc: string='';
  points: number=0;
  image_name: string='';
  cat_id: number=0;
  created_at: string='';
  updated_at: string='';
}