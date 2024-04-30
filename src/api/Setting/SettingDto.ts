export class GetAllDto {
  // ? GetAllDto EXAMPLE 
}

export class BaseDto {
  maxWeight = 0;
  timeCost = 0;
  kmCost = 0;
  needToolCost = 0;
  btw = 0;
  companyInfo = {
    name: '',
    address: '',
    vat: '',
    coc: ""
  };
  workTime = {
    start: '',
    end: ''
  }
}

//? interface
export interface Country {
  id: string | null,
  name: string,
  dateCreated?: string
}
export interface Vehicle {
  id: string | null,
  name: string,
  dateCreated?: string
}
export interface DriverLevel {
  id: string | null,
  name: string,
  level: 0,
  canPickupCompanyOrder: boolean

}
export interface Roles {
  id: string | null,
  name: string,
  employeeCount: 0,


}
export interface PlaceComeFrom {
  id?: string;
  url?: string;
  order?: number;
  file: null | File;
  name: string;
  description: string
}
export interface Floor {
  id?: string;
  url?: string;
  order?: number;
  file: null | File;
  name: string;
  cost: number
}
export interface OrderDates {
  id?: string | null,
  dateCreated?: string
  day: number,
  cost: number,
}
export interface ExpectedWeight {
  id?: string;
  order?: number
  value: string;
}
export interface Place {
  url?: string,
  id?: string,
  order?: number,
  description: string;
  file: null
  name: string;
}
export interface ExtraHelp {
  id?: string,
  url?: string,
  order?: number,
  cost: number,
  description: string;
  file: null
  name: string;
}



