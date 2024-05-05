import { OrderDto } from "../order/dto";

export class FinaceDto {
  orders:OrderDto[]=[]
  total:number=0
  vat:number =0
  MedicalBox_cut:number=0
}
