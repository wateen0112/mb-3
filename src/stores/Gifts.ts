import { GIFTS_API } from "@/api/Gifts";
import { BuyWithPointsRequestDto, GetOnlineMarketRequestDto, GetSuppliersRequestDto, GiftsResponseDto, MedicationGuideRequestDto } from "@/api/Gifts/GiftsDto"
import { useApi } from "@/composables";
const {GET , POST} = useApi()
export const  GiftsStore = defineStore('gift',()=>{
const getSuppliersRequestDto = ref<GetSuppliersRequestDto>();
const getOnlineMarketRequestDto = ref<GetOnlineMarketRequestDto>();
const buyWithPointsRequestDto = ref<BuyWithPointsRequestDto>();
const medicationGuideRequestDto = ref<MedicationGuideRequestDto>();
const giftsResponseDto = ref<GiftsResponseDto>(new  GiftsResponseDto())
const giftsCategoriesResponseDto = ref<GiftsResponseDto>(new  GiftsResponseDto())

const   getGifts = async(categoryId :String)=>{
try {
    const res = await GET<GiftsResponseDto>(GIFTS_API.gifts,{
        category_id:categoryId
    });
    giftsResponseDto.value = res.data;
} catch (error) {
    throw(error)
}
}
const   getGiftsCategories = async()=>{
    try {
        const res = await GET<GiftsResponseDto>(GIFTS_API.gifts);
        giftsCategoriesResponseDto.value = res.data;
    } catch (error) {
        throw(error)
    }
    }
const  add_gift_request  = async (giftId :string)=>{
    try {
        const res = await POST (GIFTS_API.add_gift_request,{
            gift_id :giftId
        })
    } catch (error) {
        throw(error) 
    }
}
return {
    
    giftsResponseDto,
    add_gift_request ,giftsCategoriesResponseDto,getGifts ,getGiftsCategories,medicationGuideRequestDto,buyWithPointsRequestDto,getOnlineMarketRequestDto,getSuppliersRequestDto
}

})