import { POINTS_ORDER_API } from "@/api/PointsOrder";
import { AddToCartRequestDto ,ConfirmOrderRequestDto } from "@/api/Order/OrderDto";

import { useApi } from "@/composables";

const {GET , POST} = useApi();
export const PointsOrderStore  = defineStore('points_order',()=>{
    const addToCartPointsDto  = ref<AddToCartRequestDto>()
    const confirmOrderDto  = ref<ConfirmOrderRequestDto>()
    const totalPoints = ref(0)

const  add_to_points_cart= async()=>{
    try {
        const res =await POST (POINTS_ORDER_API.add_to_points_cart,addToCartPointsDto.value)
    } catch (error) {
        throw(error)
    }
}


const  remove_from_points_cart= async(material_id:string)=>{
    try {
        const res =await POST (POINTS_ORDER_API.remove_from_points_cart,{
            material_id:material_id
        })
    } catch (error) {
        throw(error)
    }
}


const  empty_points_cart= async()=>{
    try {
        const res =await POST (POINTS_ORDER_API.empty_points_cart,{})
    } catch (error) {
        throw(error)
    }
}
const  confirm_points_order= async()=>{
    try {
        const res =await POST (POINTS_ORDER_API.confirm_points_order,confirmOrderDto.value)
    } catch (error) {
        throw(error)
    }
}

const  get_points_orders= async(query :Object =  {})=>{
    try {
        const res =await GET (POINTS_ORDER_API.get_points_orders,query)
    } catch (error) {
        throw(error)
    }
}

const  buy_with_points  = async(query:Object = {})=>{
try {
    const res = await GET(POINTS_ORDER_API.buy_with_points,query);

} catch (error) {
    throw(error)
}
} 
const get_points =async ()=>
{
    try {
        const res = await GET(POINTS_ORDER_API.get_points,{})
        totalPoints.value = res.data.data
    } catch (error) {
        throw(error)
    }
}
const get_points_details =async ()=>
{
    try {
        const res = await GET(POINTS_ORDER_API.get_points,{
            details:true
        })
    } catch (error) {
        throw(error)
    }
}

    return {
        addToCartPointsDto,
        totalPoints,
        get_points,
        get_points_details,
        buy_with_points,
        add_to_points_cart,
        remove_from_points_cart,
        empty_points_cart,
        confirm_points_order,
        get_points_orders
    }
})