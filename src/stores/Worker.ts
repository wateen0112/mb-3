import { AddWorkerRequestDto } from "@/api/Workers";
import { WORKERS_API } from "@/api/Workers/WorkersDto";
import { useApi } from "@/composables";

const {GET, POST} = useApi();
export const WorkerStore = defineStore('worker',()=>{
const addWorkerRequestDto = ref<AddWorkerRequestDto>()
const add_worker = async()=>{
    try {
        const res = await POST (WORKERS_API.add_worker,addWorkerRequestDto.value,{
            
        },{formData:true})
    } catch (error) {
        throw (error)
    }
}
const update_worker = async()=>{
    try {
        const res = await POST (WORKERS_API.update_worker,addWorkerRequestDto.value,{
            
        },{formData:true})
    } catch (error) {
        throw (error)
    }
}
const delete_worker = async(worker_id:string)=>{
    try {
        const res = await POST (WORKERS_API.delete_worker,{
            worker_id:worker_id   
        })
    } catch (error) {
        throw (error)
    }
}
const get_my_workers = async()=>{
    try {
        const res = await GET(WORKERS_API.my_workers);
    } catch (error) {
        throw(error)
    }
}
    return {
        delete_worker,
        addWorkerRequestDto ,
        add_worker,
        update_worker,
        get_my_workers
    }
})