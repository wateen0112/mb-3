export class StoreDto {
 title:Titleml=new Titleml()
  commercial_registeration: string = '';
  prefered_payment_method: string = "bank_account";
  category_title: string = "gakozy";
  categories_ids: number[] = [];
  logo:string=''
  bank_name: string = "";
cr_file:File|string='';
  iban: string = "";
  receiver_fname: string = "";
  stc_phone_number: string = "";
  commercial_registeration_file:File | string='';
  logoFile:File []| string=[];
  id: number=0;
 
oldLogo :string = '';
  status: string='';
  is_approved: boolean=false;
  categories: Category[]=[];
}


export interface Category {
  id: number;
  parent_id: number;
  type: string;
  title__ml: Titleml;
  icon_path?: string;
  is_published: number;
  created_by: string;
  updated_by: string;
  deleted_by?: any;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  pivot: Pivot;
}

interface Pivot {
  store_id: number;
  category_id: number;
}

class Titleml {
  en?: string='';
  ar?: string='';
}
