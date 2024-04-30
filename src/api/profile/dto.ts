export class ProfileDto {
  id: number=0;
  language: string = 'ar';
  email: string = '';
  password: string = '';
  first_name: string = '';
  last_name: string = '';
  gender: string = 'male';
  image:File|string =''
  mobile: string='';;
  is_active: number=0;
  oldImage :string = '';


}

export class LocationDto {
  
  latitude:string="24.730023000000028";
  longitude:string="46.67038300000002";
}
