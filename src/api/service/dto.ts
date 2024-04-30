import { EmployeeDto } from "../employee/dto";

// for orders
export interface Service {
  id: number;
  provider_id: number;
  store_id: number;
  order_id: number;
  service_id: number;
  employee_id: number;
  beneficiary_id: number;
  time_slot_id?: any;
  gender: string;
  service_location: string;
  service_price: string;
  status: string;
  created_by: string;
  updated_by: string;
  deleted_by?: any;
  deleted_at?: any;
  created_at: string;
  updated_at: string;
  service_date: string;
  related_service: Relatedservice;
  related_employee?: any;
  related_timeslot?: any;
}
export interface Relatedservice {
  id: number;
  provider_id: number;
  title__ml: Titleml;
  image_path: string;
  description__ml: Descriptionml;
  durationInMinutes: number;
  for_gender_type: string;
  location: Location[];
  has_offer: number;
  offer_start_date: string;
  offer_end_date: string;
  is_published: number;
  offer_type:string
  offer:string;
  created_by: string;
  updated_by: string;
  deleted_by?: any;
  deleted_at?: any;
  created_at: string;
  updated_at: string;
}

export interface Descriptionml {
  ar?: any;
}

export interface Titleml {
  en: string;
  ar: string;
}
//main service / / 
 export  class MainServiceDto {
  id: number=0;
  imagePath:string=''
  title: Title={
    ar:'',
    en:''
  };
  categories:number[]=[]
  image:any=''
  description?:Title ={
ar:'',
en:'',
  }
  offer_type:string='percentage';
 
  gender:string=''
  duration_in_minutes: number=0;
  duration_in_houres: number=0;
  for_gender_type: string='';
  location: Location[]=[{
    home: false,
    store: false,
    male_price: 0,
    female_price: 0
  },
  {
    home: false,
    store: false,
    male_price: 0,
    female_price: 0
  }];
  has_offer: boolean=false;

  offer_start_date: Date|string='';
  offer_end_date: Date|string='';
  categories_ids: number[]=[];
}

interface Location {
  home?: boolean;
  store?: boolean;
  male_price?: number;
  female_price?: number;
}

interface Title {
  en: string;
  ar: string;
}
 export class TimeSlotDto {
  id:number=0 ;
  from_name:string='';
  location:string=''
}
export class AddAppointmentDto{
  atStore:boolean=false
  service_ids:number[]=[0];
timeslot_ids:number[]=[];
timeSlots_ext_ids:number [][]=[[]];
services:MainServiceDto[]=[];
employees:EmployeeDto[][]=[];
timeSlots:TimeSlotDto[][]=[]
date:string='';
customer_name:string=''
customer_phone:string=''
gender:string='female'
location:string='home'
employee_ids:number[]=[0]

discount:number=10
discount_type:string='fixed'
}
