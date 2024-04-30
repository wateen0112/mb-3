import { MaterialDto } from "@/api/Home/HomeDto";
import { MATERIALS_API } from "@/api/Materials";
import { DeficienListResponseDto, MaterialOffersResponseDto, MaterialSearchRequstDto, MaterialSearchResponseDto } from "@/api/Materials/MaterisalsDto";
import { useApi } from "@/composables";

const {GET , POST}= useApi();
export const  MaterialStore  = defineStore('material',()=>{
const  deficient_list_dto =ref<DeficienListResponseDto>()
const  filtered_deficient_list_dto =ref<DeficienListResponseDto>()
const filterDto = ref<MaterialSearchRequstDto>()
const materialSearchResponseDto = ref<MaterialSearchResponseDto>(new  MaterialSearchResponseDto())   
const materialOffersResponseDto = ref<MaterialOffersResponseDto>(new MaterialOffersResponseDto())   
const material = ref<MaterialDto > ( new MaterialDto())
const deficient_list= async(trade_name:String , amount:number)=>{
    try {
            const res = await GET<DeficienListResponseDto>(MATERIALS_API.deficient_list,{
                trade_name:trade_name , 
                amount:amount
            })
            deficient_list_dto.value =res.data;
        } catch (error ) {
            throw(error)
        }
    }
    const get_material_by_id= async(id:number )=>{
        try {
            const res = await GET<MaterialDto>(MATERIALS_API.material_search,
                {id:id}
            )
         
     material.value = res.data.data[0]
        } catch (error ) {
            throw(error)
        }
    }
    const material_search= async(query:any ={})=>{
        try {
            const res = await GET<MaterialSearchResponseDto>(MATERIALS_API.material_search,query)
            materialSearchResponseDto .value = res.data
   
        } catch (error ) {
            throw(error)
        }
    }
    
    const get_offers= async()=>{
        try {
            const res = await GET<any>(MATERIALS_API.get_offers+`?page=${materialOffersResponseDto.value.pagination.current_page}`,{
                "type" : "مكتب"
            })
            materialOffersResponseDto.value = res.data
        } catch (error ) {
            throw(error)
        }
    }
    const get_materials_by_office_offer = async(query :Object = {}) =>{
        try {
            const res = await GET<any>(MATERIALS_API.get_offers+`?page=${materialOffersResponseDto.value.pagination.current_page}`,query)
    materialSearchResponseDto.value  =res.data
        } catch (error) {
            
        }
    }

    return {
    materialSearchResponseDto,
    filterDto,
        deficient_list_dto ,filtered_deficient_list_dto , deficient_list,material_search
    ,    material,
    materialOffersResponseDto
    ,get_offers,
    get_materials_by_office_offer,
    get_material_by_id
    }
});