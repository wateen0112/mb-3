import { Pagination } from "../Ads/AddsDto";

export  class AddToCartRequestDto {
  material_id: number=0;
  qty: number=0;  
  supplier_type :string  = '';
  owner_id :number = 0;
}
export class ConfirmOrderRequestDto {
  payment_type: string='نقدي';

  online_market_id: string=''; 


}
export class CartProductResponseDto {
  status: string='';
  data: CartMaterialDto[]=[];
}

export class CartMaterialDto {
  id: number=0;
  pharmacy_id: number=0;
  material_id: number=0;
  material_price: number=0;
  qty: number=0;
  total_price: number=0;
  order_id?: any;
  created_at: string='';
  updated_at: string='';
  material: Material =  new Material();
}

export class Material {
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
  notes?: any;
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
  packing_type: Packingtype[]=[];
  office?: any;
  shape: Shape  = new Shape();
}

 export class Shape {
  id: number=0;
  name: string='';
  created_at: string='';
  updated_at: string='';
}

 export interface Packingtype {
  id: number;
  name: string;
  amount: string;
  material_id: number;
  created_at: string;
  updated_at: string;
}
export class MyOrdersResponseDto {
  status: string= '';
  data: OrderDto[] =[];
  pagination: Pagination = new Pagination();
}


export class OrderDto {
  id: number=0;
  pharmacy_id: number=0;
  area_id: number=0;
  governorate_id: number=0;
  delegate_id: number=0;
  payment_status: string='';
  status: string='';
  payment_type: string='';
  materials_total_price: number=0;
  delivery_price: number=0;
  promo_code_id: any;
  promo_code: any;
  promocode_descount: any;
  total_order_price_before_promo_code: any;
  final_total_order_price: number=0;
  supplier_type: string='';
  note: any;
  reason_refuse: any;
  due_date: string='';
  office_id: number=0;
  store_id: any;
  created_at: string='';
  updated_at: string='';
  delegation: Delegation= new Delegation();
  area: Area = new Area();
  governorate: Area = new Area();
  office: Area = new Area();
  store: any;
  products: Product[]=[];
}

interface Product {
  id: number;
  pharmacy_id: number;
  material_id: number;
  material_price: number;
  qty: number;
  total_price: number;
  order_id: number;
  created_at: string;
  updated_at: string;
  material: Material;
}


export   class Area {
  id: number=0;
  name: string='';
}

export  class Delegation {
  id: number=0;
  profile_image_name: string='';
  delegation_name: string='';
  pharmacy_id: any;
  office_id: number=0;
  store_id: any;
  created_at: string='';
  updated_at: string='';
}