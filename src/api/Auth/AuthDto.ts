export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  id: string
  email: string
  accessToken: string
  refreshToken: string
}

 export class LoginDto {
  phone_number: string='';
  password: string='';
  noti_id: string='';
}
export class SendOtpDto{
  phone_number: string='';
  forget_password :Boolean = true   
}
export  class  UserDataDto {
  name: string='';
  owner_name: string='';
  area_id: string='';
  governorate_id: string='';
  nearest_point: string='';
  latitude: number=0;
  longitude: number=0;
  phone_number: string='';
}
export class ProfileDataResponseDto {
  status: string='';
  data: ProfileDto =  new ProfileDto()
}

export class ProfileDto {
  id: string='';
  profile_image_name: string='';
  name: string='';
  owner_name: string='';
  license_image: string='';
  book_image: string='';
  lab_image: string='';
  governorate_id: number=0;
  area_id?: any;
  in_progress: string='';
  nearest_point: string='';
  latitude: number=0;
  longitude: number=0;
  phone_number: string='';
  password: string='';
  noti_id: string='';
  referal_id?: any;
  created_at: string='';
  updated_at: string='';
  area?: any;
  governorate: Governorate|any;
}

export interface Governorate {
  id: number;
  name: string;
  deleviery_price: string;
  created_at: string;
  updated_at: string;
}

export class ResetPasswordDto{
  phone_number : string = '';
  password:string = '';
  confirm_password:string = '';
  code :string  =''
}