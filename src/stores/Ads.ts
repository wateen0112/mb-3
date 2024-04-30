import { AdsResponseDto } from './../api/Ads/AddsDto';
import { ADDS_API } from "@/api/Ads";
import { AddAdvertismentDto } from "@/api/Ads/AddsDto";
import { useApi } from "@/composables";
import { useToast } from "vue-toastification";

const toast = useToast();
const { POST,GET } = useApi();

export const AdsStore = defineStore('adsStore', () => {
 const addAddvertisementDto = ref<AddAdvertismentDto>(new AddAdvertismentDto());
const adsResponseDto = ref<AdsResponseDto>(new AdsResponseDto());
 const getAdvertisements = async(page:number=1)=>{
    try {
        const res = await GET(ADDS_API.get_advertisements+`?page=${adsResponseDto.value.pagination.current_page}`);
        adsResponseDto.value = res.data;
    } catch (error) {
        throw(error)

    }
  }
 

  const addAdvertisements = async()=>{
    try {
        const res = await POST(ADDS_API.add_advertisement,addAddvertisementDto.value, {error:true},{formData:true});
    } catch (error) {
        throw(error)
    }
}
return{
    adsResponseDto, addAddvertisementDto , addAdvertisements , getAdvertisements
}
});