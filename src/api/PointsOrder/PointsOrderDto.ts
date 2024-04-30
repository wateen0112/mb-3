
export interface AddToPointsCartRequestDto {
  material_id: number;
  qty: number;
}
export interface ConfirmOrderRequestDto {
  payment_type: string;
  supplier_id: string;
  delegate_id: string;
}
interface MaterialsWithOrdersResponseDto {
  status: string;
  data_count: number;
  data: Datum[];
  pagination: Pagination;
}

interface Pagination {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

interface Datum {
  id: number;
  profile_image_name: string;
  name: string;
  owner_name: string;
  license_image: string;
  book_image: string;
  office_image: string;
  governorate_id: number;
  area_id: number;
  in_progress: string;
  nearest_point: string;
  latitude: number;
  longitude: number;
  phone_number: string;
  password: string;
  type: string;
  noti_id: null;
  referal_id: null;
  created_at: string;
  updated_at: string;
}
