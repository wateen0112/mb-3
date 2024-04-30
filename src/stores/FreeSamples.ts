import { FREE_SAMPLES_API } from "@/api/FreeSamples"
import { FreeSamplesResponseDto } from "@/api/FreeSamples/FreeSamplesDto"
import { useApi } from "@/composables"

const {GET, POST} =useApi()
export const FreeSamplesStore = defineStore('free_samples',()=>{
const freeSamplesResponseDto = ref<FreeSamplesResponseDto>(new FreeSamplesResponseDto())


const  get_free_samples = async(    query : any)=>{
try {
    const res = await GET<FreeSamplesResponseDto>(FREE_SAMPLES_API.free_samples+`?page=${freeSamplesResponseDto.value.pagination.current_page}`,
        
        query
        )
    freeSamplesResponseDto.value = res.data

} catch (error) {
    throw(error)
}
}
    return {get_free_samples,freeSamplesResponseDto}
})