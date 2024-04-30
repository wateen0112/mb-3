export class ContactDto { //and GetAllDriverRequestDto
  id= '';
  email= '';
  phoneNumber= '';
  name= '';
  isReplied= false;
  dateCreated= '';

}

 
export class AddDto {
  title= '';
  content= '';
  email= '';
  phoneNumber= '';
  name= '';
}
export class DriverRequestDto{
name='';
id='';
reply='';
  phoneNumber='';
  email='';
  skillYears=0;
  vehicleTypeId='';
  drivingLicenseUrl='';
  hasUniform=false;
  hasTools=false;
}
export class MessageDto{
  id= '';
  title= '';
  content= '';
  email= '';
  phoneNumber= '';
  name= '';
  dateCreated= '';
  reply= '';
  employee= '';
}
export class ReplyDto {  // * reply for driver join request too !
  id= '';
  reply= '';
}
export class GetAllMessagesDto {
  count=0;
  contactsUs=<ContactDto[]>[];
}
export class GetAllDrvierRequestDto {
  count=0;
  driverRequests=<ContactDto[]>[];
}
