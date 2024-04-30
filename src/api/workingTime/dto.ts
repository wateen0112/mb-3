export class ShiftCalendarServiceItemDto {
  id='';
  title='';

  icon='';
  timeSlots: ShiftCalnedarTimeSlotDto[] = [];
}
export class ShiftCalendarEmployeeItemDto {
  id='';
  name:Name={
ar:'',
en:''
  }
is_active=false;
  timeSlots: ShiftCalnedarServicesSlotDto[] = [];
}
export class ShiftCalnedarTimeSlotDto {
  id=''; 
  time='';
  isActive=false;
}
export class ShiftCalnedarServicesSlotDto {
  id=''; 
  time='';
  status='active'
  title='';
  icon='';
  isActive=false;
}
export class TimeSlotDto {
  id:number=0
  working_days:string[]=[]
  shift_from_time:string=''
  shift_to_time:string=''
coverage_area:number=10
coverage_area_lattitude:number=0
coverage_area_longitude:number=0
is_active:boolean=true
location:string='home'
services_ids:number[]=[]
shifts:CustomTimeSlotShift[]=[{
  location:this.location,
  services_ids:[],
  shift_from_time:this.shift_from_time,
  shift_to_time:this.shift_to_time
}]
title:string=''
starting_date:string=''
ending_date:string=''
}



interface Service {
  id: number;
  title__ml: Titleml;
  image_path?: any;
  timeslots: Timeslot[];
}

interface Timeslot {
  id: number;
  from_time: string;
  date: string;
  is_active: Boolean;
  is_custom: number;
  status: string;
  pivot: Pivot;
}

interface Pivot {
  service_id: number;
  time_slot_id: number;
}

interface Titleml {
  en: string;
  ar: string;
}
export interface TimeSlotEmployeeDto {
  id: number;

  name: Name;
  is_active: boolean;
  shifts: Shift[];
}
export interface TimeSlotServiceDto {
id:Number;
is_active:boolean,
service:ServiceWithTimeSlotDto
}

interface Shift {
  id: number;
  shift_from_time: string;
  shift_to_time: string;
  shift_status: number;
  service_id: number;
  employee_id: number;
  service: Service;
  location:String;
  slots: any[];
  services_ids:number[]
}
export interface CustomTimeSlotShift {
  shift_from_time: string;
  shift_to_time: string;
  services_ids:number[]
  location:string
}
interface Service {
  id: number;
  title__ml: Name;
  is_active:Boolean;
  image_path:String;
  timeSlots:TimeSlotDto[]
}
interface ServiceWithTimeSlotDto {
  id:number,
  title_ml:Name
  image_path:string
  timeslots:TimeSlotDto[]
}
interface Name {
  ar: string;
  en: string;
}
