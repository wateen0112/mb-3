// ? UPPER_CASE
export enum SETTING_API {

  // ! KEY SHOULD BE THE SAME OF THE END OF API ROUTE (" => GetAll <= ")
  // GetAll = '/setting/GetAll',

  //POST
  UpsertCountry = 'Setting/UpsertCountry',
  UpsertVehicleType = 'Setting/UpsertVehicleType',
  UpsertDriverLevel = 'Setting/UpsertDriverLevel',
  UpsertOrderDate = 'Setting/UpsertOrderDate',
  UpsertRole = 'Setting/UpsertRole',
  AddFloor = 'Setting/AddFloor',
  AddPlaceComeFrom = 'Setting/AddPlaceComeFrom',
  AddExpectedWeight = 'Setting/AddExpectedWeight',
  AddPlace = 'Setting/AddPlace',
  AddExtraHelpVehicle = 'Setting/AddExtraHelpVehicle',
  AddExtraHelpPerson = 'Setting/AddExtraHelpPerson',
  ModifyFloor = 'Setting/ModifyFloor',
  ModifyPlaceComeFrom = 'Setting/ModifyPlaceComeFrom',
  ModifyExpectedWeight = 'Setting/ModifyExpectedWeight',
  ModifyPlace = 'Setting/ModifyPlace',
  ModifyExtraHelpVehicle = 'Setting/ModifyExtraHelpVehicle',
  ModifyExtraHelpPerson = 'Setting/ModifyExtraHelpPerson',
  ModifySetting = 'Setting/ModifySetting',

  //GET
  GetRoleById = 'Setting/GetRoleById',
  GetAllCountries = 'Setting/GetAllCountries',
  GetAllVehicleTypes = 'Setting/GetAllVehicleTypes',
  GetAllDriverLevels = 'Setting/GetAllDriverLevels',
  GetAllOrderDates = 'Setting/GetAllOrderDates',
  GetAllRoles = 'Setting/GetAllRoles',
  GetAllFloors = 'Setting/GetAllFloors',
  GetAllPlacesComeFrom = 'Setting/GetAllPlacesComeFrom',
  GetAllExpectedWeights = 'Setting/GetAllExpectedWeights',
  GetAllPlaces = 'Setting/GetAllPlaces',
  GetAllExtraHelpVehicles = 'Setting/GetAllExtraHelpVehicles',
  GetAllExtraHelpPersons = 'Setting/GetAllExtraHelpPersons',
  GetSetting = 'Setting/GetSetting',

  // DELETE
  DeleteCountry = 'Setting/DeleteCountry',
  DeleteVehicleType = 'Setting/DeleteVehicleType',
  DeleteDriverLevel = 'Setting/DeleteDriverLevel',
  DeleteOrderDate = 'Setting/DeleteOrderDate',
  DeleteRole = 'Setting/DeleteRole',
  DeleteFloor = 'Setting/DeleteFloor',
  DeletePlaceComeFrom = 'Setting/DeletePlaceComeFrom',
  DeleteExpectedWeight = 'Setting/DeleteExpectedWeight',
  DeletePlace = 'Setting/DeletePlace',
  DeleteExtraHelpVehicle = 'Setting/DeleteExtraHelpVehicle',
  DeleteExtraHelpPerson = 'Setting/DeleteExtraHelpPerson',
}
