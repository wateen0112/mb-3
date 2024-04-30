

export class FilterDto{
query='';
startDate='';
endDate='';
isBlocked=false;
pageSize=10;
pageIndex=1;
}
export class GetAllPrivateDto {
  count=0;
 customers=<PrivateDto[]>[];
}
export class GetAllCompanyDto{
  count=0;
  customers=<CompanyDto[]>[];
}

class LastOrder {
  dateCreated= '';
  orderStage= '';
}
  export class PrivateDto {
  id= '';
  fullName= '';
  phoneNumber= '';
  ordersCount= 0;
  lastOrder= new LastOrder();
}
export class CompanyDto {
  id= '';
  companyName= '';
  phoneNumber= '';
  ordersCount= 0;
  lastOrder?= new LastOrder;
}
export class  GetPrivateByIdDto {
  id= '';
  firstName= '';
  lastName= '';
  phoneNumber= '';
  imageUrl= '';
  ImageFile=<File[]>[];
  iban= '';
  vat= '';
  countryId='';   
  password=''
  coc= '';
  email= '';
}
export class GetCompanyByIdDto  {
  id= ''
  name= ''
  firstName= ''
  lastName= ''
  phoneNumber= ''
  password=''
  email= ''
  imageUrl= null
  ImageFile=<File[]>[];
  postalCode= ''
  countryId= ''
  locality= ''
  vat= ''
  coc= ''
  street=''
  iban= ''
};

