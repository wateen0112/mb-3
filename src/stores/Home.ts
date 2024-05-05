
import { HOME_API } from "@/api/Home";
import { GovernorateResponseDto, HomeResponseDto, OfficeDto, OfficesResponseDto, OnlineMarketResponseDto, OrderQuery, SingleOnlineMarketResponse, SuppliersResponseDto, TabDto } from "@/api/Home/HomeDto";
import { MaterialSearchRequstDto, MaterialSearchResponseDto } from "@/api/Materials/MaterisalsDto";
import { useApi } from "@/composables";

export const  HomeStore  = defineStore('home',()=>{
    
const {GET , POST}= useApi();
   const homeResponseDto = ref<HomeResponseDto>(new HomeResponseDto())
   const materialShapeResponseDto = ref<MaterialSearchResponseDto>(new MaterialSearchResponseDto())
   const suppliersResponseDto = ref<SuppliersResponseDto>(new SuppliersResponseDto())
   const delegationsResponseDto = ref<SuppliersResponseDto>(new SuppliersResponseDto())
    const governorateResponseDto = ref<GovernorateResponseDto>(new GovernorateResponseDto())
    const subGovernorateResponseDto = ref<GovernorateResponseDto>(new GovernorateResponseDto())
   const onlineMarketsResponseDto = ref<OnlineMarketResponseDto>(new OnlineMarketResponseDto())
    const office  = ref<OfficeDto>(new OfficeDto())
   const officesResponseDto = ref<OfficesResponseDto>(new OfficesResponseDto())
const singleOnlineMarketResponse = ref<SingleOnlineMarketResponse>(new SingleOnlineMarketResponse())
const query = ref<OrderQuery>(new OrderQuery())    
const join_request=  async (office_id:string)=>{
try {
    const res = await POST(HOME_API.join_request ,{
        office_id:office_id
    })
} catch (error) {
    throw(error);
}
 }
    
 const home=  async ()=>{
  let office_id  = await localStorage.getItem('token')
  if(office_id==undefined){
    office_id=''
  }  
    try {
        const res = await POST(HOME_API.home ,{
            office_id :office_id
        })
        homeResponseDto.value = res.data
    } catch (error) {
        
        throw(error);

    }
     }
     const get_governorate= async ()=>{
        try {
            const res = await GET<GovernorateResponseDto>(HOME_API.get_governorate)
            governorateResponseDto.value= res.data
        } catch (error) {
            throw(error)
        }

 
        
                    const buy_with_points= async (supplier_type:string ,material_id:string )=>{
                        try {
                            const res = await GET(HOME_API.buy_with_points,{
                                supplier_type :supplier_type //or store
                                , material_id : material_id
                            })
                        } catch (error) {
                            throw(error)
                        }
                        }
                    
                       
                                }
      const medication_guide= async (supplier_type:string ,material_id:string )=>{
                                    try {
                                        const res = await GET(HOME_API.medication_guide,
                                            {
                                                supplier_type :supplier_type //or store
                                                , material_id :material_id
                                            })
                                    } catch (error) {
                                        throw(error)
                                    }
                                    }
                                const get_suppliers= async (query :Object = {})=>{
                                    try {
                                        const res = await GET<SuppliersResponseDto>(HOME_API.get_suppliers,query)
                                        suppliersResponseDto.value = res.data
                                    } catch (error) {
                                        throw(error)
                                    }
                                    }
                                    
const get_delegators= async (query :Object)=>{
    try {
        const res = await GET<SuppliersResponseDto>(HOME_API.get_delegators+`?page=${delegationsResponseDto.value.pagination.current_page}`,query)
        delegationsResponseDto.value=res.data
    } catch (error) {
        throw(error)
    }
    }
    const get_offices= async (query:Object = {})=>{
        try {
            const res = await GET<OfficesResponseDto>(HOME_API.get_offices,query)
            officesResponseDto.value= res.data;
            

        } catch (error) {
            throw(error)
        }
        }
        const get_office_by_id= async (id:number)=>{
            try {
                const res = await GET<OfficeDto>(HOME_API.get_offices,{
                    id:id
                })
                office.value= res.data.data;
                
    
            } catch (error) {
                throw(error)
            }
            }
        const get_material_shapes= async ()=>{
            try {
                const res = await GET<MaterialSearchResponseDto>(HOME_API.get_material_shapes)
                materialShapeResponseDto.value = res.data
            } catch (error) {
                throw(error)
            }
            }
            const get_jobs= async ()=>{
                try {
                    const res = await GET(HOME_API.get_jobs)
                } catch (error) {
                    throw(error)
                }
                }
                 
                const get_online_market= async (query:Object = {})=>{
                    try {
                        const res = await GET<SingleOnlineMarketResponse>(HOME_API.get_online_market,
                            query)
                            singleOnlineMarketResponse.value = res.data;  
                    } catch (error) {
                        throw(error)
                    }
                    }
                    const get_online_markets= async (query :Object={})=>{
                        try {
                            const res = await GET<OnlineMarketResponseDto>(HOME_API.get_online_market,query
                               )
                               onlineMarketsResponseDto.value = res.data
                        } catch (error) {
                            throw(error)
                        }
                        }
                    const buy_with_points= async (supplier_type:string ,material_id:string )=>{
                        try {
                            const res = await GET(HOME_API.buy_with_points,{
                                supplier_type :supplier_type //or store
                                , material_id : material_id
                            })
                        } catch (error) {
                            throw(error)
                        }
                        }
                        const get_sub_governorate= async (governorate_id:any)=>{
                            try {
                                const res = await GET<GovernorateResponseDto>(HOME_API.get_governorate,{
                                    governorate_id:governorate_id
                                })
                                subGovernorateResponseDto.value= res.data
                            } catch (error) {
                                throw(error)
                            }}
                            const get_governorate_by_id   = (id:number)=>{
                                return governorateResponseDto.value.data.find(i=>{
                                    return i.id==id
                                })
                            }
                                 
    return {
        governorateResponseDto,
        subGovernorateResponseDto,
        officesResponseDto,
        homeResponseDto,
        onlineMarketsResponseDto,
        materialShapeResponseDto,
        singleOnlineMarketResponse,
        suppliersResponseDto,
        delegationsResponseDto
        ,
        query , 
 office,
 get_governorate_by_id,
        get_sub_governorate,
        get_office_by_id,
        join_request,
        home,
        buy_with_points,
        get_governorate,
        get_suppliers,
        get_delegators,
        get_offices,
        get_material_shapes,
        get_jobs,
        get_online_market,
        get_online_markets,

        medication_guide
    }
})