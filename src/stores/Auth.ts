import { ProfileDataResponseDto, ProfileDto, ResetPasswordDto, SendOtpDto } from './../api/Auth/AuthDto';
import { defineStore } from 'pinia';
import { useAuth } from '@/@core/composable/useAuth';
import { AUTH_API } from '@/api/Auth/index';
import { useToast } from 'vue-toastification';
import { useApi } from '@/@core/composable/useApi';
import { LoginDto ,UserDataDto} from '@/api/Auth/AuthDto';
import {OneSignalAppId} from '~config'

const toast = useToast();
const { POST,GET } = useApi();

export const useAuthorization = defineStore('AuthorizationStore', () => {
  const { SetUserData } = useAuth();
  const resetPasswordDto = ref<ResetPasswordDto>(new ResetPasswordDto())
  const authDto = ref<LoginDto>( new LoginDto());
  const sendOtpDto = ref<SendOtpDto>(new SendOtpDto());
  const userDto = ref<UserDataDto>();
  const profile_image_file = ref<File>()
const license_image_file = ref<File>()
const lab_image_file = ref<File>()
const book_image_file = ref<File>()
const profileResponseDto = ref<ProfileDataResponseDto>(new ProfileDataResponseDto())

async function login() {
  authDto.value.noti_id=OneSignalAppId
  try {
    const res = await  POST(AUTH_API.LOGIN,authDto.value  , {error:'dialog'})

 
if(res.response){
  return  res.response.status
}

else {
  if(res.status==200){
    localStorage.setItem('token',res.data.token)
  console.log(res);
  await getUserData()
  }
else {
  localStorage.clear()
}

}


} catch (error) {
    localStorage.clear()
throw(error)
   
    // alert(error.status)
    

  }
}
async function sendOtp() {
  try {
    const res = await  POST(AUTH_API.SEND_OTP,sendOtpDto.value)
  } catch (error) {
    throw(error)
  }
}
async function getUserData() {
  try {
    const res = await  GET<ProfileDataResponseDto>(AUTH_API.GET_USER_DATA)
    profileResponseDto.value = res.data;
    localStorage.setItem('uid',profileResponseDto.value.data.id)
    profileResponseDto.value.data.password=''
  } catch (error) {
    throw(error)
  }
}
async function updateUserData() {
  try {
    var editDto = {}
    if (profileResponseDto.value.data.password ==''){
editDto = {
  name : profileResponseDto.value.data.name,
  owner_name : profileResponseDto.value.data.owner_name,
  license_image : license_image_file.value,
  book_image : book_image_file.value,
  lab_image:lab_image_file.value,
  profile_image_name:profile_image_file.value,
  area_id :profileResponseDto.value.data .area_id,
  governorate_id : profileResponseDto.value.data.governorate_id ,
  nearest_point :profileResponseDto.value.data.nearest_point,
  latitude :profileResponseDto.value.data.latitude,
  longitude :profileResponseDto.value.data.longitude,
  phone_number : profileResponseDto.value.data.phone_number,
}
    }
    else {
      editDto = {
        name : profileResponseDto.value.data.name,
        owner_name : profileResponseDto.value.data.owner_name,
      password:profileResponseDto.value.data.password,
        area_id :profileResponseDto.value.data .area_id,
        governorate_id : profileResponseDto.value.data.governorate_id ,
        nearest_point :profileResponseDto.value.data.nearest_point,
        latitude :profileResponseDto.value.data.latitude,
        longitude :profileResponseDto.value.data.longitude,
        phone_number : profileResponseDto.value.data.phone_number,
        license_image : license_image_file.value,
        book_image : book_image_file.value,
        lab_image:lab_image_file.value,
        profile_image_name:profile_image_file.value,
      }
    }
    const res = await  POST(AUTH_API.UPDATE_USER_DATA,{
...editDto
    },
  
    {
      success:true , 
      error:true 
    }
    ,
    {formData:true}
    )
  
  } catch (error) {
    throw(error)
  }
}
const logout = async()=>{
  localStorage.clear();
  const router = useRouter()
  router.push('/login')
}
const resetPassword = async()=>{
  resetPasswordDto.value.phone_number=sendOtpDto.value.phone_number
  try {
    const res = await POST(AUTH_API.RESET_PASSWORD,resetPasswordDto.value)
  } catch (error) {
    throw(error)
  }
}
  return { authDto  ,sendOtpDto  , userDto  , 
    book_image_file,lab_image_file,profile_image_file,license_image_file
   , profileResponseDto,
   resetPasswordDto,
  login , sendOtp , getUserData ,resetPassword, updateUserData,logout };
});
