export class EmployeeDto {
  id: number=0;
  name: Name={
    ar:'',
    en:''
  };
  mobile: string='';
  status: string='enabled';
  is_sub_account: boolean=false;
  services: number[]=[];
  permissions: any[]=[];
  location: Location[]=[
    {
      store: false,

  home: false
    },
    {
      store: true,

  home: false
    }
  ];
  working_hours: Workinghour[]=[];
}

export class Workinghour {
  to: string="12:00";
  from: string="12:00";
}

interface Location {
  store?: boolean;
  male_price?: any;
  female_price?: any;
  home?: boolean;
}

interface Name {
  ar: string;
  en: string;
}
