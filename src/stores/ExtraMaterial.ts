import { EXTRA_MATERIALS_API } from '@/api/ExtraMaterials';
import { add_extraMaterialListRequestDto } from './../api/ExtraMaterials/ExtraMaterialsDto';
import { useApi } from "@/composables"


const {GET, POST} = useApi()
export const ExtraMaterialStore = defineStore('extra_material',()=>{
   const  extraMaterialList = ref<add_extraMaterialListRequestDto[]>([])
   const add_offer_to_extra_material_list_dto =ref()

   const add_extra_material_list = async()=>{
    try {
        const res = await POST (EXTRA_MATERIALS_API.add_extra_material_list,extraMaterialList.value)
    } catch (error) {
        throw(error)
    }
   }
   const get_extra_material_list = async()=>{
    try {
        const res = await GET (EXTRA_MATERIALS_API.get_extra_material_list)
    } catch (error) {
        throw(error)
    }
   }
   const add_offer_to_extra_material_list = async()=>{
    try {
        const res = await POST (EXTRA_MATERIALS_API.add_offer_to_extra_material_list,{})
    } catch (error) {
        throw(error)
    }
   }
   const change_buy_request_status = async()=>{
    try {
        const res = await POST (EXTRA_MATERIALS_API.change_buy_request_status,{})
    } catch (error) {
        throw(error)
    }
   }
    return {
        add_extra_material_list ,add_offer_to_extra_material_list,change_buy_request_status,add_offer_to_extra_material_list_dto
    }
}) 