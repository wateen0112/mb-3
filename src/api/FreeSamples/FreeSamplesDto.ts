import { Pagination } from "../Ads/AddsDto";

export class FreeSamplesRequestDto {
  status: string='';
  list_id: number=0;
}
export class FreeSamplesResponseDto {
  status: string='';
  data: FreeSampleDto[] =[];
  pagination: Pagination= new Pagination();
}


export class FreeSampleDto {
  id: number=0;
  name: string='';
  deleviery_price: string='';
  created_at: string='';
  updated_at: string='';
}
